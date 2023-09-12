import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="container py-2 bg-indigo-300 mx-auto px-4">
                <Link to={'/'} className="font-semibold text-2xl">
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
