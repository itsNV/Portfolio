import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import homeimg from '../../assets/chatapp-home.png'
import profileimg from '../../assets/chatapp-profile.png'
import loginimg from '../../assets/chatapp-login.png'
import signupimg from '../../assets/chatapp-signup.png'

const ChatApp = () => {

    const navigate = useNavigate()
  return (
      <div className='flex flex-col justify-center items-center  '>
          
           <button
                                        onClick={()=> navigate(-1)}
                                        className='text-white  mt-28 flex items-center gap-3 font-serif hover:bg-yellow-400 hover:px-4 hover:py-1 hover:shadow-white hover:shadow-md rounded-full hover:text-black'>
                                        <FaArrowLeftLong />
                                        <p>Back to Home</p>
          </button>
          

          <div className="text-white w-full h-auto font-serif flex justify-center mt-28 mb-20">


                <div className="major_project h-auto w-[50%] bg-gradient-to-r from-blue-900 to-black rounded-lg shadow-md shadow-white">

                    <p className="text-[3rem] mt-10 text-center font-semibold">Chat App</p>



                    <p className="text-start lg:ml-4 mt-10 text-lg">Introduction : </p>

                    <p className="major_project_desc lg:ml-36 mt-4 w-[70%]">The Project “Chat App” is where people can connect whith world and can communicate to any person in the world. It's a realtime and responsive app where user can send messages in realtime. </p>
                    

                    <p className="text-start lg:ml-4 mt-10 text-lg">Some Images of Website : "Insight-Institute"</p>


                    <div className="lg:ml-4 mt-4 mb-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <p className="">Home Page : </p>
                            <img src={homeimg} alt="Home page Image" className="rounded-lg w-[60%]"/>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="">Profile Page: </p>
                            <img src={profileimg} alt="Profile page Image" className="rounded-lg w-[60%]"/>
                      </div>
                      

                        <div className="flex flex-col gap-4">
                            <p className="">Login Page: </p>
                            <img src={loginimg} alt="login page Image" className="rounded-lg w-[60%]"/>
                        </div>

                          <div className="flex flex-col gap-4">
                            <p className="">SignUp Page: </p>
                            <img src={signupimg} alt="signup page Image" className="rounded-lg w-[60%]"/>
                        </div>
                        


                        
                    </div>

                    <div className="lg:ml-4 mb-10 mt-20">
                    <p >To learn more about it please click </p>
                    <NavLink to={process.env.REACT_APP_CHAT_APP_LINK}>
            <button
              
              className='mt-3 h-[2rem] w-[7rem] bg-black px-2 py-2 rounded-lg hover:scale-110 transition-all duration-200 hover:bg-gradient-to-tr hover:from-black  hover:to-red-600 flex items-center justify-center  hover:border-black hover:shadow-sm hover:shadow-white'
              >Visit Now
                 
              </button>
            </NavLink>
                    </div>
                </div>
              
                

                
            </div>
    </div>
  )
}

export default ChatApp