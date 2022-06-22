import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectItem ({ image, name, skills, id }) {
    const navigate = useNavigate ();
    return (
        <div className="projectitem" onClick={() => {
            navigate("/project/" + id);
        }}>
            <div style={{backgroundImage: `url(${image})` }} className="bgImage" />
            <h3>{name}</h3>
            <p>{skills}</p>
        </div>
    );
}