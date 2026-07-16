import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex w-full items-end justify-center overflow-hidden bg-surface px-4 pt-[70px] md:h-svh"
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
          aria-hidden="true"
          className="
            pointer-events-none absolute left-1/2 top-[20%] z-20
            -translate-x-[calc(100%+17vw)]
            whitespace-nowrap font-telma text-[14vw] leading-none text-white
            md:-translate-x-[calc(100%+clamp(110px,14svh,160px))]
            md:text-[110px]
          "
        >
          {"<Hi,"}
        </p>

        <p
          aria-hidden="true"
          className="
            pointer-events-none absolute left-1/2 top-[20%] z-20
            translate-x-[17vw]
            whitespace-nowrap font-telma text-[14vw] leading-none text-white
            md:translate-x-[clamp(110px,14svh,160px)]
            md:text-[110px]
          "
        >
          {"/>"}
        </p>

        <div className="relative md:h-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap font-technor text-[16vw] leading-[0.82] text-display md:hidden"
          >
            <p>DEV</p>
            <p>FRONTEND</p>
          </div>

          <Image
            src="/images/hero/hero-photo.avif"
            alt="Otoniel Gómez, desarrollador frontend"
            width={838}
            height={1132}
            preload
            unoptimized
            sizes="(max-width: 767px) 90vw, 600px"
            className="relative z-10 h-auto w-full object-contain object-bottom opacity-75 md:h-full md:w-auto"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-linear-to-b from-transparent to-surface"
          />
        </div>
      </div>
    </section>
  );
}
