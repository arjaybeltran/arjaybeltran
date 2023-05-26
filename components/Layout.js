
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


  

export default function Layout ({ children }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='layout'>
            <Navbar />
            <div className='main'>{children}</div>
            <Footer />
    </div>
  );
}

