// import React from "react";
// import { Link } from "react-router";
// import { FaReact, FaLaravel, FaJsSquare, FaPhp } from "react-icons/fa";
// // import { SiExcalibur } from "react-icons/si";
//
// function Projects() {
//     const projects = [
//         {
//             id: "Gebarentaal-leren",
//             title: "Webapplicatie – Gebarentaal leren",
//             description: "Voor een schoolproject ontwikkelde ik een webapplicatie voor studenten aan de Hogeschool Rotterdam, in opdracht van twee docenten van het keuzevak Nederlandse Gebarentaal. De app stelt studenten in staat om buiten schooltijd gebarentaal te leren en te oefenen.",
//             image: "/gebaren.png",
//             icon: <FaReact className="text-blue-500 text-4xl p-2 " />
//         },
//         {
//             id: "Eindopdracht-6",
//             title: "Eindopdracht 6 – Fullstack ReactJS Project",
//             description: "Voor mijn zesde eindopdracht heb ik gewerkt aan een fullstack project met ReactJS. Vanuit school kregen we de opdracht om zowel aan de frontend als de backend te werken.",
//             image: "/reactJS.png",
//             icon: <FaReact className="text-blue-500 text-4xl p-2" />
//         },
//         {
//             id: "Open-hiring",
//             title: "Webapplicatie – Open Hiring",
//             description: "Voor een schoolproject ontwikkelden we een webapplicatie voor Open Hiring, in opdracht van iO Digital. Dit platform functioneert als een vacatureplatform zonder sollicitatieprocedure, waardoor kandidaten zich direct kunnen aanmelden voor een baan zonder cv of sollicitatiegesprek.",
//             image: "/open-hiring.png",
//             icon: <FaLaravel className="text-red-600 text-4xl p-2 " />
//         },
//         {
//             id: "Eindopdracht-5",
//             title: "Eindopdracht 5 – Laravel Project",
//             description: "Voor mijn vijfde eindopdracht heb ik een Laravel-project ontwikkeld, waarin ik een volledige CRUD-functionaliteit heb geïmplementeerd. Dit omvatte het beheren van verschillende rollen en rechten, evenals het toevoegen van beveiligingsmaatregelen om de applicatie te beschermen.",
//             image: "/laravel.png",
//             icon: <FaLaravel className="text-red-600 text-4xl p-2 " />
//         },
//         {
//             id: "Punch-park",
//             title: "Excalibur.js Project – Punch Park",
//             description: "Voor mijn vijfde eindopdracht heb ik een Laravel-project ontwikkeld, waarin ik een volledige CRUD-functionaliteit heb geïmplementeerd. Dit omvatte het beheren van verschillende rollen en rechten, evenals het toevoegen van beveiligingsmaatregelen om de applicatie te beschermen.",
//             image: "/punchpark.png",
//             icon: <FaLaravel className="text-red-600 text-4xl p-2 " />
//         },
//         {
//             id: "Flying-monkey-game",
//             title: "Excalibur.js Project – Flying Monkey Game",
//             description: "Dummy tekst: Dit is een project waarin ik Excalibur.js heb gebruikt om een 2D-game te ontwikkelen.",
//             image: "/flyingmonkey.png",
//             // icon: <SiExcalibur className="text-purple-500 text-4xl p-2" />
//         },
//         {
//             id: "Eindopdracht-3",
//             title: "Eindopdracht 3 – JavaScript Project",
//             description: "Dummy tekst: In dit project heb ik JavaScript gebruikt om een dynamische en interactieve webapplicatie te bouwen.",
//             image: "",
//             icon: <FaJsSquare className="text-yellow-500 text-4xl p-2" />
//         },
//         {
//             id: "Denise-kookt",
//             title: "Denise Kookt – PHP Project",
//             description: "Dummy tekst: Voor dit project heb ik een webapplicatie ontwikkeld in PHP om recepten en kookinspiratie te delen.",
//             image: "",
//             icon: <FaPhp className="text-indigo-500 text-4xl p-2" />
//         }
//     ];
//
//     return (
//         <div className="min-h-screen bg-gray-100 py-10 px-5">
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-4xl font-bold text-center mb-10">Mijn Projecten</h1>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     {projects.map((project) => (
//                         <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center">
//                             <img src={project.image} alt={project.title} className="w-full h-40 object-contain mb-4" />
//                             <h2 className="text-xl font-semibold mt-4 text-center">{project.title}</h2>
//                             <p className="text-gray-600 text-center mt-2 flex-grow">{project.description}</p>
//
//                             {/* Icon Styling */}
//                             <div className="mt-4">{project.icon}</div>
//
//                             <Link
//                                 to={`/projects/${project.id}`}
//                                 className="mt-5 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
//                             >
//                                 Bekijk Project
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Projects;

import React from "react";
import { Link } from "react-router";
import { FaReact, FaLaravel, FaJsSquare, FaPhp } from "react-icons/fa";

function Projects() {
    const projects = [
        {
            id: "Gebarentaal-leren",
            title: "Webapplicatie – Gebarentaal leren",
            description: "Voor een schoolproject ontwikkelde ik een webapplicatie voor studenten aan de Hogeschool Rotterdam...",
            image: "/gebaren.png",
            icon: <FaReact className="text-[#4281A4] text-4xl p-2" />
        },
        {
            id: "Eindopdracht-6",
            title: "Eindopdracht 6 – Fullstack ReactJS Project",
            description: "Voor mijn zesde eindopdracht heb ik gewerkt aan een fullstack project met ReactJS...",
            image: "/reactJS.png",
            icon: <FaReact className="text-[#4281A4] text-4xl p-2" />
        },
        {
            id: "Open-hiring",
            title: "Webapplicatie – Open Hiring",
            description: "Voor een schoolproject ontwikkelden we een webapplicatie voor Open Hiring...",
            image: "/open-hiring.png",
            icon: <FaLaravel className="text-[#ECA400] text-4xl p-2" />
        },
        {
            id: "Eindopdracht-5",
            title: "Eindopdracht 5 – Laravel Project",
            description: "Voor mijn vijfde eindopdracht heb ik een Laravel-project ontwikkeld...",
            image: "/laravel.png",
            icon: <FaLaravel className="text-[#ECA400] text-4xl p-2" />
        },
        {
            id: "Punch-park",
            title: "Excalibur.js Project – Punch Park",
            description: "Voor mijn vijfde eindopdracht heb ik een Laravel-project ontwikkeld...",
            image: "/punchpark.png",
            icon: <FaLaravel className="text-[#ECA400] text-4xl p-2" />
        },
        {
            id: "Flying-monkey-game",
            title: "Excalibur.js Project – Flying Monkey Game",
            description: "Dummy tekst: Dit is een project waarin ik Excalibur.js heb gebruikt om een 2D-game te ontwikkelen.",
            image: "/flyingmonkey.png",
        },
        {
            id: "Eindopdracht-3",
            title: "Eindopdracht 3 – JavaScript Project",
            description: "Dummy tekst: In dit project heb ik JavaScript gebruikt om een dynamische en interactieve webapplicatie te bouwen.",
            image: "",
            icon: <FaJsSquare className="text-[#ECA400] text-4xl p-2" />
        },
        {
            id: "Denise-kookt",
            title: "Denise Kookt – PHP Project",
            description: "Dummy tekst: Voor dit project heb ik een webapplicatie ontwikkeld in PHP om recepten en kookinspiratie te delen.",
            image: "",
            icon: <FaPhp className="text-[#62A87C] text-4xl p-2" />
        }
    ];

    return (
        <div className="min-h-screen bg-[#D7D7D7] py-10 px-5">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10 text-[#FBF5F3]">Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-[#FBF5F3] rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center">
                            <img src={project.image} alt={project.title} className="w-full h-40 object-contain mb-4" />
                            <h2 className="text-xl font-semibold mt-4 text-center text-[#000807]">{project.title}</h2>
                            <p className="text-[#4281A4] text-center mt-2 flex-grow">{project.description}</p>

                            <div className="mt-4">{project.icon}</div>

                            <Link
                                to={`/projects/${project.id}`}
                                className="mt-5 bg-[#ECA400] text-white px-5 py-2 rounded-lg hover:bg-[#4281A4] transition"
                            >
                                Bekijk Project
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;