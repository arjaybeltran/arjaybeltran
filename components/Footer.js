import React from 'react';


import { RiFileDownloadFill } from 'react-icons/ri'

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/Arjybltrn" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon"  />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/arjaybeltran" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon"  />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footer-icon"  />
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1OepyQ4JwhShC-GJQkhqm1eNV8arHvhGD/view?usp=share_link" target="_blank" rel="noopener noreferrer">
            <RiFileDownloadFill className="footer-icon"   />
          </a>
        </li>
      </ul>
    </footer>
  );
}
