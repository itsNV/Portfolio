import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/Main/About.jsx';
import Contact from './components/Main/Contact.jsx';
import Experience from './components/Main/Experience.jsx';
import Hero from './components/Main/Hero.jsx';
import MajorProjects from './components/Main/projects.jsx';
import Skills from './components/Main/Skills.jsx';
import ChatApp from './components/MajorProject/ChatApp.jsx';
import InsightInstitute from './components/MajorProject/InsightInstitute.jsx';
import Navbar from './components/Navbar.jsx';
import './index.css';
import Projects from './pages/Projects.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Experience />
              <Skills />
              
              <Contact />
            </>
          }
        />
      
        <Route
          path="/projects"
          element={
            <Projects />
          }
        />

        <Route path='/major-projects' element={<MajorProjects/>} />
        <Route path='/major-projects/insight-institute' element={<InsightInstitute/>} />
        <Route path='/major-projects/chat-app' element={<ChatApp/>} />
      </Routes>
    </div>
  );
}

export default App;
