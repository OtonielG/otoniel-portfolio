import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        mt-[70px]
        flex
        h-[calc(100svh-70px)]
        w-full
        items-end
        justify-center
        overflow-hidden
        px-4
      "
    >
      <Image
        src="/images/hero/hero-picture-main.avif"
        alt="Otoniel Gómez, desarrollador frontend"
        width={838}
        height={1132}
        preload
        sizes="(max-width: 768px) 90vw, 838px"
        className="
          h-[90%]
          w-auto
          max-w-full
          object-contain
          object-bottom
        "
      />
    </section>
  );
}
