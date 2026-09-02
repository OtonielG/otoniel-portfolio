import type { ComponentType, SVGProps } from "react";
import {
  CodexIcon,
  CssIcon,
  GitIcon,
  GithubIcon,
  GsapIcon,
  HtmlIcon,
  JavascriptIcon,
  NextIcon,
  PnpmIcon,
  ReactHookFormIcon,
  ReactIcon,
  ReduxIcon,
  SqlIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
  CursorIcon,
} from "@/components/icons";

type Skill = {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", Icon: HtmlIcon },
      { name: "CSS", Icon: CssIcon },
      { name: "Tailwind CSS", Icon: TailwindIcon },
      { name: "JavaScript", Icon: JavascriptIcon },
      { name: "React", Icon: ReactIcon },
      { name: "TypeScript", Icon: TypescriptIcon },
      { name: "Next.js", Icon: NextIcon },
    ],
  },
  {
    title: "Librerías",
    skills: [
      { name: "GSAP", Icon: GsapIcon },
      { name: "Redux", Icon: ReduxIcon },
      { name: "React Hook Form", Icon: ReactHookFormIcon },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", Icon: GitIcon },
      { name: "GitHub", Icon: GithubIcon },
      { name: "Vercel", Icon: VercelIcon },
      { name: "Cursor", Icon: CursorIcon },
      { name: "pnpm", Icon: PnpmIcon },
      { name: "SQL", Icon: SqlIcon },
      { name: "Codex", Icon: CodexIcon },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section w-full overflow-x-clip flex flex-col items-center justify-center gap-5 py-6 md:py-8 md:scroll-mt-7 lg:scroll-mt-8">
      <h2 className="font-technor text-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center md:mb-6">
        Habilidades
      </h2>

      <div className="w-[90%] sm:w-[80%] md:w-[95%] lg:w-[86%] xl:w-[75%] 2xl:w-[60%]">
        <ul className="skill-container w-full flex flex-wrap md:flex-nowrap gap-3 sm:gap-4 overflow-visible">
          {skillGroups.map((group) => (
            <li
              key={group.title}
              className="
                skill-card min-w-0 grow
                basis-full
                md:basis-[calc(33.333%_-_0.875rem)]
                rounded-lg border border-white/15
                bg-white/[0.08]
                shadow-[0_18px_50px_rgba(0,0,0,0.28)]
                backdrop-blur-xl
                flex flex-col gap-4 p-4
              "
            >
              <h3 className="font-technor text-foreground/90 text-center text-base sm:text-lg md:text-xl">
                {group.title}
              </h3>

              <ul className="flex flex-1 flex-wrap content-start gap-2">
                {group.skills.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className="
                      min-w-0 grow
                      md:basis-[calc(50%_-_0.25rem)]
                      lg:basis-[calc(33.333%_-_0.334rem)]
                      flex flex-col items-center justify-center gap-2
                      rounded-md border border-white/10 bg-background/25
                      p-3 text-center
                    "
                  >
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary/70" />

                    <span className="font-zodiak text-[0.72rem] leading-tight text-foreground/80 sm:text-xs">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
