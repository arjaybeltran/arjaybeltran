import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const leftElHeight= 500;
  return (
    <div className='left-el'>
    
        <div className='profile'>
            <img className="profile-photo" src="/images/pp.jpeg" alt="profile photo" />
        <h1>arjay beltran</h1>
        </div>

        
      
      <nav className='navbar'>
        <ul>
          <li>
            <ScrollLink 
              className='navlink'
              to='bio'
              spy={true}
              smooth={true}
              offset={-leftElHeight} // Adjust the offset value according to your margin
              duration={50}
            >
              // bio.
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className='navlink'
              to='projects'
              spy={true}
              smooth={true}
              offset={-leftElHeight} // Adjust the offset value according to your margin
              duration={50}
            >
              // projects.
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className='navlink'
              to='resume'
              spy={true}
              smooth={true}
              offset={-leftElHeight} // Adjust the offset value according to your margin
              duration={50}
            >
              // experience.
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
