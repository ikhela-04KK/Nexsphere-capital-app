import Image from "next/image";
import nexs07 from "../public/nexs07.jpg";
import nexs08 from "../public/nexs08.jpg";
import nexs10 from "../public/nexs10.jpg";
import nexs11 from "../public/nexs11.jpg";
import nexs13 from "../public/nexs13.jpg";
export default function SecFour() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:h-screen">
                <div className="bg-white p-20 text-4xl">
                    <div className="lg:relative xl:relative lg:top-[235px] xl:top-[235px]">
                        {" "}
                        {/*position: relative;top: 235px; */}
                        <h1 className="text-5xl text-bold mb-20 text-black">
                            Powering startups with a Network of Industry Pioneers{" "}
                        </h1>
                        <p className="text-gray-400 mb-10">
                            We collaborate with industry learders and organizations to provide
                            startups with access to valuable ressources. Learn about our
                            network
                        </p>
                        <button className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-custom-green hover:bg-blue-700 rounded">
                            Learn more
                        </button>
                    </div>
                </div>

                {/* pour la structure des grids complexes */}
                <div className="grid grid-cols-12 grid-rows-12 bg-white xl:h-screen">
                    <div className="col-span-2 row-span-2 col-start-3 row-start-4 lg:w-full lg:h-full lg:object-cover bg-green-600">
                        <Image src={nexs13} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="col-span-3 row-span-2 col-start-5 row-start-4  bg-green-600">
                        <Image src={nexs07} className="w-full h-full object-cover" alt="" />
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
                        <Image src={nexs10} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="col-span-2 row-span-2 col-start-6 row-start-6 bg-green-600">
                        <Image src={nexs11} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="col-span-3 row-span-2 col-start-8 row-start-6 bg-custom-white text-black p-5">
                        {/* <Image src={nexs12} className="w-full h-full object-cover" alt="" /> */}
                        <h1 className="text-3xl pb-2">$15M</h1>
                        <p className="text-xs">Unlocking Capital through Partnership</p>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-6 row-start-8 bg-green-600">
                        <Image src={nexs08} className="w-full h-full object-cover" alt="" />
                    </div>
                </div>
                {/* pour la structure des grids complexes */}
            </div>
        </>
    );
}
