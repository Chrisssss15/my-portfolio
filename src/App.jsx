import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./assets/Components/Layout.jsx";
import Home from "./assets/pages/Home.jsx";
import Studie from "./assets/pages/Studie.jsx";
import Werk from "./assets/pages/Werk.jsx";
import AboutMe from "./assets/pages/AboutMe.jsx";
import ProjectDetail from "./assets/pages/ProjectDetail.jsx";
import Projects from "./assets/pages/Project.jsx";

// Router aanmaken
const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/projects',
                    element: <Projects />,
                },
                {
                    path: '/projects/:projectId',
                    element: <ProjectDetail />,
                },
                {
                    path: '/studie',
                    element: <Studie />,
                },
                {
                    path: '/werk',
                    element: <Werk />,
                },
                {
                    path: '/aboutMe',
                    element: <AboutMe />,
                },
            ],
        },
    ],
    {
        basename: "/my-portfolio", // 👈 Dit is nu correct
    }
);


function App() {

    return (
        <div>
            <div>
                <RouterProvider router={router}/>
            </div>
        </div>

    );
}

export default App
