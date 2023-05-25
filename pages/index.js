import React from 'react';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Resume from '../components/Resume';
import Head from 'next/head';
import '../public/styles.css';

export default function Home() {
  return (
    <>
        <Head>
            <title>Arjay Beltran</title>
        </Head>
      <h1>ARJAY BELTRAN</h1>
      <h2>Junior Software Engineer</h2>
      <Layout>
        <div className="container">
          {/* bio */}
          <section id="bio" className="section">
            <h1 className="title">Welcome to My Portfolio</h1>
            <Bio />
          </section>

          {/* projects */}
          <section id="projects" className="section">
            <h2 className="title">Projects</h2>
            <Projects />
          </section>

          {/* resume */}
          <section id="resume" className="section">
            <h2 className="title">Resume</h2>
            <Resume />
          </section>
        </div>
      </Layout>
    </>
  );
}
