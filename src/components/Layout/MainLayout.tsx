import React from "react"
import Header from "@baseComponents/Header"

type LayoutProps = {
    children: React.ReactNode
}

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <main className="main-bg" >
            <div className="row-span-1">
                <Header />
            </div>
            <div className="row-span-5">
                {children}
            </div>
        </main>
    )
}

export default MainLayout