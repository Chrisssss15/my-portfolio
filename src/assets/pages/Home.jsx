import { Link, Outlet } from 'react-router';
import { useState } from 'react';



function Home() {

    return (
        <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-gray-700 opacity-80"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="md:w-1/2 text-white text-center md:text-left">
                    <h1 className="text-5xl font-bold leading-tight">
                        <span className="text-green-500">I'M</span> <br />
                        Chris Tang
                        {/*<br /> CARO*/}
                        <span className="text-green-500">.</span>
                    </h1>
                    <p className="mt-4 text-lg uppercase text-gray-300">Frontend developer & Web Developer</p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img src="https://via.placeholder.com/400" alt="Profile" className="w-72 md:w-96 rounded-lg " />
                </div>
            </div>
        </div>
    );
}

export default Home;