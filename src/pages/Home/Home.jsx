import React from "react";

import './home.css';
import {GoMarkGithub} from 'react-icons/go';
import {AiOutlineMail} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';

export default function Home () {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, My Name is Samael Marjan</h2>
                <div className="prompt">
                    <p>A developer with a passion for learning and creating.</p>
                    <GoMarkGithub />
                    <AiOutlineMail />
                    <BsLinkedin />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
                            Ionic, BootStrap, MetarialUI, Yarn, TaileindCSS, StyledComponents
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer, MySQL,
                            MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>
                            JavaScript, Java, Python, C#, C, C++, TypeScript, Go
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}