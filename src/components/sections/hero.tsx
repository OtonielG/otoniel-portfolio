"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const hiLeftRef = useRef<HTMLParagraphElement | null>(null);
  const hiRightRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      if (
        !imageRef.current ||
        !sectionRef.current ||
        !hiLeftRef.current ||
        !hiRightRef.current
      ) {
        return;
      }

      gsap.to(imageRef.current, {
        scale: 1.8,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.set([hiLeftRef.current, hiRightRef.current], {
        clipPath: "inset(0 100% 0 0)",
      });

      const hiTimeline = gsap.timeline({
        delay: 0.4,
      });

      hiTimeline
        .to(hiLeftRef.current, {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.68,
          ease: "steps(4)",
        })
        .to(
          hiRightRef.current,
          {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 0.34,
            ease: "steps(2)",
          },
          "+=0.08",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative flex w-full items-end justify-center overflow-hidden bg-surface px-4 pt-[70px] md:h-svh"
    >
      <h1 className="sr-only">Otoniel Gómez, Frontend Developer</h1>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 40%,
              rgba(59, 163, 79, 0.2) 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at 15% 55%,
              rgba(59, 163, 79, 0.08) 0%,
              transparent 35%
            ),
            radial-gradient(
              circle at 85% 55%,
              rgba(59, 163, 79, 0.08) 0%,
              transparent 35%
            ),
            #0a110a
          `,
        }}
      />

      <div className="pointer-events-none absolute z-20 hidden font-technor leading-[0.82] text-display md:bottom-10 md:left-8 md:block lg:bottom-10 lg:left-10 xl:bottom-15 xl:left-15">
        <p className="md:text-[137px] lg:text-[130px] xl:text-[150px]">DEV</p>
        <p className="md:text-[137px] lg:text-[130px] xl:text-[150px]">
          FRONTEND
        </p>
      </div>
      <div className="pointer-events-none absolute z-20 hidden font-technor leading-[0.95] text-display lg:block lg:bottom-10 lg:right-10 xl:bottom-15  xl:right-15">
        <p className="text-[50px] xl:text-[65px]">OTONIEL</p>
        <p className="text-[50px] xl:text-[65px]">GÓMEZ</p>
      </div>

      <div className="relative z-10 w-[90%] md:h-full md:w-auto">
        <p
          ref={hiLeftRef}
          aria-hidden="true"
          className="
            pointer-events-none absolute left-1/2 top-[20%] z-20
            -translate-x-[calc(100%+17vw)]
            whitespace-nowrap font-telma text-[14vw] leading-none text-white
            md:-translate-x-[calc(100%+clamp(110px,14svh,160px))]
            md:text-[110px]
            opacity-0
          "
        >
          {"<Hi,"}
        </p>

        <p
          ref={hiRightRef}
          aria-hidden="true"
          className="
            pointer-events-none absolute left-1/2 top-[20%] z-20
            translate-x-[17vw]
            whitespace-nowrap font-telma text-[14vw] leading-none text-white
            md:translate-x-[clamp(110px,14svh,160px)]
            md:text-[110px]
            opacity-0
          "
        >
          {"/>"}
        </p>

        <div className="relative md:h-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-5 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap font-technor text-[16vw] leading-[0.82] text-display md:hidden"
          >
            <p>DEV</p>
            <p>FRONTEND</p>
          </div>

          <Image
            ref={imageRef}
            src="/images/hero/hero-photo.avif"
            alt="Otoniel Gómez, desarrollador frontend"
            width={838}
            height={1132}
            preload
            sizes="(max-width: 767px) 90vw, 600px"
            className="relative z-10 h-auto w-full object-contain object-bottom opacity-75 md:h-full md:w-auto"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-10 sm:h-12 md:h-16 bg-linear-to-b from-transparent to-surface"
      />
    </section>
  );
}
