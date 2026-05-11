import React from 'react';
import Typewriter from 'typewriter-effect';
import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-main">
        <div className="home-image-wrap">
          <img
            src="https://res.cloudinary.com/dk6x9gpyl/image/upload/v1760851215/1758778319750_gozytr.jpg"
            alt="Malla Venkatesh"
            className="home-image"
          />
        </div>

        <div className="home-content">
          <h1 className="home-title">Malla Venkatesh</h1>
          <p className="home-subtitle">Welcome to my portfolio</p>

          <div className="home-roles">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Philosopher",
                  "Curious and Quick Learner",
                  "Ethical Web Developer"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 40
              }}
            />
          </div>
        </div>
      </div>

      <div className="home-actions">
        <a 
          href="https://www.linkedin.com/in/venkatesh-malla" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-outline-danger me-3"
        >
          Connect on LinkedIn
        </a>
        <a 
          href="/resume.pdf" 
          download 
          className="btn btn-outline-light"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
