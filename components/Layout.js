import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';


export default function Layout ({ children }) {
  return (
    <div className='layout'>
        <Head>
            <link rel="stylesheet" href='../public/styles.css' />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        
        
        </Head>
            <Navbar />
            <div className='main'>{children}</div>
            <Footer />
    </div>
  );
}

