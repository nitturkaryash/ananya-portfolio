"use client"

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"

import { cn } from "@/lib/utils"

const bentoGridVariants = cva(
  "relative grid gap-4 [&>*:first-child]:origin-top-right [&>*:nth-child(3)]:origin-bottom-right [&>*:nth-child(4)]:origin-top-right",
  {
    variants: {
      variant: {
        default: `
          grid-cols-8 grid-rows-[1fr_0.5fr_0.5fr_1fr]
          [&>*:first-child]:col-span-8 md:[&>*:first-child]:col-span-6 [&>*:first-child]:row-span-3
          [&>*:nth-child(2)]:col-span-2 md:[&>*:nth-child(2)]:row-span-2 [&>*:nth-child(2)]:hidden md:[&>*:nth-child(2)]:block
          [&>*:nth-child(3)]:col-span-2 md:[&>*:nth-child(3)]:row-span-2 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block
          [&>*:nth-child(4)]:col-span-4 md:[&>*:nth-child(4)]:col-span-3
          [&>*:nth-child(5)]:col-span-4 md:[&>*:nth-child(5)]:col-span-3
        `,
        threeCells: `
          grid-cols-2 grid-rows-2
          [&>*:first-child]:col-span-2
      `,
        fourCells: `
        grid-cols-3 grid-rows-2
        [&>*:first-child]:col-span-1
        [&>*:nth-child(2)]:col-span-2
        [&>*:nth-child(3)]:col-span-2
      `,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>
  rawScrollYProgress: MotionValue<number>
  assemblyProgress: MotionValue<number>
}
const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined)
function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    )
  }
  return context
}
const ContainerScroll = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [assemblyCompleted, setAssemblyCompleted] = React.useState(false)
  const previousProgress = React.useRef(0)

  const { scrollYProgress: rawScrollYProgress } = useScroll({
    target: scrollRef,
  })

  // Smart assembly progress with hysteresis - start immediately on scroll
  const assemblyProgress = useTransform(rawScrollYProgress, (progress) => {
    const prevProgress = previousProgress.current
    const isScrollingDown = progress > prevProgress
    previousProgress.current = progress

    // If assembly is completed and we're not scrolling significantly up, stay assembled
    if (assemblyCompleted && progress > 0.1) {
      return 1 // Stay fully assembled
    }

    // If scrolling down or assembly not completed, use normal progress
    if (isScrollingDown || !assemblyCompleted) {
      // Start assembly immediately - use a more gradual curve for smooth animation
      const assemblyProg = Math.min(1, progress / 0.55)

      // Mark assembly as completed slightly early (at 54%) to ensure smooth transition
      if (progress >= 0.54 && !assemblyCompleted) {
        setAssemblyCompleted(true)
      }

      return assemblyProg
    }

    // If scrolling up significantly (< 10%), break assembly
    if (progress < 0.1) {
      setAssemblyCompleted(false)
      return Math.min(1, progress / 0.55)
    }

    // Default: maintain current state
    return assemblyCompleted ? 1 : Math.min(1, progress / 0.55)
  })

  // Smooth gated scroll progress - allow gradual scrolling during assembly, full scroll after 100% assembly
  const gatedScrollYProgress = useTransform(rawScrollYProgress, [0, 0.55, 0.7, 1], [0, 0.3, 0.8, 1])


  return (
    <ContainerScrollContext.Provider value={{
      scrollYProgress: gatedScrollYProgress,
      rawScrollYProgress,
      assemblyProgress
    }}>
      <div
        ref={scrollRef}
        className={cn("relative w-full", className)}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  )
}

const BentoGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof bentoGridVariants>
>(({ variant, className, ...props }, ref) => {
  const { rawScrollYProgress, assemblyProgress } = useContainerScrollContext()

  // Control positioning - purely position-based for smooth transitions
  const position = useTransform(rawScrollYProgress, [0.001, 0.55], ["fixed", "sticky"])

  // Add slight scale animation during assembly for visual appeal
  const gridScale = useTransform(assemblyProgress, [0, 1], [0.95, 1])

  return (
    <motion.div
      ref={ref}
      className={cn(bentoGridVariants({ variant }), className)}
      style={{
        position,
        scale: gridScale,
        zIndex: 10, // Ensure grid stays above background during assembly
      }}
      {...props}
    />
  )
})
BentoGrid.displayName = "BentoGrid"

const BentoCell = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div"> & { index?: number }>(
  ({ className, style, index = 0, ...props }, ref) => {
    const { rawScrollYProgress } = useContainerScrollContext()

    // Define initial scattered positions for each card index - more dramatic spread
    const initialPositions = {
      0: { x: -200, y: -100, scale: 0.6, rotate: -15 }, // Phrase card (top left)
      1: { x: 300, y: -150, scale: 0.5, rotate: 10 }, // Case Studies (top right)
      2: { x: 250, y: 50, scale: 0.6, rotate: -10 }, // About (middle right)
      3: { x: 150, y: 200, scale: 0.55, rotate: 8 }, // Resume/Let's Talk (bottom right)
      4: { x: -100, y: 250, scale: 0.65, rotate: -12 } // Archives (bottom left)
    }

    const startPos = initialPositions[index as keyof typeof initialPositions] || initialPositions[0]

    // Assembly animation - start immediately on any scroll movement
    const assemblyRotate = useTransform(rawScrollYProgress, [0.001, 0.55], [startPos.rotate, 0])

    // Final transforms - start immediately on any scroll movement for responsive assembly
    const finalX = useTransform(rawScrollYProgress, [0.001, 0.55], [startPos.x, 0])
    const finalY = useTransform(rawScrollYProgress, [0.001, 0.55], [startPos.y, 0])
    const finalScale = useTransform(rawScrollYProgress, [0.001, 0.55], [startPos.scale, 1])

    return (
      <motion.div
        ref={ref}
        className={className}
        style={{
          x: finalX,
          y: finalY,
          scale: finalScale,
          rotate: assemblyRotate,
          ...style
        }}
        {...props}
      ></motion.div>
    )
  }
)
BentoCell.displayName = "BentoCell"

const ContainerScale = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, style, ...props }, ref) => {
    const { rawScrollYProgress, assemblyProgress } = useContainerScrollContext()

    // Fade out during assembly phase using assemblyProgress
    const finalOpacity = useTransform(assemblyProgress, [0, 1], [1, 0])

    // Scale down slightly during assembly for a more elegant disappearance
    const finalScale = useTransform(assemblyProgress, [0, 1], [1, 0.8])

    // Add slight upward movement during fade for polish
    const finalY = useTransform(assemblyProgress, [0, 1], [0, -20])

    // Hide after assembly - purely position-based for smooth transitions
    const finalDisplay = useTransform(rawScrollYProgress, [0.001, 0.55], ['block', 'none'])

    return (
      <motion.div
        ref={ref}
        className={cn("left-1/2 top-1/2 size-fit", className)}
        style={{
          translate: "-50% -50%",
          opacity: finalOpacity,
          scale: finalScale,
          y: finalY,
          position: "fixed",
          display: finalDisplay,
          ...style,
        }}
        {...props}
      />
    )
  }
)
ContainerScale.displayName = "ContainerScale"
export { ContainerScroll, BentoGrid, BentoCell, ContainerScale }
