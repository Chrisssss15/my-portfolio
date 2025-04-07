// Layout.jsx
// import { Link, Outlet } from 'react-router';
//
// function Layout() {
//     return (
//         <div className="bg-[#000807] text-[#FBF5F3] min-h-screen flex flex-col w-full">
//             <header className="shadow-md bg-[#FBF5F3] text-[#000807]">
//                 <div className="container mx-auto flex justify-between items-center py-4 px-6">
//                     <a className="text-3xl font-black flex items-center gap-2" href="/">
//                         <span className="text-[#ECA400]">
//                             <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24">
//                                 {/*<path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z"/>*/}
//                             </svg>
//                         </span>
//                         <span>Portfolio</span>
//                     </a>
//                     <nav>
//                         <ul className="flex gap-6">
//                             <li><a className="text-[#000000] hover:text-[#ECA400] transition" href="/projects">Projecten</a></li>
//                             <li><a className="text-[#000000] hover:text-[#ECA400] transition" href="/studie">Studie</a></li>
//                             <li><a className="text-[#000000] hover:text-[#ECA400] transition" href="/werk">Werkervaring</a></li>
//                             <li><a className="text-[#000000] hover:text-[#ECA400] transition" href="/contact">Contact</a></li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>
//             <main className="flex-grow">
//                 <Outlet />
//             </main>
//         </div>
//     );
// }
//
// export default Layout;

            {/*<main className="flex-grow">*/}
            {/*    <Outlet />*/}
            {/*</main>*/}

import { useState } from 'react';
import { NavLink, Outlet } from 'react-router';

function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinkClass = ({ isActive }) =>
        `transition hover:text-[#ECA400] ${
            isActive ? 'text-[#ECA400] underline underline-offset-4' : 'text-[#000000]'
        }`;

    return (
        <div className=" text-[#FBF5F3] min-h-screen flex flex-col w-full">
            <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#FBF5F3] text-[#000807]">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
                    <NavLink to="/" className="text-3xl font-black flex items-center gap-2">
                        <span className="text-[#ECA400]">
                            {/*<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em"*/}
                            {/*     height="1em" viewBox="0 0 24 24">*/}
                            {/*    /!* Icon *!/*/}
                            {/*</svg>*/}
                        </span>
                        {/*<span className="text-[#ECA400]">Chris Tang</span>*/}
                    </NavLink>

                    <button className="lg:hidden text-3xl" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? 'X' : '☰'}
                    </button>

                    <nav className="hidden lg:block">
                        <ul className="flex gap-6">
                            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                            <li><NavLink to="/projects" className={navLinkClass}>Projecten</NavLink></li>
                            <li><NavLink to="/studie" className={navLinkClass}>Studie</NavLink></li>
                            <li><NavLink to="/werk" className={navLinkClass}>Werkervaring</NavLink></li>
                            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Mobile menu */}
            <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
                <ul className="flex flex-col items-center gap-6 py-4">
                    <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                    <li><NavLink to="/projects" className={navLinkClass}>Projecten</NavLink></li>
                    <li><NavLink to="/studie" className={navLinkClass}>Studie</NavLink></li>
                    <li><NavLink to="/werk" className={navLinkClass}>Werkervaring</NavLink></li>
                    <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
                </ul>
            </nav>

            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-6 pt-24"> {/* <-- hier */}
                    <Outlet/>
                </div>
            </main>


            <footer className=" w-full bg-white rounded-lg shadow-sm dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    {/*<div className="sm:flex sm:items-center sm:justify-between">*/}
                    {/*</div>*/}
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2025 Chris Tang. Alle rechten voorbehouden.</span>
                </div>
            </footer>


        </div>
    );
}

export default Layout;

