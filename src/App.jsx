import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./assets/Components/Layout.jsx";
import Home from "./assets/pages/Home.jsx";
import Studie from "./assets/pages/Studie.jsx";
import Werk from "./assets/pages/Werk.jsx";
import Contact from "./assets/pages/Contact.jsx";
import ProjectDetail from "./assets/pages/ProjectDetail.jsx";
import Projects from "./assets/pages/Project.jsx";

// Router aanmaken
const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/projects',
                element: <Projects/>,
            },
            {
                path: '/projects/:projectId',
                element: <ProjectDetail />, // ✅ Dynamische route voor projectdetails
            },
            {
                path: '/studie',
                element: <Studie/>,
            },
            {
                path: '/werk',
                element: <Werk/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
        ]
    }
]);

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
