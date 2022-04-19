import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <p className="text-center text-5xl text-red-800 py-60 font-extrabold">Congratulation!
                <Link className="text-lg text-green-700" to="/">Home</Link></p>

        </div>
    );
};

export default Payment;