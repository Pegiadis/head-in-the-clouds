import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <nav className="bg-[#1A1A2E] text-white p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center h-10">
                <Link to="/" className="flex items-center">
                    <img src="/pen.svg" alt="Logo" className="h-14 mr--4"/>
                    <span className="text-xl font-bold">Head in the Clouds</span>
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link to="/episodes" className="hover:text-gray-300">Episodes</Link>
                    <Link to="/about" className="hover:text-gray-300">About</Link>
                    <Link to="/shop" className="hover:text-gray-300">Shop</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
