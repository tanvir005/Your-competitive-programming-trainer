import React, { useRef, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const date = new Date();

    //taking values using useRef
    const emailRef = useRef('');
    const passRef = useRef('');

    // error
    const [errorMsg, setErrorMasg] = useState('');


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleOnClickSignin = () => {
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password)

    }

    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }
    return (
        <div className="w-full max-w-lg mx-auto my-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                    <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" />
                    <p className="text-red-500 text-xs italic">{error?.message}</p>
                </div>
                <div className="mb-6">
                    <p className="text-lg italic">Not Registered? <Link className="text-blue-900 hover:underline" to="/register">Register here.</Link></p>
                </div>
                <div className="">
                    <button onClick={handleOnClickSignin} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <a className="inline-block justify-center font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
                <div className="my-5 flex items-center justify-evenly">
                    <div className="border-b-2 w-5/12"></div>
                    <p>or</p>
                    <div className="border-b-2 w-5/12"></div>
                </div>
                <div className="flex justify-evenly">
                    <p>google</p>
                    <p>github</p>
                    <p>facebook</p>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;{date.getFullYear()} Acme Corp. All rights reserved.
            </p>
        </div>
    );
};

export default Login;