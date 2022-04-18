import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { XIcon, MenuIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from '@firebase/auth';
import logo from '../../Group 33137.png';
import { Link } from 'react-router-dom';


const Header = () => {
    const [open, setOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);


    return (
        <nav className="w-full bg-slate-300 top-0 sticky">
            <div className=" md:flex md:justify-between">
                <div>
                    <Link to="/" > <img className="w-11/12 p-2" src={logo} alt="" /></Link>
                </div>
                <div>
                    <div onClick={() => setOpen(!open)} className="md:hidden w-full bg-slate-300">
                        {open ? <XIcon className="md:hidden w-7 h-7 bg-slate-300"></XIcon> : <MenuIcon className="md:hidden w-7 h-7 bg-slate-300"></MenuIcon>}
                    </div>
                    <ul className={`inline-grid md:flex text-xl bg-slate-300 font-bold md:gap-10 md:justify-center text-left justify-start absolute left-1 duration-500 ease-in md:sticky p-5 ${open ? 'top-15' : 'top-[-860px]'}`}>
                        <CustomLink className="px-4 py-2 pb-8 rounded hover:bg-slate-200  duration-300 ease-in" to="/">Home</CustomLink>
                        <CustomLink className="px-4 py-2 pb-8 rounded hover:bg-slate-200  duration-300 ease-in" to="/services">Service</CustomLink>
                        <CustomLink className="px-4 py-2 pb-8 rounded hover:bg-slate-200  duration-300 ease-in" to="/service">About</CustomLink>
                        {
                            user ? <div className="inline-grid md:flex md:gap-10 md:justify-center text-left justify-start">
                                <img className="w-12 h-12 rounded-full border-2" src={user?.photoURL} alt="" />
                                <button onClick={() => signOut(auth)} className="px-4 py-2 pb-8 rounded hover:bg-slate-200 font-bold  duration-300 ease-in" >Sign Out</button>


                            </div>
                                :
                                <div className="inline-grid md:flex md:gap-10 md:justify-center text-left justify-start">
                                    <CustomLink className="px-4 py-2 rounded pb-8 hover:bg-slate-200  duration-300 ease-in" to="/login">Login</CustomLink>
                                    <CustomLink className="px-4 py-2 rounded pb-8 hover:bg-slate-200  duration-300 ease-in" to="/register">Register</CustomLink>
                                </div>

                        }


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

