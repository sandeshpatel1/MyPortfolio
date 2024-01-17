// Skill.js
import React, { useEffect, useState } from 'react';
import './skill.css';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaJava, FaGithub } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { SiLeetcode } from "react-icons/si";
import { Line, Circle } from 'rc-progress';
import {ListTodo, Speech, LibraryBig, MonitorCheck, ShieldCheck} from 'lucide-react';



const Skill = () => {
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [hoveredPercent, setHoveredPercent] = useState(null);

  useEffect(() => {
    // Fetch LeetCode statistics data
    fetch('https://leetcode-stats-api.herokuapp.com/sandeshpatel')
      .then(response => response.json())
      .then(data => setLeetcodeStats(data));
  }, []);

  const handleHover = () => {
    if (leetcodeStats) {
      setHoveredPercent((leetcodeStats.totalSolved / leetcodeStats.totalQuestions) * 100);
    }
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-header">Skills & Tools</h2>
      <div className="skills-container container1">
        <div className="skills-box">
          <div className="skill-icon">
            <FaHtml5 color='orange' size={50} />
          </div>
          <h3 className="box-header">HTML</h3>
        </div>
        <div className="skills-box">
          <div className="skill-icon">
            <FaCss3Alt color='blue' size={50} />
          </div>
          <h3 className="box-header">CSS</h3>
        </div>
        <div className="skills-box">
          <div className="skill-icon">
            <FaJs color='orange' size={50} />
          </div>
          <h3 className="box-header">JavaScript</h3>
        </div>
        <div className="skills-box">
          <div className="skill-icon">
            <FaBootstrap color='blue' size={50} />
          </div>
          <h3 className="box-header">BootStrap</h3>
        </div>
        <div className="skills-box">
          <div className="skill-icon">
            <FaReact color='blue' size={50} />
          </div>
          <h3 className="box-header">React</h3>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-box">
          <div className="skill-icon">
            <FaNodeJs color='Green' size={50} />
          </div>
          <h3 className="box-header">NodeJS</h3>
        </div>
        <div className="skills-box">
          <div className="skill-icon">
            <FaNodeJs color='Red' size={50} />
          </div>
          <h3 className="box-header">ExpressJS</h3>
        </div>
        <div className="skills-box">
          <div className="skill-icon">
            <FaDatabase color='green' size={50} />
          </div>
          <h3 className="box-header">MongoDB</h3>
        </div>
        <div className="skills-box">
          <div className="skill-icon">
            <FaJava color='orange' size={50} />
          </div>
          <h3 className="box-header">Java</h3>
        </div>
        <div className="skills-box">
          <div className="skill-icon">
            <FaGithub color='gray' size={50} />
          </div>
          <h3 className="box-header">Git</h3>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="skill-container-2">
        <div className="skills-box-container">
        <div className="skills-box-soft">
              <div className="skill-icon">
              <LibraryBig className='soft-skill-icon' size={50} />
                </div>
              <h3 className="box-header-soft">Project Management</h3>
           </div>
           <div className="skills-box-soft">
              <div className="skill-icon">
              <Speech size={50}/>
              </div>
            <h3 className="box-header-soft">Effective Communication</h3>
          </div>  
     
      <div className="skills-box-soft">
              <div className="skill-icon">
              <MonitorCheck size={50} />
              </div>
            <h3 className="box-header-soft">Problem Solving</h3>
          </div>  
       
          <div className="skills-box-soft">
              <div className="skill-icon">
              <ShieldCheck size={50} />
              </div>
            <h3 className="box-header-soft">Adaptability</h3>
          </div> 

    </div>
   

      {/* LeetCode Statistics */}
      {leetcodeStats && (
        <div className="leetcode-stats-container">
          <div className="leetcode-stats">
            <h3 className="box-header-2">Leet<span className='box-head-title'>Code</span> Statistics</h3>
          
            <div className='leetcode-head'>
              <a href="https://leetcode.com/sandeshpatel/" className='head'>
                <span>
                  <SiLeetcode
                  size={28}
                  color='orange'/>
                </span>
                <p className='leet-username'>sandeshpatel</p>
              </a>
              <div className='leet-right'>
                <p className='leet-right-p'>Solved Problems</p>
              </div>
            </div>
            <div className='leet-body'>
            <div className='leet-solved' onMouseEnter={handleHover} onMouseLeave={() => setHoveredPercent(null)}>
                <Circle  
                className='Circle'
                  percent={hoveredPercent !== null ? hoveredPercent : (leetcodeStats.totalSolved / leetcodeStats.totalQuestions) * 100}
                  strokeWidth={6}
                  trailWidth={5}
                  strokeColor='orange'  // Set your desired color
                />
                <p className="circle-text">
                  {hoveredPercent !== null ? `${hoveredPercent.toFixed(1)}%` : leetcodeStats.totalSolved}
                  <span>Solved</span>
                </p>
              </div>            
            <div className='leet-cat'>
              <div className='Easy'>
                <div className='leet-title'>
                  <p className='pro-title'>Easy</p>
                  <p className='stat-all'>
                    <span>{leetcodeStats.easySolved}</span>/{leetcodeStats.totalEasy}
                  </p>
                </div>
              <Line
              className='Easy-line'
              percent={(leetcodeStats.easySolved / leetcodeStats.totalEasy) * 100}
              strokeWidth='4'
              fill='none'
              strokeLinecap='round'
              trailWidth='4'
              trailColor='#b9f6ca'
              strokeColor='#00c853'
              />
              </div>

              <div className='Medium'>
                <div className='leet-title'>
                  <p className='pro-title'>Medium</p>
                  <p className='stat-all'>
                    <span>{leetcodeStats.mediumSolved}</span>/{leetcodeStats.totalMedium}
                  </p>
                </div>
              <Line
              className='Medium-line'
              percent={(leetcodeStats.mediumSolved / leetcodeStats.totalMedium) * 100}
              strokeWidth='4'
              fill='none'
              strokeLinecap='round'
              trailWidth='4'
              trailColor='#ffd180'
              strokeColor='#ff9100'
              />
              </div>

              <div className='Hard'>
                <div className='leet-title'>
                  <p className='pro-title'>Hard</p>
                  <p className='stat-all'>
                    <span>{leetcodeStats.hardSolved}</span>/{leetcodeStats.totalHard}
                  </p>
                </div>
              <Line
              className='Hard-line'
              percent={(leetcodeStats.hardSolved / leetcodeStats.totalHard) * 100}
              strokeWidth='4'
              fill='none'
              strokeLinecap='round'
              trailWidth='4'
              trailColor='#ff8a80'
              strokeColor='#ff1744'
              />
              </div>
            
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Skill;
