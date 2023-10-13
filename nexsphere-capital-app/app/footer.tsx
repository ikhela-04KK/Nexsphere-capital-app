import Image from "next/image";
import kaanari from "../public/logo-white.svg";
import { inter } from "./font";

export default function Footer() {
    return (
        <>
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

        </>)
}