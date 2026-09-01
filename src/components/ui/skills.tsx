export default function Skills() {
  return (
    <section className="skills-section w-full overflow-x-clip flex flex-col items-center justify-center gap-5 py-6 md:py-8 md:scroll-mt-7 lg:scroll-mt-8">
      <h2 className="font-technor text-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center md:mb-6">
        Habilidades
      </h2>

      <div className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[55%]">
        <ul className="skill-container w-full flex gap-3 sm:gap-5 overflow-visible">
          <li className="skill-card min-w-0 flex-1 aspect-[3/4] bg-red-100"></li>
          <li className="skill-card min-w-0 flex-1 aspect-[3/4] bg-blue-100"></li>
          <li className="skill-card min-w-0 flex-1 aspect-[3/4] bg-green-100"></li>
        </ul>
      </div>
    </section>
  );
}
