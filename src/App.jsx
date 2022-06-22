import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Experiences from "./pages/Experiences/Experiences";
import Navbar from "./components/Navbar/Navbar";

import "./style.css";
import Footer from "./components/Footer/Footer";
import ProjectDisplay from "./pages/ProjectDisplay/ProjectDisplay";


export default function App () {
    return (
        <div className="app">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<ProjectDisplay/>}/>
                    <Route path="/experiences" element={<Experiences />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}