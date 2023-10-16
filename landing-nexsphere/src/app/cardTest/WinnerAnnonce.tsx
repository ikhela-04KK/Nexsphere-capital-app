"use client";
import Image from "next/image";


// initialisation des données 
const clients = [
    {
        id: 1,
        illustration: "nexs13.jpg",
        name: "Koffi Kan Marc-Ephrem, 20",
        description: "Etiam consequat consequat imperdiet. Fusce pharetra imperdiet purus ut iaculis. Maecenas at metus vel nibh commodo porttitor. Duis pellentesque consectetur tellus quis fermentum.",
        balance: [
            { index: "Amazon", value: "$400 million", },
            { index: "Google", value: "$200 million" },
            { index: "Kaanari", value: "$300 million" },
        ]
    },
    {
        id: 2,
        illustration: "nexs13.jpg",
        name: "berthé zié aziz, 20",
        description: "Etiam consequat consequat imperdiet. Fusce pharetra imperdiet purus ut iaculis. Maecenas at metus vel nibh commodo porttitor. Duis pellentesque consectetur tellus quis fermentum.",
        balance: [
            { index: "Amazon", value: "$400 million", },
            { index: "Google", value: "$200 million" },
            { index: "Kaanari", value: "$300 million" },
        ]
    },
    {
        id: 3,
        illustration: "nexs12.jpg",
        name: "Boumi Kapeu Marc, 20",
        description: "Etiam consequat consequat imperdiet. Fusce pharetra imperdiet purus ut iaculis. Maecenas at metus vel nibh commodo porttitor. Duis pellentesque consectetur tellus quis fermentum.",
        balance: [
            { index: "Amazon", value: "$400 million", },
            { index: "Google", value: "$200 million" },
            { index: "Kaanari", value: "$300 million" },
        ]
    },
]


// innitialiser la logique de du sytème 
export default function Clients() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 ">
                {
                    clients.map((item: {
                        id: number;
                        name: string;
                        illustration: string;
                        description: string;
                        balance: {
                            index: string;
                            value: string;
                        }[];
                    }) => (
                        <div key={item.id} className="h-[550px] bg-slate-200 relative group overflow-hidden">
                            <Image 
                                src={`/${item.illustration}`}
                                alt="illustration"
                                className="object-cover"
                                fill
                                priority
                            />
                            <div className="absolute bottom-[-400px] group-hover:bottom-[40px] backdrop-blur">
                                <h1>{item.id}</h1>
                                <p className="group-hover:bg-white">{item.name}</p>
                                <p>{item.illustration}</p>
                                <p>{item.description}</p>
                            </div>
                            <div>
                                {
                                    item.balance.map((
                                        el: { index: string; value: string },
                                        idx: number
                                    ) => (
                                        <div key={idx}>
                                            <p>{el.index}</p>
                                            <p>{el.value}</p>
                                        </div>
                                    )
                                    )}
                            </div>
                        </div>
                    )
                    )}
            </div>
        </>
    )
}