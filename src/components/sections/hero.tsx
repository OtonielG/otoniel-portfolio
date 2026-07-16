import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        mt-[70px]
        flex
        w-full
        items-end
        justify-center
        overflow-hidden
        px-4
        md:h-[calc(100svh-70px)]
      "
    >
      <Image
        src="/images/hero/hero-photo.avif"
        alt="Otoniel Gómez, desarrollador frontend"
        width={838}
        height={1132}
        preload
        unoptimized
        sizes="(max-width: 767px) 90vw, 838px"
        className="
          h-auto
          w-full
          max-w-[838px]
          object-contain
          object-bottom
          sm:w-[85%]
          md:h-[98%]
          md:w-auto
          md:max-w-full
        "
      />
    </section>
  );
}
