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
    <div className='background-image'>
      <main className="container d-flex justify-content-center align-items-center vh-100">
        <section>
          <section className="row">
            <section className="col rotating-text">
              <h1 className='text-white'>About Me</h1>
            </section>
          </section>

          <section className='row description row-cols-2 text-warning'>
            <section className="col p-5">I am an alien enthusiast just like you</section>
            <section className="col p-5">I once saw flashing lights in the sky</section>
            <section className="col p-5">Reptilian people are among us</section>
            <section className="col p-5">Count to ten if you're not an alien</section>
          </section>

          <section className="d-flex moon-container justify-content-center align-items-center">
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
    </div>
  );
};

export default About;


