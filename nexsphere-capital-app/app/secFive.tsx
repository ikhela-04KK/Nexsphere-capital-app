import arrowButton from "../public/arrow-button.svg";
import next14 from "../public/next14.jpg";
import next15 from "../public/next15.jpg";
import next16 from "../public/next16.jpg";
import Image from "next/image";
export default function SecFive() {
    return (
        <>
            <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 xl:grid-cols-12 sm:grid-cols-2 sm:grid-rows-2 xl:grid-rows-12 xl:gap-10 bg-custom-white xl:relative xl:h-screen ">
                <div className="lg:col-start-1 lg:col-span-2 lg:row-start-1 xl:col-span-8 col-start-1 row-start-1 sm:row-span-1 sm:col-start-1 sm:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-2">
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
                    <div className="m-4 relative xl:top-1/2">
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
                    <div className="m-4 relative xl:left-[15px] xl:top-1/2">
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
                            Navigating the Post-Pander Landscape: Challenges and Opportunities
                            for Startups
                        </h3>
                        <div className="flex justify-between align-center content-center mt-3">
                            <p>October 18, 2023</p>
                            {/* <p>2020</p> */}
                            <Image src={arrowButton} className="w-4" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
