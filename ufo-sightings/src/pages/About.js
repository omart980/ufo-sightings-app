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
    <main className="container background-image d-flex justify-content-center align-items-center vh-100">
      <section>
        <section className="row">
          <section className="col rotating-text">
            <h1 className='text-white'>About Me</h1>
          </section>
        </section>

        <section className='row row-cols-2 text-warning'>
          <section className="col p-5">I am an alien enthusiast just like you</section>
          <section className="col p-5">I would take a souvenir from a UFO</section>
          <section className="col p-5">Reptilian people are among us</section>
          <section className="col p-5">Count to ten if you're not an alien</section>
        </section>

        <section className="d-flex justify-content-center align-items-center moon-container"> {/* Center the animation */}
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_Tkgg8F37jX.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          >
          </lottie-player>
        </section>
      </section>
    </main>
  );
};

export default About;


