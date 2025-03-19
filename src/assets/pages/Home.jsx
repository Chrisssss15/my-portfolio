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

            {/* Info Card Section */}
            <div className="mt-16 w-full flex justify-center">
                <div className="bg-gray-900 text-gray-300 p-10 rounded-lg shadow-lg w-3/4 md:w-1/2 text-center relative z-20">
                    <div className="flex justify-center">
                        <div className="w-12 h-12 flex items-center justify-center border-2 border-green-500 rounded-full">
                            <span className="text-green-500 font-bold text-lg">C</span>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-300">
                        Hey, ik ben Chris Tang – een creatieve developer met een passie voor games en interactieve media.
                        <br/>
                        Momenteel studeer ik Creative Media and Game Technology, waar ik me verdiep in het bouwen van innovatieve en gebruiksvriendelijke digitale ervaringen. Mijn focus ligt op front-end development, met een sterke interesse in ReactJS en moderne webtechnologieën.
                        <br/>
                        Of het nu gaat om het ontwikkelen van dynamische webapplicaties of het creëren van meeslepende interactieve content, ik ben altijd op zoek naar nieuwe uitdagingen en manieren om mijn skills te verbeteren.
                        <br/>
                        Neem gerust een kijkje in mijn werk en laten we connecten! 🚀
                    </p>
                    <button className="mt-6 border border-green-500 text-green-500 px-6 py-2 rounded hover:bg-green-500 hover:text-white transition">
                        DOWNLOAD RESUME
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Home;