import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import DProjects from './components/Data_Analyst/DProjects';
import MProjects from './components/Mern_Stack/MProjects';
import Navbar from './components/Navbar';
import DataAnalyst from './pages/DataAnalyst';
import Home from './pages/Home';
import MERNStack from './pages/MERNStack';

function App() {

  const [navState,setNavState] = useState('homepage')

  return (
    <>
      {/* Global Animated Background - Fixed position, covers entire viewport */}
      <AnimatedBackground />
      
      {/* Main App Content */}
      <div className="relative min-h-screen">
        <Navbar navState={navState}/>
         
        <Routes>
          <Route path="/" element={<Home setNavState={ setNavState} />} />
          <Route path="/data-analyst" element={<DataAnalyst setNavState={ setNavState} />} />
          <Route path="/mern-stack" element={<MERNStack setNavState={ setNavState} />} />
          <Route path='/data-analyst/projects' element={ <DProjects setNavState={ setNavState} />} />
          <Route path='/mern-stack/projects' element={ <MProjects setNavState={ setNavState} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
