//import { useSignal } from "@preact/signals";
//import Counter from "../islands/Counter.tsx";

import { Feature } from "../components/Feature.tsx";
import { Points } from "../components/Points.tsx";

export default function Home() {
  //const count = useSignal(3);
  return (
    <>
      <div class="px-4 py-8 mx-auto mb-20">
        <div class="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold w-full text-green-900">3Leer</h1>
          <Feature />
          <Points />
          <div class="max-w-[30rem] text-xl text-center lg:text-left">
            <h2 class="h-0 overflow-hidden">Over ons</h2>
            <p class="text-slate-700 mb-3">
              Wij zijn een startend educatieve onderneming. Ons eerste product
              is een eindexamen voorbereider. Deze komt beschikbaar als 'app' en
              'website'. We draaien binnenkort onze eerste 'pilot' voor het vak
              Engels.
            </p>
            <p class="text-slate-700 mb-3">
              Wij hebben ruimte om meer scholen te laten deelnemen aan de gratis
              'pilot'.
            </p>
            <p class="text-slate-700">
              Neem contact met ons op voor meer info. Mand.
            </p>
          </div>
        </div>
      </div>
      <footer class="bg-white">
        <div class="max-w-screen-xl p-4 md:py-8 m-auto">
          <div class="sm:flex sm:items-center sm:justify-between">
            <span
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span class="self-center text-2xl font-semibold whitespace-nowrap">
                3Leer
              </span>
            </span>
            <span class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <span>
                3leer@gmail.com
              </span>
            </span>
          </div>
          <hr class="my-2 border-gray-200 sm:mx-auto" />
          <span class="block text-sm text-gray-500 sm:text-center">
            © 2023 {
              /* <a href="https://flowbite.com/" class="hover:underline">
              Flowbite™
            </a>. All Rights Reserved. */
            }
          </span>
        </div>
      </footer>
    </>
  );
}
