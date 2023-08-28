import { CATEGORY_LINKS } from "@/lib/const/navigation"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { RiMenu2Line } from "react-icons/ri"

function CategoryMenu() {
    const [categories, setCategories] = useState(null)

    async function fetchcategories() {
        const data = await fetch(`https://dummyjson.com/products/categories`).then((res) => res.json())
        if (data) {
            setCategories(data)
        }
    }
    useEffect(() => {
        fetchcategories()
    }, [])
    return (
        <div className="border-b border-b-gray-300 bg-white">
            <div className="layout-w px-2">
                <div className="py-3">
                    <ul className="flex items-center gap-6 text-sm">
                        <span href={"/categories"} className="opacity-70 flex items-center gap-2">
                            <RiMenu2Line fontSize={18} />
                            All Category:
                        </span>
                        {categories
                            ? categories.slice(0, 10).map((cat, idx) => (
                                  <Link
                                      key={idx}
                                      href={`/list/${cat}`}
                                      className="hover:opacity-80 transition-opacity capitalize whitespace-nowrap"
                                  >
                                      {cat}
                                  </Link>
                              ))
                            : "No data"}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoryMenu
