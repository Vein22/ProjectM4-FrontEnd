import React from "react";
import { cardProps } from "@/interfaces";
import Link from "next/link";

export const Card: React.FC<cardProps> = ({id, image, title, price}) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
            <Link href={`/products/${id}`}>
                <img src={image} alt={title} className="w-full h-40 object-cover"/>
            </Link>
            
            <div className="p-4">
                <h2 className="text-gray-800 text lg font-semibold">{title}</h2>
                <p className="text-gray-700 font-medium">{price}$</p>

                <Link href={`/products/${id}`}>
                    <button className="mt-3 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Get more details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;