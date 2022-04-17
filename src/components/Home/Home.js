import React from 'react';
import img from '../../main-pic.png';

const Home = () => {
    return (
        <div className="flex bg-slate-300">
            <div className="text-9xl ">Welcom to ENTR</div>
            <div><img className="" src={img} alt="" /></div>
        </div>
    );
};

export default Home;