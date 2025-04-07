import React, { useState, useEffect } from "react";
import "./Cube.css";

const Cube = () => {
    const [rotation, setRotation] = useState(0);
    const [intervalTime, setIntervalTime] = useState(10000);
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prevRotation) => prevRotation - 90);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [intervalTime]);

    return (
        <div className="cube-container m-9">
            <div className="cube-wrapper">
                <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
                    <div className="face front flex flex-col items-center justify-center text-center bg-white p-5 rounded-lg shadow-lg border border-gray-500">
                        <h2 className="text-xl font-bold text-white mb-2">Gebarentaal oefenen</h2>
                        <img src="/gebaren.png" alt="Project 1" className="w-full h-auto max-h-[60%] object-contain rounded-lg mb-2" />
                        <p className="text-sm text-black">Voor een schoolproject moesten we samenwerken met een echte opdrachtgever. Onze opdrachtgevers waren twee docenten van het keuzevak
                            'Gebarentaal bij intake' aan de Hogeschool Rotterdam. De opdracht was om een webapplicatie te ontwikkelen voor hun studenten, waarmee zij buiten de lestijden zelfstandig
                            gebarentaal kunnen oefenen en kunnen controleren of ze de gebaren correct uitvoeren
                        </p>
                    </div>

                    <div className="face back flex flex-col items-center justify-center text-center bg-white p-5 rounded-lg shadow-lg border border-gray-500">
                        <h2 className="text-xl font-bold text-white mb-2">School eindopdracht</h2>
                        <img src="/laravel.png" alt="Project 2" className="w-full h-auto max-h-[60%] object-contain rounded-lg mb-2" />
                        <p className="text-sm text-black">Voor onze eindopdracht op school moesten we individueel als fullstack webdeveloper aan de slag, waarbij we zowel de frontend als de
                            backend moesten ontwikkelen. Voor de backend moesten we volledige CRUD-functionaliteit implementeren, inclusief CORS, OPTIONS en pagination. Voor de frontend moesten we
                            eveneens CRUD-functionaliteit toepassen, Tailwind CSS gebruiken, en functies zoals filter, PATCH en POST integreren.
                        </p>
                    </div>

                    <div className="face right flex flex-col items-center justify-center text-center bg-white p-5 rounded-lg shadow-lg border border-gray-500">
                        <h2 className="text-xl font-bold text-white mb-2">Open Hiring </h2>
                        <img src="/open-hiring.png" alt="Project 3" className="w-full h-auto max-h-[60%] object-contain rounded-lg mb-2" />
                        <p className="text-sm text-black">Voor een schoolproject moesten we samenwerken met een echte opdrachtgever. Onze opdrachtgever was iO Digital, die de opdracht namens
                            Open Hiring had verstrekt. iO Digital gaf ons team de taak om een webapplicatie te ontwikkelen voor Open Hiring, waarmee werkgevers vacatures kunnen plaatsen en
                            werkzoekenden op een anonieme en eenvoudige manier kunnen solliciteren.

                        </p>
                    </div>

                    <div className="face left flex flex-col items-center justify-center text-center bg-white p-5 rounded-lg shadow-lg border border-gray-500">
                        <h2 className="text-xl font-bold text-white mb-2">Open Hiring</h2>
                        <img src="/open-hiring.png" alt="Project 4" className="w-full h-auto max-h-[60%] object-contain rounded-lg mb-2" />
                        <p className="text-sm text-black">Voor een schoolproject moesten we samenwerken met een echte opdrachtgever. Onze opdrachtgever was iO Digital, die de opdracht namens
                            Open Hiring had verstrekt. iO Digital gaf ons team de taak om een webapplicatie te ontwikkelen voor Open Hiring, waarmee werkgevers vacatures kunnen plaatsen en
                            werkzoekenden op een anonieme en eenvoudige manier kunnen solliciteren.

                        </p>
                    </div>

                </div>
                <div className="rotation-controls">
                    <button onClick={() => setRotation((prev) => prev - 90)}>⟵</button>
                    <button onClick={() => setRotation((prev) => prev + 90)}>⟶</button>
                </div>
            </div>
        </div>
    );
};

export default Cube;