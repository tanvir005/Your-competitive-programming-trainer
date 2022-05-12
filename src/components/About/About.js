import React from 'react';
import minePic from '../../images/278738339_2145712062248674_3455900153573825163_n.jpg';

const About = () => {
    return (
        <div className="">
            <div className="mx-auto mt-10">
                <img className="w-56 h-56 mx-auto rounded-full border-4 border-slate-100" src={minePic} alt="" />
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-center">Md. Rabiul Hasan Tanvir</h1>

                </div>
            </div>
            <div className="md:text-3xl text-lg text-justify md:p-20 p-10">
                I am Md Rabiul Hasan TANVIR, a computer science graduate from Bangladesh University of Business and Technology
                in the Department of Computer Science and Engineering. My career focuses on Web development,
                Blockchain application development, and Machine learning. Moreover,
                I am proficient in prominent frameworks and libraries, including TensorFlow, Keras,
                NumPy, Matplotlib, Bootstrap, Tailwind, React.Js, and Express.js, etc. I have experience working in
                famous languages, including Python and C++.
            </div>
        </div>
    );
};

export default About;