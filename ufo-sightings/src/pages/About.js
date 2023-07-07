import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="animation-container">
        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_Tkgg8F37jX.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay></lottie-player>
      </div>
    </div>
  );
};

export default About;
