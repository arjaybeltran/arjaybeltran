import React from 'react';

import { BsCode, BsCodeSlash } from 'react-icons/bs';

import { RiJavascriptFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress, 
  SiReact, 
  SiNextdotjs, 
  SiPython, 
  SiMongodb, 
  SiMongoose,
  SiPostgresql,
  SiPostman,
  SiGithub } from "react-icons/si";
import { TbApi } from "react-icons/tb";


export default function Bio() {

    const summary = `I'm a software engineer who's all about that hands-on, DIY ethos – just like my background in home renovation. I've got the chops in various programming languages and frameworks, and I really thrive when I'm part of a team. My knack for catching the little things and my experience keeping projects on track help me come up with solutions that are both sleek and efficient. I'm always up for learning something new, and I make sure to stay in the loop with the latest tech trends. Let's connect and see how we can team up to make some serious waves in the software engineering world!`
  
    const heading = `Crafting innovative code with a DIY spirit, I'm your software engineer for sleek, efficient solutions that ride the tech trend waves.`
    
    return (
    <div className='bio'>

      <div className='word'>
        <BsCode />     
      </div>

        <p className='bio-text'>{heading}</p>

      <div className='word'>
        <BsCodeSlash />
      </div>

      <div className='skills'>
        <h1 className='skillsTitle'>SKILLS</h1>
        <ul className='skillsList'>
          <li><RiJavascriptFill /></li>
          <li><DiNodejs /></li>
          <li><SiExpress /></li>
          <li><SiReact /></li>
          <li><SiNextdotjs /></li>
          <li><SiPython /></li>
          <li><SiMongodb /></li>
          <li><SiMongoose /></li>
          <li><SiPostgresql /></li>
          <li><TbApi /></li>
          <li><SiPostman /></li>  
          <li><SiGithub /></li>
        </ul>
      </div>
    </div>
  );
}
