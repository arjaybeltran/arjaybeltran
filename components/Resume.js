import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactInfo = {
  name: 'Arjay Beltran',
  email: 'arjaybeltran16@gmail.com',
  phone: '+1 647-871-7125',
};

const Websites = [

  { name: 'Portfolio', url: 'https://arjaybeltran.com/' }, 
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
      position: 'Software Engineer Apprentice',
      company: 'General Assembly',
      location: 'Remote/Toronto',
      duration: 'Mar 2023 - June 2023',
      responsibilities: [
        "Developed full-stack applications featuring CRUD operations and RESTful APIs, incorporating JavaScript and React for front-end development and Python and Django for back-end functionality. Additionally, completed an intensive 450-hour Software Engineering Immersive program."],
    },
    {
      position: 'Customer Care Technician',
      company: 'Madison Group',
      location: 'Toronto, ON',
      duration: 'Mar 2022 - Mar 2023',
      responsibilities: [
        "Maintained a professional and client-centric approach, efficiently handling service calls and work orders as the company's representative. Demonstrated exceptional skills in inspections, diagnoses, repairs, and meticulous documentation, highlighting a strong problem-solving ability and unwavering attention to detail."
      ],
    },
    {
      position: 'Junior Carpenter',
      company: 'R-MAC Solutions Inc.',
      location: 'Toronto, ON',
      duration: 'Oct 2021 - Mar 2022',
      responsibilities: [
        "Utilized diverse problem-solving strategies and tools to consistently meet project deadlines and deliver top-quality outcomes. Demonstrated exceptional organizational skills in project planning, ensuring compliance with codes and safety standards, ultimately enhancing client satisfaction."      ],
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
