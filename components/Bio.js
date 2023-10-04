import React from 'react';



export default function Bio() {

    const summary = `I'm a software engineer who's all about that hands-on, DIY ethos – just like my background in home renovation. I've got the chops in various programming languages and frameworks, and I really thrive when I'm part of a team. My knack for catching the little things and my experience keeping projects on track help me come up with solutions that are both sleek and efficient. I'm always up for learning something new, and I make sure to stay in the loop with the latest tech trends. Let's connect and see how we can team up to make some serious waves in the software engineering world!`
  
    const heading = `Crafting innovative code with a DIY spirit, I'm your software engineer for sleek, efficient solutions that ride the tech trend waves.`
    
    return (
    <div className='bio'>
      <div className='word'>
        <p>&lt;html&gt;</p>
        <p className='body'>&lt;body&gt;</p>
        <p className='para'>&lt;p&gt;</p>
      </div>
      <p className='bio-text'>{heading}</p>
      <div className='word'>
        <p className='para'>&lt;/p&gt;</p>
        <p className='body'>&lt;/body&gt;</p>
        <p>&lt;/html&gt;</p>        
      </div>
    </div>
  );
}
