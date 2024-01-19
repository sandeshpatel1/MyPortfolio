import './App.css';
import React from "react";
import {HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import Project from "./Components/Project";
import About from './Components/About';
import Skills from './Components/Skills/Skill';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Qualification from './Components/Qualification/Qualification';
import Navbar from './Components/Navbar';

function App() {
  return (
    <HashRouter>
     <ToastContainer />
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home id="home" />
                <Project id="projects" />
                <About id="about" />
                <Skills id="skills" />
                <Qualification id="qualification" />
                <Contact id="contact" />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
      {/* ToastContainer to display toast messages */}
      
    </HashRouter>
  );
}

export default App;
