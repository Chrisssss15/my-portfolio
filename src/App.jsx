import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./assets/Components/Layout.jsx";
import Home from "./assets/pages/Home.jsx";
import Project from "./assets/pages/Project.jsx";
import Studie from "./assets/pages/Studie.jsx";
import Werk from "./assets/pages/Werk.jsx";
import Contact from "./assets/pages/Contact.jsx";


const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/projecten',
                element: <Project/>,
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
