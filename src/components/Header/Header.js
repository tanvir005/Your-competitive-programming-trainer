import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { XIcon, MenuIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from '@firebase/auth';


const Header = () => {
    const [open, setOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);


    return (
        <nav className="w-full sticky">

            <div onClick={() => setOpen(!open)} className="md:hidden w-full pt-3 bg-white">
                {open ? <XIcon className="md:hidden w-7 h-7 bg-white"></XIcon> : <MenuIcon className="md:hidden w-7 h-7 bg-white"></MenuIcon>}
            </div>
            <ul className={`inline-grid md:flex text-xl bg-slate-800 font-bold md:gap-10 md:justify-center text-left justify-start absolute left-1 duration-500 ease-in md:static p-5 ${open ? 'top-10' : 'top-[-860px]'}`}>
                <CustomLink className="px-2 hover:bg-white pb-6 duration-300 ease-out" to="/">Home</CustomLink>
                <CustomLink className="border-b-2 px-2 hover:border-b-white duration-300 ease-out" to="/service">Service</CustomLink>
                <CustomLink className="border-b-2 px-2 hover:border-b-white duration-300 ease-out" to="/service">About</CustomLink>
                {
                    user ? <div className="inline-grid md:flex md:gap-10 md:justify-center text-left justify-start">
                        <img className="w-10 h-10" src={user?.photoURL} alt="" />
                        <p onClick={() => signOut(auth)} className="border-b-2 px-2 hover:border-b-black duration-300 ease-out" >Sign Out</p>


                    </div>
                        :
                        <div className="inline-grid md:flex md:gap-10 md:justify-center text-left justify-start">
                            <CustomLink className="border-b-2 px-2 hover:border-b-black duration-300 ease-out" to="/login">Login</CustomLink>
                            <CustomLink className="border-b-2 px-2 hover:border-b-black duration-300 ease-out" to="/register">Register</CustomLink>
                        </div>

                }


            </ul>
        </nav>
    );
};

export default Header;

