export const Feature = () => (
  <div className="mb-20 lg:w-full">
    <div class="relative lg:w-[740px] lg:ml-[100px] lg:mb-[90px]">
      <div className="p-10 relative z-[1] lg:pt-10 lg:pl-20">
        <img
          className="rounded-full w-full max-w-[700px] lg:w-[570px]"
          src="/girl1.jpg"
        />
      </div>
      <svg
        aria-hidden
        className="fill-[#B87EED] absolute inset-0"
        viewBox="0 0 160 150"
        x="0px"
        y="0px"
        id="svg-5264"
      >
        <path d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z">
        </path>
      </svg>
    </div>
    <article className="rounded-lg shadow-box-1 p-10 lg:mt-[-250px] mt-[-200px] relative z-[2] bg-white ml-auto lg:mr-[200px] max-w-[500px] flex flex-col">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 order-2">
        Eindexamen hulp
      </h2>
      <small class="order-1 mt-[-20px]">App & Web</small>
      <div class="order-3">
        <p className="font-normal text-gray-700 mb-2">
          Gericht leren voor je eindexamen
        </p>

        <ul class="list-disc ml-4">
          <li>Continu bijgewerkte sturing op basis van je laatste werk</li>
          <li>Vind je zwakke punten</li>
          <li>Doelgericht oefenen</li>
          <li>Behapbare inhoud & video's</li>
        </ul>
        {
          /* <a
          href="#"
          class="text-white bg-[#B87EED] hover:bg-[#955ec9] focus:bg-[#955ec9] focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm uppercase px-5 py-2.5"
        >
          Read more
        </a> */
        }
      </div>
    </article>
  </div>
);
