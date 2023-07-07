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
    <div className='background-img'>
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
          <div className="phrase-container">
            <div className="phrase phrase-1">I am an alien enthusiast just like you</div>
            <div className="phrase phrase-2">I would take a souvenir from a UFO</div>
            <div className="phrase phrase-3">Reptilian people are among us</div>
            <div className="phrase phrase-4">Count to ten if you're not an alien</div>
            <div className="phrase phrase-5">Men in Black was my first likeable alien movie</div>
          </div>
        </div>
        <h1 className="rotating-text">About Me</h1>
      </div>
    </div>
  );
};

export default About;
