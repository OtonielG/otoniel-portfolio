import Image from "next/image";

export default function About() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-10">
      <div className="relative w-full flex justify-center items-center">
        <Image
          src="/images/about/about-character.avif"
          alt=""
          width={2172}
          height={724}
          className="w-full sm:w-[90%] md:w-[85%] xl:w-[75%] 2xl:w[70%]"
        />
        <Image
          src="/images/about/nintendo-switch.avif"
          alt=""
          width={1359}
          height={721}
          className="
            absolute 
            bottom-[7%]
            right-[18%] w-[12%]
            sm:right-[20%]
            md:right-[22%] md:w-[11%]
            xl:right-[25%] xl:w-[10%]

            rotate-y-25 rotate-x-20
          "
        />
        <Image
          src="/images/about/libros.avif"
          alt=""
          width={1184}
          height={841}
          className="
            absolute 
            bottom-[8%]
            left-0 w-[12%]
            sm:left-[7%]
            md:left-[9%] md:w-[11%]
            xl:left-[14%]
          "
        />
      </div>
    </section>
  );
}
