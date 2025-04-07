// // import {Link, Outlet} from 'react-router';
// //
// // function Studie() {
// //     return (
// //         <div>
// //             <header>
// //             </header>
// //             <main>
// //                 <h1>Studie</h1>
// //             </main>
// //         </div>
// //     );
// // }
// import React from "react";
//
// const Studie = () => {
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-green-200 p-6">
//             <div className="max-w-2xl w-full bg-white p-10 shadow-lg relative">
//                 <div className="absolute top-0 left-1/3 w-1 bg-gray-300 h-full"></div>
//
//                 {/* Eerste opleiding */}
//                 <div className="relative flex mb-8">
//                     <div className="w-1/3 text-right pr-6">
//                         <h3 className="text-lg font-semibold">september 2023 - heden</h3>
//                     </div>
//                     <div className="relative w-8 flex justify-center">
//                         <div className="absolute top-3 w-4 h-4 bg-red-400 border-4 border-white rounded-full shadow-md"></div>
//                     </div>
//                     <div className="w-2/3 pl-6">
//                         <p className="text-lg font-semibold">Hogeschool Rotterdam</p>
//                         <ul className="text-gray-600 list-none mt-1">
//                             <li className="before:content-['-'] before:mr-2">Creative Media Game Technology</li>
//                             <li className="before:content-['-'] before:mr-2">Hogeschool Rotterdam, Wijnhaven</li>
//                             <li className="before:content-['-'] before:mr-2">Diploma behaald: nee</li>
//                         </ul>
//                     </div>
//                 </div>
//
//                 {/* Tweede opleiding */}
//                 <div className="relative flex mb-8">
//                     <div className="w-1/3 text-right pr-6">
//                         <h3 className="text-lg font-semibold">september 2020 - augustus 2023</h3>
//                     </div>
//                     <div className="relative w-8 flex justify-center">
//                         <div className="absolute top-3 w-4 h-4 bg-red-400 border-4 border-white rounded-full shadow-md"></div>
//                     </div>
//                     <div className="w-2/3 pl-6">
//                         <p className="text-lg font-semibold">mboRijnland</p>
//                         <ul className="text-gray-600 list-none mt-1">
//                             <li className="before:content-['-'] before:mr-2">Mbo Software developer, niveau 4</li>
//                             <li className="before:content-['-'] before:mr-2">mboRijnland Betaplein, Leiden</li>
//                             <li className="before:content-['-'] before:mr-2">Diploma behaald: Ja</li>
//                         </ul>
//                     </div>
//                 </div>
//
//                 {/* Derde opleiding */}
//                 <div className="relative flex mb-8">
//                     <div className="w-1/3 text-right pr-6">
//                         <h3 className="text-lg font-semibold">september 2016 - juli 2020</h3>
//                     </div>
//                     <div className="relative w-8 flex justify-center">
//                         <div className="absolute top-3 w-4 h-4 bg-red-400 border-4 border-white rounded-full shadow-md"></div>
//                     </div>
//                     <div className="w-2/3 pl-6">
//                         <p className="text-lg font-semibold">Montaigne Lyceum (middelbare school)</p>
//                         <ul className="text-gray-600 list-none mt-1">
//                             <li className="before:content-['-'] before:mr-2">Vmbo-economie theoretische leerweg</li>
//                             <li className="before:content-['-'] before:mr-2">Montaigne Lyceum, Den Haag</li>
//                             <li className="before:content-['-'] before:mr-2">Diploma behaald: Ja</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Studie;
//
// // export default Studie;

import React from "react";

const Studie = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#D7D7D7] p-6">
            <div className="max-w-3xl w-full bg-[#FBF5F3] text-[#000807] p-10 shadow-2xl rounded-lg relative">
                <div className="absolute top-0 left-1/3 w-1 bg-[#000807] h-full"></div>

                {[
                    {
                        periode: "september 2023 - heden",
                        school: "Hogeschool Rotterdam",
                        details: [
                            "Creative Media Game Technology",
                            "Hogeschool Rotterdam, Wijnhaven",
                            "Diploma behaald: Nee"
                        ]
                    },
                    {
                        periode: "september 2020 - augustus 2023",
                        school: "mboRijnland",
                        details: [
                            "Mbo Software developer, niveau 4",
                            "mboRijnland Betaplein, Leiden",
                            "Diploma behaald: Ja"
                        ]
                    },
                    {
                        periode: "september 2016 - juli 2020",
                        school: "Montaigne Lyceum (middelbare school)",
                        details: [
                            "Vmbo-economie theoretische leerweg",
                            "Montaigne Lyceum, Den Haag",
                            "Diploma behaald: Ja"
                        ]
                    }
                ].map((studie, index) => (
                    <div className="relative flex mb-10" key={index}>
                        <div className="w-1/3 text-right pr-6">
                            <h3 className="text-sm md:text-lg font-semibold">{studie.periode}</h3>
                        </div>
                        <div className="relative w-8 flex justify-center">
                            <div className="absolute top-2 w-4 h-4 bg-[#ECA400] border-4 border-[#FBF5F3] rounded-full shadow-md"></div>
                        </div>
                        <div className="w-3/4 pl-6">
                            <p className="text-md md:text-lg font-semibold">{studie.school}</p>
                            <ul className="text-sm text-gray-700 list-disc list-inside mt-1 leading-relaxed">
                                {studie.details.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Studie;
