import React from 'react'

const projects = [
    {
        name: 'HELLO WORLD',
        description: 'Search a country and find basic information about it',
        liveSite: 'https://hello-world-rose-sigma.vercel.app/'
    } ,
    {
        name: 'docket',
        description: 'To do list',
        liveSite: 'https://docket-project-two.herokuapp.com/'
    } ,
    {
        name: 'Choruso',
        description: 'Music Application - [Group Project] ',
        liveSite: 'https://choruso.herokuapp.com/'
    } ,
    {
        name: 'Trackly',
        description: 'Job Application Tracker',
        liveSite: 'https://legendary-halva-8abb3f.netlify.app/'
    } ,

]

export default function Projects() {
    return (
      <div>
        <h2>PROJECTS</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
              Visit Live Site
            </a>
          </div>
        ))}
      </div>
    )
  }