import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();

    return (
        <footer className="bg-slate-900 ">
            <div className="flex justify-evenly py-16 text-slate-300 ">
                <div className="text-start">
                    <h1 className="text-2xl font-bold mb-5 text-white">Quick Link</h1>
                    <ul className="inline-grid">
                        <Link to="/">Home</Link>
                        <Link to="/services">Service</Link>
                        <Link to="/about">About</Link>
                        <Link to="/register">Register</Link>
                    </ul>
                </div>
                <div className="text-start">
                    <h1 className="text-2xl font-bold mb-5 text-white">Available Services</h1>
                    <ul className="inline-grid">
                        <Link to="/services">Basic Programming</Link>
                        <Link to="/services">Algorithms</Link>
                        <Link to="/services">Data Structures</Link>
                        <Link to="/services">Crack The Interview</Link>
                    </ul>
                </div>
                <div className="text-start ">
                    <h1 className="text-2xl font-bold mb-5 text-white">Follow Me</h1>
                    <ul className="inline-grid">
                        <Link to="/">Home</Link>
                        <Link to="/services">Service</Link>
                        <Link to="/about">About</Link>
                        <Link to="/register">Register</Link>
                    </ul>
                </div>
            </div>
            <p className="text-center text-gray-500 text-xs pb-4">
                &copy;{date.getFullYear()} Acme Corp. All rights reserved.
            </p>
        </footer>

    );
};

export default Footer;