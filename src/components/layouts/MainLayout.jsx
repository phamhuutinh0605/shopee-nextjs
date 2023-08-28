import React from "react"
import HeaderDesktop from "../HeaderDesktop"
import { Inter } from "next/font/google"
import CategoryMenu from "../CategoryMenu"
import Footer from "../Footer"

const inter = Inter({ subsets: ["latin"] })

function MainLayout({ children }) {
    return (
        <div className={`${inter.className}`}>
            <HeaderDesktop />
            <CategoryMenu />
            <main className="layout-w">{children}</main>
            <Footer />
        </div>
    )
}

export default MainLayout
