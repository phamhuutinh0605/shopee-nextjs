import React from "react"
import ProductCategoryCard from "@/components/ProductCategoryCard"
import { TRENDING_CATEGORIES } from "@/lib/const/products"

function TrendingCategoriesMain({ slide }) {
    return (
        <div className="my-6">
            <div className="flex gap-4">
                {TRENDING_CATEGORIES.slice(0, slide).map((category) => (
                    <ProductCategoryCard key={category.key} category={category} size="xl" />
                ))}
            </div>
        </div>
    )
}

export default TrendingCategoriesMain
