import React from 'react';

const DisplayService = (props) => {
    const { name, img, details, price } = props.review;

    return (
        <div className="flex gap-10 m-10 p-5 border-2 shadow-slate-50 rounded-2xl">

            <div>
                <img className="w-80 h-64 mx-auto hover:rotate-2" src={img} alt="" />
                <h3 className="text-2xl font-bold text-left ">{name}</h3>
                <p className="text-slate-500 text-justify">{details}</p>
                <p className="text-black text-justify font-bold text-lg my-5">Price:  ${price}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                    Register
                </button>

            </div>
        </div>
    );
};

export default DisplayService;