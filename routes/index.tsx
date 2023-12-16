//import { useSignal } from "@preact/signals";
//import Counter from "../islands/Counter.tsx";

import { Feature } from "../components/Feature.tsx";
import { Points } from "../components/Points.tsx";

export default function Home() {
  //const count = useSignal(3);
  return (
    <>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-xl">
        </div>
        <div class="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">3Leer</h1>
        </div>
      </div>
      <footer class="bg-white">
        <div class="mx-auto p-4 md:py-8">
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
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
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
