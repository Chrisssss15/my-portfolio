// import { useState } from 'react';
// import { NavLink, Outlet } from 'react-router';
//
// function Layout() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//
//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };
//
//     const navLinkClass = ({ isActive }) =>
//         `transition hover:text-[#39A56F] ${
//             isActive ? 'text-[#39A56F] underline underline-offset-4' : 'text-[#000000]'
//         }`;
//
//     return (
//         <div className=" text-[#FBF5F3] min-h-screen flex flex-col w-full">
//             <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#FBF5F3] text-[#000807]">
//                 <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
//                     <NavLink to="/" className="text-3xl font-black flex items-center gap-2">
//                         <span className="text-[#39A56F]">
//                             {/*<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em"*/}
//                             {/*     height="1em" viewBox="0 0 24 24">*/}
//                             {/*    /!* Icon *!/*/}
//                             {/*</svg>*/}
//                         </span>
//                         <span className="text-[#39A56F]">Chris Tang</span>
//                     </NavLink>
//
//                     <button className="lg:hidden text-3xl" onClick={toggleMobileMenu}>
//                         {isMobileMenuOpen ? 'X' : '☰'}
//                     </button>
//
//                     <nav className="hidden lg:block">
//                         <ul className="flex gap-6">
//                             <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
//                             <li><NavLink to="/projects" className={navLinkClass}>Projecten</NavLink></li>
//                             <li><NavLink to="/studie" className={navLinkClass}>Studie</NavLink></li>
//                             <li><NavLink to="/werk" className={navLinkClass}>Werkervaring</NavLink></li>
//                             <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>
//
//             {/* Mobile menu */}
//             <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
//                 <ul className="flex flex-col items-center gap-6 py-4">
//                     <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
//                     <li><NavLink to="/projects" className={navLinkClass}>Projecten</NavLink></li>
//                     <li><NavLink to="/studie" className={navLinkClass}>Studie</NavLink></li>
//                     <li><NavLink to="/werk" className={navLinkClass}>Werkervaring</NavLink></li>
//                     <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
//                 </ul>
//             </nav>
//
//             <main className="flex-grow">
//                 <div className="max-w-7xl mx-auto px-6 pt-24"> {/* <-- hier */}
//                     <Outlet/>
//                 </div>
//             </main>
//
//
//             <footer className=" w-full bg-white rounded-lg shadow-sm dark:bg-gray-900">
//                 <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
//                     {/*<div className="sm:flex sm:items-center sm:justify-between">*/}
//                     {/*</div>*/}
//                     {/*<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>*/}
//                     <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
//                         © 2025 Chris Tang. Alle rechten voorbehouden.</span>
//                 </div>
//             </footer>
//
//
//         </div>
//     );
// }
//
// export default Layout;
//

import { useState } from 'react';
import { NavLink, Outlet } from 'react-router';

function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinkClass = ({ isActive }) =>
        `transition hover:text-[#39A56F] ${
            isActive ? 'text-[#39A56F] underline underline-offset-4' : 'text-[#000000]'
        }`;

    return (
        <div className="min-h-screen flex flex-col bg-gray-300 text-[#000807]">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 bg-[#FBF5F3] shadow-md">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center py-4">
                    <NavLink to="/" onClick={closeMobileMenu} className="text-3xl font-black flex items-center gap-2">
                        <span className="text-[#39A56F]">Chris Tang</span>
                    </NavLink>

                    {/* Hamburger */}
                    <button className="lg:hidden text-3xl focus:outline-none" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>

                    {/* Desktop nav */}
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

                {/* Mobile nav */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden bg-[#FBF5F3] border-t border-gray-200">
                        <ul className="flex flex-col items-center gap-4 py-4">
                            <li><NavLink to="/" className={navLinkClass} onClick={closeMobileMenu}>Home</NavLink></li>
                            <li><NavLink to="/projects" className={navLinkClass} onClick={closeMobileMenu}>Projecten</NavLink></li>
                            <li><NavLink to="/studie" className={navLinkClass} onClick={closeMobileMenu}>Studie</NavLink></li>
                            <li><NavLink to="/werk" className={navLinkClass} onClick={closeMobileMenu}>Werkervaring</NavLink></li>
                            <li><NavLink to="/contact" className={navLinkClass} onClick={closeMobileMenu}>Contact</NavLink></li>
                        </ul>
                    </nav>
                )}
            </header>

            {/* Main content */}
            <main className="flex-grow pt-[80px] lg:pt-[96px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Outlet />
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-[#FBF5F3] border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
                    © 2025 Chris Tang. Alle rechten voorbehouden.
                </div>
            </footer>
        </div>
    );
}

export default Layout;
