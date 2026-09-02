import type { ComponentType, SVGProps } from "react";
import {
  CssIcon,
  GitIcon,
  GithubIcon,
  HtmlIcon,
  JavascriptIcon,
  NextIcon,
  ReactIcon,
  SqlIcon,
  TailwindIcon,
  TypescriptIcon,
  CodexIcon,
} from "@/components/icons";

type TechIconProps = SVGProps<SVGSVGElement>;

type Tech = {
  name: string;
  Icon: ComponentType<TechIconProps>;
};

const technologies: Tech[] = [
  { name: "HTML", Icon: HtmlIcon },
  { name: "CSS", Icon: CssIcon },
  { name: "JavaScript", Icon: JavascriptIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Tailwind", Icon: TailwindIcon },
  { name: "TypeScript", Icon: TypescriptIcon },
  { name: "Git", Icon: GitIcon },
  { name: "GitHub", Icon: GithubIcon },
  { name: "Next.js", Icon: NextIcon },
  { name: "SQL", Icon: SqlIcon },
  { name: "Codex", Icon: CodexIcon },
];

export default function TechCarousel() {
  return (
    <section className="w-full overflow-hidden bg-surface py-6 md:py-7 lg:py-8 text-muted">
      <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {[0, 1, 2].map((_, index) => (
          <div
            key={index}
            aria-hidden={true}
            className="tech-carousel-track flex items-center gap-8 pr-8 md:gap-10 md:pr-10 will-change-transform"
          >
            {technologies.map(({ name, Icon }) => (
              <div
                key={`${name} - ${index}`}
                className="flex justify-center items-center text-current"
              >
                <Icon className="h-10 md:h-12 lg:h-14" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes tech-carousel-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-100%);
          }
        }

        .tech-carousel-track {
          animation: tech-carousel-scroll 15s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-carousel-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
