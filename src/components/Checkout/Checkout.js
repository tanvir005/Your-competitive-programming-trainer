import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';


const Checkout = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { serviceName } = useParams();

    // const r = DataloadCheck(serviceName);
    // console.log(r);

    // const result = service.find(({ name }) => name === { serviceName });

    //taking values using useRef
    const nameFrist = useRef('');
    const nameLast = useRef('');
    const emailRef = useRef('');
    const mobileNoRef = useRef('');
    const addressRef = useRef('');
    const address2Ref = useRef('');


    const handleOnClickSubmit = async (event) => {
        event.preventDefault();
        navigate('/successPayment');

    }

    return (
        <div className=" w-full max-w-6xl mx-auto my-auto mb-10 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="text-slate-600  font-bold text-5xl my-10">Welcome Back, {user?.displayName}</p>
            <div>
                <form onSubmit={handleOnClickSubmit} className=" bg-white ">
                    <div className="flex gap-24">
                        <div className="w-1/2">
                            <p className="text-slate-800  font-bold text-4xl my-10">Personal Information</p>

                            <div className="mb-4">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Name
                                </label>
                                <input ref={nameFrist} value={user?.displayName} readOnly className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white invalid:border-pink-500 invalid:text-pink-600" id="grid-first-name" type="text" placeholder="Name" required />

                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                {
                                    user.email ? <input ref={emailRef} value={user?.email} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-pink-500 invalid:text-pink-600" id="email" type="email" placeholder="email" required />
                                        :
                                        <input ref={emailRef} value={user?.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-pink-500 invalid:text-pink-600" id="email" type="email" placeholder="email" required />
                                }    </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >  Mobile no </label>

                                <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-pink-500 invalid:text-pink-600" type="number" placeholder="Mobile no" required />

                                {/* {
                                    user.email ? <input ref={emailRef} value={user?.phoneNumber} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-pink-500 invalid:text-pink-600" type="number" placeholder="Mobile no" required />
                                        :
                                        <input ref={emailRef} value={user?.phoneNumber} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-pink-500 invalid:text-pink-600" type="number" placeholder="Mobile no" required />
                                } */}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Address
                                </label>
                                <input

                                    ref={addressRef}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text"
                                    placeholder="Address"
                                    required />

                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Address Line 2
                                </label>
                                <input
                                    ref={address2Ref}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="text" placeholder="Address line 2" />
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-800  font-bold text-4xl my-10">Service Information</p>
                            <p className="text-red-600  font-bold text-3xl my-16">{serviceName} </p>
                            <p className="text-slate-600  font-bold text-xl">Make payment and provide the Transection No bellow.</p>
                            <div className="my-6">
                                <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-pink-500 invalid:text-pink-600" type="number" placeholder="Transection No" required />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <input
                            className=" bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
                            type="submit"
                            value="Procced"
                        />

                    </div>
                </form>

            </div>

        </div>
    );
};

export default Checkout;