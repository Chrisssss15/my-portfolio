import React from "react";
import { Link } from "react-router";
import { FaReact, FaLaravel, FaJsSquare, FaPhp, FaGamepad } from "react-icons/fa";

function Projects() {
    const projects = [
        {
            id: "Gebarentaal-leren",
            title: "Webapplicatie – Gebarentaal leren",
            description: "Voor een schoolproject ontwikkelde ik een webapplicatie voor studenten aan de Hogeschool Rotterdam...",
            image: "/my-portfolio/gebaren.png",
            icon: <FaReact className="text-[#61DAFB] text-4xl p-2" />
        },
        {
            id: "Eindopdracht-6",
            title: "Eindopdracht 6 – Fullstack ReactJS",
            description: "Voor mijn zesde eindopdracht heb ik gewerkt aan een fullstack project met ReactJS...",
            image: "/my-portfolio/reactJS.png",
            icon: <FaReact className="text-[#61DAFB] text-4xl p-2" />
        },
        {
            id: "Open-hiring",
            title: "Webapplicatie – Open Hiring",
            description: "Voor een schoolproject ontwikkelden we een webapplicatie voor Open Hiring...",
            image: "/my-portfolio/open-hiring.png",
            icon: <FaLaravel className="text-[#FF2D20] text-4xl p-2" />
        },
        {
            id: "Eindopdracht-5",
            title: "Eindopdracht 5 – Laravel Project",
            description: "Voor mijn vijfde eindopdracht bouwde ik een Laravel-applicatie met volledige CRUD-functionaliteit en voegde ik extra features toe voor een verbeterde gebruikerservaring.",
            image: "/my-portfolio/laravel.png",
            icon: <FaLaravel className="text-[#FF2D20] text-4xl p-2" />
        },
        {
            id: "Punch-park",
            title: "Excalibur.js Project – Punch Park",
            description: "Voor mijn vierde eindopdracht ontwikkelde ik een 2D-game met Excalibur.js, gericht op gameplay-mechanics en interactie.",
            image: "/my-portfolio/punchpark.png",
            icon: <FaGamepad className="text-gray-400 text-4xl p-2" />
        },
        {
            id: "Flying-monkey-game",
            title: "Eindopdracht 4 – Flying Monkey Game",
            description: "Voor het project Punch Park Game ontwikkelden we een 2D-game in Excalibur.js, geïnspireerd op het Hefpark in Rotterdam.",
            image: "/my-portfolio/flyingmonkey.png",
            icon: <FaGamepad className="text-gray-400 text-4xl p-2" />
        },
        {
            id: "Eindopdracht-3",
            title: "Eindopdracht 3 – JavaScript Project",
            description: "In deze opdracht werkten we met JavaScript, haalden data op via een API en gebruikten LocalStorage om gegevens lokaal op te slaan.",
            image: "/my-portfolio/programmeren3.png",
            icon: <FaJsSquare className="text-[#F7DF1E] text-4xl p-2" />
        },
        {
            id: "Denise-kookt",
            title: "Denise Kookt – PHP Project",
            description: "Voor een cateringbedrijf ontwikkelden we een app waarmee klanten eenvoudig catering kunnen bestellen en workshops boeken.",
            image: "/my-portfolio/logo_dk.png",
            icon: <FaPhp className="text-[#8892BF] text-4xl p-2" />
        }

    ];

    return (
        <div className="min-h-screen bg-[#D7D7D7] py-10 px-5">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10 text-blackxf">Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-[#FBF5F3] rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center">
                            <img src={project.image} alt={project.title} className="w-full h-40 object-contain mb-4" />
                            <h2 className="text-xl font-semibold mt-4 text-center text-[#000807]">{project.title}</h2>
                            <p className="text-[#4281A4] text-center mt-2 flex-grow">{project.description}</p>

                            <div className="mt-4">{project.icon}</div>

                            <Link
                                to={`/projects/${project.id}`}
                                className="mt-5 bg-[#39A56F] text-white px-5 py-2 rounded-lg hover:text-black transition"
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