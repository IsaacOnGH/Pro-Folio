import React from 'react';

const AboutMe = () => {
    return (
      <section style={{ textAlign: 'center' }}>
        <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Isaac Melanson" style={{ width: '200px', maxWidth: '100%', height: 'auto' }}/>
        <p>Hello! My name is Isaac Melanson. I have worked in the retail space for 12 years and am excited to transition to full stack developing. I have a detail-oriented approach to my work, drive results through communication, and foster a growth mindset in both professional and personal life. I look forward to connecting with you soon!</p>
      </section>
    );
  };
  

export default AboutMe;
