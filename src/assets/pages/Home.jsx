// import { Link, Outlet } from 'react-router';
// import { useState } from 'react';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaPhp, FaGithub } from 'react-icons/fa';
// import { SiTailwindcss, SiTypescript, SiMongodb, SiLaravel, SiMysql } from 'react-icons/si';
// import Cube from "../Components/Cube.jsx";
//
// function Home() {
//     const frontendSkills = [
//         { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500 text-3xl" />, progress: 90 },
//         { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl" />, progress: 80 },
//         { name: 'ReactJS', icon: <FaReact className="text-blue-500 text-3xl" />, progress: 65 },
//         { name: 'Angular.js', icon: <FaAngular className="text-red-500 text-3xl" />, progress: 60 },
//         { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-3xl" />, progress: 50 },
//         { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400 text-3xl" />, progress: 75 },
//     ];
//
//     const backendSkills = [
//         { name: 'PHP', icon: <FaPhp className="text-indigo-500 text-3xl" />, progress: 70 },
//         { name: 'Laravel', icon: <SiLaravel className="text-red-600 text-3xl" />, progress: 70 },
//         { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" />, progress: 40 },
//         { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-3xl" />, progress: 40 },
//         { name: 'SQL', icon: <SiMysql className="text-blue-400 text-3xl" />, progress: 50 },
//     ];
//
//     return (
//         <div className=" w-full min-h-screen flex flex-col items-center bg-[#D7D7D7] justify-center relative">
//             {/*<div className="absolute inset-0 bg-[#4281A4] "></div>*/}
//
//             {/*<div className="container mt-20  relative z-10 flex flex-col md:flex-row items-center">*/}
//             {/*    <div className=" text-[#FBF5F3] text-center md:text-left">*/}
//             {/*        <h1 className="text-5xl font-bold leading-tight">*/}
//             {/*            <span className="text-[#ECA400]">I'M</span> <br/>*/}
//             {/*            Chris Tang*/}
//             {/*            <span className="text-[#ECA400]">.</span>*/}
//             {/*        </h1>*/}
//             {/*        <p className="mt-4 text-lg uppercase text-[#ECA400]">Frontend developer & Web Developer</p>*/}
//             {/*    </div>*/}
//
//             {/*    /!*<div className="md:w-1/2 flex justify-center md:justify-end">*!/*/}
//             {/*    /!*    <img src="/Chris-img.jpg" alt="Profile" className="w-72 md:w-96 rounded-lg" />*!/*/}
//             {/*    /!*</div>*!/*/}
//             {/*</div>*/}
//
//             <div id="intro" className="mt-16 w-full flex flex-col items-center">
//                 <div className="mb-8 w-3/4">
//                     <div className=" text-[#FBF5F3] text-center md:text-left">
//                         <h1 className="text-5xl font-bold leading-tight">
//                             <span className="text-[#ECA400]">I'M</span> <br/>
//                             Chris Tang
//                             <span className="text-[#ECA400]">.</span>
//                         </h1>
//                         <p className="mt-4 text-lg uppercase text-[#ECA400]">Frontend developer & Web Developer</p>
//                     </div>
//                 </div>
//
//             </div>
//
//
//             <div id="about" className="mt-15 max-auto flex justify-center">
//                 <div
//                     className="bg-[#FBF5F3] text-[#000807] p-10 rounded-lg shadow-lg w-3/4 md:w-1/2 text-center relative z-20">
//                     <div className="flex justify-center">
//                         <div
//                             className="w-12 h-12 flex items-center justify-center border-2 border-[#ECA400] rounded-full">
//                             <span className="text-[#ECA400] font-bold text-lg">C</span>
//                         </div>
//                     </div>
//                     <p className="mt-4 text-sm">
//                         Hey, ik ben Chris Tang – een creatieve developer met een passie voor games en interactieve
//                         media.
//                         <br/>
//                         Momenteel studeer ik Creative Media and Game Technology, waar ik me verdiep in het bouwen van
//                         innovatieve en gebruiksvriendelijke digitale ervaringen. Mijn focus ligt op front-end
//                         development, met een sterke interesse in ReactJS en moderne webtechnologieën.
//                         <br/>
//                         Of het nu gaat om het ontwikkelen van dynamische webapplicaties of het creëren van meeslepende
//                         interactieve content, ik ben altijd op zoek naar nieuwe uitdagingen en manieren om mijn skills
//                         te verbeteren.
//                         <br/>
//                         Neem gerust een kijkje in mijn werk en laten we connecten! 🚀
//                     </p>
//                     <a
//                         href="./Contact"
//                         className="mt-6 inline-block border border-[#ECA400] text-[#000807] px-6 py-2 rounded hover:bg-[#ECA400] hover:text-white transition"
//                     >
//                         Meer info
//                     </a>
//                 </div>
//             </div>
//
//
//
//             <div id="skills" className="mt-16 mb-10 w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20">
//                 {/* Frontend Skills */}
//                 <div className="mb-8 md:mb-0 w-3/4 md:w-1/3">
//                     <h3 className="text-[#ECA400] text-2xl font-semibold mb-4">Frontend Development</h3>
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                         {frontendSkills.map((skill) => (
//                             <div
//                                 key={skill.name}
//                                 className="bg-[#FBF5F3] text-[#000807] px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden"
//                             >
//                                 <div className="absolute top-0 left-0 w-full h-1 bg-[#ECA400] animate-[progress_2s_linear_infinite]"></div>
//                                 {skill.icon}
//                                 <p className="mt-2">{skill.name}</p>
//                                 <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                                     <div className="bg-[#ECA400] h-2.5 rounded-full" style={{ width: `${skill.progress}%` }}></div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//
//                 {/* Backend Skills */}
//                 <div className="w-3/4 md:w-1/3">
//                     <h3 className="text-[#ECA400] text-2xl font-semibold mb-4">Backend Development</h3>
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                         {backendSkills.map((skill) => (
//                             <div
//                                 key={skill.name}
//                                 className="bg-[#FBF5F3] text-[#000807] px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden"
//                             >
//                                 <div className="absolute top-0 left-0 w-full h-1 bg-[#ECA400] animate-[progress_2s_linear_infinite]"></div>
//                                 {skill.icon}
//                                 <p className="mt-2">{skill.name}</p>
//                                 <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                                     <div className="bg-[#ECA400] h-2.5 rounded-full" style={{ width: `${skill.progress}%` }}></div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//
//
//
//
//
//
//             {/*<div className="App">*/}
//             {/*    <Cube/>*/}
//             {/*</div>*/}
//         </div>
//     );
// }
//
// export default Home;


import { useEffect } from 'react';
import { Link } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaHtml5, FaJs, FaReact, FaAngular, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiLaravel, SiMysql } from 'react-icons/si';

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const frontendSkills = [
        { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500 text-3xl" />, progress: 90 },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-3xl" />, progress: 80 },
        { name: 'ReactJS', icon: <FaReact className="text-blue-500 text-3xl" />, progress: 65 },
        { name: 'Angular.js', icon: <FaAngular className="text-red-500 text-3xl" />, progress: 60 },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-3xl" />, progress: 50 },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400 text-3xl" />, progress: 75 },
    ];

    const backendSkills = [
        { name: 'PHP', icon: <FaPhp className="text-indigo-500 text-3xl" />, progress: 70 },
        { name: 'Laravel', icon: <SiLaravel className="text-red-600 text-3xl" />, progress: 70 },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" />, progress: 40 },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-3xl" />, progress: 40 },
        { name: 'SQL', icon: <SiMysql className="text-blue-400 text-3xl" />, progress: 50 },
    ];

    return (
        // <div className="w-full min-h-screen flex flex-col items-center bg-[#D7D7D7] scroll-smooth">

            <div className="w-full">

                {/* Intro */}
                {/*<div id="intro" className="mt-0 p-16 w-full flex flex-col items-center bg-white" data-aos="fade-up">*/}
                <div id="intro" className="mt-0 p-16 w-full flex flex-col items-center min-h-screen" data-aos="fade-up">
                    <div className="mb-8 w-3/4">
                        <div className=" text-[#FBF5F3] text-center md:text-left">
                            <h1 className="text-5xl font-bold leading-tight">
                                <span className="text-[#ECA400]">I'M</span>
                                <br />
                                Chris Tang
                                <span className="text-[#ECA400]">.</span>
                            </h1>
                            <p className="mt-4 text-lg uppercase text-[#ECA400] overflow-hidden whitespace-nowrap border-r-2 border-[#ECA400] w-fit animate-typing animate-blink">
                                Frontend developer & Web Developer
                            </p>
                        </div>
                    </div>
                </div>

                {/* About */}
                {/*<div id="about" className=" p-16 max-auto flex justify-center bg-black" data-aos="fade-up">*/}
                <div id="about" className=" p-16 max-auto flex justify-center min-h-screen align-middle" data-aos="fade-up">
                    <div className="bg-[#FBF5F3] text-[#000807] p-12 rounded-xl shadow-2xl w-full max-w-4xl text-center relative z-20">
                        <div className="flex justify-center mb-4">
                            <div className="w-14 h-14 flex items-center justify-center border-2 border-[#ECA400] rounded-full">
                                <span className="text-[#ECA400] font-bold text-xl">C</span>
                            </div>
                        </div>
                        <p className="text-sm md:text-base leading-normal">
                          <span className="block mb-4">
                            <strong>Hey, ik ben Chris</strong> – een enthousiaste front-end developer met een passie voor design en technologie.
                          </span>
                            <span className="block mb-4">
                            Ik combineer creativiteit met techniek om moderne, gebruiksvriendelijke websites en webapplicaties te bouwen.
                          </span>
                            <span className="block mb-4">
                            Tijdens mijn opleiding <em>Creative Media and Game Technology</em> heb ik brede kennis opgedaan – niet alleen in front-end development, maar ook in back-end systemen en zelfs AI-toepassingen.
                          </span>
                            <span className="block">
                            Momenteel ben ik op zoek naar een <strong> stage</strong> waar ik mijn skills verder kan ontwikkelen, kan samenwerken met andere developers, en écht impact kan maken.
                          </span>
                        </p>
                        <a
                            href="./Contact"
                            className="mt-6 inline-block border border-[#ECA400] text-[#000807] font-medium px-5 py-2.5 rounded-full hover:bg-[#ECA400] hover:text-white transition"
                        >
                            Meer info
                        </a>
                    </div>
                </div>



                {/* Skills */}
                {/*<div id="skills" className="  p-16 w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20 bg-blue-200" data-aos="fade-right">*/}
                <div id="skills" className=" min-h-screen p-16 w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20 " data-aos="fade-right">
                    {/* Frontend */}
                    <div className="mb-8 md:mb-0 w-3/4 md:w-1/2">
                        {/*<h3 className="text-[#ECA400] text-2xl font-semibold mb-4">Frontend Development</h3>*/}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {frontendSkills.map((skill) => (
                                <div key={skill.name} className="bg-[#FBF5F3] text-[#000807] px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-[#ECA400] animate-[progress_2s_linear_infinite]"></div>
                                    {skill.icon}
                                    <p className="mt-2">{skill.name}</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                                        <div className="bg-[#ECA400] h-2.5 rounded-full" style={{ width: `${skill.progress}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="w-3/4 md:w-1/2">
                        {/*<h3 className="text-[#ECA400] text-2xl font-semibold mb-4">Backend Development</h3>*/}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {backendSkills.map((skill) => (
                                <div key={skill.name} className="bg-[#FBF5F3] text-[#000807] px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-[#ECA400] animate-[progress_2s_linear_infinite]"></div>
                                    {skill.icon}
                                    <p className="mt-2">{skill.name}</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                                        <div className="bg-[#ECA400] h-2.5 rounded-full" style={{ width: `${skill.progress}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/*<div id="projects" className="p-16 w-full flex flex-col md:flex-row items-center md:items-start justify-center  md:gap-20 bg-green-400" data-aos="fade-right">*/}
                <div id="projects" className="p-12 w-full flex flex-col md:flex-row items-center md:items-start justify-center  md:gap-20 " data-aos="fade-left">
                    <div className="w-1/2 flex justify-center items-center min-h-screen">
                        <div className="flex gap-20 ">

                            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
                                <div
                                    className="relative h-56 mx-4 -mt-6 overflow-hidden bg-white text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img src="/gebaren.png" alt="Project-image" />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Gebarentaal oefenen
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                        Voor een schoolproject werkten we samen met twee docenten van het keuzevak 'Gebarentaal bij intake' aan de Hogeschool Rotterdam. Onze opdracht was het ontwikkelen van een webapplicatie waarmee studenten zelfstandig gebarentaal kunnen oefenen en hun gebaren kunnen controleren.
                                    </p>
                                </div>
                                <div className="p-6 pt-0">
                                    <Link
                                        to="/projects/Gebarentaal-leren"
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg"
                                    >
                                        Bekijk project
                                    </Link>
                                </div>
                            </div>
                            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
                                <div
                                    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img
                                        src="/laravel.png"
                                        alt="project2-image" />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        School eindopdracht
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                        Voor onze eindopdracht ontwikkelde ik als fullstack webdeveloper zelfstandig zowel de frontend als backend. De backend bevatte volledige CRUD-functionaliteit met CORS, OPTIONS en paginatie. In de frontend gebruikte ik Tailwind CSS en implementeerde ik CRUD, filteren, PATCH en POST.
                                    </p>
                                </div>
                                <div className="p-6 pt-0">
                                    <Link
                                        to="/projects/Eindopdracht-6"
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg"
                                    >
                                        Bekijk project
                                    </Link>

                                </div>
                            </div>
                            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
                                <div
                                    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 object-contain">
                                    <img
                                        src="/open-hiring.png"
                                        alt="card-image" />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Open Hiring
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                        Voor een schoolproject werkten we samen met iO Digital, namens Open Hiring. Onze opdracht was het ontwikkelen van een webapplicatie voor Open Hiring waarmee werkgevers vacatures kunnen plaatsen en werkzoekenden op een anonieme manier eenvoudig kunnen solliciteren.                              </p>
                                </div>
                                <div className="p-6 pt-0">
                                    <Link
                                        to="/projects/Open-hiring"
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg"
                                    >
                                        Bekijk project
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


    );
}

export default Home;
