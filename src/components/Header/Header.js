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
        <nav className="w-full ml-5 inset-0  fixed md:static">
            <div onClick={() => setOpen(!open)} className="md:hidden w-full pt-3 bg-white">
                {open ? <XIcon className="md:hidden w-7 h-7 bg-white"></XIcon> : <MenuIcon className="md:hidden w-7 h-7 bg-white"></MenuIcon>}
            </div>
            <ul className={`inline-grid md:flex text-xl text-purple-900 font-bold md:gap-10 md:justify-center text-left justify-start md:mt-10 absolute left-10 bg-white duration-500 ease-in md:static p-5 ${open ? 'top-10' : 'top-[-860px]'}`}>
                <CustomLink className="border-b-2 px-2 hover:border-b-black duration-300 ease-out" to="/">HOME</CustomLink>
                <CustomLink className="border-b-2 px-2 hover:border-b-black duration-300 ease-out" to="/service">Service</CustomLink>
                {
                    user ? <div>
                        <CustomLink className="border-b-2 px-2 hover:border-b-black duration-300 ease-out" to="/login">{user?.email}</CustomLink>
                        <p onClick={signOut(auth)} className="border-b-2 px-2 hover:border-b-black duration-300 ease-out" >Sign Out</p>


                    </div>
                        :
                        <CustomLink className="border-b-2 px-2 hover:border-b-black duration-300 ease-out" to="/login">Login</CustomLink>
                }
                <CustomLink className="border-b-2 px-2 hover:border-b-black duration-300 ease-out" to="/register">Register</CustomLink>

            </ul>
        </nav>
    );
};

export default Header;

