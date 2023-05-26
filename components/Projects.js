import React, { useState, useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';


  


 

const projects = [
    {
        name: 'HELLO WORLD',
        description: 'Search a country and find basic information about it',
        liveSite: 'https://hello-world-rose-sigma.vercel.app/',
        img: '/images/helloworld.png'
    } ,
    {
        name: 'docket',
        description: 'To do list',
        liveSite: 'https://docket-project-two.herokuapp.com/',
        img: '/images/docket.png'
    } ,
    {
        name: 'Choruso',
        description: 'Music Application - [Group Project] ',
        liveSite: 'https://choruso.herokuapp.com/',
        img: '/images/choruso.png'
    } ,
    {
        name: 'Trackly',
        description: 'Job Application Tracker',
        liveSite: 'https://legendary-halva-8abb3f.netlify.app/',
        img: '/images/trackly.png'
    } ,

]

export default function Projects() {

    useEffect(() => {
        AOS.init();
      }, []);  
      
    
  
 
    return (
        <div className='project-container' >
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
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
                        Visit Live Site
                    </a>
                </div>
            </div>
          ))}
        </div>
      );
  }