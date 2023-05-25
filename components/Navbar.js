import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
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
              to='bio'
              spy={true}
              smooth={true}
              offset={-150} // Adjust the offset value according to your margin
              duration={50}
            >
              // bio.
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='projects'
              spy={true}
              smooth={true}
              offset={-150} // Adjust the offset value according to your margin
              duration={50}
            >
              // projects.
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='resume'
              spy={true}
              smooth={true}
              offset={-150} // Adjust the offset value according to your margin
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
