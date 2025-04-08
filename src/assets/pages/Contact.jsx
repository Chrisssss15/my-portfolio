import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTrello } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

function Contact() {
    return (
        <div className="p-8 max-w-5xl text-black mx-auto text-center">
            <header>
                <h1 className="text-4xl font-bold mb-6">Over Mij</h1>
            </header>
            <main>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-xl rounded-2xl p-6"
                >
                    <p className="text-lg mb-4 text-left">
                        Mijn naam is <strong>Chris Tang</strong>, een tweedejaars student <strong>Creative Media and Game Technology</strong> aan de Hogeschool Rotterdam. Deze brede opleiding leert me alles over het ontwerpen en ontwikkelen van (web)applicaties en games. Ik verdiep me in zowel frontend- als backendtechnologieën, inclusief moderne frameworks en programmeertalen.
                    </p>

                    <p className="text-lg mb-4 text-left">
                        Tijdens mijn studie werk ik regelmatig in teamverband aan praktijkgerichte projecten – soms in opdracht van echte klanten, soms rondom maatschappelijke vraagstukken. Hierbij pas ik methodes toe zoals <strong>Scrum</strong>, werk ik met <strong>user stories</strong>, en ontwikkel ik <strong>storyboards</strong> en <strong>prototypes</strong>. Toegankelijkheid, gebruiksvriendelijkheid en beveiliging staan daarbij altijd centraal.
                    </p>

                    <p className="text-lg mb-4 text-left">
                        Ik maak veel gebruik van tools zoals <strong>Figma</strong>, <strong>GitHub</strong> en <strong>Trello</strong> om ideeën uit te werken en effectief samen te werken. Naast de technische uitvoering houd ik me ook bezig met planning, presentaties, iteraties en documentatie.
                    </p>

                    <p className="text-lg mb-4 text-left">
                        Daarnaast ben ik actief als <strong>Peercoach</strong>, waarbij ik eerstejaars studenten ondersteun. Deze rol sluit perfect aan bij mijn sociale karakter en mijn vermogen om verantwoordelijkheid te nemen.
                    </p>

                    <p className="text-lg mb-4 text-left">
                        Wat mij drijft is de combinatie van creativiteit en technologie. Ik haal veel voldoening uit het samen met anderen toewerken naar een sterk eindproduct waarin zowel innovatie als gebruiksgemak samenkomen.
                    </p>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                        <ul className="flex flex-wrap justify-center gap-3">
                            {['Samenwerkingsgericht', 'Creatief', 'Leergierig', 'Leiderschap', 'Sociaal'].map((skill, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-[#39A56F] text-white px-4 py-2 rounded-full shadow-md"
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-28 flex justify-start gap-10">
                        <a
                            href="https://github.com/jouwgebruikersnaam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#000807] text-white px-4 py-2 rounded-xl shadow-md hover:bg-[#1a1a1a] transition"
                        >
                            <FaGithub size={20} />
                            Bekijk mijn projecten op GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jouwprofiel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#4281A4] hover:underline text-lg"
                        >
                            <FaLinkedin size={24} />
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

                <div className="mt-20 text-left">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Neem contact met me op</h2>
                    <form className="flex flex-col gap-4 max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Naam"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#39A56F]"
                        />
                        <input
                            type="email"
                            placeholder="E-mailadres"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#39A56F]"
                        />
                        <textarea
                            rows="5"
                            placeholder="Je bericht..."
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#39A56F]"
                        />
                        <button
                            type="submit"
                            className="bg-[#39A56F] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#39A56F] transition"
                        >
                            Verstuur
                        </button>
                    </form>
                </div>

            </main>
        </div>
    );



}

export default Contact;
