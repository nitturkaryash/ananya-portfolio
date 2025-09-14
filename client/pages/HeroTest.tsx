import { HeroDemo1, HeroDemo2, HeroDemo3 } from "@/components/blocks/HeroDemo";

export default function HeroTest() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-8 px-4">
        <h1 className="text-center text-3xl font-bold mb-8">Hero Gallery Scroll Animation Demos</h1>

        <div className="mb-16">
          <h2 className="text-center text-xl font-semibold mb-4">Demo 1: Default Grid</h2>
          <HeroDemo1 />
        </div>

        <div className="mb-16">
          <h2 className="text-center text-xl font-semibold mb-4">Demo 2: Four Cells Grid</h2>
          <HeroDemo2 />
        </div>

        <div className="mb-16">
          <h2 className="text-center text-xl font-semibold mb-4 text-white">Demo 3: Three Cells Grid (Dark)</h2>
          <HeroDemo3 />
        </div>
      </div>
    </div>
  );
}