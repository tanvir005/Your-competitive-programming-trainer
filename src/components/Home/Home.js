import React from 'react';
import img from '../../main-pic.png';

const Home = () => {
    return (
        <div className="md:flex bg-slate-300">
            <div className="text-9xl w-1/2">
                <p>Professional coaching</p>
                <h1>Uncover the Secret to be Successful Compitative Programmer!</h1>
            </div>
            {/* <div className="w-1/2 justify-items-end"><img className="w-9/12" src={img} alt="" /></div> */}
        </div>
    );
};

export default Home;