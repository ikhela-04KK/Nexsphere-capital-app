"use client";
import Link from "next/link";
import Image from "next/image";
import BtnWhite from "@/components/ui/buttons/BtnWhite";

{/* For iteration wuth map it's so fast */ }
const menus = [
    { redirect: "/", label: "Home" },
    { redirect: "/", label: "About us" },
    { redirect: "/", label: "Portefolio" },
    { redirect: "/", label: "Services" },
    { redirect: "/", label: "Our team" },
    { redirect: "/", label: "Our story" },
]

export default function Navbar() {
    return (
        <>
            <header className="main-container">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center justify-between">
                        <Link href={"/"}>
                            <Image
                                src="/logo-white.svg"
                                alt="Nesxphere Logo"
                                className="mr-1"
                                width={35}
                                height={23}
                                priority
                            />
                        </Link>
                        <h1 className="font-extrabold text-2xl">Nexsphere</h1>
                    </div>
                    <ul className="hidden lg:flex items-center gap-6">
                        {
                            menus.map(
                                (
                                    item: { redirect: string; label: string },
                                    idx: number
                                ) => (
                                    <li key={idx}>
                                        <Link href={item.redirect}
                                            className="sm:hover:text-l-green-1 transition-all">{item.label}</Link>
                                    </li>
                                )
                            )
                        }
                    </ul>
                    <div className="hidden lg:block">
                        {/* <button value="Get in touch">Get in touch</button> */}
                        {/* importer le composant button */}
                        <BtnWhite label ="Get in touch" />

                    </div>
                    <div className="lg:hidden cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                </nav>
            </header>
        </>
    )
}