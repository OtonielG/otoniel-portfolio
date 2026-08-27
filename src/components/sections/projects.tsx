import type { SVGProps } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type TechIconProps = SVGProps<SVGSVGElement>;

const projects = [
  {
    title: "Sitio Oficial del Ministerio Cristiano La Última Llamada",
    description:
      "Sitio web oficial desarrollado para el Ministerio Cristiano La Última Llamada.",
    image: "/images/projects/la-ultima-llamada-img.avif",

    links: {
      live: "https://www.laultimallamada.org/",
      repository: null,
    },

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
    ],

    glowColor: "#39ff88",
  },
  {
    title: "01",
    description:
      "Sitio web oficial desarrollado para el Ministerio Cristiano La Última Llamada.",
    image: "/images/projects/la-ultima-llamada-img.avif",

    links: {
      live: "https://www.laultimallamada.org/",
      repository: null,
    },

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
    ],

    glowColor: "#32d9ff",
  },
  {
    title: "02",
    description:
      "Sitio web oficial desarrollado para el Ministerio Cristiano La Última Llamada.",
    image: "/images/projects/la-ultima-llamada-img.avif",

    links: {
      live: "https://www.laultimallamada.org/",
      repository: null,
    },

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
    ],

    glowColor: "#b86cff",
  },
];

export default function Projects() {
  return (
    <section className="w-full p-10">
      <h2 className="font-technor text-display text-6xl text-center mb-10">
        Mis Proyectos
      </h2>
      <ul className="w-full flex flex-col gap-16 items-center">
        {projects.map((project) => (
          <li
            key={project.title}
            className="group bg-card w-[75%] flex flex-col gap-5 p-12 pb-0 rounded-4xl overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <h2 className="text-white font-serif text-2xl">
                  {project.title}
                </h2>
                <ArrowUpRight className="text-white size-8" />
              </div>
              <p className="text-white/80">{project.description}</p>
              <ul className="w-full flex gap-3">
                {project.skills.map((skill) => (
                  <li key={skill} className="text-white">
                    {skill}
                  </li>
                ))}
              </ul>
              <div
                className="
                  w-full p-12 pb-0
                  translate-y-5
                  transition-transform duration-300
                  group-hover:translate-y-0
                "
              >
                <div className="rounded-t-2xl overflow-hidden border border-white/30">
                  <Image
                    src="/images/projects/window-browser.avif"
                    alt="Otoniel Gómez, desarrollador frontend"
                    width={1188}
                    height={70}
                    className="w-full z-10"
                  />
                  <Image
                    src={project.image}
                    alt="Otoniel Gómez, desarrollador frontend"
                    width={1920}
                    height={171}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GithubIcon(props: TechIconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A8.98 8.98 0 0 0 10 4.958a8.965 8.965 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0Z" />
    </svg>
  );
}
