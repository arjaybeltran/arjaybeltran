import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  return (
    <div className='left-el'>
      <h1>ARJAY BELTRAN</h1>
      <nav className='navbar'>
        <ul>
          <li>
            <ScrollLink
              to='bio'
              spy={true}
              smooth={true}
              offset={-100} // Adjust the offset value according to your margin
              duration={50}
            >
              BIO
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='projects'
              spy={true}
              smooth={true}
              offset={-100} // Adjust the offset value according to your margin
              duration={50}
            >
              PROJECTS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='resume'
              spy={true}
              smooth={true}
              offset={-100} // Adjust the offset value according to your margin
              duration={50}
            >
              RESUME
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
