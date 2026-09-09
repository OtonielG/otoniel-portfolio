"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SkillCardsMotion() {
  useGSAP(() => {
    const section = document.querySelector<HTMLElement>(
      "[data-skills-section]",
    );

    if (!section) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const media = gsap.matchMedia();

    media.add("(max-width: 47.999rem)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll(".skill-card"),
      );

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            xPercent: index % 2 === 0 ? -100 : 100,
            opacity: 0,
          },
          {
            xPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "center bottom",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => media.revert();
  }, []);

  return null;
}
