// import React from "react";
//
// const Werk = () => {
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-[#D7D7D7] p-6">
//             <div className="max-w-3xl w-full bg-[#FBF5F3] text-[#000807] p-10 shadow-2xl rounded-lg relative">
//                 <div className="absolute top-0 left-1/3 w-1 bg-black h-full"></div>
//
//                 {/* Werkervaring entries */}
//                 {[
//                     {
//                         periode: "september 2024 - heden",
//                         functie: "Peercoach",
//                         bedrijf: "Hogeschool Rotterdam - Parttime",
//                         locatie: "Rotterdam, Zuid-Holland",
//                     },
//                     {
//                         periode: "juni 2023 - heden",
//                         functie: "Bediening",
//                         bedrijf: "Japans restaurant SET - Parttime",
//                         locatie: "Den Haag, Zuid-Holland",
//                     },
//                     {
//                         periode: "februari 2023 - juni 2023",
//                         functie: "Web Developer",
//                         bedrijf: "Woonmode - Stage",
//                         locatie: "Rijswijk, Zuid-Holland",
//                         skills: "Wordpress, Communicatie, Photoshop, Databases, Zelfstandigheid, Front-end ontwikkeling, Angular"
//                     },
//                     {
//                         periode: "september 2021 - februari 2020",
//                         functie: "Software Developer",
//                         bedrijf: "Woonmode - Stage",
//                         locatie: "Rijswijk, Zuid-Holland",
//                         skills: "Wordpress, Communicatie, Photoshop, Databases, Zelfstandigheid"
//                     },
//
//                 ].map((werk, index) => (
//                     <div className="relative flex mb-10" key={index}>
//                         <div className="w-1/3 text-right pr-6">
//                             <h3 className="text-sm md:text-lg font-semibold">{werk.periode}</h3>
//                         </div>
//                         <div className="relative w-8 flex justify-center">
//                             <div className="absolute top-3 w-4 h-4 bg-[#39A56F] border-4 border-[#FBF5F3] rounded-full shadow-md"></div>
//                         </div>
//                         <div className="w-3/4 pl-6">
//                             <p className="text-md md:text-lg font-semibold">{werk.functie}</p>
//                             <ul className="text-sm text-gray-700 list-none mt-1 leading-relaxed">
//                                 <li>{werk.bedrijf}</li>
//                                 <li>{werk.locatie}</li>
//                                 {werk.skills && (
//                                     <li className="mt-1 text-xs text-gray-600">Vaardigheden: {werk.skills}</li>
//                                 )}
//                             </ul>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Werk;


import React from "react";

const Werk = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#D7D7D7] p-4 sm:p-6">
            <div className="max-w-3xl w-full bg-[#FBF5F3] text-[#000807] p-6 sm:p-10 shadow-2xl rounded-lg relative">
                <div className="hidden md:block absolute top-0 left-[35.5%] w-1 bg-black h-full"></div>

                {[
                    {
                        periode: "september 2024 - heden",
                        functie: "Peercoach",
                        bedrijf: "Hogeschool Rotterdam - Parttime",
                        locatie: "Rotterdam, Zuid-Holland",
                    },
                    {
                        periode: "juni 2023 - heden",
                        functie: "Bediening",
                        bedrijf: "Japans restaurant SET - Parttime",
                        locatie: "Den Haag, Zuid-Holland",
                    },
                    {
                        periode: "februari 2023 - juni 2023",
                        functie: "Web Developer",
                        bedrijf: "Woonmode - Stage",
                        locatie: "Rijswijk, Zuid-Holland",
                        skills: "Wordpress, Communicatie, Photoshop, Databases, Zelfstandigheid, Front-end ontwikkeling, Angular"
                    },
                    {
                        periode: "september 2021 - februari 2020",
                        functie: "Software Developer",
                        bedrijf: "Woonmode - Stage",
                        locatie: "Rijswijk, Zuid-Holland",
                        skills: "Wordpress, Communicatie, Photoshop, Databases, Zelfstandigheid"
                    },
                ].map((werk, index) => (
                    <div className="relative flex flex-col md:flex-row mb-10" key={index}>
                        <div className="md:w-1/3 text-left md:text-right pr-0 md:pr-6 mb-2 md:mb-0">
                            <h3 className="text-sm md:text-lg font-semibold">{werk.periode}</h3>
                        </div>
                        {/* Tijdlijn bolletje */}
                        <div className="relative w-8 flex justify-center mx-auto md:mx-0">
                            <div className="absolute top-2 md:top-3 w-4 h-4 bg-[#39A56F] border-4 border-[#FBF5F3] rounded-full shadow-md hidden md:block"></div>
                        </div>
                        <div className="md:w-2/3 w-full pl-0 md:pl-6">
                            <p className="text-md md:text-lg font-semibold">{werk.functie}</p>
                            <ul className="text-sm text-gray-700 list-none mt-1 leading-relaxed">
                                <li>{werk.bedrijf}</li>
                                <li>{werk.locatie}</li>
                                {werk.skills && (
                                    <li className="mt-1 text-xs text-gray-600">Vaardigheden: {werk.skills}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Werk;

