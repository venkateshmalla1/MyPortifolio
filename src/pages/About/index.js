import './index.css';

const mySkills = {
  technical_stack: {
    frontend: [
      {
        name: "HTML5 & CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        description: "Building semantic, accessible structures and responsive layouts using Flexbox, Grid, and modern CSS variables."
      },
      {
        name: "JavaScript (ES6+)",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        description: "Implementing complex client-side logic, asynchronous API handling, and functional programming patterns."
      },
      {
        name: "React.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "Architecting modular SPAs with Hooks, Context API for global state, and optimized component lifecycles."
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        description: "Utilizing mobile-first frameworks to ensure consistent UI/UX across all device breakpoints."
      }
    ],
    backend: [
      {
        name: "Node.js & Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        description: "Developing robust RESTful APIs with middleware-driven security, JWT authentication, and high-trust data transit."
      }
    ],
    database: [
      {
        name: "SQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        description: "Designing relational schemas and optimizing complex queries to maintain high data integrity."
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        description: "Managing NoSQL document storage for flexible data modeling and high-speed retrieval in MERN applications."
      }
    ],
    CI_CD: [
      {
        name: "Deployment Stack",
        logo: "https://res.cloudinary.com/dk6x9gpyl/image/upload/v1778540523/deployment_aozkaa.png",
        description: "Automating workflows using GitHub for version control, Railway for backend scaling, and Vercel for frontend delivery."
      }
    ],
    programming: [
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "Leveraged for algorithmic problem solving and backend scripting to complement full-stack logic."
      }
    ]
  }
};

const About = () => {
  return (
    <div className="container about-section">
      <h2 className="section-title">About Me</h2>
      <p>
        I'm a passionate developer, philosopher and curious learner. I always strive to stay updated 
        with the latest technologies and best practices in the industry...
      </p>

      <div className="skills-section">
        <h2 className="section-title">Technical Skills</h2>
        {Object.entries(mySkills.technical_stack).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="text-primary mb-4 text-capitalize">
              {category.replace('_', ' ')}
            </h3>
            <div className="row">
              {skills.map((skill, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="img-fluid mb-3" 
                        style={{ height: '50px' }} 
                      />
                      <h4 className="card-title">{skill.name}</h4>
                      <p className="card-text">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
