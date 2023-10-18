import React, { useState, useEffect } from 'react'
import { PiArrowSquareOutFill } from 'react-icons/pi'
import { RiJavascriptFill } from 'react-icons/ri'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { SiExpress, SiPython, SiDjango, SiPostgresql, SiReact, SiMongodb} from 'react-icons/si'
import { DiDjango } from 'react-icons/di'
import { LiaNode } from 'react-icons/lia'
import { TbApi } from 'react-icons/tb'
import { FcGlobe } from 'react-icons/fc'
import AOS from 'aos';
import 'aos/dist/aos.css';

const technologyIcons = {
    JavaScript: RiJavascriptFill,
    HTML: AiFillHtml5,
    CSS: FaCss3Alt,
    Express: SiExpress,
    Python: SiPython,
    Django: SiDjango,
    Postgres: SiPostgresql,
    React: SiReact,
    Node: LiaNode,
    MongoDB: SiMongodb,
    API: TbApi,
}




const projects = [
    {
        id: 1,
        name: '// HLL0 WRLD',
        description: 'Discover basic information about any country by searching for it. Explore details such as population, languages spoken, currency, and more.',
        liveSite: 'https://hello-world-rose-sigma.vercel.app/',
        img: '/images/hello-world-rose-sigma.vercel.app_.png',
        technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
    } ,
    {
        id: 2,
        name: 'docket.',
        description: 'Stay organized with a simple and intuitive to-do list application. Keep track of your tasks, set reminders, and easily manage your daily agenda.',
        liveSite: 'https://docket-project-two.herokuapp.com/',
        img: '/images/docket.png',
        technologies: ['JavaScript', 'HTML', 'CSS', 'Express', ],
    } ,
    {
        id: 3,
        name: 'Choruso',
        description: 'Immerse yourself in the world of music with Choruso, a collaborative music application. Discover, listen to, and share your favorite songs and playlists with friends.',
        liveSite: 'https://choruso.herokuapp.com/',
        img: '/images/choruso.png',
        technologies: ['Python', 'Django', 'Postgres'],
    } ,
    {
        id: 4,
        name: 'Trackly',
        description: 'Simplify your job application process with Trackly, a comprehensive job application tracker. Keep tabs on your applications, track progress, and stay organized in your job search.',
        liveSite: 'https://trackwithtrackly.netlify.app/',
        img: '/images/trackly.png',
        technologies: ['MongoDB', 'Express','React', 'Node'],
    } ,
    {
        id: 5,
        name: 'flowerbox.',
        description: 'Your online destination for exquisite floral arrangements and fresh blooms. Discover beauty, elegance, and joy in every petal.',
        liveSite: 'https://flowerbox.vercel.app/',
        img: '/images/flowerbox.png',
        technologies: ['React', 'Node', 'CSS'],
    } ,

]

export default function Projects() {

    useEffect(() => {
        AOS.init();
      }, []);  
      
    
 
    return (
        <div id="project-container" className='project-container' data-aos="zoom-in-up">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card" 
            > 
            

                {/* <div className='project-ss'>
                    <img className='project-ss' src={project.img} alt='screenshot' />
                </div> */}


                <div className='project-text'>
                <a className='livesite' href={project.liveSite} target="_blank" rel="noopener noreferrer">

                    <p className='chevronRight'><PiArrowSquareOutFill /></p>
                    <h3 className='project-name'>{project.name} </h3>
                    <p className='description'>{project.description}</p>
                    <div className='tech-stack'>


                    <ul className="tech-list">
  {project.technologies.map((tech, techIndex) => {
    const IconComponent = technologyIcons[tech];
    if (!IconComponent) {
      return null; // Handle the case where the technology doesn't have an icon
    }
    return (
      <p className="tech-icon" key={techIndex}>
        <IconComponent  />
      </p>
    );
  })}
</ul>
                    </div> 
                    </a> 
                </div>
            </div>
          ))}
        </div>
      );
  }