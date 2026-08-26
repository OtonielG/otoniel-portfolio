import Hero from "@/components/sections/hero";
import TechCarousel from "@/components/ui/tech-carousel";

export default function Home() {
  return (
    <>
      <Hero />
      <TechCarousel />
      <div className="h-[1000px]"></div>
    </>
  );
}
