import Image from "next/image";

export default function About() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-10">
      <div className="relative w-full flex justify-center items-center">
        <Image
          src="/images/about/main-img-about.avif"
          alt=""
          width={1647}
          height={693}
          className="w-full sm:w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[65%] z-20"
        />
        <Image
          src="/images/about/gabu.avif"
          alt=""
          width={1144}
          height={1203}
          className="absolute bottom-0 left-[4%] sm:left-[9%] md:left-[13%] xl:left-[18%] 2xl:left-[20%] h-[75%] w-auto"
        />
      </div>
    </section>
  );
}
