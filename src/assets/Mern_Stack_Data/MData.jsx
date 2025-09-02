
import {  Code, GitBranch,  ToolCase } from 'lucide-react';
import { CgVercel } from 'react-icons/cg';
import { DiCssTricks, DiJavascript, DiMongodb, DiNodejs, DiReact } from 'react-icons/di';
import { FaHtml5 } from 'react-icons/fa';

import { GrDeploy } from 'react-icons/gr';
import { RiTailwindCssFill } from 'react-icons/ri';
import  {SiExpress, SiPostman, SiRender } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export const skillGroups = [
  {
    title: "Programming",
    icon: <Code size={32} />,
    items: [
      {
        name: 'React',
        icon: <DiReact size={30} />,
      },
      {
        name: 'Node.js',
        icon: <DiNodejs size={30} />,
      },
      {
        name: 'Express.js',
        icon: <SiExpress size={30} />,
      },
      {
        name: 'MongoDB',
        icon: <DiMongodb size={30} />,
      },
      {
        name: 'TailwindCSS',
        icon: <RiTailwindCssFill size={30} />,
      },
      {
        name: 'HTML',
        icon: <FaHtml5 size={30} />,
      },
      {
        name: 'CSS',
        icon: <DiCssTricks size={30} />,
      },
      {
        name: 'JavaScript',
        icon: <DiJavascript size={30} />,
      },
     
    ],
  },
  {
    title: "Tools",
    icon: <ToolCase size={30}/>,
    items: [
      {
        name: 'VsCode',
        icon: <VscCode size={30} />,
      },
      {
        name: 'Github',
        icon: <GitBranch/>
      },
      {
        name: 'cursur',
        icon: <VscCode size={30}/>
      },
     
      {
        name: 'Postman',
        icon: <SiPostman size={30}/>
      }
    ],
  },
  {
    title: "Deployment",
    icon: <GrDeploy size={ 30} />,
    items: [
      {
        name: 'Vercel (Frontend)',
        icon: <CgVercel size={30} />,
      },
      {
        name: 'Render (Backend)',
        icon: <SiRender size={30}/>
      },
 
    ],
  },
];

export const experiences = [  
  {
    title: "Full-Stack Developer Intern", 
    company: "AlpsLogic It Solutions",
    location: "Gandhinagar",
    duration: "20 jan - 19 apr",
    description: "Developing and maintaining web applications using MERN stack. Collaborating with senior developers on large-scale projects.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Github"]
  },
 
];




export const projects = [
    {
        catagory:'frontend',
      title: "Top Courses App",
      description: "Interactive frontend courses platform with category-wise filtering (All, Design, Development, Business, Lifestyle), like/unlike functionality, and real-time toast notifications for user actions.",
      tech: ["React", 'TailwindCSS'],
      github: "https://github.com/itsNV/Top-Courses-App",
      live: "https://top-courses-app-gamma.vercel.app/"
    },
   
    {
        catagory:'frontend',
      title: "Shopping Cart App",
      description: "Interactive frontend shopping cart application with item browsing, add-to-cart, remove-from-cart functionality, and a dedicated cart view to manage selected items.",
      tech: ["React", 'TailwindCSS'],
      github: "https://github.com/itsNV/Shopping-Cart-App",
      live: "https://shopping-cart-app-gamma-six.vercel.app/"
    },
   
    {
        catagory:'frontend',
      title: "Testimonials App",
      description: "Dynamic frontend testimonial application displaying user image, message, and occupation with next/previous navigation and a surprise button to view a random testimonial.",
      tech: ["React", 'TailwindCSS'],
      github: "https://github.com/itsNV/Testimonials-app",
      live: "https://testimonials-app-wheat.vercel.app/"
    },
   
    {
        catagory:'frontend',
      title: "Plan a Tour App",
      description: "Interactive frontend tour packages application displaying destination images, pricing, and descriptions with the ability to filter tours as interested or not interested.",
      tech: ["React", 'TailwindCSS'],
      github: "https://github.com/itsNV/Plan-a-Tour",
      live: "https://plan-a-tour-erseytgaa-itsnvs-projects.vercel.app/"
    },
   
    {
        catagory:'frontend',
      title: "Weather App",
      description: "Responsive frontend weather application with location-based search displaying temperature, humidity, and wind speed details.",
      tech: ["React", 'TailwindCSS'],
      github: "https://github.com/itsNV/weather-app",
      live: "https://weather-app-kappa-six-33.vercel.app/"
    },
    {
        catagory:'frontend',
      title: "Random Gif Generator App",
      description: "Fun frontend GIF application that displays random GIFs and allows users to search for GIFs based on their preferred keywords.",
      tech: ["React", 'TailwindCSS'],
      github: "https://github.com/itsNV/Random-Gif-Generator",
      live: "https://random-gif-generator-app.vercel.app/"
    },
   
    {
        catagory:'fullstack',
      title: "Insight Institute",
      description: "Full-stack e-learning platform with secure user authentication, dynamic course management, personalized dashboards, and seamless payment integration.",
      tech: ["React", 'TailwindCSS', "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/itsNV/Insight-Institute-An-EdTech-Platform",
      live: "https://insight-institute-an-ed-tech-platform.vercel.app/"
    },
   
    {
        catagory:'fullstack',
      title: "Chat App",
      description: "Real-time chat application with user connection-based messaging, live online/offline status tracking, and seamless instant communication.",
      tech: ["React", 'TailwindCSS', "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/itsNV/chat-app",
      live: "https://chat-app-lake-nine-47.vercel.app/"
    },
   
];


