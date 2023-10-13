import Image from "next/image";
import nexs06 from "../public/nexs06.jpg";
export default function SecThree() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 xl:h-screen">
        <div className="bg-custom-green p-20 text-4xl">
          <h1 className="text-5xl font-bold mb-20 text-white">
            We are committed to fostering and supporting the next wave of
            groundbreaking innovators.
          </h1>

          <h4 className="text-white text-xl mb-2">Innovations Focus</h4>
          <p className="text-gray-400 text-lg mb-5">
            We are committed to fostering and supporting the next wave of
            groundbreaking innovators
          </p>

          <p className="text-white mb-4">Entrepreneurial Support</p>
          <p className="text-white mb-4">Long-Term Vision</p>
          <p className="text-white mb-4">Sustainable Impact</p>
        </div>

        {/* contrôle de la slide description */}
        <div className="">
          <div className="hidden">
            <p className="hidden">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis, adipisci esse consequuntur corrupti accusantium
              blanditiis cum magnam similique unde! Saepe reiciendis debitis
              quisquam quam unde necessitatibus eos illum repellat magni!
            </p>
          </div>
          <div>
            <Image
              src={nexs06}
              className="lg:w-full lg:h-full sm:h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
