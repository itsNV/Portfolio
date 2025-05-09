import { AnimatedBackground, AnimatedText } from 'animated-backgrounds';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Projects from './pages/Projects';
import MajorProject from './pages/MajorProject';


function App() {


  const [welcome, setWelcome] = useState(true)
  

  useEffect(() => {
    setTimeout(() => {
      setWelcome(false)
    },3000)
  },[])

  return (
    <div>

            
      {
        welcome ?
          
          (<div className='flex items-center text-[7rem] h-screen w-screen justify-center '> 
            
            <AnimatedBackground
                animationName="starryNight"
                blendMode="difference"
            />
            
            <AnimatedText
            text="Welcome to my Portfolio"
            effect="rainbow"
            />
          </div>)
            : (
          
            <div className='flex flex-col items-center bg-gradient-to-r from-black to-blue-950'>
              
             

          
      
          <Routes>
        <Route path='/' element={ <Main/>} />
                <Route path='projects' element={<Projects />} />
                <Route path='major-projects' element={ <MajorProject/>} />
      </Routes>
          
          </div>
        )
      }
      



      
      
    </div>
  );
}

export default App;
