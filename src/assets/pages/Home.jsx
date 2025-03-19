import { Link, Outlet } from 'react-router';
import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiLaravel, SiMysql } from 'react-icons/si';
import Cube from "../Components/Cube.jsx";



function Home() {

    const frontendSkills = [
        { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl" /> },
        { name: 'ReactJS', icon: <FaReact className="text-blue-500 text-3xl" /> },
        { name: 'Angular.js', icon: <FaAngular className="text-red-500 text-3xl" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-3xl" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
    ];

    const backendSkills = [
        { name: 'PHP', icon: <FaPhp className="text-indigo-500 text-3xl" /> },
        { name: 'Laravel', icon: <SiLaravel className="text-red-600 text-3xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-3xl" /> },
        { name: 'SQL', icon: <SiMysql className="text-blue-400 text-3xl" /> },
    ];

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

            {/*/!* Skills Section - Categorieën met iconen *!/*/}
            <div className="mt-16 w-full flex flex-col items-center">
                <h2 className="text-white text-3xl font-bold mb-6">Mijn Skills</h2>

                {/* Frontend Skills */}
                <div className="mb-8 w-3/4">
                    <h3 className="text-green-400 text-2xl font-semibold mb-4">Frontend Development</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {frontendSkills.map((skill) => (
                            <div key={skill.name} className="bg-gray-900 text-green-400 px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-green-500 animate-[progress_2s_linear_infinite]"></div>
                                {skill.icon}
                                <p className="mt-2">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="mb-8 w-3/4">
                    <h3 className="text-green-400 text-2xl font-semibold mb-4">Backend Development</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {backendSkills.map((skill) => (
                            <div key={skill.name} className="bg-gray-900 text-green-400 px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-green-500 animate-[progress_2s_linear_infinite]"></div>
                                {skill.icon}
                                <p className="mt-2">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="App">

                <Cube />
            </div>

        </div>
    );
}

export default Home;