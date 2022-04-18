import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Register = () => {
    const date = new Date();
    // error
    const [errorMsg, setErrorMasg] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);





    //taking values using useRef
    const emailRef = useRef('');
    const passRef = useRef('');
    const conPassRef = useRef('');


    const handlePassOnBlue = () => {
        const pass = passRef.current.value;
        console.log(pass);
        if (pass.length < 6) {
            setErrorMasg("Password must be atleast 6 characters.");
            return;
        }
    }

    if (createError) {
        setErrorMasg(createError.message)
    }
    if (verificationError) {
        setErrorMasg(verificationError.message)
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    const handleOnClickReg = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const password = conPassRef.current.value;
        if (pass !== password) {
            setErrorMasg("Password doesn't match.");
            return;
        }

        console.log(email, pass, password);
        createUserWithEmailAndPassword(email, password);
        sendEmailVerification();
    }


    return (
        <div className="w-full max-w-lg mx-auto my-auto mb-10">
            <p className="text-slate-600  font-bold text-5xl my-10">Registration Here</p>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input ref={passRef} onBlur={handlePassOnBlue} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" />
                    {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Confirm Password
                    </label>
                    <input ref={conPassRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="Confirm Password" />
                    <p className="text-red-500 text-xs italic">{errorMsg}</p>
                </div>
                <div className="mb-6">
                    <p className="text-lg italic">Already Registered? <Link className="text-blue-900 hover:underline" to="/login">Login here.</Link></p>
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={handleOnClickReg} className=" bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                        Register
                    </button>

                </div>
            </form>

        </div>

    );
};

export default Register;

