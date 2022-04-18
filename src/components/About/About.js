import React from 'react';
import minePic from '../../images/278738339_2145712062248674_3455900153573825163_n.jpg';

const About = () => {
    return (
        <div className="">
            <div className="mx-auto mt-10">
                <img className="w-56 h-56 mx-auto rounded-full border-4 border-slate-100" src={minePic} alt="" />
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-center">Md. Rabiul Hasan Tanvir</h1>
                    <p className="text-xl font-bold">B.Sc. in CSE</p>
                </div>
            </div>
            <div className="text-3xl text-justify p-20">
                I am Md Rabiul Hasan TANVIR, a computer science graduate from Bangladesh University of Business and Technology in the Department of Computer Science and Engineering. My career focuses on Web dev,
                Blockchain, deep learning
                algorithms, pattern recognition, and reinforcement learning. Moreover, I am proficient in prominent frameworks,
                including TensorFlow, Keras, NumPy, Matplotlib, etc. I have experience working in famous languages, including
                Python and C++. Naw a days I am developing my skills on various web development Framwroks and Libraries. Such as Bootstrap, Tailwind, and React.
            </div>
        </div>
    );
};

export default About;