import Image from "next/image";
import { BadgeCheck, Download, MapPin, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-surface px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
        <div className="relative min-h-[450px] overflow-hidden rounded-3xl lg:min-h-[600px]">
          <Image
            src="/images/about/about-photo.avif"
            alt="Fotografía de Otoniel Gómez"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover brightness-75 contrast-105"
          />
        </div>

        <div className="flex flex-col py-2 lg:justify-center lg:py-5">
          <div className="mb-7 flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles size={16} />
            </span>

            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-muted/80">
              Sobre mí
            </span>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold tracking-tight text-foreground/80 sm:text-5xl lg:text-6xl">
              Otoniel Gómez
            </h2>

            <BadgeCheck className="mt-1 size-7 text-primary lg:size-8" />
          </div>

          <p className="mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            Soy desarrollador frontend enfocado en crear experiencias web
            modernas, intuitivas y visualmente atractivas. Trabajo con
            tecnologías como React, Next.js y Tailwind CSS para transformar
            ideas en productos digitales funcionales y accesibles.
          </p>

          <a
            href="/documents/otoniel-gomez-cv.pdf"
            download="Otoniel-Gomez-CV.pdf"
            className="
              mt-9
              flex
              w-fit
              shrink-0
              items-center
              gap-2
              whitespace-nowrap
              rounded-full
              bg-primary/60
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              transition-all

              hover:-translate-y-0.5
              hover:bg-primary-hover/70
              hover:shadow-[0_6px_20px_rgba(59,163,79,0.15)]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
              focus-visible:ring-offset-2
              focus-visible:ring-offset-background

              md:px-4
              md:py-2
              md:text-base

              lg:px-5
              lg:py-2.5
            "
          >
            Descargar CV
            <Download size={18} aria-hidden="true" />
          </a>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BadgeCheck size={21} />
              </div>

              <h3 className="text-lg font-bold text-muted">Especialidad</h3>

              <p className="mt-1 text-sm text-muted">Desarrollo Frontend</p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin size={21} />
              </div>

              <h3 className="text-lg font-bold text-muted">Ubicación</h3>

              <p className="mt-1 text-sm text-muted">Guatemala, Guatemala</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
