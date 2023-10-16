import BtnGreen from "@/components/ui/buttons/BtnGreen";

export default function Hero() {
    return (
        <>
            <div className="py-10 sm:py-20 md:py-28 main-container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-8 xl:w-[80%]">
                        <h1 className="text-[35px] leading-[44px] sm:text-[60px] sm:leading-[70px] md:text-[70px] md:leading-[80px] font-[500]">
                            {"Facilitating Growth Via Our Ecosystem Network"}
                        </h1>
                        <p className="opacity-60  my-6 sm:my-10 ">
                            {"Discover how our extensive global network empowers startups and fuels innovation. We connect visionary founders with the ressources they need to thrive"}
                        </p>
                        <div className="my-[40px]">
                            {/* action --- */}
                            <BtnGreen label="Learn more" />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="grid grid-cols-2 gap-8 ">
                            <div>
                                <span className="block capitalize text-[50px] sm:text-[50px] md:text-[60px] font-[500] ">{"$2B"}</span>
                                <p className="opacity-60  p-container xl:w-[90%]">{"Assets under management"}</p>
                            </div>
                            <div>
                                <span className="block capitalize text-[50px] sm:text-[50px] md:text-[60px] font-[500] ">{"70"}</span>
                                <p className="opacity-60  p-container xl:w-[90%]">{"Acquisitions by our compains"}</p>
                            </div>
                            <div>
                                <span className="block capitalize text-[50px] sm:text-[50px] md:text-[60px] font-[500] ">{"20+"}</span>
                                <p className="opacity-60 p-container  xl:w-[90%]">{"Nexsphere your track record"}</p>
                            </div>
                            <div>
                                <span className="block capitalize text-[50px] sm:text-[50px] md:text-[60px] font-[500] ">{"100+"}</span>
                                <p className="opacity-60  p-container xl:w-[90%]">{"Company sector in which we invest"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}