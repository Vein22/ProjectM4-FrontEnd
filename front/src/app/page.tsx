import Card from "@/components/cards/cards";
import React from "react";
import { products } from "@/mocks/products";

export const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
            <h1 className="text-2x1 font-bold mb-6">Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((products) => (
                    <Card key={products.id} {...products}/>                   
                ))}
            </div>
        </div>
    );
};

export default Home;