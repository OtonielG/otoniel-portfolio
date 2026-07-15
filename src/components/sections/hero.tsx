import Image from "next/image";

export default function Hero() {
  return (
    <div className="">
      <Image
        src="/images/hero/hero-picture.avif"
        alt="Otoniel Gómez, desarrollador frontend"
        width={700}
        height={900}
        priority
      />
    </div>
  );
}
