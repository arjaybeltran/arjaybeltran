import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { CgBoy } from 'react-icons/cg';
import { RiAppsLine } from 'react-icons/ri';
import { HiOutlineLightBulb } from 'react-icons/hi';

export default function Navbar() {
  const [offset, setOffset] = useState(-120); // Default offset for larger screens

  useEffect(() => {
    // Update offset based on screen width
    const updateOffset = () => {
      if (window.innerWidth <= 845) {
        setOffset(-120); // Adjust offset for smaller screens
      } else {
        setOffset(-140); 
      }
    };

    // Initial update
    updateOffset();

    // Listen for window resize events and update offset accordingly
    window.addEventListener('resize', updateOffset);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  return (
    <div className='left-el'>
      <div className='profile'>
        {/* <img className="profile-photo" src="/images/pp.jpeg" alt="profile photo" /> */}
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
              offset={offset}
              duration={50}
            >
              <CgBoy className='nav-icon' /> bio;
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className='navlink'
              to='projects'
              spy={true}
              smooth={true}
              offset={offset}
              duration={50}
            >
              <RiAppsLine className='nav-icon' /> projects;
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className='navlink'
              to='resume'
              spy={true}
              smooth={true}
              offset={offset}
              duration={50}
            >
              <HiOutlineLightBulb className='nav-icon' /> experience;
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
