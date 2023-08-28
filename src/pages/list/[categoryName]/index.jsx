import Breadcrumbs from "@/components/Breadcrumbs"
import ProductFilterAside from "@/components/ProductFilterAside"
import ProductList from "@/components/ProductList"
import MainLayout from "@/components/layouts/MainLayout"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import { RiCloseLine, RiLayoutGridLine, RiListCheck2 } from "react-icons/ri"

const colors = ["Red", "Green", "Purple", "Violet", "Black", "Gray"]

export default function List() {
    const [products, setProducts] = useState(null)
    const route = useRouter()
    const categoryName = route.query.categoryName
    const fetchProducts = async () => {
        const data = await fetch(`https://dummyjson.com/products/category/${categoryName}`, {
            cache: "force-cache",
        }).then((res) => res.json())
        if (data?.products) {
            setProducts(data.products)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [categoryName])

    return (
        <>
            <MainLayout>
                <Breadcrumbs />
                {products ? (
                    <div className="px-2 py-4 flex">
                        <ProductFilterAside />
                        <div className="pl-4 flex-1">
                            <div className="pt-[1.7rem] pb-2 flex items-center">
                                <div className="flex-1">
                                    <p>
                                        12,911 items in <span className="font-medium">Mobile accessory</span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <select id="SortBy" className="select min-h-0 h-10 border-gray-300 rounded-lg">
                                        <option>Sort By</option>
                                        <option value="Title, DESC">Title, DESC</option>
                                        <option value="Title, ASC">Title, ASC</option>
                                        <option value="Price, DESC">Price, DESC</option>
                                        <option value="Price, ASC">Price, ASC</option>
                                    </select>
                                    <div className="join">
                                        <button className="btn btn-outline border-gray-300 bg-white py-2 px-3 min-h-0 h-10 rounded-lg join-item">
                                            <RiListCheck2 fontSize={20} />
                                        </button>
                                        <button className="btn btn-outline border-gray-300 bg-white py-2 px-3 min-h-0 h-10 rounded-lg join-item">
                                            <RiLayoutGridLine fontSize={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-4 flex items-center gap-2">
                                {colors.map((el) => (
                                    <div
                                        key={el}
                                        className="badge badge-lg badge-outline badge-secondary rounded-lg gap-2 pl-1.5 text-sm"
                                    >
                                        <RiCloseLine />
                                        {el}
                                    </div>
                                ))}
                                <button className="link no-underline link-secondary ml-4">Clear Filters</button>
                            </div>

                            <ProductList products={products} />
                        </div>
                    </div>
                ) : (
                    <div className="p-12 flex min-h-[22rem]">
                        <span className="m-auto loading loading-ring loading-lg"></span>
                    </div>
                )}
            </MainLayout>
        </>
    )
}
