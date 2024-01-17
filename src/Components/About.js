import React, { useState } from 'react';
import '../Components/About.css';
import { useToasts } from 'react-toast-notifications'; 
import Resume from "../Assets/Resume.pdf"

const About = () => {
  const { addToast } = useToasts();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsConfirmationModalOpen(true);
    console.log('isConfirmationModalOpen:', isConfirmationModalOpen);
  };

  const handleConfirmDownload = () => {
    setIsConfirmationModalOpen(false);
    addToast('Resume downloading', { appearance: 'info', autoDismiss: true });

    // Simulate a download delay
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = Resume;
      link.download = 'Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      addToast('Resume downloaded', { appearance: 'success', autoDismiss: true });
    }, 1000); // 1-second delay
  };

  const handleCloseModal = () => {
    setIsConfirmationModalOpen(false);
    console.log('isConfirmationModalOpen:', isConfirmationModalOpen);

    addToast('Resume not downloaded', { appearance: 'warning', autoDismiss: true });
  };

  

  return (
    <section className='about' >
      <h2 className='about-header'>About Me</h2>
        <div className="about-section">
          <div className="left-column">
        <h2 className="name">I'm <span>Sandesh Patel,</span> a Web Developer</h2>
        <p className="career-highlight">
         As a Computer Science Graduate, I am passionate about exploring and learning new technologies,
        always eager to keep up with the latest advancements in the field. My primary areas of expertise lie's in React and JavaScript,
         where I have developed a strong proficiency and understanding.
        </p>
        <p className="career-highlight">
        I have discovered a deep love for learning and an insatiable curiosity about emerging technologies.
         This curiosity has driven me to continuously seek out new knowledge and enhance my skills.
          Whether it's through online courses, tutorials, or hands-on projects, I am always looking for 
          opportunities to expand my understanding and apply my knowledge in practical ways.
        </p>
        <div className='about-info'>
       <div className='about-my'>
          <span className='about-info-title'>1200+</span>
          <span className='about-info-name'>Hours of Coding </span>
        </div>
        <div className='about-my'>
          <span className='about-info-title'>500+</span>
          <span className='about-info-name'>Mini Assignments</span>
        </div>
        <div className='about-my'>
          <span className='about-info-title'>10+</span>
          <span className='about-info-name'>Completed Projects</span>
        </div>
      </div>
      </div>
      
      <div className="right-column">
        <div className="info-column">
          <div className="info-row">
            <span className="label">Name:</span>
            <span className="value">Patel Sandesh</span>
          </div>
          <div className="info-row">
            <span className="label">Email:</span>
            <span className="value">patelsandesh1@gmail.com</span>
          </div>
          <div className="info-row">
            <span className="label">Avalability: </span>
            <span className="value"> Open to Work</span>
          </div>
          <div className="info-row">
            <span className="label">Location:</span>
            <span className="value">Mumbai</span>
          </div>
          <div className="button-row">
          <button type="button" onClick={handleDownloadClick} className="download-cv-button">
              Download CV
            </button>
          </div>
        </div>
      </div>
      </div>
      {isConfirmationModalOpen && (
        <div className="confirmation-modal">
          <p>Do you want to download the Resume?</p>
          <button onClick={handleConfirmDownload}>OK</button>
          <button onClick={handleCloseModal}>Cancel</button>
        </div>
      )}
    </section>
  );
};

export default About;
