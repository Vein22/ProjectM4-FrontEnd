import React from "react";
import { cardProps } from "@/interfaces";

export const Card: React.FC<cardProps> = ({image, title, price}) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
            <img src={image} alt={title} className="w-full h-40 object-cover"/>
            <div className="p-4">
                <h2 className="text-gray-800 text lg font-semibold">{title}</h2>
                <p className="text-gray-700 font-medium">{price}$</p>
            </div>
        </div>
    );
};

export default Card;