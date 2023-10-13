import { inter } from "./font";
import Image from "next/image";
import kaanari from "../public/logo-white.svg";
import nexs02 from "../public/nexs02.jpg";
import nexs03 from "../public/nexs03.jpg";
import nexs05 from "../public/nexs05.jpg";
import nexs06 from "../public/nexs06.jpg";
import nexs07 from "../public/nexs07.jpg";
import nexs08 from "../public/nexs08.jpg";
import nexs10 from "../public/nexs10.jpg";
import nexs11 from "../public/nexs11.jpg";
import nexs13 from "../public/nexs13.jpg";
import arrowButton from "../public/arrow-button.svg";
import next14 from "../public/next14.jpg";
import next15 from "../public/next15.jpg";
import next16 from "../public/next16.jpg";

export default function Page() {
  return (
    <>
      {/* le header pour la gestion du plain contenu  */}
      <header className="mb-30">
        <nav className="relative px-4 py-4 flex justify-between items-center">
          {/* c'est la gestion du logo */}
          {/* leading-none : l'espace entre les lignes de texte */}
          <div className="flex justify-center items-center lg:ml-6 ml-4">
            {/* svg logo */}
            <Image src={kaanari} alt="" />
            <h1 className={inter.className}>Nexspheres</h1>
          </div>

          {/* pour la gestion du toggle */}
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* <title>Mobile menu</title> */}
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>

          {/* pour la gestion des ul>li */}
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a
                className="text-sm text-green-500 hover:text-gray-500"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-500" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-500" href="#">
                Portefolio
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-500" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-500" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-500" href="#">
                Our Time
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-500" href="#">
                Our Story
              </a>
            </li>
          </ul>
          <button className="xl:block hidden border-2 border-solid p-2">
            Get in touch
          </button>
        </nav>
      </header>
      {/* le header pour la gestion du plain contenu  */}

      {/* pour la gestion du contenu principal de la page  */}
      <main>
        {/* le premier main */}
        <div className="relative grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-x-40 lg:gap-y-20 lg:mb-[80px] lg:mt-20 mb-30 grid-cols-2 grid-rows-1 ">
          <div className="col-span-2 row-span-4 p-1 lg:ml-10 m-6">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl lg:leading-10 lg:font-medium xl:leading-[55px] font-bold mb-10">
              Facilitating Growth Via Our Ecosystem Network
            </h1>
            <p className="text-gray-500">
              Discover how our extensive global network empowers startups and
              fules innovation. We connect visonary founders with the reources
              they need to thrive{" "}
            </p>
            <button className="mt-10 block px-6 py-2 mb-2 leading-loose text-sm text-center text-white font-semibold bg-custom-green hover:bg-blue-700 rounded">
              Learn more
            </button>
          </div>
          {/* description à gauche */}
          <div className="relative bottom-[11px] grid grid-cols-2 grid-rows-2 col-span-2 lg:row-span-4 p-3 max-w-screen lg:gap-3">
            <div className="p-4">
              <h1 className="font-bold text-2xl lg:text-6xl xl:text-5xl mb-2">$2B</h1>
              <p className="text-gray-500 text-base pt-[14px] w-[75%] xl:w-[60%] lg:mb-2">
                Assets under management
              </p>
            </div>
            <div className="p-4">
              <h1 className="font-bold text-2xl lg:text-6xl xl:text-5xl">70</h1>
              <p className="text-gray-500 text-base pt-[14px] w-[75%] xl:w-[60%] lg:mb-2">
                Acquisitions by our companies
              </p>
            </div>
            <div className="p-4">
              <h1 className="font-bold text-2xl lg:text-6xl xl:text-5xl">20+</h1>
              <p className="text-gray-500 text-base pt-[14px] w-[75%] xl:w-[60%] lg:mb-2">
                Nexsphere year track record
              </p>
            </div>
            <div className="p-4">
              <h1 className="font-bold text-2xl lg:text-6xl xl:text-5xl">100+</h1>
              <p className="text-gray-500 text-base pt-[14px] w-[75%] xl:w-[60%] lg:mb-2">
                Company sector in which we invest
              </p>
            </div>
          </div>
        </div>

        {/* <div className="h-screen mt-14"> */}
        {/* deuxième main  */}

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
          <div className="bg-green-400">
            <div>
              <Image src={nexs05} alt="" />
            </div>
            <div className="hidden p-4">
              <h1 className="text-6xl font-bold">$2B</h1>
              <p className="text-gray-500">Assets under management</p>
            </div>
          </div>

          <div className="bg-green-400">
            <div>
              <Image src={nexs02} alt="" />
            </div>
            <div className="hidden p-4">
              <h1 className="text-6xl font-bold">70</h1>
              <p className="text-gray-500">Acquisitions by our companies</p>
            </div>
          </div>

          <div className="bg-green-400">
            <div>
              <Image src={nexs03} alt="" />
            </div>

            {/* cacher avant d'appliquer la logique de flouttage */}
            <div className="hidden p-4">
              <h1 className="text-6xl font-bold">20+</h1>
              <p className="text-gray-500">Nexsphere year track record</p>
            </div>
          </div>
        </div>



        {/* troisième main */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 h-screen">
          <div className="bg-custom-green p-20 text-3xl">
            <h1 className="text-5xl font-bold mb-20 text-white">
              We are committed to fostering and supporting the next wave of
              groundbreaking innovators.
            </h1>

            <h4 className="text-white text-xl mb-2">Innovations Focus</h4>
            <p className="text-gray-400 text-lg mb-5">
              We are committed to fostering and supporting the next wave of
              groundbreaking innovators
            </p>

            <p className="text-white mb-4">Entrepreneurial Support</p>
            <p className="text-white mb-4">Long-Term Vision</p>
            <p className="text-white mb-4">Sustainable Impact</p>
          </div>

          {/* contrôle de la slide description */}
          <div className="">
            <div className="hidden">
              <p className="hidden">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis, adipisci esse consequuntur corrupti accusantium
                blanditiis cum magnam similique unde! Saepe reiciendis debitis
                quisquam quam unde necessitatibus eos illum repellat magni!
              </p>
            </div>
            <div>
              <Image
                src={nexs06}
                className="lg:w-full lg:h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* contro^le */}
        {/* troisième main */}
        {/* </div> */}

        {/* quatrième main pour la gestion des grids complexes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:h-screen">


          <div className="bg-white p-20 text-4xl">
            <div className="lg:relative xl:relative lg:top-[235px] xl:top-[235px]">
              {" "}
              {/*position: relative;top: 235px; */}
              <h1 className="text-5xl text-bold mb-20 text-black">
                Powering startups with a Network of Industry Pioneers{" "}
              </h1>
              <p className="text-gray-400 mb-10">
                We collaborate with industry learders and organizations to
                provide startups with access to valuable ressources. Learn about
                our network
              </p>
              <button className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-custom-green hover:bg-blue-700 rounded">
                Learn more
              </button>
            </div>
          </div>

          {/* pour la structure des grids complexes */}
          <div className="grid grid-cols-12 grid-rows-12 bg-white">
            <div className="col-span-2 row-span-2 col-start-3 row-start-4 lg:w-full lg:h-full lg:object-cover bg-green-600">
              <Image
                src={nexs13}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="col-span-3 row-span-2 col-start-5 row-start-4  bg-green-600">
              <Image
                src={nexs07}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="col-span-3 row-span-2 col-start-8 row-start-8 bg-custom-green text-white p-5">
              {/* <Image src={nexs08} className="w-full h-full object-cover" alt="" /> */}
              <h1 className="text-3xl pb-2">40+</h1>
              <p className="text-xs">Collaborative Project Launched</p>
            </div>

            <div className="col-span-3 row-span-2 col-start-8 row-start-4 bg-custom-green text-bold text-white p-5">
              {/* <Image src={nexs09} className="w-full h-full object-cover" alt="" /> */}
              <h1 className="text-3xl pb-2">78%</h1>
              <p className="text-xs">
                Increase in Startup Growth with partner support
              </p>
            </div>

            <div className="col-span-2 row-span-2 col-start-4 row-start-6 bg-green-600">
              <Image
                src={nexs10}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-6 row-start-6 bg-green-600">
              <Image
                src={nexs11}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="col-span-3 row-span-2 col-start-8 row-start-6 bg-custom-white text-black p-5">
              {/* <Image src={nexs12} className="w-full h-full object-cover" alt="" /> */}
              <h1 className="text-3xl pb-2">$15M</h1>
              <p className="text-xs">Unlocking Capital through Partnership</p>
            </div>
            <div className="col-span-2 row-span-2 col-start-6 row-start-8 bg-green-600">
              <Image
                src={nexs08}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          {/* pour la structure des grids complexes */}
        </div>
        {/* quatrième main */}

        {/* 5ème main  */}

        <div className="grid grid-cols-1 grid-rows-4 xl:grid-cols-12 sm:grid-cols-2 sm:grid-rows-2 xl:grid-rows-12 xl:gap-10 bg-custom-white xl:relative xl:h-screen ">
          <div className="xl:col-span-8 col-start-1 row-start-1 sm:row-span-1 sm:col-start-1 sm:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-2">
            <h1 className="text-4xl pb-4 text-custom-green font-bold">
              Stay Informed with Our Latest Insights and News
            </h1>
            <p className="text-lg font-light">
              Stay corrected with line latest in the world of innovation and
              venture capital
            </p>
          </div>

          <div className="xl:col-span-3 row-start-2 sm:row-start-2  xl:row-span-4 xl:col-start-2 xl:row-start-4">
            <div className="xl:h-4/5">
              <Image
                src={next16}
                className="w-full xl:h-[293px] object-cover"
                alt=""
              />
            </div>
            <div className="m-4 relative">
              <h3 className="font-bold">
                How Our Hands-On Approach Benefits Portefolio Companiess
              </h3>
              <div className="flex justify-between align-center content-center mt-3">
                <p>October 5, 2023</p>
                <Image src={arrowButton} className="w-4" alt="" />
            </div>
            </div>
          </div>

          <div className="xl:col-span-3 row-start-3 xl:row-span-3 xl:col-start-5 xl:row-start-4">
            <div className="xl:h-2/3">
              <Image
                src={next15}
                className="xl:w-full xl:h-[196px] h-[278px] object-cover"
                alt=""
              />
            </div>
            <div className="m-4 relative xl:left-[15px]">
              <h3 className="font-bold">
                Sustainability Spotlight: Investing in the Green Tech Revolution
              </h3>
              <div className="flex justify-between align-center content-center mt-3">
                <p>November 2, 2023</p>
                {/* <p>2020</p> */}
                <Image src={arrowButton} className="w-4" alt="" />
              </div>
            </div>
          </div>

          <div className="xl:col-span-3 row-start-4 xl:row-span-4 xl:col-start-8 xl:row-start-4 ">
            <div className="xl:h-4/5 ">
              <Image
                src={next14}
                className="w-full h-[229px] object-cover"
                alt=""
              />
            </div>
            <div className="m-4 relative xl:top-[43px]">
              <h3 className="font-bold">
                Navigating the Post-Pander Landscape: Challenges and
                Opportunities for Startups
              </h3>
              <div className="flex justify-between align-center content-center mt-3">
                <p>October 18, 2023</p>
                {/* <p>2020</p> */}
                <Image src={arrowButton} className="w-4" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* fin de la 5ème main */}

        {/* contact page */}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div className="grid grid-cols-10 grid-rows-10 gap-2 bg-white">
            <h1 className="col-span-8 row-span-2 col-start-2 row-start-2 font-bold text-6xl text-custom-green mb-10">
              {" "}
              Wed love to hear from you
            </h1>
            <div className=" col-span-8 row-span-2 col-start-2 row-start-4 ">
              <p className="font-light">Email Address</p>
              <p className="text-custom-green">+1 (123) 456-7890</p>
            </div>

            <div className="col-span-8 row-span-2 col-start-2 row-start-6">
              <p className="font-light">Headquarters Address</p>
              <p className="text-custom-green">
                123 Main Street, Suite 456, Cityville, 12345
              </p>
            </div>

            <div className="col-span-8 row-span-2 col-start-2 row-start-8">
              <p className="font-light">Business Hours</p>
              <p className="text-custom-green">Monday-Friday</p>
              <p className="text-custom-green">9:00 AM to 5:00 PM</p>
            </div>
          </div>

          <div className="bg-[#f0f1ec] dark:bg-gray-900 text-custom-green p-90">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
              <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-left text-gray-900 dark:text-white ">
                Contact Us
              </h2>
              <form action="#" className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Full name
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <label
                    htmlFor="subject"
                    className="w-5/12 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email adress
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </label>
                  <label
                    htmlFor="subject"
                    className="w-5/12 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone number
                    <input
                      type="text"
                      id="subject"
                      className=" block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Company name
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-1/2 block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-custom-green hover:bg-blue-700 rounded"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* contact page */}
      </main>

      <footer className="bg-black text-center text-white lg:text-left p-20">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <div className="flex justify-start align-center">
                <Image src={kaanari} alt="" />
                <h1 className={inter.className}>Nexspheres</h1>
              </div>
              <p className="p-6">
                Faciliting growing Via Our Econosystem Network
              </p>
            </div>
            <div className="">
              <p className="mb-4">
                <a href="#!" className=" ">
                  Angular
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className=" ">
                  React
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className=" ">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className=" ">
                  Laravel
                </a>
              </p>
            </div>
            <div className="">
              <p className="mb-4">
                <a href="#!" className="">
                  Pricing
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className=" ">
                  Settings
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className=" ">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className=" ">
                  Help
                </a>
              </p>
            </div>
            <div className="">
              <p className="mb-4">
                <a href="#!" className=" ">
                  Pricing
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className=" ">
                  Settings
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className=" ">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className=" ">
                  Help
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
