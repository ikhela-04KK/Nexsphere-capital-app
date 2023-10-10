import {inter} from "./font";
import Image from "next/image"
import kaanari from "../public/logo-white.svg"

export default function Page(){
  return (
    <>
    <header>
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
	
  </>
  )

  
}