import React, { lazy } from 'react'
const Navbar = lazy(() => import('./Navbar/Navbar'))

const Layout = ({ children }) => {
    return (
        <>
            <div className="">
                <Navbar />
                <div className="container mx-auto bg-sky-300 flex-1">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout
