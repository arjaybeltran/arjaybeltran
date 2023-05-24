import React from 'react';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Resume from '../components/Resume';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <>
    <h1> ARJAY BELTRAN </h1>
    <h2>Junior Software Engineer</h2>
    
    <Layout>


      <div className={styles.container}>

        
        {/* bio */}
        <section className={styles.section}>
          <h1 id="bio" className={styles.title}>Welcome to My Portfolio</h1>
          <Bio />
        </section>


        {/* projects */}
        <section className={styles.section}>
          <h2 id="projects" className={styles.title}>Projects</h2>
          <Projects />
        </section>

        {/* resume */}
        <section className={styles.section}>
          <h2 id="resume" className={styles.title}>Resume</h2>
          <Resume />
        </section>


        {/* socials */}
        <section className={styles.section}>
          <h2 className={styles.title}>Connect with Me</h2>
          <ul>
            <li>
              <a className={styles.link} href="https://github.com/your-username">GitHub</a>
            </li>
            <li>
              <a className={styles.link} href="https://linkedin.com/in/your-profile">LinkedIn</a>
            </li>
          </ul>
        </section>

      </div>
    </Layout>
    </>
  )
}
