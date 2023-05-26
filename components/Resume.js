import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
         'I consistently exceed customer expectations by completing work orders and service calls as a company representative. I excel in inspections, diagnosis, and repair, including tasks like drywall repair, painting, minor plumbing, and more. I communicate professionally with supervisors, co-workers, clients, and trades, while documenting service notes and providing timely updates for all work orders.',
      ],
    },
    {
      position: 'Junior Carpenter',
      company: 'R-MAC Solutions Inc.',
      location: 'Toronto, ON',
      duration: '10/2021 to 03/2022',
      responsibilities: [
        'I efficiently utilized power tools, hand tools, and auxiliary instruments to meet project deadlines. I assessed material requirements, estimated production costs, and prioritized tasks to prevent delays. I conducted thorough inspections of job sites pre and post-project completion to ensure adherence to standards. I consistently researched and complied with building codes and safety regulations. By addressing client needs and resolving concerns promptly, I ensured overall client satisfaction on every project.',
      ],
    },

  ]

  export default function Resume() {
    useEffect(() => {
      AOS.init();
    }, []);

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
            <div key={index} className='education' data-aos="fade-right">
              <h3>Education</h3>
              <h4>{edu.degree}</h4>
              <p>{edu.institution}</p>
              <p>{edu.year}</p>
            </div>
          ))}
        </section>
  
        <section>
          
          {WorkHistory.map((job, index) => (
            <div key={index} className='experience' data-aos="fade-left">
              <h3>Work History</h3>
              <h4>{job.position}</h4>
              <p>
                {job.company} - {job.location}
              </p>
              <p>{job.duration}</p>
              <p className='resp'>{job.responsibilities}</p>
            </div>
          ))}
        </section>
      </div>
    );
  }
