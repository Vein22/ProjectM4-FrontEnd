import React from "react";
import { cardProps } from "./types";

export const Card: React.FC<cardProps> = ({id, image, title, price}) => {
    return (
        <div>
            <img src="{image}" alt="{title}" />
             <h2>{title}</h2>
             <p>{price}</p>
        </div>
    )
}

export default Card;