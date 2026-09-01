"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "Sitio Web Oficial del Ministerio Cristiano La Última Llamada",
    description:
      "Sitio web desarrollado desde cero con enfoque en diseño responsivo, rendimiento y SEO técnico, aplicando buenas prácticas de accesibilidad, semántica y optimización para producción web.",
    image: "/images/projects/la-ultima-llamada-img.avif",

    links: {
      live: "https://www.laultimallamada.org/",
    },
    glowColor: "#39ff88",
  },
  {
    title: "Buscaminas Interactivo con Gestión Compleja de Estado Global",
    description:
      "Juego interactivo desarrollado con React y TypeScript, con lógica avanzada, gestión de estado global, generación dinámica del tablero y una arquitectura sólida, mantenible y escalable.",
    image: "/images/projects/la-ultima-llamada-img.avif",

    links: {
      live: "https://www.laultimallamada.org/",
    },
    glowColor: "#32d9ff",
  },
  {
    title: "Plataforma Interactiva para Gestión y Visualización de Datos",
    description:
      "Plataforma web desarrollada con React y TypeScript para gestionar y visualizar datos, con componentes reutilizables, filtros dinámicos y una arquitectura limpia, mantenible y escalable.",
    image: "/images/projects/la-ultima-llamada-img.avif",

    links: {
      live: "https://www.laultimallamada.org/",
    },
    glowColor: "#b86cff",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      let cancelled = false;

      const setupScrollTriggers = async () => {
        const images = Array.from(
          sectionRef.current?.querySelectorAll("img") ?? [],
        );

        await Promise.all(
          images.map((img) =>
            img.complete
              ? Promise.resolve()
              : img.decode().catch(() => undefined),
          ),
        );

        if (cancelled || !sectionRef.current) return;

        const cards = gsap.utils.toArray<HTMLElement>(".card-stack");

        cards.forEach((card, index) => {
          const isLastCard = index === cards.length - 1;
          const cardVisual = card.querySelector<HTMLElement>(".card-stack-visual");

          if (!cardVisual) return;

          gsap.to(cardVisual, {
            scale: 0.7,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: isLastCard ? "top 120px" : "top 80px",
              end: "+=400",
              scrub: 1,
            },
          });

          if (isLastCard) {
            const cardHeight = cardVisual.offsetHeight;

            gsap.set(card, { height: cardHeight });
            gsap.to(card, {
              height: cardHeight * 0.7,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 120px",
                end: "+=400",
                scrub: 1,
              },
            });
          }
        });
      };

      setupScrollTriggers();

      return () => {
        cancelled = true;
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="w-full px-4 py-6 md:py-8 md:scroll-mt-7 lg:scroll-mt-8"
    >
      <h2 className="font-technor text-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center mb-6 md:mb-10">
        Mis Proyectos
      </h2>
      <ul className="w-full flex flex-col gap-8 md:gap-10 lg:gap-12 items-center">
        {projects.map((project) => (
          <li
            key={project.title}
            tabIndex={0}
            className="
              card-stack
              group sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] outline-none
            "
          >
            <article
              className="
              card-stack-visual
              relative w-full origin-top bg-card/50 p-2 sm:p-3 border border-white/5 rounded-4xl overflow-hidden will-change-transform

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
                  group-hover:opacity-20 group-focus:opacity-20
                "
              />
              <div className="flex flex-col gap-2">
                <div
                  className="
                    flex flex-col gap-2
                    min-h-[170px]

                    min-[370px]:min-h-[160px]
                    min-[400px]:min-h-[150px]
                    min-[440px]:min-h-[130px]
                    min-[470px]:min-h-[120px]
                    min-[570px]:min-h-[110px]

                    sm:min-h-[130px]
                    md:min-h-[140px]
                    xl:min-h-[135px]
                    2xl:min-h-[120px]
                  "
                >
                  <div className="flex justify-between gap-5">
                    <h3
                      className="
                        text-white font-zodiak text-base sm:text-lg md:text-xl xl:text-2xl
                        [text-shadow:0_0_14px_rgba(255,255,255,0.18)]
                      "
                    >
                      {project.title}
                    </h3>

                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar ${project.title}`}
                      className="inline-flex items-center justify-center cursor-pointer shrink-0"
                    >
                      <ArrowUpRight
                        aria-hidden="true"
                        className="text-white size-6 sm:size-7 md:size-8 xl:size-9 transition-transform duration-300 hover:scale-110 hover:translate-x-1 hover:-translate-y-1"
                      />
                    </Link>
                  </div>

                  <p className="text-white/70 text-xs sm:text-sm md:text-base xl:text-lg">
                    {project.description}
                  </p>
                </div>

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
                    group-focus:translate-y-0
                  "
                >
                  <div className="rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl overflow-hidden border border-white/30">
                    <Image
                      src="/images/projects/window-browser.avif"
                      alt=""
                      aria-hidden="true"
                      width={1188}
                      height={70}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 75vw"
                      className="w-full"
                    />

                    <Image
                      src={project.image}
                      alt={`Vista previa de ${project.title}`}
                      width={1920}
                      height={171}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 75vw"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
