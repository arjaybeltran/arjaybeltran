import React from 'react';


const ContactInfo = {
  name: 'Arjay Beltran',
  email: 'arjaybeltran16@gmail.com',
  phone: '+1 647-871-7125',
};

const Websites = [

  { name: 'Portfolio', url: '/' }, //    change to deploy url
  { name: 'GitHub', url: 'https://github.com/Arjybltrn' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/arjaybeltran/' },
];

const FrontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'AJAX', 'jQuery']
const BackendSkills = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful API']
const AddSkills = ['Version Control(Git/GitHub)', 'MVC Framework', 'Web Design', 'Slack']

const Education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'George Brown College',
    year: 'April 2017',
  },
  {
    degree: 'Software Engineering Certificate' ,
    institution: 'General Assembly',
    year: 'May 2023',
  },
  {
    degree: 'Home Renovation Construction Technology Certificate' ,
    institution: 'York Construction Academy',
    year: 'March 2021',
  },
 
]

const WorkHistory = [
    {
      position: 'Customer Care Technician',
      company: 'Madison Group',
      location: 'Toronto, ON',
      duration: '03/2022 to 03/2023',
      responsibilities: [
        'Consistently completing work orders and service calls to exceed customer expectations as a representative of the company.',
        'Concluding investigative inspections, diagnosis, and repair, including drywall repair, minor fixture & millwork repair, painting, caulking, minor flooring, grouting, minor plumbing, and more.',
        'Communicating proficiently and professionally with supervisors, co-workers, clients, and trades.',
        'Documenting service notes, material & trade requirements, and providing status updates for all work orders.',
      ],
    },
    {
      position: 'Junior Carpenter',
      company: 'R-MAC Solutions Inc.',
      location: 'Toronto, ON',
      duration: '10/2021 to 03/2022',
      responsibilities: [
        'Effectively used power tools, hand tools, and various auxiliary instruments to complete projects within the allotted time frame.',
        'Determined materials needs, estimated production/materials costs, and prioritized tasks to avoid any project delays.',
        'Inspected each job site before and after project completion to ensure projects are completed properly and to standard.',
        'Researched and maintained full compliance with municipal building codes and health and safety regulations.',
        'Ensured client satisfaction on all projects by meeting client needs and finding solutions for any client concerns/requests.',
      ],
    },

  ]

  export default function Resume() {
    return (
      <div>
  
        {/* <section>
          <h3>Contact</h3>
          <p>
            <strong>Name:</strong> {ContactInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {ContactInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {ContactInfo.phone}
          </p>
        </section>
  
        <section>
          <h3>Websites</h3>
          <ul>
            {Websites.map((website, index) => (
              <li key={index}>
                <a href={website.url} target="_blank" rel="noopener noreferrer">
                  {website.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
  
        <section>
          <h3>Skills</h3>
          <div>
            <h4>Frontend</h4>
            <ul>
              {FrontendSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
  
          <div>
            <h4>Backend</h4>
            <ul>
              {BackendSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Additional Skills</h4>
            <ul>
              {AddSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </section> */}
  
        <section>
          
          {Education.map((edu, index) => (
            <div key={index} className='education'>
              <h3>Education</h3>
              <h4>{edu.degree}</h4>
              <p>{edu.institution}</p>
              <p>{edu.year}</p>
            </div>
          ))}
        </section>
  
        <section>
          
          {WorkHistory.map((job, index) => (
            <div key={index} className='exp'>
              <h3>Work History</h3>
              <h4>{job.position}</h4>
              <p>
                {job.company} - {job.location}
              </p>
              <p>{job.duration}</p>
              <ul>
                {job.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    );
  }
