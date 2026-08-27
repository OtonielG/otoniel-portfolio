import type { SVGProps } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    glowColor: "#b86cff",
  },
];

export default function Projects() {
  return (
    <section className="w-full px-4 py-12">
      <h2 className="font-technor text-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center mb-6 md:mb-10">
        Mis Proyectos
      </h2>
      <ul className="w-full flex flex-col gap-8 md:gap-10 lg:gap-12 items-center">
        {projects.map((project) => (
          <li
            key={project.title}
            className="
              group relative bg-card/50 sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] gap-5 p-2 sm:p-3 border border-white/5 rounded-4xl overflow-hidden

              before:absolute before:top-0 before:left-0 before:h-px before:w-full
              before:bg-[linear-gradient(to_right,transparent_0%,transparent_10%,rgba(255,255,255,0.75)_40%,rgba(255,255,255,0.75)_60%,transparent_90%,transparent_100%)]
              before:pointer-events-none
            "
          >
            <div
              className="
                relative bg-card w-full flex flex-col gap-5

                p-6 pb-0
                sm:p-8 sm:pb-0
                md:p-10 md:pb-0
                xl:p-12 xl:pb-0

                border border-white/20 rounded-3xl overflow-hidden

                before:absolute before:top-0 before:left-0 before:h-px before:w-full
                before:bg-[linear-gradient(to_right,transparent_0%,transparent_10%,rgba(255,255,255,0.55)_40%,rgba(255,255,255,0.55)_60%,transparent_90%,transparent_100%)]
                before:pointer-events-none

                after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2
                after:w-full after:h-[80%]
                after:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_65%)]
                after:pointer-events-none
              "
            >
              <div
                style={
                  {
                    "--glow-color": project.glowColor,
                  } as React.CSSProperties
                }
                className="
                  pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                  w-full h-full
                  bg-[radial-gradient(circle_at_top,var(--glow-color)_0%,transparent_98%)]
                  opacity-0 transition-opacity duration-500
                  group-hover:opacity-20
                "
              />
              <div className="flex flex-col gap-2">
                <div className="flex justify-between gap-5">
                  <h2
                    className="
                      text-white font-zodiak text-base sm:text-lg md:text-xl xl:text-2xl
                      [text-shadow:0_0_14px_rgba(255,255,255,0.18)]
                    "
                  >
                    {project.title}
                  </h2>
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${project.title}`}
                    className="cursor-pointer"
                  >
                    <ArrowUpRight className="text-white size-6 sm:size-7 md:size-8 xl:size-9 transition-transform duration-300 hover:scale-110 hover:translate-x-1 hover:-translate-y-1" />
                  </Link>
                </div>
                <p className="text-white/70 text-xs sm:text-sm md:text-base xl:text-lg mb-2">
                  {project.description}
                </p>
                <div
                  className="
                    w-full
                    p-4 pb-0
                    sm:p-6 sm:pb-0
                    md:p-8 md:pb-0
                    xl:p-10 xl:pb-0

                    translate-y-5
                    transition-transform duration-300
                    group-hover:translate-y-0
                  "
                >
                  <div className="rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl overflow-hidden border border-white/30">
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
