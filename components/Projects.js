import React, { useState, useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';


const projects = [
    {
        name: '// HLLO WRLD',
        description: 'Discover basic information about any country by searching for it. Explore details such as population, languages spoken, currency, and more.',
        liveSite: 'https://hello-world-rose-sigma.vercel.app/',
        img: '/images/helloworld.png',
        technologies: ['JavaScript', 'HTML', 'CSS', 'AJAX'],
    } ,
    {
        name: 'docket.',
        description: 'Stay organized with a simple and intuitive to-do list application. Keep track of your tasks, set reminders, and easily manage your daily agenda.',
        liveSite: 'https://docket-project-two.herokuapp.com/',
        img: '/images/docket.png',
        technologies: ['JavaScript', 'HTML', 'CSS', 'Express.js', ],
    } ,
    {
        name: 'Choruso',
        description: 'Immerse yourself in the world of music with Choruso, a collaborative music application. Discover, listen to, and share your favorite songs and playlists with friends.',
        liveSite: 'https://choruso.herokuapp.com/',
        img: '/images/choruso.png',
        technologies: ['Python', 'Django', 'Postgres'],
    } ,
    {
        name: 'Trackly',
        description: 'Simplify your job application process with Trackly, a comprehensive job application tracker. Keep tabs on your applications, track progress, and stay organized in your job search.',
        liveSite: 'https://legendary-halva-8abb3f.netlify.app/',
        img: '/images/trackly.png',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    } ,
    {
        name: 'flowerbox.',
        description: 'Your online destination for exquisite floral arrangements and fresh blooms. Discover beauty, elegance, and joy in every petal.',
        liveSite: 'https://flowerbox.vercel.app/',
        img: '/images/flowerbox.png',
        technologies: ['React', 'Node.js', 'CSS'],
    } ,

]

export default function Projects() {

    useEffect(() => {
        AOS.init();
      }, []);  
      
    
  
 
    return (
        <div id="project-container" className='project-container' >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card" data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            > 
                <div className='project-ss'>
                    <img className='project-ss' src={project.img} alt='screenshot' />
                </div>
                <div className='project-text'>
                    <h3 className='project-name'>{project.name}</h3>
                    <p>{project.description}</p>
                    <a className='livesite' href={project.liveSite} target="_blank" rel="noopener noreferrer">
                        Visit Live Site
                    </a>
                    <div className='tech-stack'>
                    <ul className="tech-list">
                            {project.technologies.map((technology, index) => (
                            <li key={index}>{technology}</li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
          ))}
        </div>
      );
  }