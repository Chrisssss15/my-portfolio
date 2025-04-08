import React from "react";
import { useParams, Link } from "react-router";
import { FaHands, FaBriefcase, FaGraduationCap, FaGithub, FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFigma} from "react-icons/si";


function ProjectDetail() {
    const { projectId } = useParams();

    const projects = [
        {
            id: "Gebarentaal-leren",
            title: "Gebarentaal Leren",
            description: "Een applicatie om gebarentaal te leren.",
            image: "/my-portfolio/gebaren.png",
            github: "https://github.com/Chrisssss15/TLE-2-Frontend",
            details: `Voor een schoolproject heb ik samen met mijn team een webapplicatie ontwikkeld in opdracht van twee docenten van de Hogeschool Rotterdam. De applicatie is bedoeld voor studenten die het keuzevak ‘Gebarentaal bij intake’ volgen, zodat zij zelfstandig kunnen oefenen met gebarentaal – ook buiten de lessen om.

                De applicatie richt zich op gebruiksvriendelijkheid en ondersteunt verschillende oefenvormen:
                
                - Spelling oefenen: studenten beelden letter voor letter een woord uit naast hun camerabeeld.
                - Flashcards: studenten krijgen een woord te zien en beelden het zelf uit. Daarna controleren ze zelf of het goed ging.
                - Grammatica oefenen: studenten vertalen Nederlandse zinnen naar gebarentaal en zien direct of ze het goed hebben gedaan.
                
                Extra hulpmiddelen:
                - Woordenboek: met alle gebaren uit de lessen.
                - Oefentoets: simuleert een echte intake-toets.
                - Moeilijke woorden: woorden die fout of lastig waren worden automatisch verzameld om extra te oefenen.
                
                We ontwierpen het concept in Figma met een duidelijke style guide. De applicatie is gebouwd met ReactJS en voldoet aan de WCAG A toegankelijkheidsrichtlijnen. Studenten kunnen de applicatie direct gebruiken via een gehoste server.`,
            icon: (
                <div className="mt-4 flex gap-4 items-center justify-center md:justify-start">
                    <FaReact className="text-cyan-500 text-3xl" title="ReactJS" />
                    <SiTailwindcss className="text-sky-400 text-3xl" title="Tailwind CSS" />
                    <SiFigma className="text-pink-500 text-3xl" title="Figma" />
                </div>
            ),
            slideshow: [
                "/my-portfolio/gebarentaal-site-1.png",
                "/my-portfolio/gebarentaal-site-2.png",
                "/my-portfolio/gebarentaal-site-3.png",
                "/my-portfolio/gebarentaal-site-4.png",
                "/my-portfolio/gebarentaal-site-5.png",
                "/my-portfolio/gebarentaal-site-6.png",
                "/my-portfolio/gebarentaal-site-7.png",
                "/my-portfolio/gebarentaal-site-8.png",
                "/my-portfolio/gebarentaal-site-9.png",
                "/my-portfolio/gebarentaal-site-10.png",


            ]
        },
        {
            id: "Eindopdracht-6",
            title: "Eindopdracht 6 – Fullstack ReactJS Project",
            description: "Een fullstack project met ReactJS.",
            image: "/my-portfolio/reactJS.png",
            github: {
                frontend: "https://github.com/Chrisssss15/PRG06-frontend",
                backend: "https://github.com/Chrisssss15/PRG06-backend"
            },
            details: `Voor mijn zesde eindopdracht heb ik een fullstack project gebouwd met een ReactJS frontend en een RESTful backend. De opdracht was om een volledig werkende webapplicatie te maken waarin je data kunt beheren via een API én dit kunt tonen en bewerken in de frontend.

                Frontend (React + Tailwind):
                De frontend is gemaakt als single-page applicatie met React en gestyled met Tailwind CSS. Hierin heb ik de volgende onderdelen geïmplementeerd:
                - Volledige CRUD-functionaliteit: items aanmaken, bewerken, verwijderen en bekijken
                - Elk item heeft een eigen detailpagina met een unieke URL
                - 2 filters om te zoeken en filteren binnen de collectie
                - PATCH/POST overload om direct vanuit het overzicht een waarde aan te passen (zoals een favorite- of like-knop)
                - Paginering zodat niet alle items in één keer getoond worden
                - Nette 404-afhandeling bij onbekende routes of niet-bestaande pagina’s
                
                Backend (RESTful API):
                De backend is opgebouwd als RESTful webservice. Ik heb hierbij voldaan aan alle basiseisen:
                - Correcte implementatie van collectie- en detailresources
                - CORS correct ingesteld zodat de frontend overal vandaan toegang heeft
                - Alle communicatie verloopt via JSON en ondersteunt verschillende content types
                
                Daarnaast heb ik ook een aantal extra onderdelen toegevoegd:
                - Paginering met page en limit queryparameters
                - PATCH-ondersteuning voor het gedeeltelijk aanpassen van resources
                - Een POST overload voor een custom actie buiten standaard HTTP-methodes`,
            icon: (
                <div className="mt-4 flex flex-col gap-2">
                    {/* Frontend tech */}
                    <div className="flex gap-4 items-center justify-center md:justify-start">
                        <span className="text-sm font-semibold text-gray-600 w-24">Frontend:</span>
                        <FaReact className="text-cyan-500 text-2xl" title="ReactJS" />
                        <SiTailwindcss className="text-sky-400 text-2xl" title="Tailwind CSS" />
                    </div>

                    {/* Backend tech */}
                    <div className="flex gap-4 items-center justify-center md:justify-start">
                        <span className="text-sm font-semibold text-gray-600 w-24">Backend:</span>
                        <FaNodeJs className="text-green-600 text-2xl" title="Node.js" />
                        <SiExpress className="text-gray-800 text-2xl" title="Express.js" />
                        <SiMongodb className="text-green-700 text-2xl" title="MongoDB" />
                    </div>
                </div>
            ),
            slideshow: [
                "/my-portfolio/programmeren6-site-1.png",
                "/my-portfolio/programmeren6-site-2.png",
                "/my-portfolio/programmeren6-site-3.png",
                "/my-portfolio/programmeren6-site-4.png",
                "/my-portfolio/programmeren6-site-5.png",
                "/my-portfolio/programmeren6-site-6.png",

            ]
        },
        {
            id: "Open-hiring",
            title: "Open Hiring – Webapplicatie",
            description: "Een vacatureplatform zonder sollicitatieprocedure, in opdracht van iO Digital.",
            image: "/my-portfolio/open-hiring.png",
            github: "https://github.com/Mathijs-04/TLE1-Agency",
            details: `Voor een schoolproject heb ik samen met mijn team een webapplicatie ontwikkeld in opdracht van iO Digital. Het platform is gebouwd rondom het principe van Open Hiring: werkgevers kunnen vacatures plaatsen waarop werkzoekenden zich kunnen aanmelden zonder sollicitatieprocedure, dus zonder cv of motivatiebrief.
                In dit project lag de focus op de werkgeversfunctionaliteiten. Werkgevers kunnen:
                - Een bedrijfspagina aanmaken.
                - Vacatures beheren (aanmaken, aanpassen, verwijderen).
                - Kandidaten uitnodigen per vacature.
                - De status van uitnodigingen volgen.
                
                De applicatie is gebouwd met Laravel, gehost op een webserver volgens de OTAP-richtlijnen, en voldoet aan de beveiligingsstandaarden van OWASP top 10 en de toegankelijkheidseisen van WCAG level A.
                
                🎯 Trots op: het bouwen van een toegankelijke en veilige applicatie binnen de gestelde deadline, met duidelijke taakverdeling en teamcommunicatie.`,
            icon: (
                <div className="mt-4 flex gap-6 items-center justify-center md:justify-start">
                    <FaLaravel className="text-red-600 text-3xl" title="Laravel" />
                    <SiTailwindcss className="text-sky-400 text-3xl" title="Tailwind CSS" />
                    <SiMongodb className="text-green-600 text-3xl" title="MongoDB" />
                </div>
            ),
            slideshow: [
                "/my-portfolio/open-hiring-site-1.png",
                "/my-portfolio/open-hiring-site-2.png",
                "/my-portfolio/open-hiring-site-3.png",
                "/my-portfolio/open-hiring-site-4.png",
                "/my-portfolio/open-hiring-site-5.png",
                "/my-portfolio/open-hiring-site-6.png",
            ]
        },
        {
            // id: "Open-hiring",
            title: "",
            description: "",
            image: "",
            github: "",
            details: ``,
            // icon: (
            //     <div className="mt-4 flex gap-6 items-center justify-center md:justify-start">
            //         <FaLaravel className="text-red-600 text-3xl" title="Laravel" />
            //         <SiTailwindcss className="text-sky-400 text-3xl" title="Tailwind CSS" />
            //         <SiMongodb className="text-green-600 text-3xl" title="MongoDB" />
            //     </div>
            // ),
            slideshow: [

            ]
        },


    ];

    const project = projects.find((p) => p.id === projectId);
    const [lightboxIndex, setLightboxIndex] = React.useState(null);


    if (!project) {
        return (
            <div className="text-center text-red-500 text-2xl mt-10 flex flex-col">
                Binnenkort meer info over dit project!
                <Link
                    to="/projects"
ED                    className="inline-block mt-8 bg-[#39A56F] text-white px-4 py-2 rounded-full hover:bg-[#000807] hover:text-white transition font-normal w-1/3 mx-auto"
                >
                    Terug naar projecten
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FBF5F3] to-[#E5E5E5] py-16 px-4 flex flex-col items-center">

            {/* Projectkaart */}
            <div className="relative bg-white rounded-2xl shadow-xl max-w-5xl w-full overflow-hidden p-6 md:p-10">

                {/* GitHub link rechtsboven */}
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 text-[#000807] hover:text-[#39A56F] transition flex items-center gap-2"
                    >
                        <FaGithub className="text-xl" />
                        <span className="text-sm font-medium hidden sm:inline">GitHub</span>
                    </a>
                )}

                <div className="flex flex-col md:flex-row md:items-start gap-8">

                    {/* Left: Afbeelding + iconen */}
                    <div className="w-full md:w-[250px] flex flex-col items-center md:items-start">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full max-h-[400px] object-contain rounded-xl border border-[#E5E5E5] shadow-lg"
                        />

                        {project.icon}
                    </div>

                    {/* Right: Tekst */}
                    <div className="flex-1 text-left">
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-2xl md:text-3xl font-bold text-[#000807]">
                                {project.title}
                            </h1>
                        </div>

                        <p className="text-gray-700 mt-4 whitespace-pre-line leading-relaxed">
                            {project.details}
                        </p>

                        <Link
                            to="/projects"
                            className="inline-block mt-8 bg-[#39A56F] text-white px-6 py-3 rounded-full hover:bg-[#000807] hover:text-white transition font-medium"
                        >
                            Terug naar projecten
                        </Link>
                    </div>
                </div>
            </div>

            {/* Slideshow helemaal onderaan de pagina */}
            {project.slideshow && (
                <div className="mt-16 w-full max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-[#000807] mb-6">Screenshots</h2>
                    <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
                        {project.slideshow.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`screenshot-${index}`}
                                className="w-[300px] h-auto rounded-xl shadow-md flex-shrink-0 border border-[#E5E5E5] cursor-pointer hover:scale-105 transition"
                                onClick={() => setLightboxIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setLightboxIndex(null)}
                >
                    <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={project.slideshow[lightboxIndex]}
                            alt={`screenshot-${lightboxIndex}`}
                            className="rounded-xl shadow-2xl max-w-full max-h-screen"
                        />

                        {/* Vorige knop */}
                        {lightboxIndex > 0 && (
                            <button
                                onClick={() => setLightboxIndex((prev) => prev - 1)}
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 text-2xl rounded-r hover:bg-opacity-80"
                            >
                                ‹
                            </button>
                        )}

                        {/* Volgende knop */}
                        {lightboxIndex < project.slideshow.length - 1 && (
                            <button
                                onClick={() => setLightboxIndex((prev) => prev + 1)}
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 text-2xl rounded-l hover:bg-opacity-80"
                            >
                                ›
                            </button>
                        )}
                    </div>
                </div>
            )}


        </div>
    );

}

export default ProjectDetail;
