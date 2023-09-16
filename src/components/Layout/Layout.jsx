import React, { lazy } from 'react'
const Navbar = lazy(() => import('./Navbar/Navbar'))

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="container mx-auto flex-1 bg-sky-300">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout
