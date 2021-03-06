import React from 'react';
import { Link } from 'react-router-dom';

const VerificationSend = () => {
    return (
        <div>
            <h1 className="text-slate-800 font-semibold md:text-4xl text-center md:p-36 p-10">An varification link send to your email. <br /> <span className="text-green-900">Please check your email and active your account.</span> </h1>
            <h1 className="text-slate-800 font-semibold md:text-4xl text-center md:pb-44 p-16">You can read our <Link className="text-emerald-500 hover:underline hover:text-emerald-600" to="/blogs"> blogs.</Link>  </h1>


        </div>
    );
};

export default VerificationSend;