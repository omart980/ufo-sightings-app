import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

document.body.style = 'background: #000000;';

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
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
      titleElement.innerHTML = '';

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

    return () => {
      document.body.removeChild(lottieScript);
      document.getElementById('root').removeChild(lottieContainer);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="text_box p-5">
        <h1
          className="title"
          ref={titleRef}
          style={{
            fontSize: screenWidth <= 768 ? '1.5rem' : '3rem',
            marginTop: screenWidth <= 768 ? '100px' : '',
          }}
        >
          If you believe in extraterrestrials.... welcome!
        </h1>
      </div>
    </div>
  );
};

export default Home;
