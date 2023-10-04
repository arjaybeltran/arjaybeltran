import React from 'react';



export default function Bio() {

    const bio = 'I transitioned from Home Renovation to Software Engineering driven by curiosity and problem-solving. Proficient in JavaScript, Express, Node.js, Python, React, HTML, CSS, MVC framework, and REST APIs, I excel in collaboration and efficient code management using Git.'

    const biop2 = 'With a solid foundation in software development principles, project management, and attention to detail from my background, I bring a unique perspective to finding innovative solutions. As a lifelong learner, I adapt swiftly, stay updated on industry trends, and thrive in collaborative environments.'

    const biop3 = 'Effective communication and teamwork are natural strengths of mine, making me an ideal, results-oriented software engineer ready to make a meaningful impact.'

    const biop4 = `When I'm not coding, you can find me pursuing my hobbies. I'm passionate about playing basketball and enjoying online games, and spending time with my dog. These activities help me unwind and foster a balance between work and leisure.`
  
    const summary = `I'm a software engineer who's all about that hands-on, DIY ethos – just like my background in home renovation. I've got the chops in various programming languages and frameworks, and I really thrive when I'm part of a team. My knack for catching the little things and my experience keeping projects on track help me come up with solutions that are both sleek and efficient. I'm always up for learning something new, and I make sure to stay in the loop with the latest tech trends. Let's connect and see how we can team up to make some serious waves in the software engineering world!`
  
    const heading = `Crafting innovative code with a DIY spirit, I'm your software engineer for sleek, efficient solutions that ride the tech trend waves.`
    return (
    <div>
      <div className='word'>
        <p>&lt;html&gt;</p>
        <p className='body'>&lt;body&gt;</p>
        <p className='para'>&lt;p&gt;</p>
      </div>
      <p className='bio-text'>{heading}</p>
      {/* <p className='bio-text'>{biop2}</p>
      <p className='bio-text'>{biop3}</p>
      <p className='bio-text'>{biop4}</p> */}
      <div className='word'>
        <p className='para'>&lt;/p&gt;</p>
        <p className='body'>&lt;/body&gt;</p>
        <p>&lt;/html&gt;</p>
        
        
      </div>

    </div>
  );
}
