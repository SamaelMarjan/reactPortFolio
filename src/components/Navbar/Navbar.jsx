import React from "react";
import { Link } from "react-router-dom";

import {GoMarkGithub} from "react-icons/go";
import {BsLinkedin} from "react-icons/bs";

import "./navbar.css";

export default function Navbar () {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="logo">
                    <Link to="/">
                        <h2>Samael Marjan</h2>
                    </Link>
                </div>
                <div className="links">
                    <Link to="/" > Home </Link>
                    <Link to="/projects" > Projects </Link>
                    <Link to="/experiences" > Experiences </Link>
                </div>
                <div className="socialicons">
                    <GoMarkGithub />
                    <BsLinkedin />
                </div>
            </div>
        </div>
    );
}