import nexs02 from "../public/nexs02.jpg";
import nexs03 from "../public/nexs03.jpg";
import nexs05 from "../public/nexs05.jpg";
import Image from "next/image";
export default function SecTwo() {
  return (
    <>
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
    </>
  );
}
