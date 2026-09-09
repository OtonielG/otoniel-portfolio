import { notFound } from "next/navigation";
import { getDictionary, isValidLang } from "@/lib/dictionaries";

import Header from "@/components/header";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/ui/skills";
import TechCarousel from "@/components/ui/tech-carousel";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLang(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary.navbar} lang={lang} />
      <main className="w-full max-w-[1920px]">
        <Hero />
        <TechCarousel />
        <About dictionary={dictionary.about} />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
