import React, { useRef, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const date = new Date();
    const [user] = useAuthState(auth);

    const [
        signInWithEmailAndPassword,
        emailPassUser,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



    //taking values using useRef
    const emailRef = useRef('');
    const passRef = useRef('');


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleOnClickSignin = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleRestPass = event => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
    }

    let errorElement;
    if (error) {
        errorElement = <p className="text-red-700"> Error: {error?.message}</p>
    }

    if (loading) {
        return <p className="text-center font-bold text-4xl">Loading...</p>;
    }
    if (sending) {
        return <p className="text-center font-bold text-4xl">Sending...</p>;
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (

        <div className="w-full max-w-lg mx-auto mb-10">
            <p className="text-slate-600  font-bold text-5xl my-10">Login Here</p>
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
                    <input ref={passRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" />
                    <p className="text-red-500 text-xs italic">{errorElement}</p>
                </div>
                <div className="mb-6">
                    <p className="text-lg italic">Not Registered? <Link className="text-blue-900 hover:underline" to="/register">Register here.</Link></p>
                </div>
                <div className="">
                    <button onClick={handleOnClickSignin} className=" bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <a onClick={handleRestPass} className="inline-block justify-center font-bold text-sm text-slate-800 hover:text-slate-700" href="#">Forgot Password?</a>
                </div>
                <div className="my-5 flex items-center justify-evenly">
                    <div className="border-b-2 w-5/12"></div>
                    <p>or</p>
                    <div className="border-b-2 w-5/12"></div>
                </div>

            </form>

        </div>

    );
};

export default Login;