import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import homeimg from '../assets/In-HomePage.png'
import profileimg from '../assets/In-Profile.png'
import settingimg from '../assets/In-Setting.png'
import courseimg from '../assets/In-Course.png'
import enrollCourse from '../assets/In-EnrolledCourses.png'
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import InsightInstitute from "../components/MajorProject/InsightInstitute";
import ChatApp from "../components/MajorProject/ChatApp";


const MajorProject = () => {


    const navigate = useNavigate();


    return (
        <div className="w-screen h-screen flex flex-col  items-center gap-5">
            


            <button
                    onClick={()=> navigate('/')}
                    className='text-white  mt-28 flex items-center gap-3 font-serif hover:bg-yellow-400 hover:px-4 hover:py-1 hover:shadow-white hover:shadow-md rounded-full hover:text-black'>
                    <FaArrowLeftLong />
                    <p>Back to Home</p>
            </button>
            

            <div className="text-white flex gap-10">
                <div className="p-4 h-auto max-w-max bg-gradient-to-r from-blue-900 to-black rounded-lg shadow-md shadow-white">
                    <p>Insight-Institute | An EdTech plateform </p>

                    <button type="button"
                        className="bg-yellow-400 rounded-lg px-4 py-1 text-black shadow-md shadow-white mt-6  hover:bg-blue-600 hover:rounded-full
                        hover:scale-105 transition-all duration-200 ease-in"
                        onClick={()=> navigate('/major-projects/insight-institute')}
                    >View Full Details</button>
                </div>


                <div className="p-4 h-auto max-w-max bg-gradient-to-r from-blue-900 to-black rounded-lg shadow-md shadow-white">
                    <p>Chat App</p>



                    
                    <button type="button"
                        className="bg-yellow-400 rounded-lg px-4 py-1 text-black shadow-md shadow-white mt-6 hover:bg-blue-600 hover:rounded-full
                        hover:scale-105 transition-all duration-200 ease-in"
                        onClick={()=> navigate('/major-projects/chat-app')}
                    >View Full Details</button>
                </div>
            </div>



            

            {/* <InsightInstitute />
            
            <ChatApp /> */}
            



          
        </div>
    );
}


export default MajorProject