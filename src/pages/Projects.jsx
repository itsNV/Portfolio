import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { projectData } from '../data'
import { FaArrowLeftLong } from "react-icons/fa6";



const Projects = () => {

  const navigate = useNavigate();

  return (
    <>
      
      <button
        onClick={()=> navigate('/')}
        className='text-white mt-28  flex items-center gap-3 font-serif hover:bg-yellow-400 hover:px-4 hover:py-1 hover:shadow-white hover:shadow-md rounded-full hover:text-black'>
        <FaArrowLeftLong />
        <p>Back to Home</p>
      </button>
      
      <p className='text-[3rem] text-center mt-20 text-white font-serif'>My Projects</p>
      
      <div className='projects text-white mt-20 grid lg:grid-cols-2 w-[60%] lg:gap-7  mb-10 font-serif'>


      
      {
        projectData?.map((project) => (
          <div key={project.id} className='bg-gradient-to-tr from-blue-600 to-black  min-h-10 w-full p-5 rounded-lg shadow-md shadow-white'> 

            <p className='text-yellow-400 text-end'>{ project.id}</p>
            
            <p className='text-white text-3xl font-semibold'>{project.name}</p>

            <img src={project.image} alt="app-image" className='mt-4 rounded-lg'/>
            
            <p className='font-semibold mt-4'>{project.description}</p>
            

            <NavLink to={`${project.link}`}>
            <button
              
              className='mt-3 h-[2rem] w-[7rem] bg-black px-2 py-2 rounded-lg hover:scale-110 transition-all duration-200 hover:bg-gradient-to-tr hover:from-black  hover:to-red-600 flex items-center justify-center  hover:border-black hover:shadow-sm hover:shadow-white'
              >Visit Now
               
              </button>
            </NavLink>


            <p className='mt-5 font-semibold'>Technologies used : </p>
            
            <div className='flex gap-5 mt-3'>

              
            {
                project.technologies.map((tech, index) => (
                  <p key={index}
                    className='bg-black px-2 py-1 rounded-lg max-w-max'
                  >{tech}</p>
                ))
              }
             </div>
            
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Projects