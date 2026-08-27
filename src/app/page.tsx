import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import TechCarousel from "@/components/ui/tech-carousel";

export default function Home() {
  return (
    <main className="w-full max-w-[1920px]">
      <Hero />
      <TechCarousel />
      <Projects />
      <div className="h-[1000px]"></div>
    </main>
  );
}
