import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Sobre mí",
    href: "#sobre-mi",
  },
  {
    label: "Proyectos",
    href: "#proyectos",
  },
];

export default function Navbar() {
  return (
    <header
      className="
        fixed left-0 top-0 z-50
        flex h-17.5 w-full
        items-center justify-center
        py-2
      "
    >
      <nav
        aria-label="Navegación principal"
        className="
          flex h-[90%] w-[95%]
          items-center justify-between
          rounded-full
          bg-background/40
          px-4
          backdrop-blur-md

          sm:w-[92%]
          sm:px-6

          md:w-[90%]
          md:px-6

          lg:w-[88%]
          lg:px-8

          xl:h-[95%]
          xl:w-[85%]
          xl:px-10
        "
      >
        <Link
          href="#inicio"
          aria-label="Ir al inicio"
          className="
            flex shrink-0 items-center gap-1
            text-foreground
            transition-opacity
            hover:opacity-80
          "
        >
          <Image
            src="/images/icons/logo.avif"
            alt=""
            width={40}
            height={40}
            priority
            className="
              h-8 w-8
              object-contain

              md:h-9
              md:w-9

              xl:h-10
              xl:w-10
            "
          />

          <span
            className="
              whitespace-nowrap
              text-base font-semibold tracking-tight

              md:text-lg
              xl:text-xl
            "
          >
            Otoniel<span className="text-primary">Dev</span>
          </span>
        </Link>

        <div
          className="
            hidden items-center
            gap-5
            md:flex
            lg:gap-7
            xl:gap-9
          "
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                relative
                whitespace-nowrap
                text-base font-medium
                text-foreground/60
                transition-colors

              hover:text-foreground
                after:absolute
                after:-bottom-2
                after:left-0
                after:h-px
                after:w-0
                after:bg-primary
                after:transition-all
                after:duration-300
                after:ease-out

                hover:after:w-full
              "
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contacto"
          className="
            shrink-0
            whitespace-nowrap
            rounded-full
            bg-primary
            px-4 py-2
            text-sm md:text-base font-semibold
            text-white
            transition-all

            hover:-translate-y-0.5
            hover:bg-primary-hover
            hover:shadow-[0_6px_20px_rgba(59,163,79,0.15)]

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background

            md:px-4
            md:py-2

            lg:px-5
            lg:py-2.5
          "
        >
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
