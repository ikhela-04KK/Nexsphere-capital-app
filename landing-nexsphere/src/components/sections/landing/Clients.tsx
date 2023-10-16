import Image from "next/image";

const clients = [
    {
        id: 1,
        illustration: "nexs02.jpg",
        logo: "",
        client_name: "Uber Technologies, Inc.",
        description: "Etiam consequat consequat imperdiet. Fusce pharetra imperdiet purus ut iaculis. Maecenas at metus vel nibh commodo porttitor. Duis pellentesque consectetur tellus quis fermentum.",
        kpis: [
            {index: "Industry category", value: "Transportation"},
            {index: "Total investisment", value: "$100 million"},
            {index: "investisment year", value: "2011"},
        ]
    },
    {
        id: 2,
        illustration: "nexs03.jpg",
        logo: "",
        client_name: "Airbnb, Inc.",
        description: "Etiam consequat consequat imperdiet. Fusce pharetra imperdiet purus ut iaculis. Maecenas at metus vel nibh commodo porttitor. Duis pellentesque consectetur tellus quis fermentum.",
        kpis: [
            {index: "Industry category", value: "Hospitality"},
            {index: "Total investisment", value: "$112 million"},
            {index: "investisment year", value: "2011"},
        ]
    },
    {
        id: 3,
        illustration: "nexs05.jpg",
        logo: "",
        client_name: "DoorDash, Inc.",
        description: "Etiam consequat consequat imperdiet. Fusce pharetra imperdiet purus ut iaculis. Maecenas at metus vel nibh commodo porttitor. Duis pellentesque consectetur tellus quis fermentum.",
        kpis: [
            {index: "Industry category", value: "Food Delivery"},
            {index: "Total investisment", value: "$2.5 Billion"},
            {index: "investisment year", value: "2019"},
        ]
    },
]

export default function Clients() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    clients.map((item: {
                        id: number;
                        illustration: string;
                        logo: string;
                        client_name: string;
                        description: string;
                        kpis: {
                            index: string;
                            value: string;
                        }[];
                    }) => (
                        <div key={item.id} className=" h-[550px] bg-slate-200 relative group overflow-hidden ">
                            <Image
                                src={`/${item.illustration}`}
                                alt="illustration"
                                className="object-cover"
                                fill
                                priority
                            />
                            <div className="absolute p-[20px] bg-black/30 backdrop-blur bottom-0 z-40 sm:group-hover:bottom-0 left-0 w-full h-[350px] transition-all duration-300 ">
                                {/* <div className="h-[50px] w-[50px] bg-white flex items-center justify-center mb-4 "></div> */}
                                <span className="block text-[18px]  text-white font-bold mb-2 ">
                                    {item.client_name}
                                </span>
                                <p className="text-white text-[14px] mb-4 max-w-[90%] ">
                                    {item.description}
                                </p>
                                <ul>
                                    {
                                        item.kpis.map((
                                                el: {index: string; value: string}, 
                                                idx: number
                                            ) => (
                                                <li key={idx} className="flex gap-4">
                                                    <div className="flex-1">
                                                        <span className="text-white/60 capitalize text-[14px] ">{el.index}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <span className="text-white capitalize text-[14px] ">{el.value}</span>
                                                    </div>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}