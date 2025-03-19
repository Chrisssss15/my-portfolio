import {Link, Outlet} from 'react-router';

// function Werk() {
//     return (
//         <div>
//             <header>
//             </header>
//             <main>
//                 <h1>Werk</h1>
//             </main>
//         </div>
//     );
// }
//
// export default Werk;
import React from "react";

const Werk = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-green-200 p-6">
            <div className="max-w-2xl w-full bg-white p-10 shadow-lg relative">
                <div className="absolute top-0 left-1/3 w-1 bg-gray-300 h-full"></div>

                {/* Zesde werkervaring */}
                <div className="relative flex mb-8">
                    <div className="w-1/3 text-right pr-6">
                        <h3 className="text-lg font-semibold">september 2024 - heden</h3>
                    </div>
                    <div className="relative w-8 flex justify-center">
                        <div className="absolute top-3 w-4 h-4 bg-red-400 border-4 border-white rounded-full shadow-md"></div>
                    </div>
                    <div className="w-2/3 pl-6">
                        <p className="text-lg font-semibold">Peercoach</p>
                        <ul className="text-gray-600 list-none mt-1">
                            <li>Hogeschool Rotterdam - Parttime</li>
                            <li>Rotterdam, Zuid-Holland</li>
                        </ul>
                    </div>
                </div>

                {/* Vijfde werkervaring */}
                <div className="relative flex mb-8">
                    <div className="w-1/3 text-right pr-6">
                        <h3 className="text-lg font-semibold">juni 2023 - heden</h3>
                    </div>
                    <div className="relative w-8 flex justify-center">
                        <div className="absolute top-3 w-4 h-4 bg-red-400 border-4 border-white rounded-full shadow-md"></div>
                    </div>
                    <div className="w-2/3 pl-6">
                        <p className="text-lg font-semibold">Bediening</p>
                        <ul className="text-gray-600 list-none mt-1">
                            <li>Japans restaurant SET - Parttime</li>
                            <li>Den Haag, Zuid-Holland</li>
                        </ul>
                    </div>
                </div>

                {/* Vierde werkervaring */}
                <div className="relative flex mb-8">
                    <div className="w-1/3 text-right pr-6">
                        <h3 className="text-lg font-semibold">februari 2023 - juni 2023</h3>
                    </div>
                    <div className="relative w-8 flex justify-center">
                        <div className="absolute top-3 w-4 h-4 bg-red-400 border-4 border-white rounded-full shadow-md"></div>
                    </div>
                    <div className="w-2/3 pl-6">
                        <p className="text-lg font-semibold">Web Developer</p>
                        <ul className="text-gray-600 list-none mt-1">
                            <li>Woonmode - Stage</li>
                            <li>Rijswijk, Zuid-Holland</li>
                            <li>Vaardigheden: Wordpress, Communicatie, Photoshop, Databases, Zelfstandigheid, Front-end ontwikkeling, Angular</li>
                        </ul>
                    </div>
                </div>

                {/* Derde werkervaring */}
                <div className="relative flex mb-8">
                    <div className="w-1/3 text-right pr-6">
                        <h3 className="text-lg font-semibold">september 2021 - februari 2020</h3>
                    </div>
                    <div className="relative w-8 flex justify-center">
                        <div className="absolute top-3 w-4 h-4 bg-red-400 border-4 border-white rounded-full shadow-md"></div>
                    </div>
                    <div className="w-2/3 pl-6">
                        <p className="text-lg font-semibold">Software Developer</p>
                        <ul className="text-gray-600 list-none mt-1">
                            <li>Woonmode - Stage</li>
                            <li>Rijswijk, Zuid-Holland</li>
                            <li>Vaardigheden: Wordpress, Communicatie, Photoshop, Databases, Zelfstandigheid</li>
                        </ul>
                    </div>
                </div>

                {/* Tweede werkervaring */}
                <div className="relative flex mb-8">
                    <div className="w-1/3 text-right pr-6">
                        <h3 className="text-lg font-semibold">oktober 2019 – mei 2020</h3>
                    </div>
                    <div className="relative w-8 flex justify-center">
                        <div className="absolute top-3 w-4 h-4 bg-red-400 border-4 border-white rounded-full shadow-md"></div>
                    </div>
                    <div className="w-2/3 pl-6">
                        <p className="text-lg font-semibold">Bediening</p>
                        <ul className="text-gray-600 list-none mt-1">
                            <li>Restaurant Samen - Parttime</li>
                            <li>Den Haag, Zuid-Holland</li>
                        </ul>
                    </div>
                </div>

                {/* Eerste werkervaring */}
                <div className="relative flex mb-8">
                    <div className="w-1/3 text-right pr-6">
                        <h3 className="text-lg font-semibold">juni 2019 – juli 2019</h3>
                    </div>
                    <div className="relative w-8 flex justify-center">
                        <div className="absolute top-3 w-4 h-4 bg-red-400 border-4 border-white rounded-full shadow-md"></div>
                    </div>
                    <div className="w-2/3 pl-6">
                        <p className="text-lg font-semibold">Administratief medewerker</p>
                        <ul className="text-gray-600 list-none mt-1">
                            <li>De Chinese Brug - Stagair</li>
                            <li>Den Haag, Zuid-Holland</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Werk;
