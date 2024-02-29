import React, { useEffect, useState } from "react";
import "../Components/Home.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope, FaInstagram , } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { SendHorizontal } from "lucide-react";

const Home = () => {
  // const [loading, setLoading] = useState(true); // State to track loading status
  // const [data, setData] = useState(null); // State to hold fetched data

   useEffect(() => {
  //   const fetchData = () => {
  //     setTimeout(() => {
  //       // Once data is fetched, update loading status and data
  //       setLoading(false);
  //       // Replace the following line with your actual data fetching logic
  //       setData({ /* your fetched data */ });
  //     }, 2000); // Simulate 2 seconds delay
  //   };

  //   // Call fetchData function
  //   fetchData();

    // Scroll animation setup
    const HomeSection = document.querySelector(".header");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffsetTop = HomeSection.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollPosition > sectionOffsetTop - windowHeight + 200) {
        HomeSection.classList.add("animate");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Only run once on component mount

  return (
    <div className="header" id="home">
      <div className="home-section">
          <div className="home-section-blog">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/sandeshpatel1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaLinkedinIn />
                </span>
              </a>
              <a
                href="https://github.com/sandeshpatel1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaGithub />
                </span>
              </a>
              <a href="mailto:patelsandesh1@gmail.com">
                <span>
                  <FaEnvelope />
                </span>
              </a>
              <a
                href="https://www.instagram.com/patel_sandesh_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaInstagram />
                </span>
              </a>
            </div>

            <div className="profile-img">
              <svg
                className="profile-blob"
                id="sw-js-blob-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop
                      id="stop1"
                      stopColor="rgba(248, 117, 55, 1)"
                      offset="0%"
                    ></stop>
                    <stop
                      id="stop2"
                      stopColor="rgba(251, 168, 31, 1)"
                      offset="100%"
                    ></stop>
                  </linearGradient>
                </defs>
                <mask id="mask1" mask-type="alpha">
                  <path
                    fill="url(#sw-gradient)"
                    d="M26.4,-29.3C34,-25,40.1,-16.5,40.4,-8.1C40.8,0.4,35.5,8.9,30.2,16.8C24.9,24.7,19.6,31.8,12.7,33.9C5.8,36,-2.6,33.1,-9.5,29.2C-16.5,25.4,-22.1,20.7,-27.2,14.5C-32.3,8.2,-36.9,0.4,-37.1,-7.9C-37.3,-16.3,-33,-25.3,-26.1,-29.8C-19.1,-34.3,-9.6,-34.4,-0.1,-34.2C9.3,-34.1,18.7,-33.7,26.4,-29.3Z"
                    width="100%"
                    height="100%"
                    transform="translate(50 50)"
                    strokeWidth="0"
                    style={{ transition: "all 0.3s ease 0s" }}
                  ></path>
                </mask>
                <g mask="url(#mask1)">
                  <circle cx="50" cy="50" r="50" fill="#9A6AFF" />
                  <image
                    className="profile-image"
                    href="https://i.ibb.co/FY2dVMq/profile.png"
                    alt=""
                    x="3"
                    y="15"
                    width="100"
                    height="95"
                  />
                </g>
              </svg>
            </div>

            <div className="personalInfo">
              <div className="Intro">
                <h1 className="name">
                  Hi&#128075;, I&#39;m <br />
                  <span className="text-[#3c8ffc]"> Sandesh Patel</span>
                </h1>
              </div>
              <div className="myJobprofile">
                <h1 className="profile">
                  <TypeAnimation
                    sequence={[
                      // Same String at the start will only be typed once, initially
                      "Front-End Developer",
                      1000,
                      "ReactJs Developer",
                      1000,
                    ]}
                    speed={30}
                    repeat={Infinity}
                  />
                </h1>
              </div>
              <div className="myDescription">
                <p className="desc-title">LET&#39;S BUILD SOMETHING TOGETHER</p>
                <p className="description">
                  I’m focused on Creating Interactive website which is Functional
                  as well as responsive while learning & exploring other
                  technologies.
                </p>
              </div>
              <a className="home-connect-btn" href="#contact">
                Let's Connect
                <SendHorizontal className="home-btn" size={18} />
              </a>
            </div>
          </div>
      </div>

      <div className="landing">
        <div className="arrow bounce">
          <span className="material-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevrons-down"
            >
              <path d="m7 6 5 5 5-5" />
              <path d="m7 13 5 5 5-5" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
