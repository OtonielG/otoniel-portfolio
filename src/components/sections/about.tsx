"use client";

import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const laptopRef = useRef<HTMLImageElement>(null);
  const myselfRef = useRef<HTMLImageElement>(null);
  const gabuRef = useRef<HTMLImageElement>(null);
  const miCosaRef = useRef<HTMLImageElement>(null);
  const librosRef = useRef<HTMLImageElement>(null);
  const banderaRef = useRef<HTMLImageElement>(null);
  const headsetsRef = useRef<HTMLImageElement>(null);
  const tazaRef = useRef<HTMLImageElement>(null);
  const nintendoRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const createAnimation = (startValue: string) => {
        const popItems = [
          laptopRef.current,
          librosRef.current,
          banderaRef.current,
          headsetsRef.current,
          tazaRef.current,
          nintendoRef.current,
        ];

        const fromBottomItems = [
          myselfRef.current,
          gabuRef.current,
          miCosaRef.current,
        ];

        gsap.set(popItems, {
          opacity: 0,
          scale: 0.1,
          transformOrigin: "center center",
        });

        gsap.set(fromBottomItems, {
          opacity: 0,
          yPercent: 100,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: startValue,
            toggleActions: "play none none reverse",
          },
        });

        tl.to(
          laptopRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.5)",
          },
          0,
        );

        tl.to(
          myselfRef.current,
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          0.2,
        );

        tl.to(
          gabuRef.current,
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          0.4,
        );

        tl.to(
          miCosaRef.current,
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          0.6,
        );

        tl.to(
          librosRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.5)",
          },
          0.8,
        );

        tl.to(
          banderaRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.5)",
          },
          1,
        );

        tl.to(
          headsetsRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.5)",
          },
          1.2,
        );

        tl.to(
          tazaRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.5)",
          },
          1.4,
        );

        tl.to(
          nintendoRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.5)",
          },
          1.6,
        );
      };

      mm.add("(min-width: 1024px)", () => {
        createAnimation("top 50%");
      });

      mm.add("(max-width: 1023px)", () => {
        createAnimation("top 70%");
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center gap-5 px-4 py-10"
    >
      <div
        ref={containerRef}
        className="relative w-full flex justify-center items-center overflow-hidden"
      >
        {/* TABLE - siempre visible */}
        <Image
          src="/images/about/table.avif"
          alt=""
          width={2104}
          height={888}
          className="w-full sm:w-[90%] md:w-[75%] lg:w-[65%] xl:w-[60%] 2xl:w-[55%] z-20"
        />

        {/* LIBROS */}
        <Image
          ref={librosRef}
          src="/images/about/libros.avif"
          alt=""
          width={1184}
          height={1254}
          className="opacity-0 absolute bottom-[6.4%] h-[26%] left-[5%] sm:left-[5.2%] md:left-[12.5%] lg:left-[17.5%] xl:left-[20%] 2xl:left-[22.5%] w-auto z-30"
        />

        {/* HEADSETS */}
        <Image
          ref={headsetsRef}
          src="/images/about/headsets-sony.avif"
          alt=""
          width={1005}
          height={841}
          className="opacity-0 absolute bottom-[7.2%] h-[22%] left-[18%] sm:left-[17.2%] md:left-[22.6%] lg:left-[26.2%] xl:left-[28%] 2xl:left-[30%] w-auto z-30"
        />

        {/* TAZA */}
        <Image
          ref={tazaRef}
          src="/images/about/taza.avif"
          alt=""
          width={313}
          height={244}
          className="opacity-0 absolute bottom-[9%] h-[17%] left-[33%] sm:left-[26.5%] md:left-[30.5%] lg:left-[33%] xl:left-[34.4%] 2xl:left-[35.7%] w-auto z-30"
        />

        {/* LAPTOP */}
        <Image
          ref={laptopRef}
          src="/images/about/legion-laptop.avif"
          alt=""
          width={1516}
          height={935}
          className="opacity-0 absolute bottom-[6%] h-[47%] right-[10%] sm:right-[22.8%] md:right-[27.4%] lg:right-[30.4%] xl:right-[32%] 2xl:right-[33.5%] w-auto z-30"
        />

        {/* NINTENDO SWITCH */}
        <Image
          ref={nintendoRef}
          src="/images/about/nintendo-switch.avif"
          alt=""
          width={1729}
          height={667}
          className="hidden opacity-0 sm:block absolute bottom-[7%] h-[12.5%] sm:right-[13%] md:right-[19%] lg:right-[23%] xl:right-[25.2%] 2xl:right-[27.5%] w-auto z-30
          transform-[perspective(1000px)_rotateX(20deg)]"
        />

        {/* BANDERA */}
        <Image
          ref={banderaRef}
          src="/images/about/bandera.avif"
          alt=""
          width={496}
          height={1231}
          className="opacity-0 absolute bottom-[10%] h-[33%] right-[5%] sm:right-[8%] md:right-[15%] lg:right-[19.5%] xl:right-[21.8%] 2xl:right-[24.2%] w-auto z-30"
        />

        {/* MYSELF */}
        <Image
          ref={myselfRef}
          src="/images/about/myself-photo.avif"
          alt=""
          width={1292}
          height={1218}
          className="opacity-0 absolute h-[80%] bottom-[16%] right-[25%] sm:right-[36.3%] md:right-[38.5%] lg:right-[40.5%] xl:right-[41.5%] 2xl:right-[41.5%] w-auto z-10"
        />

        {/* GABU */}
        <Image
          ref={gabuRef}
          src="/images/about/gabu.avif"
          alt=""
          width={1144}
          height={1203}
          className="opacity-0 absolute bottom-0 left-[14%] sm:left-[9%] md:left-[16%] lg:left-[20%] xl:left-[22%] 2xl:left-[25%] h-[75%] w-auto"
        />

        {/* MI COSA */}
        <Image
          ref={miCosaRef}
          src="/images/about/mi-cosa.avif"
          alt=""
          width={905}
          height={1662}
          className="hidden opacity-0 sm:block absolute bottom-3 sm:bottom-5 right-[1%] sm:right-[7%] md:right-[14%] lg:right-[19%] xl:right-[21.5%] 2xl:right-[24%] h-[80%] w-auto"
        />
      </div>

      <div></div>
    </section>
  );
}
