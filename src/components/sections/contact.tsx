"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  Mail,
  Phone,
  MapPin,
];

type ContactProps = {
  dictionary: {
    id: string;
    title: string;
    description: string;
    info: {
      label: string;
      value: string;
    }[];
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      successMessage: string;
    };
  };
};

export default function Contact({ dictionary }: ContactProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  useEffect(() => {
    if (submitStatus === "idle") return;

    const timeout = setTimeout(
      () => setSubmitStatus(submitStatus === "submitting" ? "success" : "idle"),
      submitStatus === "submitting" ? 2000 : 4000,
    );

    return () => clearTimeout(timeout);
  }, [submitStatus]);

  return (
    <section
      id={dictionary.id}
      className="w-full flex flex-col lg:flex-row md:items-center lg:justify-center px-4 py-6 md:py-8 md:scroll-mt-1"
    >
      <div className="w-full lg:w-[45%] 2xl:w-[40%] flex flex-col items-center lg:items-start gap-5 px-8 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8">
        <h2 className="font-technor text-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center lg:text-start">
          {dictionary.title}
        </h2>
        <p
          className="
            mx-auto max-w-2xl text-center text-sm text-muted/80
            sm:text-base
            md:text-lg
            lg:mx-0 lg:max-w-none lg:text-start
            xl:text-xl
          "
        >
          {dictionary.description}
        </p>
        <ul className="flex flex-col sm:flex-row justify-center flex-wrap lg:justify-start lg:flex-col gap-4">
          {contactInfo.map((Icon, index) => (
            <li key={dictionary.info[index].label} className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 border border-white/20 rounded-full">
                <Icon className="w-3 h-3 md:w-4 md:h-4 xl:w-5 xl:h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground/90 text-sm md:text-base xl:text-lg">
                  {dictionary.info[index].label}
                </p>
                <p className="text-muted text-xs md:text-sm xl:text-base">
                  {dictionary.info[index].value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.currentTarget.reset();
          setSubmitStatus("submitting");
        }}
        className="
          w-full md:w-[90%] lg:w-[45%] 2xl:w-[40%]
          flex flex-col justify-center gap-4
          px-8 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8
        "
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-semibold text-foreground/80 text-sm md:text-base"
          >
            {dictionary.form.nameLabel}
          </label>

          <input
            id="name"
            type="text"
            placeholder={dictionary.form.namePlaceholder}
            className="
              w-full rounded-md
              border border-white/20
              bg-transparent
              px-4 py-2 lg:py-3
              text-sm text-foreground/60
              placeholder:text-muted/50
              outline-none
              transition-colors
              focus:border-primary/60
              md:text-base
      "
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-semibold text-foreground/80 text-sm md:text-base"
          >
            {dictionary.form.emailLabel}
          </label>

          <input
            id="email"
            type="email"
            placeholder={dictionary.form.emailPlaceholder}
            className="
              w-full rounded-md
              border border-white/20
              bg-transparent
              px-4 py-2 lg:py-3
              text-sm text-foreground/60
              placeholder:text-muted/50
              outline-none
              transition-colors
              focus:border-primary/60
              md:text-base
            "
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="font-semibold text-foreground/80 text-sm md:text-base"
          >
            {dictionary.form.messageLabel}
          </label>

          <textarea
            id="message"
            placeholder={dictionary.form.messagePlaceholder}
            className="
              min-h-36 w-full resize-none rounded-md
              border border-white/20
              bg-transparent
              px-4 py-3
              text-sm text-foreground/60
              placeholder:text-muted/50
              outline-none
              transition-colors
              focus:border-primary/60
              md:text-base
            "
          />
        </div>

        <button
          type="submit"
          disabled={submitStatus === "submitting"}
          className="
            w-full lg:w-auto
            mt-2 self-start rounded-md
            bg-primary
            lg:px-5 py-3
            text-sm font-semibold
            text-background
            transition-opacity
            hover:opacity-70
            md:text-base
            cursor-pointer
            disabled:cursor-not-allowed disabled:opacity-50
          "
        >
          {dictionary.form.submitButton}
        </button>
      </form>
      {submitStatus === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-foreground shadow-lg"
        >
          <CheckCircle2 className="h-4 w-4 text-primary" />
          {dictionary.form.successMessage}
        </div>
      )}
    </section>
  );
}
