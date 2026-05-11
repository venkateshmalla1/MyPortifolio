import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectCardLoadingSkeleton from "../../components/ProjectsLoaddingSkeleton";
import FailureView from "../../components/FailureView";
import './index.css';

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE'
};

const getProjectsList = (data) => {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.projects)) return data.projects;
  if (Array.isArray(data?.data)) return data.data;
  return [];
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiConstants.initial);

  useEffect(() => {
    const fetchProjects = async () => {
      setApiStatus(apiConstants.loading);
      try {
        const getApiUrl = process.env.REACT_APP_BASE_API_URL;
        const response = await fetch(`${getApiUrl}/api/projects`);
        const data = await response.json();

        if (response.ok) {
          const projectsList = getProjectsList(data);
          // Add 3-second delay before showing success
          setTimeout(() => {
            setProjects(projectsList);
            setApiStatus(apiConstants.success);
          }, 3000);
        } else {
          setApiStatus(apiConstants.failure);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setApiStatus(apiConstants.failure);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container projects-container">
      <h2 className="text-center mb-4 projects-title">My Projects</h2>
      <div className="row">
        {apiStatus === apiConstants.loading && (
          <>
            {[...Array(3)].map((_, i) => (
              <ProjectCardLoadingSkeleton key={i} />
            ))}
          </>
        )}
        {apiStatus === apiConstants.success && projects.length > 0 && (
          projects.map((project) => (
            <ProjectCard key={project.id || project._id || project.title} projectDetails={project} />
          ))
        )}
        {apiStatus === apiConstants.success && projects.length === 0 && <FailureView />}
        {apiStatus === apiConstants.failure && <FailureView />}
      </div>
    </div>
  );
};

export default Projects;
