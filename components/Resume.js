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
    degree: 'Software Engineering Certificate' ,
    institution: 'General Assembly',
    year: 'Mar 2023 - May 2023',
  },
  {
    degree: 'Home Construction Technology Certificate' ,
    institution: 'York Construction Academy',
    year: 'Dec 2020 - Apr 2021',
  },
  {
    degree: 'Ontario College Advanced Diploma, Computer Programmer Analyst',
    institution: 'George Brown College',
    year: 'Sep 2015 - Apr 2017',
  },
  
]

const WorkHistory = [
    {
      position: 'Customer Care Technician',
      company: 'Madison Group',
      location: 'Toronto, ON',
      duration: 'Mar 2022 - Mar 2023',
      responsibilities: [
         'Completing work orders and service calls as a company representative. I excel in inspections, diagnosis, and repair, including tasks like drywall repair, painting, minor plumbing, and more. I communicate professionally with supervisors, co-workers, clients, and trades, while documenting service notes and providing timely updates for all work orders.',
      ],
    },
    {
      position: 'Junior Carpenter',
      company: 'R-MAC Solutions Inc.',
      location: 'Toronto, ON',
      duration: 'Oct 2021 - Mar 2022',
      responsibilities: [
        'Efficiently utilized power tools, hand tools, and auxiliary instruments to meet project deadlines. I assessed material requirements, estimated production costs, and prioritized tasks to prevent delays. I conducted thorough inspections of job sites pre and post-project completion to ensure adherence to standards. I consistently researched and complied with building codes and safety regulations. By addressing client needs and resolving concerns promptly, I ensured overall client satisfaction on every project.',
      ],
    },
    {
      position: 'Assistant Manager',
      company: 'UNIQLO',
      location: 'Toronto, ON',
      duration: 'Aug 2017 - July 2020',
      responsibilities: 
      [ 
        'Successfully achieving 100% target daily store sales, strategic planning and sales management were implemented. Store operations, including point-of-sale systems, inventory control, and coordination with branches and the warehouse, were overseen. Work safety and customer concerns were managed, emphasizing exceptional customer service. Additionally, daily meetings were conducted to align with goals, present product knowledge, and coordinate store activities.'
      ]
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
              <h4 className='date'>{edu.year}</h4>
              <h3>Education</h3>
              <h4>{edu.degree}</h4>
              <h4>{edu.institution}</h4>
              
            </div>
          ))}
        </section>
  
        <section>
          
          {WorkHistory.map((job, index) => (
            <div key={index} className='experience' data-aos="fade-left">
              <h4 className='date'>{job.duration}</h4>
              <h3>Work History</h3>
              <h4>{job.position}</h4>
              <h4>{job.company} - {job.location}</h4>
              
              <p className='resp'>{job.responsibilities}</p>
            </div>
          ))}
        </section>
      </div>
    );
  }
