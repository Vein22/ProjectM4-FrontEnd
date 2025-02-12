import { products } from "@/mocks/products"
import { notFound } from "next/navigation";


interface ProductDetailPageProps {
    params: { id: string };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const product = await Promise.resolve (products.find((p) => p.id === params.id));

    if(!product) {
        return notFound();
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className="text-gray-700 text-lg my-4">${product.price}</p>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};
