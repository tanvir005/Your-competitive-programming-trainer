import React from 'react';
import LoadData from '../../Hooks/LoadData';
import img from '../../main-pic.png';
import DisplayService from '../DisplayService/DisplayService';

const Home = () => {
    const [service, setService] = LoadData();



    return (
        <div>
            <div className="md:flex  bg-slate-300 items-center justify-evenly pb-5 md:pb-0">
                <div className="w-1/2 mx-auto justify-items-end md:order-2"><img className="w-9/12" src={img} alt="" /></div>
                <div className="mx-auto w-1/2 md:ml-32">
                    <p className="text-lg text-green-800">Professional training</p>
                    <h1 className="md:text-5xl font-semibold whitespace-nowrap">Uncover the Secret of Successful</h1>
                    <h1 className="md:text-6xl font-semibold font-serif">Compitative Programmer<span className="font-bold md:text-6xl text-green-800">!</span></h1>
                    <p className="text-lg text-green-700">Your Compitetive Programming Trainer <span className="italic">___ by rifatentr</span></p>
                    <div className="flex justify-staet gap-10 mx-auto mt-5 ">
                        <button className="bg-blue-900 hover:bg-blue-800 px-6 py-2 rounded font-bold text-teal-100 ">Services</button>
                        <button className="bg-slate-800 hover:bg-slate-900 px-6 py-2 rounded font-bold text-teal-100 ">About Me</button>
                    </div>

                </div>


            </div>
            <div>
                <h1 className="text-3xl font-bold text-blue-900 mt-20 text-center">Services</h1>
                <div className="grid md:grid-cols-3">

                    {
                        service.slice(0, 3).map(review => <DisplayService
                            key={review.id}
                            review={review}
                        ></DisplayService>)

                    }

                </div>
            </div>
        </div>

    );
};

export default Home;

