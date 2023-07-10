import "./Media.css"
import React, { useEffect } from 'react';

const Media = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="media-img">
      <div className="media-container">
        <div className="media-item">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_9lDRzD.json" alt="fileone"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="media-item">
          <lottie-player
            src="https://assets10.lottiefiles.com/datafiles/XdTBD1jKm9zeIJ5/data.json" alt="filetwo"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></lottie-player>
          <img src="d"/>
        </div>
      </div>
    </div>
  );
};


export default Media;