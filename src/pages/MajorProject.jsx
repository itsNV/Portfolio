import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import homeimg from '../assets/In-HomePage.png'
import profileimg from '../assets/In-Profile.png'
import settingimg from '../assets/In-Setting.png'
import courseimg from '../assets/In-Course.png'
import enrollCourse from '../assets/In-EnrolledCourses.png'
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
const MajorProject = () => {


    const navigate = useNavigate();


    return (
        <>
            


            <button
                    onClick={()=> navigate('/')}
                    className='text-white  mt-28 flex items-center gap-3 font-serif hover:bg-yellow-400 hover:px-4 hover:py-1 hover:shadow-white hover:shadow-md rounded-full hover:text-black'>
                    <FaArrowLeftLong />
                    <p>Back to Home</p>
                  </button>
            

            <div className="text-white w-full h-auto font-serif flex justify-center mt-28 mb-20">


                <div className="major_project h-auto w-[50%] bg-gradient-to-r from-blue-900 to-black rounded-lg shadow-md shadow-white">

                    <p className="text-[3rem] mt-10 text-center font-semibold">Insight-Institute | An-EdTech Plateform</p>



                    <p className="text-start lg:ml-4 mt-10 text-lg">Introduction : </p>

                    <p className="major_project_desc lg:ml-36 mt-4 w-[70%]">The Project “Insight-Institute” is an ed-tech platform where people can enroll in courses and
can learn new skills online from anywhere.
This Ed-Tech project is designed to make learning easier, more fun, and accessible for everyone.
The platform includes interactive videos and documentations on the particular topic. Teachers
can track student progress in real time and provide better support.
The goal is to make education more effective, enjoyable, and available to all, whether in schools
or at home. This project helps bridge learning gaps and improve education with smart digital
                        tools. </p>
                    

                    <p className="text-start lg:ml-4 mt-10 text-lg">Some Images of Website : "Insight-Institute"</p>


                    <div className="lg:ml-4 mt-4 mb-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <p className="">Home Page : </p>
                            <img src={homeimg} alt="Home page Image" className="rounded-lg w-[70%]"/>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="">Profile Page: </p>
                            <img src={profileimg} alt="Profile page Image" className="rounded-lg w-[70%]"/>
                        </div>


                        <div className="flex flex-col gap-4">
                            <p className="">Setting Page : </p>
                            <img src={settingimg} alt="Setting page Image" className="rounded-lg w-[70%]"/>
                        </div>


                        <div className="flex flex-col gap-4">
                            <p className="">Createted Course Page : </p>
                            <img src={courseimg} alt="Createted Course page Image" className="rounded-lg w-[70%]"/>
                        </div>



                        <div className="flex flex-col gap-4">
                            <p className="">Enrolled Course Page : </p>
                            <img src={enrollCourse} alt="Enrolled Course page Image" className="rounded-lg w-[70%]"/>
                        </div>
                    </div>

                    <div className="lg:ml-4 mb-10 mt-20">
                    <p >For learn more about it please click </p>
                    <NavLink to={process.env.REACT_APP_MAJOR_PROJECT_LINK}>
            <button
              
              className='mt-3 h-[2rem] w-[7rem] bg-black px-2 py-2 rounded-lg hover:scale-110 transition-all duration-200 hover:bg-gradient-to-tr hover:from-black  hover:to-red-600 flex items-center justify-center  hover:border-black hover:shadow-sm hover:shadow-white'
              >Visit Now
                 
              </button>
            </NavLink>
                    </div>
                </div>
              
                

                
        </div>
        </>
    );
}


export default MajorProject