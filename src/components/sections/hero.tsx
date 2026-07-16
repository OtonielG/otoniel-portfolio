import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-[70px] flex w-full items-end justify-center overflow-hidden bg-surface px-4 md:h-svh"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 40%,
              rgba(59, 163, 79, 0.2) 0%,
              transparent 42%
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

      <Image
        src="/images/hero/hero-photo.avif"
        alt="Otoniel Gómez, desarrollador frontend"
        width={838}
        height={1132}
        preload
        unoptimized
        sizes="(max-width: 767px) 90vw, 600px"
        className="relative z-10 h-auto w-[90%] object-contain object-bottom md:h-full md:w-auto"
      />
    </section>
  );
}
