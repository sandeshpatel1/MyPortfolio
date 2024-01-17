import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications';
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
    <BrowserRouter>
      <ToastProvider>
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
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
