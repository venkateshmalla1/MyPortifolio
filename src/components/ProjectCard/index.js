import { LuGithub } from "react-icons/lu";
import './index.css';

const ProjectCard = ({ projectDetails = {} }) => {
  const {
    title,
    category,
    description,
    technologiesUsed = [],
    thumbnail,
    liveLink,
    githubRepo
  } = projectDetails;

  const technologiesText = Array.isArray(technologiesUsed)
    ? technologiesUsed.join(', ')
    : technologiesUsed;

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card bg-dark text-light shadow-lg h-100 project-card"> 
        <img 
          src={thumbnail} 
          alt={title}
          className="card-img-top img-fluid project-thumbnail"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-danger">{title}</h5>
          <p className="card-text"><strong>Category:</strong> {category}</p>
          <p className="card-text">{description}</p>
          <p className="card-text"><strong>Technologies:</strong> {technologiesText}</p>
          <div className="mt-auto">
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-danger w-100"
            >
              View Live Demo
            </a>
            <a 
              href={githubRepo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-light w-100 mt-2"
            >
              <LuGithub /> View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
