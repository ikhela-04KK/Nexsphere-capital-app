import { inter } from "./font";
import Image from "next/image"
import kaanari from "../public/logo-white.svg"
import nexs02 from "../public/nexs02.jpg";
import nexs03 from "../public/nexs03.jpg";
import nexs05 from "../public/nexs05.jpg";
import nexs06 from "../public/nexs06.jpg";





export default function Page() {
  return (
    <>
      <header className="mb-20">
        <nav className="relative px-4 py-4 flex justify-between items-center">
          {/* c'est la gestion du logo */}
          {/* leading-none : l'espace entre les lignes de texte */}
          <div className="flex justify-center items-center ml-6">
            {/* svg logo */}
            <Image src={kaanari} alt="" />
            <h1 className={inter.className}>Nexsphere</h1>
          </div>

          {/* pour la gestion du toggle */}
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3">
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                {/* <title>Mobile menu</title> */}
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>

          {/* pour la gestion des ul>li */}
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li><a className="text-sm text-green-500 hover:text-gray-500" href="#">Home</a></li>
            <li><a className="text-sm hover:text-gray-500" href="#">About Us</a></li>
            <li><a className="text-sm hover:text-gray-500" href="#">Portefolio</a></li>
            <li><a className="text-sm hover:text-gray-500" href="#">Services</a></li>
            <li><a className="text-sm hover:text-gray-500" href="#">Contact</a></li>
            <li><a className="text-sm hover:text-gray-500" href="#">Our Time</a></li>
            <li><a className="text-sm hover:text-gray-500" href="#">Our Story</a></li>
          </ul>
          <button className="xl:block hidden border-2 border-solid p-2">Get in touch</button>
        </nav>
      </header>


      {/* pour la gestion du contenu principal de la page  */}
      <main>
        {/* le premier main */}
        <div className="grid grid-cols-4 grid-rows-4 gap-x-40 gap-y-20">
          <div className="col-span-2 row-span-4 p-1 ml-10">

            <h1 className="text-6xl font-bold mb-10">
              Facilitating Growth Via Our Ecosystem Network
            </h1>

            <p className="text-gray-500">Discover how our extensive global network empowers startups and fules innovation. We connect visonary founders with the reources they need to thrive</p>
            <button className="mt-10 block px-6 py-2 mb-2 leading-loose text-sm text-center text-white font-semibold bg-custom-blue hover:bg-blue-700 rounded">Learn more</button>
          </div>

          <div className="relative grid grid-cols-2 grid-rows-2 col-span-2 row-span-4 p-3 w-2/3 h-2/3">
            <div className="p-4">
              <h1 className="text-6xl font-bold">$2B</h1>
              <p className="text-gray-500">Assets under management</p>
            </div>
            <div className="p-4">
              <h1 className="text-6xl font-bold">70</h1>
              <p className="text-gray-500">Acquisitions by our companies</p>
            </div>
            <div className="p-4">
              <h1 className="text-6xl font-bold">20+</h1>
              <p className="text-gray-500">Nexsphere year track record</p>
            </div>
            <div className="p-4">
              <h1 className="text-6xl font-bold">100+</h1>
              <p className="text-gray-500">Company sector in which we invest</p>
            </div>
          </div>
        </div>

        <div className="h-screen mt-14">
          {/* deuxième main  */}
          <div className="grid grid-cols-3">

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
          <div className="grid grid-cols-2 h-screen">

            <div className="bg-custom-green p-20 text-4xl h-screen">

              <h1 className="text-5xl text-bold mb-20 text-white">We are committed to fostering and supporting the next wave of groundbreaking innovators.</h1>

              <h4 className="text-white text-xl mb-2">Innovations Focus</h4>
              <p className="text-gray-400 text-lg mb-5">We are committed to fostering and supporting the next wave of groundbreaking innovators</p>

              <p className="text-white mb-4">Entreprenurial Support</p>
              <p className="text-white mb-4">Long-Term Vision</p>
              <p className="text-white mb-4">Sustainable Impact</p>

            </div>

            {/* contrôle slode description */}
            <div className="h-screen">
              <div className="hidden">
                <p className="hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, adipisci esse consequuntur corrupti accusantium blanditiis cum magnam similique unde! Saepe reiciendis debitis quisquam quam unde necessitatibus eos illum repellat magni!</p>
              </div>

              <div className="h-screen ">
                <Image src={nexs06} className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
          {/* contro^le */}
        </div>

        {/* quatrième main  */}

        <div className="grid grid-cols-2 h-screen">

          <div className="bg-white p-20 text-4xl h-screen">
            <h1 className="text-5xl text-bold mb-20 text-black">Powering startups with a Network of Industry Pioneers </h1>
            <p className="text-gray-400 mb-10">We collaborate with industry learders and organizations to provide startups with access to valuable ressources. Learn about our network</p>
            <button className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-custom-green hover:bg-blue-700 rounded">Learn more</button>
          </div>
          {/* pour la structure des grids complexes */}
          <div className="grid grid-cols-12 grid-rows-12 h-screen bg-white">
            <div className="col-span-2 row-span-2 col-start-3 row-start-4 w-full h-full object-cover bg-green-600">
              <Image src={nexs05} className="w-full h-full object-cover" alt="" />

            </div>
            <div className="col-span-3 row-span-2 col-start-5 row-start-4  bg-green-600">
              <Image src={nexs05} className="w-full h-full object-cover" alt="" />

            </div>

            <div className="col-span-3 row-span-2 col-start-8 row-start-8 bg-green-600">
              <Image src={nexs05} className="w-full h-full object-cover" alt="" />

            </div>
            <div className="col-span-3 row-span-2 col-start-8 row-start-4 bg-green-600">
              <Image src={nexs05} className="w-full h-full object-cover" alt="" />

            </div>

            <div className="col-span-2 row-span-2 col-start-4 row-start-6 bg-green-600">
              <Image src={nexs05} className="w-full h-full object-cover" alt="" />

            </div>
            <div className="col-span-2 row-span-2 col-start-6 row-start-6 bg-green-600">
              <Image src={nexs05} className="w-full h-full object-cover" alt="" />

            </div>
            <div className="col-span-3 row-span-2 col-start-8 row-start-6 bg-green-600">
              <Image src={nexs05} className="w-full h-full object-cover" alt="" />

            </div>
            <div className="col-span-2 row-span-2 col-start-6 row-start-8 bg-green-600">
              <Image src={nexs05} className="w-full h-full object-cover" alt="" />

            </div>
          </div>
          {/* pour la structure des grids complexes */}

        </div>
        {/* quatrième main */}



        {/* 5ème main  */}
        <div className="grid grid-cols-3 grid-rows-5">
          {/* pour la description */}
          <div></div>
          {/* pour la desccription */}

          {/* pour les images  */}
          <div></div>
          <div></div>
          <div></div>
          {/* pour les images */}

        </div>

        {/* contact page */}
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="bg-green-400">info-contact-us</div>
          <div className="bg-green-400">Logique contact-us</div>
        </div>
        {/* contact page */}

      </main >

      <footer>

      </footer>
    </>
  )
}