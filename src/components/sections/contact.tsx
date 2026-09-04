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
      className="w-full flex flex-col lg:flex-row md:items-center lg:justify-center px-4 py-6 md:py-8 md:scroll-mt-7 lg:scroll-mt-8"
    >
      <div className="w-full lg:w-[45%] 2xl:w-[40%] flex flex-col gap-5 px-8 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8">
        <h2 className="font-technor text-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center lg:text-start">
          Contacto
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
      <form
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
            Nombre completo
          </label>

          <input
            id="name"
            type="text"
            placeholder="Tu nombre"
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
            Correo electrónico
          </label>

          <input
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
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
            Mensaje
          </label>

          <textarea
            id="message"
            defaultValue="Hola, me gustaría hablar contigo sobre "
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
          type="button"
          className="
            mt-2 self-start rounded-md
            bg-primary
            px-5 py-3
            text-sm font-semibold
            text-background
            transition-opacity
            hover:opacity-70
            md:text-base
            cursor-pointer
          "
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
