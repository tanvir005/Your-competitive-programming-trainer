import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/google-logo-9808.png';
import yt from '../../images/youtube-logo-png-2069.png';
import git from '../../images/git.png';
import spotify from '../../images/spotify-logo-png-7053.png';

const Footer = () => {
    const date = new Date();

    return (
        <div className="absolute w-full">
            <footer className="static bottom-0 bg-slate-900 ">
                <div className="inline-grid p-20 md:flex md:justify-evenly py-16 text-slate-300 gap-5">
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
                        <ul className="flex gap-5">
                            <Link to="/"><img className="w-5 h-5" src={google} alt="" /></Link>
                            <Link to="/services"><img className="w-5 h-5" src={yt} alt="" /></Link>
                            <Link to="/about"><img className="w-5 h-5" src={git} alt="" /></Link>
                            <Link to="/register"><img className="w-5 h-5" src={spotify} alt="" /></Link>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-gray-500 text-xs pb-4">
                    &copy;{date.getFullYear()} YCPT Inc. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;