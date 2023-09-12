import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="container mx-auto bg-indigo-300  px-4 py-2">
                <Link to={'/'} className="text-2xl font-semibold">
                    Brand
                </Link>
                <div className="">
                    <input type="search" name="search" id="search" />
                </div>
                <div className="">
                    <img src="" alt="user" />
                </div>
            </nav>
        </>
    )
}

export default Navbar
