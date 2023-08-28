import Image from "next/image"
import Link from "next/link"
import React from "react"

function ProductListSingle({ product }) {
    return (
        <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="group bg-white rounded-lg border border-gray-300 p-3 flex gap-6"
        >
            <div className="aspect-square h-[10.5rem] min-w-[10.5rem] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                    src={product.thumbnail}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    alt=""
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <h2 className="font-medium">{product.title}</h2>
                <div className="pt-1 flex items-center gap-3">
                    <strong className="text-lg font-medium text-gray-800">${product.price.toFixed(2)}</strong>
                    <span className="font-medium text-gray-500 line-through">${(product.price + 59).toFixed(2)}</span>
                    <span className="text-green-500 text-sm font-semibold">{product.discountPercentage}%</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="rating rating-sm disabled">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <input
                                key={rating}
                                type="radio"
                                className={`mask mask-star-2 ${
                                    Math.round(product.rating) >= rating ? "bg-orange-400" : "bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                    <span className="text-green-500">Free Shipping</span>
                </div>
                <p className="py-2 text-gray-500">{product.description}</p>
                <span className="link link-primary no-underline">View details</span>
            </div>
        </Link>
    )
}

export default ProductListSingle
