import ProjectItem from "../ProjectItem/ProjectItem.component";

import { PROJECTS } from "../../constants/contants";

import "./Project.styles.scss";

const Project = () => {
  return(
    <section id="projects" className="project-container">
      <div className="container">
        <h2 className="project-heading">Projects</h2>
        <div className="project-items">
          {
            PROJECTS.map((project) => {
              return(
                <ProjectItem key={project.id} project={project} />
              )
            })
          }
        </div>
      </div>
      <div className="project-border" />
    </section>
  );
}

export default Project;