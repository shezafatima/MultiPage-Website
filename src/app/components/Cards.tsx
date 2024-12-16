import propertiesData from "@/data/property.json";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

interface Property {
    id: number;
    image: string;
    price: string;
    location: string;
    description: string;
}

function Cards() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:mx-[8rem] mx-8 gap-8 mt-20">
            {propertiesData.property.map((property: Property) => (
                <div
                    key={property.id}
                    className="bg-white shadow-lg card border rounded-lg overflow-hidden flex flex-col h-full"
                >
                    {/* Image Section */}
                    <div className="relative w-full h-[14rem]">
                        <Image
                            src={property.image}
                            alt={property.description}
                            width={1000}
                            height={1000}
                           
                            className="w-[40rem] h-full object-cover rounded"
                            priority
                        />
                    </div>
                    {/* Content Section */}
                    <div className="p-4 flex-grow">
                        <p className="text-green-500  font-bold text-xl ">{property.price}</p>
                        <h1 className="text-xl flex items-center justify-center text-black mt-2">{property.description}</h1>
                        <div className="mt-2 flex flex-row">
                            <div className="mt-1 text-lg mx-1">

                        <IoLocationSharp />
                            </div>
                        <p className="text-gray-600 text-lg ">{property.location}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
