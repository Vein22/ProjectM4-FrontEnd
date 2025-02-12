import Card from "@/components/card/card";
import React from "react";
import { products } from "@/mocks/products";

export const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-20">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((products) => (
                    <Card key={products.id} {...products}/>                   
                ))}
            </div>
        </div>
    );
};

export default Home;