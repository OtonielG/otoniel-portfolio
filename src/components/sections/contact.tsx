import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "otonielgomez993@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+502 37534666",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Guatemala, Guatemala",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="w-full flex flex-col lg:flex-row lg:justify-center gap-5 lg:gap-0 py-6 md:py-8 md:scroll-mt-7 lg:scroll-mt-8"
    >
      <div className="w-full lg:w-[45%] 2xl:w-[40%] flex flex-col gap-5 p-8">
        <h2 className="font-technor text-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center lg:text-start">
          Contacto
        </h2>
        <p
          className="
            mx-auto max-w-2xl text-center text-base text-muted/80
            md:text-lg
            lg:mx-0 lg:max-w-none lg:text-start
            xl:text-xl
          "
        >
          Si quieres hablar conmigo sobre una oportunidad, proyecto o
          colaboración, puedes enviarme un mensaje y te responderé pronto.
        </p>
        <ul className="flex justify-center flex-wrap lg:justify-start lg:flex-col gap-4">
          {contactInfo.map((info, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 border border-white/20 rounded-full">
                <info.icon className="w-3 h-3 md:w-4 md:h-4 xl:w-5 xl:h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground/90 text-sm md:text-base xl:text-lg">
                  {info.label}
                </p>
                <p className="text-muted text-xs md:text-sm xl:text-base">
                  {info.value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form className="bg-red-100 w-full lg:w-[45%] 2xl:w-[40%]"></form>
    </section>
  );
}
