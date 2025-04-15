// import React from "react";
//
// const Studie = () => {
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-[#D7D7D7] p-6">
//             <div className="max-w-3xl w-full bg-[#FBF5F3] text-[#000807] p-10 shadow-2xl rounded-lg relative">
//                 <div className="absolute top-0 left-1/3 w-1 bg-black h-full"></div>
//
//                 {[
//                     {
//                         periode: "september 2023 - heden",
//                         school: "Hogeschool Rotterdam",
//                         details: [
//                             "Creative Media Game Technology",
//                             "Hogeschool Rotterdam, Wijnhaven",
//                             "Diploma behaald: Nee"
//                         ]
//                     },
//                     {
//                         periode: "september 2020 - augustus 2023",
//                         school: "mboRijnland",
//                         details: [
//                             "Mbo Software developer, niveau 4",
//                             "mboRijnland Betaplein, Leiden",
//                             "Diploma behaald: Ja"
//                         ]
//                     },
//                     {
//                         periode: "september 2016 - juli 2020",
//                         school: "Montaigne Lyceum (middelbare school)",
//                         details: [
//                             "Vmbo-economie theoretische leerweg",
//                             "Montaigne Lyceum, Den Haag",
//                             "Diploma behaald: Ja"
//                         ]
//                     }
//                 ].map((studie, index) => (
//                     <div className="relative flex mb-10" key={index}>
//                         <div className="w-1/3 text-right pr-6">
//                             <h3 className="text-sm md:text-lg font-semibold">{studie.periode}</h3>
//                         </div>
//                         <div className="relative w-8 flex justify-center">
//                             <div className="absolute top-2 w-4 h-4 bg-[#39A56F] border-4 border-[#FBF5F3] rounded-full shadow-md"></div>
//                         </div>
//                         <div className="w-3/4 pl-6">
//                             <p className="text-md md:text-lg font-semibold">{studie.school}</p>
//                             <ul className="text-sm text-gray-700 list-disc list-inside mt-1 leading-relaxed">
//                                 {studie.details.map((item, i) => (
//                                     <li key={i}>{item}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Studie;


import React from "react";

const Studie = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#D7D7D7] p-4 sm:p-6">
            <div className="max-w-3xl w-full bg-[#FBF5F3] text-[#000807] p-6 sm:p-10 shadow-2xl rounded-lg relative">
                {/* Verticale lijn alleen op desktop */}
                <div className="hidden md:block absolute top-0 left-[35.5%] w-1 bg-black h-full"></div>

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
                    <div className="relative flex flex-col md:flex-row mb-10" key={index}>
                        {/* Periode */}
                        <div className="md:w-1/3 text-left md:text-right pr-0 md:pr-6 mb-2 md:mb-0">
                            <h3 className="text-sm md:text-lg font-semibold">{studie.periode}</h3>
                        </div>

                        {/* Tijdlijn bolletje */}
                        <div className="relative w-8 flex justify-center mx-auto md:mx-0">
                            <div className="absolute top-2 md:top-3 w-4 h-4 bg-[#39A56F] border-4 border-[#FBF5F3] rounded-full shadow-md hidden md:block"></div>
                        </div>

                        {/* Inhoud */}
                        <div className="md:w-2/3 w-full pl-0 md:pl-6">
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
