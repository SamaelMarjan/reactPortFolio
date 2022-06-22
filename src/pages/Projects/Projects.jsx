import ProjectItem from "../../components/ProjectItem/ProjectItem";
import './projects.css';

import { projectList } from "../../helper/ProjectList";

export default function Projects () {
    return (
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList">
                {projectList.map((project, idx ) => {
                    return (
                        <ProjectItem id={idx} name={project.name} image={project.image} skills={project.skills} />
                    );
                })}
            </div>
        </div>
    );
}