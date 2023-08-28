import Breadcrumbs from "@/components/Breadcrumbs"
import UserCart from "@/components/UserCart"
import MainLayout from "@/components/layouts/MainLayout"
import Head from "next/head"

export default function Cart() {
    return (
        <>
            <Head>
                <title>Cart - Framework Flow</title>
            </Head>
            <MainLayout>
                <Breadcrumbs />
                <UserCart />
            </MainLayout>
        </>
    )
}
