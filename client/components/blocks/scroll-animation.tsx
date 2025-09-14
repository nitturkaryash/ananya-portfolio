"use client"

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useScroll,
  useTransform,
  useAnimation,
  AnimationControls,
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

  const { scrollYProgress: rawScrollYProgress } = useScroll({
    target: scrollRef,
  })

  // Gated scroll progress that blocks page scroll until assembly completes
  const gatedScrollYProgress = useTransform(rawScrollYProgress, (progress) => {
    // During assembly phase (0-30%), return 0 to block all page scroll effects
    if (progress < 0.3) {
      return 0
    }
    // After assembly completes, map 30-100% to 0-100% for page scroll
    return Math.min(1, (progress - 0.3) / 0.7)
  })

  return (
    <ContainerScrollContext.Provider value={{
      scrollYProgress: gatedScrollYProgress,
      rawScrollYProgress
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
  const { rawScrollYProgress } = useContainerScrollContext()

  // Control positioning based on assembly progress
  const position = useTransform(rawScrollYProgress, (progress) => {
    if (progress < 0.3) {
      return "fixed" // Keep grid fixed during assembly
    }
    return "sticky" // Allow sticky behavior after assembly
  })

  return (
    <motion.div
      ref={ref}
      className={cn(bentoGridVariants({ variant }), className)}
      style={{
        position,
      }}
      {...props}
    />
  )
})
BentoGrid.displayName = "BentoGrid"

const BentoCell = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div"> & { index?: number }>(
  ({ className, style, index = 0, ...props }, ref) => {
    const { scrollYProgress, rawScrollYProgress } = useContainerScrollContext()

    // Define initial scattered positions for each card index
    const initialPositions = {
      0: { x: -100, y: 50, scale: 0.8 }, // Phrase card (left)
      1: { x: 150, y: -80, scale: 0.7 }, // Case Studies (top right)
      2: { x: 120, y: 0, scale: 0.8 }, // About (middle right)
      3: { x: 80, y: 120, scale: 0.75 }, // Resume/Let's Talk (right middle)
      4: { x: 0, y: 150, scale: 0.85 } // Archives (bottom)
    }

    const startPos = initialPositions[index as keyof typeof initialPositions] || initialPositions[0]

    // Assembly animation - cards move from scattered positions to center (0-30%)
    const assemblyX = useTransform(rawScrollYProgress, [0, 0.3], [startPos.x, 0])
    const assemblyY = useTransform(rawScrollYProgress, [0, 0.3], [startPos.y, 0])
    const assemblyScale = useTransform(rawScrollYProgress, [0, 0.3], [startPos.scale, 1])

    // Page scroll animation - only happens AFTER assembly (uses gated progress)
    const pageTranslate = useTransform(scrollYProgress, [0.1, 0.9], [0, -35])
    const pageScale = useTransform(scrollYProgress, [0, 0.9], [1, 0.5])

    // Final transforms - clean separation between assembly and page scroll
    const finalX = useTransform(rawScrollYProgress, (progress) => {
      if (progress <= 0.3) {
        // Assembly phase: only assembly movement
        return assemblyX.get()
      } else {
        // Page scroll phase: combine assembly end position + page scroll
        return assemblyX.get() + pageTranslate.get()
      }
    })

    const finalY = useTransform(rawScrollYProgress, (progress) => {
      if (progress <= 0.3) {
        // Assembly phase: only assembly movement
        return assemblyY.get()
      } else {
        // Page scroll phase: stay at assembled position
        return assemblyY.get()
      }
    })

    const finalScale = useTransform(rawScrollYProgress, (progress) => {
      if (progress <= 0.3) {
        // Assembly phase: only assembly scaling
        return assemblyScale.get()
      } else {
        // Page scroll phase: use page scroll scaling
        return pageScale.get()
      }
    })

    return (
      <motion.div
        ref={ref}
        className={className}
        style={{
          x: finalX,
          y: finalY,
          scale: finalScale,
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
    const { scrollYProgress, rawScrollYProgress } = useContainerScrollContext()

    // Start visible and stay visible during assembly phase (0-30%)
    // Only fade out during page scroll phase (30%+)
    const finalOpacity = useTransform(rawScrollYProgress, (progress) => {
      if (progress <= 0.3) {
        // During assembly phase - stay fully visible
        return 1
      }
      // During page scroll phase - use gated scroll progress for fade out
      const pageProgress = scrollYProgress.get()
      return Math.max(0, 1 - (pageProgress * 2)) // Fade out faster
    })

    const finalScale = useTransform(rawScrollYProgress, (progress) => {
      if (progress <= 0.3) {
        // During assembly phase - stay at full scale
        return 1
      }
      // During page scroll phase - use gated scroll progress for scaling
      const pageProgress = scrollYProgress.get()
      return Math.max(0, 1 - (pageProgress * 2)) // Scale down faster
    })

    const position = useTransform(scrollYProgress, (pos) =>
      pos >= 0.6 ? "absolute" : "fixed"
    )

    return (
      <motion.div
        ref={ref}
        className={cn("left-1/2 top-1/2 size-fit", className)}
        style={{
          translate: "-50% -50%",
          opacity: finalOpacity,
          scale: finalScale,
          position,
          ...style,
        }}
        {...props}
      />
    )
  }
)
ContainerScale.displayName = "ContainerScale"
export { ContainerScroll, BentoGrid, BentoCell, ContainerScale }
