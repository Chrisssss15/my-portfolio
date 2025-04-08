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
                                <span className="text-[#39A56F]">I'M</span>
                                <br />
                                Chris Tang
                                <span className="text-[#39A56F]">.</span>
                            </h1>
                            <p className="mt-4 text-lg uppercase text-[#39A56F] overflow-hidden whitespace-nowrap border-r-2 border-[#39A56F] w-fit animate-typing animate-blink">
                                Frontend developer & Web Developer
                            </p>
                        </div>
                    </div>
                </div>

                {/* About */}
                {/*<div id="about" className=" p-16 max-auto flex justify-center bg-black" data-aos="fade-up">*/}
                <div id="about" className="p-16 flex items-center justify-center min-h-screen " data-aos="fade-up">
                    <div className="bg-[#FBF5F3] text-[#000807] p-12 rounded-xl shadow-2xl w-full max-w-4xl text-center relative z-20">
                        <div className="flex justify-center mb-4">
                            <div className="w-14 h-14 flex items-center justify-center border-2 border-[#39A56F] rounded-full">
                                <span className="text-[#39A56F] font-bold text-xl">C</span>
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
                                Momenteel ben ik op zoek naar een <strong>stage</strong> in de richting van <strong>front-end/webdevelopment</strong>. Ook <strong>UI</strong> of <strong>UX</strong> spreekt me erg aan. Ik wil mijn skills verder ontwikkelen, samenwerken met andere developers en écht impact maken.
                            </span>
                        </p>
                        <a
                            href="./Contact"
                            className="mt-6 inline-block border border-[#39A56F] text-[#000807] font-medium px-5 py-2.5 rounded-full hover:bg-[#39A56F] hover:text-white transition"
                        >
                            Meer info
                        </a>
                    </div>
                </div>



                {/* Skills */}
                {/*<div id="skills" className="  p-16 w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20 bg-blue-200" data-aos="fade-right">*/}
                <div
                    id="skills"
                    className="min-h-screen p-16 w-full flex items-center justify-center"
                    data-aos="fade-right"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20 w-full max-w-6xl">
                        {/* Frontend */}
                        <div className="mb-8 md:mb-0 w-3/4 md:w-1/2">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {frontendSkills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="bg-[#FBF5F3] text-[#000807] px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-[#39A56F] animate-[progress_2s_linear_infinite]"></div>
                                        {skill.icon}
                                        <p className="mt-2">{skill.name}</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                                            <div
                                                className="bg-[#39A56F] h-2.5 rounded-full"
                                                style={{ width: `${skill.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="w-3/4 md:w-1/2">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {backendSkills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="bg-[#FBF5F3] text-[#000807] px-6 py-4 rounded-lg shadow-lg text-lg font-semibold flex flex-col items-center transition-all transform hover:scale-105 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-[#39A56F] animate-[progress_2s_linear_infinite]"></div>
                                        {skill.icon}
                                        <p className="mt-2">{skill.name}</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                                            <div
                                                className="bg-[#39A56F] h-2.5 rounded-full"
                                                style={{ width: `${skill.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>



                {/*<div id="projects" className="p-16 w-full flex flex-col md:flex-row items-center md:items-start justify-center  md:gap-20 bg-green-400" data-aos="fade-right">*/}
                <div id="projects" className="p-12 w-full flex flex-col md:flex-row items-center md:items-start justify-center  md:gap-20 " data-aos="fade-left">
                    <div className="w-1/2 flex justify-center items-center min-h-screen">
                        <div className="flex gap-20 ">

                            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
                                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-white shadow-lg bg-clip-border rounded-xl flex items-center justify-center bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img
                                        src="/my-portfolio/gebaren.png"
                                        alt="Project-image"
                                        className="object-contain h-36 w-auto"
                                    />
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
                                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-white shadow-lg bg-clip-border rounded-xl flex items-center justify-center bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img
                                        src="/my-portfolio/laravel.png"
                                        alt="project2-image"
                                        className="object-contain h-36 w-auto"
                                    />
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
                                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-white bg-clip-border rounded-xl flex items-center justify-center bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <img
                                        src="/my-portfolio/open-hiring.png"
                                        alt="card-image"
                                        className="object-contain h-36 w-auto"
                                    />
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
