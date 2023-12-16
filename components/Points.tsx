const punten = [
  {
    title: "Gemak voor leerling",
  },
  {
    title: "De leraar helpen",
  },
  {
    title: "Blijven verbeteren",
  },
];

export const Points = () => (
  <section class="mb-20 [counter-reset:section]">
    <h2 className="mb-4 flex w-full justify-center items-center gap-4 text-2xl font-bold tracking-tight text-center text-gray-900">
      <div class="">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 414 240"
          class="w-[40px]"
        >
          <path
            d="m33 61 59 14v90l-69 10C-21.8 123 10 61 33 61Z"
            fill="#252525"
          />
          <path
            d="M414 120 177 0c-25.667 21-71 75-85 75-11.538 0-8 34-8 45h330Z"
            fill="#4F4F4F"
          />
          <path
            d="m413.511 120-237 120c-25.666-21-71-75-85-75-11.538 0-8-34-8-45h330Z"
            fill="#252525"
          />
        </svg>
      </div>
      Onze speerpunten
      <div class="">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 414 240"
          class="w-[40px] -scale-x-100"
        >
          <path
            d="m33 61 59 14v90l-69 10C-21.8 123 10 61 33 61Z"
            fill="#252525"
          />
          <path
            d="M414 120 177 0c-25.667 21-71 75-85 75-11.538 0-8 34-8 45h330Z"
            fill="#4F4F4F"
          />
          <path
            d="m413.511 120-237 120c-25.666-21-71-75-85-75-11.538 0-8-34-8-45h330Z"
            fill="#252525"
          />
        </svg>
      </div>
    </h2>
    <hr class="w-[50%] h-[4px] bg-black m-auto mb-4" />
    <div class="md:flex md:gap-8 md:justify-center">
      {punten.map((p) => (
        <h3 class="[counter-increment:section] before:content-[counters(section,'.')] before:text-3xl before:font-bold before:block before:text-center text-center pb-2 md:flex md:gap-4 md:items-center">
          {p.title}
        </h3>
      ))}
    </div>
  </section>
);
