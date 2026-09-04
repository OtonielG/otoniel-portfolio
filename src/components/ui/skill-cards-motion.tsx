"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SkillCardsMotion() {
  useGSAP(() => {
    const section = document.querySelector<HTMLElement>("[data-skills-section]");
    if (!section) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const media = gsap.matchMedia();
    media.add(
      "(max-width: 47.999rem) and (prefers-reduced-motion: no-preference)",
      () => {
        const cards = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll(".skill-card"),
        );

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { xPercent: index % 2 === 0 ? -100 : 100 },
            {
              xPercent: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
                end: () => `+=${card.offsetHeight * 1.05}`,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      },
    );

    return () => media.revert();
  }, []);

  return null;
}
