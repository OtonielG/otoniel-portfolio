import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/dictionaries";

type NavbarProps = {
  dictionary: {
    ariaLabel: string;
    homeAriaLabel: string;
    languageSwitchLabel: string;
    contactButton: string;
    links: {
      label: string;
      href: string;
    }[];
  };
  lang: Lang;
};

export default function Navbar({ dictionary, lang }: NavbarProps) {
  const alternateLang = lang === "es" ? "en" : "es";

  return (
    <header
      className="
    fixed inset-x-0 top-0 z-50
    mx-auto
    flex h-17.5 w-full max-w-[1920px]
    items-center justify-center
    py-2
  "
    >
      <nav
        aria-label={dictionary.ariaLabel}
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
          aria-label={dictionary.homeAriaLabel}
          className="
            flex shrink-0 items-center gap-1
            text-foreground
            transition-all
            hover:opacity-80
            hover:scale-105
            duration-300
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
          {dictionary.links.map((link) => (
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

        <div className="flex shrink-0 items-center gap-3 whitespace-nowrap">
          <Link
            href={`/${alternateLang}`}
            className="text-sm sm:text-base font-bold text-display hover:text-muted hover:scale-105 transition-all duration-300"
          >
            {dictionary.languageSwitchLabel}
          </Link>

          <Link
            href="contact"
            className="
              shrink-0
              whitespace-nowrap
              rounded-full
              bg-primary/70
              px-4 py-2
              text-sm md:text-base font-semibold
              text-white
              transition-all

              hover:-translate-y-0.5
              hover:bg-primary-hover/80
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
            {dictionary.contactButton}
          </Link>
        </div>
      </nav>
    </header>
  );
}
