import LinkItem from "../LinkItem/LinkItem.component";
import "./ProjectItem.styles.scss";

const ProjectItem = ({ project }) => {
  const { title, description, techStack, projectLinks } = project;

  return(
    <div className="project-item">
      <p className="project-links">
        {
          projectLinks.map((projectLink) => {
            return(
              <LinkItem className="social-icon" key={projectLink.id} linkItem={projectLink} social={true} />
            ); 
          })
        }
      </p>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-techStack">
        {
          techStack.map((stack) => {
            return(
              <LinkItem className="stack-icon" key={stack.id} linkItem={stack} social={false} />
            )
          })
        }
      </div>
      
      
    </div>
  );
}

export default ProjectItem;