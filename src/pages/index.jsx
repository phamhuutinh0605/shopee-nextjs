import QuickDeals from "@/components/QuickDeals"
import RecommendedProducts from "@/components/RecommendedProducts"
import TrendingCategories from "@/components/TrendingCategories"
import TrendingCategoriesMain from "@/components/TrendingCategoriesMain"
import TrendingProducts from "@/components/TrendingProducts"
import MainLayout from "@/components/layouts/MainLayout"
import Head from "next/head"

export default function Index() {
    return (
        <>
            <Head>
                <title>Explore Products - Framework Flow</title>
            </Head>
            <MainLayout>
                <TrendingCategoriesMain slide={2} />
                <QuickDeals />
                <TrendingProducts />
                <RecommendedProducts />
                <TrendingCategories slide={3} />
            </MainLayout>
        </>
    )
}
