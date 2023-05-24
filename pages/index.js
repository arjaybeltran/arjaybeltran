import React from 'react';
import Layout from '../components/Layout';
import Bio from '@/components/Bio';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import '../styles/styles.module.css'


export default function Home() {
  return (
    <main>
      <section>
        <h1>ARJAY BELTRAN</h1>
        <h2>Software Engineer</h2>
      </section>

    <Layout>

    <div className='bio-container'>
        <Bio />
    </div>

    <div className='projects-container'>
        <Projects />
    </div>

    <div className='resume-container'>
        <Resume />
    </div>

    

     
     

    </Layout>
    </main>
  )
}