import Image from "next/image";

export default function About() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-5 px-4 py-10">
      <div className="relative w-full flex justify-center items-center">
        <Image
          src="/images/about/table.avif"
          alt=""
          width={2104}
          height={888}
          className="w-full sm:w-[90%] md:w-[75%] lg:w-[65%] xl:w-[60%] 2xl:w-[55%] z-20"
        />
        <Image
          src="/images/about/main-img-about.avif"
          alt=""
          width={1647}
          height={693}
          className="
    absolute
    left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2
    w-full sm:w-[90%] md:w-[75%] lg:w-[65%] xl:w-[60%] 2xl:w-[55%]
    z-10
  "
        />
        {/* libros */}
        <Image
          src="/images/about/libros.avif"
          alt=""
          width={1184}
          height={841}
          className="absolute bottom-4 sm:bottom-4.25 md:bottom-5 xl:bottom-6 h-[26%] left-[0.4%] sm:left-[5.2%] md:left-[12.5%] lg:left-[17.5%] xl:left-[20%] w-auto z-30"
        />
        <Image
          src="/images/about/gabu.avif"
          alt=""
          width={1144}
          height={1203}
          className="absolute bottom-0 left-[4%] sm:left-[9%] md:left-[16%] lg:left-[20%] xl:left-[22%] 2xl:left-[25%] h-[75%] w-auto"
        />
        <Image
          src="/images/about/mi-cosa.avif"
          alt=""
          width={905}
          height={1662}
          className="absolute bottom-3 sm:bottom-5 right-[1%] sm:right-[6%] md:right-[13%] lg:right-[18%] xl:right-[21%] 2xl:right-[23%] h-[80%] w-auto"
        />
      </div>
      <div></div>
    </section>
  );
}
