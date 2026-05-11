import { LuGithub } from "react-icons/lu";
import './index.css';

const ProjectCard = ({ projectDetails }) => {
  const {
    title,
    name,
    category,
    liveUrl,
    live_url,
    liveDemoUrl,
    description,
    technologiesUsed,
    technologies_used,
    technologies,
    githubRepo,
    github_repo,
    githubUrl,
    thumbnail,
    image,
    imageUrl,
    image_url
  } = projectDetails;
  const projectTitle = title || name || 'Untitled Project';
  const projectLiveUrl = liveUrl || live_url || liveDemoUrl;
  const projectGithubUrl = githubRepo || github_repo || githubUrl;
  const projectThumbnail = thumbnail || image || imageUrl || image_url;
  const projectTechnologies = technologiesUsed || technologies_used || technologies;
  const technologiesText = Array.isArray(projectTechnologies) ? projectTechnologies.join(', ') : projectTechnologies;

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card bg-dark text-light shadow-lg h-100 project-card"> 
        <img 
          src={projectThumbnail} 
          alt={projectTitle}
          className="card-img-top img-fluid project-thumbnail"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-danger">{projectTitle}</h5>
          <p className="card-text"><strong>Category:</strong> {category}</p>
          <p className="card-text">{description}</p>
          <p className="card-text"><strong>Technologies:</strong> {technologiesText || 'Not specified'}</p>
          <div className="mt-auto">
            <a 
              href={projectLiveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-danger w-100"
            >
              View Live Demo
            </a>
            <a 
              href={projectGithubUrl} 
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
