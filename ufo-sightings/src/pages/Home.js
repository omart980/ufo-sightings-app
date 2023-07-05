import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    document.body.style = 'background: #000000;';
    const lottieScript = document.createElement('script');
    lottieScript.src =
      'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    document.body.appendChild(lottieScript);

    const lottieContainer = document.createElement('div');
    lottieContainer.innerHTML = `
      <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_fA5yqD.json"
        background="transparent"
        speed="1"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin-top: 50px"
        loop
        autoplay>
      </lottie-player>
    `;

    document.getElementById('root').appendChild(lottieContainer);

    const titleElement = titleRef.current;
    if (titleElement) {
      const text = titleElement.innerHTML;
      titleElement.innerHTML = ''; // Clear the original text

      let charIndex = 0;
      const typingEffect = setInterval(() => {
        if (charIndex < text.length) {
          titleElement.innerHTML += text.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typingEffect);
        }
      }, 100);
    }

    // Clean up the dynamically added script and animation container
    return () => {
      document.body.removeChild(lottieScript);
      document.getElementById('root').removeChild(lottieContainer);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="blue_box p-5">
        <h1 className="title" ref={titleRef}>
          If you believe in extraterrestrials....</h1>
      </div>
    </div>
  );
};

export default Home;
