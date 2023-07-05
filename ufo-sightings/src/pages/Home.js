import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  document.body.style = 'background: #000000;';
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
        style="width: 300px; height: 300px; margin: 0 auto;"
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
    <div className="blue_box p-5">
      <h1>If you believe in extraterrestrials...<br /> welcome!</h1>
      <p>Navigate through the navigation bar</p>
    </div>
  );
};

export default Home;
