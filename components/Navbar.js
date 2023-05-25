import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <div className='left-el navbar'>
      <h1>ARJAY BELTRAN</h1>
      <nav>
        <ul>
          <li>
            <Link to='bio' smooth={true} duration={50}>
              BIO
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={50}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to='resume' smooth={true} duration={50}>
              RESUME
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
