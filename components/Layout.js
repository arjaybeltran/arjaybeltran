import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';


export default function Layout ({ children }) {
  return (
    <div>
        <Head>
            <link rel="stylesheet" href='../public/styles.css' />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <Navbar />
            <div>{children}</div>
        <Footer />
    </div>
  );
}

