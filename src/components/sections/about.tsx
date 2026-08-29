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
          className="w-full sm:w-[90%] md:w-[85%] xl:w-[75%] 2xl:w-[70%]"
        />
      </div>
    </section>
  );
}
