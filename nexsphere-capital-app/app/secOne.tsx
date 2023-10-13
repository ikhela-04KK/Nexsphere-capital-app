export default function SecOne() {
  return (
    <>
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
        <div className="relative bottom-[11px] grid grid-cols-2 grid-rows-2 col-span-2 lg:row-span-4 p-3 max-w-screen lg:gap-3 xl:w-4/5 xl:h-4/5">
          <div className="p-4">
            <h1 className="font-bold text-2xl lg:text-6xl xl:text-5xl mb-2">
              $2B
            </h1>
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
    </>
  );
}
