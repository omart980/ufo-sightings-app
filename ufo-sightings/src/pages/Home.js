import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
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

    // Clean up the dynamically added script and animation container
    return () => {
      document.body.removeChild(lottieScript);
      document.getElementById('root').removeChild(lottieContainer);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="blue_box p-5">
        <h1 className="title">If you believe in extraterrestrials...<br /> welcome!</h1>
        <p className="description">Navigate through the navigation bar</p>
      </div>
    </div>
  );
};

export default Home;

