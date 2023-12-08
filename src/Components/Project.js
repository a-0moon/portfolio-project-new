import "./Projects.css";
import { projects } from "./Data";
import { useState } from "react";
import Items from "./Items";


const Projects = () => {
    const [projectItems, setMenuItems] = useState(projects);


    return (
        <div>
            <section id="projects" className="project section">
                <div className="container">
                    <div className="projects-title">
                        <h2>
                            <span>My</span> Projects
                        </h2>
                    </div>



                    <div className="project-container  ">
                        <div>
                            <Items projectItems={projectItems} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;