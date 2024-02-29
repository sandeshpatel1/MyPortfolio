import React , { useEffect } from 'react';
import '../Components/Project.css';
import projectimg1 from '../Assets/ProjectImage1.png';
import projectimg2 from '../Assets/ProjectImage2.png';
import projectimg3 from '../Assets/ProjectImage3.png';
import projectimg5 from '../Assets/ProjectImage5.png';
import projectimg from '../Assets/ProjectImage.png';
import projectimg7 from '../Assets/ProjectImage7.png';
import { FaGithub  , FaLink} from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'INoteBook',
    description: 'Inotebook is an CRUD appliction in which you can save your important Notes on Cloud.',
    stack: ['React', 'JavaScript', 'Node.js'],
    image: projectimg1,
    githubUrl: 'https://github.com/sandeshpatel1/INotes',
    
  },
  {
    id: 2,
    title: 'News App',
    description: 'A News App build that fetches news from an API. You can filter new according to category.',
    stack: ['React', 'JavaScript'],
    image: projectimg2,
    githubUrl: 'https://github.com/sandeshpatel1/NewsAPP',
    
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A Weather predictor app made using Javascript with fetches real-time weather report from API.',
    stack: ['JavaScript'],
    image: projectimg3,
    githubUrl: 'https://github.com/sandeshpatel1/WeatherApp',

  },
  {
    id: 4,
    title: 'Tesla Clone Website',
    description: 'Create Replica of the Real Tesla Website and made it responsive for all devices including Tablets & mobile.',
    stack: ['JavaScript','React'],
    image: projectimg,
    githubUrl: 'https://github.com/sandeshpatel1/Tesla-Clone-Website',
    
  },
  {
    id: 5,
    title: 'Clothing Website',
    description: 'Made an Aesthetic FrontEnd of Clothing Website and with pixel perfect styling.',
    stack: ['HTML/CSS', 'JavaScript'],
    image: projectimg5,
    githubUrl: 'https://github.com/sandeshpatel1/ClothingEcommerceWebsite',
    liveDemoUrl: '',
  },
  {
    id: 6,
    title: 'FinEdge Payment Website',
    description: 'Made a dummy website for a payment platform',
    stack: ['HTML/CSS', 'JavaScript','React'],
    image: projectimg7,
    githubUrl: 'https://github.com/sandeshpatel1/FinEdgeWebsite',
    liveDemoUrl: 'https://finedge-payment.netlify.app/',
  },
];

const Project = () => {

  useEffect(() => {
    const projectSection = document.querySelector('.project-section');
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffsetTop = projectSection.offsetTop;
      const windowHeight = window.innerHeight;
  
      if (scrollPosition > sectionOffsetTop - windowHeight + 200) {
        projectSection.classList.add('animate');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeFilter, setActiveFilter] = React.useState('All');
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.stack.includes(filter)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="project-section" id='projects'>
      <h2 className="section-title">My Projects</h2>
      <div className="filter-container">
        <div
          className={`filter-box ${activeFilter === 'All' ? 'active' : ''}`}
          onClick={() => handleFilterClick('All')}
        >
          All
        </div>
        <div
          className={`filter-box ${
            activeFilter === 'React' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('React')}
        >
          React
        </div>
        <div
          className={`filter-box ${
            activeFilter === 'JavaScript' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('JavaScript')}
        >
          JavaScript
        </div>
        <div
          className={`filter-box ${
            activeFilter === 'Node.js' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('Node.js')}
        >
          Node.js
        </div>
        <div
          className={`filter-box ${
            activeFilter === 'HTML/CSS' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('HTML/CSS')}
        >
          HTML | CSS
        </div>
      </div>
      <div className="project-container">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              className="project-image"
              src={project.image}
              alt={project.title}
            />
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {/* <div className="project-stack">
                {project.stack.map((stack) => (
                  <span className="stack-item" key={stack}>
                    {stack }
                  </span>
                ))} 
              </div> */}
             <div className="project-buttons">
  {project.deployed ? (
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-button">
      View Project <span><FaGithub/></span>
    </a>
  ) : (
    <>
      {project.liveDemoUrl && (
        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="project-button">
          Deloyed <span><FaLink /></span>
        </a>
      )}
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-button">
        View Project<span><FaGithub /></span>
      </a>
    </>
  )}
</div>
   </div>
     </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
