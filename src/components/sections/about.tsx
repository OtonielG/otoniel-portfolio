import Image from "next/image";

export default function About() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-10">
      <Image
        src="/images/about/about-character.avif"
        alt=""
        width={2172}
        height={724}
        className="w-full sm:w-[90%] md:w-[85%] xl:w-[70%]"
      />
    </section>
  );
}
