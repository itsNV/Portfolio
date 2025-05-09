import React from "react";
import Skills from "../components/Main/Skills";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import githubimg from '../assets/github.png'
import linkedinimg from '../assets/linkedin.png'

const Main = () => {

    const navigate   = useNavigate();

  return (
      <>
          <Navbar/>
          
          <div className="text-white w-[60%] mt-48 h-full font-serif pb-20">
          
          {/* section1 */}
    
          <section id="Intro">
            <div>
              <p className="text-lime-300 flex gap-4 items-center">
                <span className=" font-bold text-xs uppercase">
                  Front End Developer
                </span>
                |
                <span className="font-bold text-xs uppercase">
                  Full Stack Developer
                </span>
              </p>
    
              <p className="text-white text-[6rem] font-bold uppercase">
                Nisarg Patel
              </p>
    
              <p className="text-xl">
                I am full ( MERN ) stack developer skilled to build the working
                websites. And as roll of front-end developer i can create responsive
                apps using <span className="text-lime-300"> Reactjs</span> and can
                use <span className="text-lime-300"> Tailwind CSS </span> to add
                style in app.
                      </p>
                      
                      <p className="text-xl mt-5">
                          To see my projects click on : 
                      </p>
    
                      <button
                          onClick={()=> navigate('/projects')}
                          className="text-black bg-yellow-400 px-5 py-2 flex items-center rounded-lg hover:rounded-full hover:scale-110 transition-all duration-200 ease-in hover:text-white mt-5 hover:bg-blue-600"> My Projects</button>
            </div>
          </section>
    
          {/* Experience */}
          <section
            id="experience"
            className="mt-60 shadow-md shadow-white h-auto rounded-lg bg-gradient-to-r to-black from-blue-950 pb-5"
          >
            <p className="text-white  text-center text-[3rem] font-semibold pt-20 mb-20">Experience</p>
    
            <div className="pl-5 text-xl mt-10">
              <ul>
                <li>
                  I had worked as the Full ( MERN ) stack developer for{" "}
                  <span className="text-lime-300"> 4 months</span> in the company
                  ALPSLOGIC IT SOLUTIONS as an intern.
                </li>
              </ul>
            </div>
          </section>
    
          {/* skills */}
          <Skills />
              
    
              {/* contact */}
              <section
            id="contact"
            className="mt-60 shadow-md shadow-white h-auto rounded-lg bg-gradient-to-r to-black from-blue-950 pb-5"
          >
                  <p className="text-white  text-center text-[3rem] font-semibold pt-20 mb-20">Contact</p>
                  
    
                  <div className="text-xl ml-20 flex flex-col">
                      
                      <p>Connect with me using : </p>
    
                      <div className="mt-5 flex flex-col gap-3 text-lg">
                          <NavLink to={'https://nisargpatel941@gmail.com'}>
                          <p>
                              Email : nisargpatel941@gmail.com
                          </p>
                          </NavLink>
    
    
                          <NavLink to={'https://github.com/itsNV'}>
                <p className="text-blue-400 flex items-center gap-3">
                  <img src={githubimg} alt="github image" className="w-[3%] rounded-lg"/>
                              Github
                          </p>
                          </NavLink>
    
    
                          <NavLink to={'https://www.linkedin.com/in/nisarg-patel-865aa9287/'}>
                <p className="text-blue-400 flex items-center gap-3">
                  <img src={linkedinimg} alt="linkedin image" className="w-[3%] rounded-full"/>
                              Linkedin 
                          </p>
                          </NavLink>
                      </div>
    
    
                  </div>
    
            
          </section>
    
              
        </div>
      </>
  );
};

export default Main;
