import {inter} from "./font";
import Image from "next/image"
import kaanari from "../public/logo-white.svg"

export default function Page(){
  return (
    <>
    <header className="mb-20">
          <nav className="relative px-4 py-4 flex justify-between items-center">
            {/* c'est la gestion du logo */}
            {/* leading-none : l'espace entre les lignes de texte */}
            <div className="flex justify-center items-center">
                {/* svg logo */}
                <Image src={kaanari} alt="" />
                <h1 className={inter.className} >Nexsphere</h1>
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
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
              <li><a className="text-sm text-green-500 hover:text-gray-500" href="#">Home</a></li>
              <li><a className="text-sm hover:text-gray-500" href="#">About Us</a></li>
              <li><a className="text-sm hover:text-gray-500" href="#">Portefolio</a></li>
              <li><a className="text-sm hover:text-gray-500" href="#">Services</a></li>
              <li><a className="text-sm hover:text-gray-500" href="#">Contact</a></li>
              <li><a className="text-sm hover:text-gray-500" href="#">Our Time</a></li>
              <li><a className="text-sm hover:text-gray-500" href="#">Our Story</a></li>
            </ul>
            <button className="md:block hidden border-2 border-solid border p-2">Get in touch</button>
          </nav>
  </header>

  <main>

    <div className="grid grid-cols-4 grid-rows-4 gap-x-40 gap-y-20">
        <div className="col-span-2 row-span-4 p-4">

          <h1 className="text-6xl font-bold mb-10">
            Facilitating Growth Via Our Ecosystem Network 
          </h1>

          <p className="text-gray-500">Discover how our extensive global network empowers startups and fules innovation. We connect visonary founders with the reources they need to thrive</p>
          <button className="mt-10 block px-6 py-2 mb-2 leading-loose text-sm text-center text-white font-semibold bg-custom-blue hover:bg-blue-700 rounded">Learn more</button>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 col-span-2 row-span-4 p-3">
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
  </main>
  <footer></footer>
	
  </>
  )

  
}