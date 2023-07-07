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
      <div className="animation-container">
        <div className="moon-container">
          
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_Tkgg8F37jX.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="letter-container">
        <div className="letter letter-1">I am an alien enthusiast just like you</div>
        <div className="letter letter-2">I would take a souvenir from a UFO</div>
        <div className="letter letter-3">Reptilian people are among us</div>
        <div className="letter letter-4">Count to ten if you're not an alien</div>
        <div className="letter letter-5">Men in Black was my first likeable alien movie</div>
        </div>

      </div>
      <h1 className="rotating-text">About Me</h1>
    </div>
  );
};

export default About;
