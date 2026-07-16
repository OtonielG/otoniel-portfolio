import About from "@/components/sections/acerca-de";
import Hero from "@/components/sections/hero";
import TechCarousel from "@/components/ui/tech-carousel";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <TechCarousel />
      <About />
    </div>
  );
}
