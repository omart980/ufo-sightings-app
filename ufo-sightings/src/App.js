import Navigation from "./Navigation"
import Memes from "./pages/Memes.js"
import Home from "./pages/Home"
import About from "./pages/About"
import Sightings from "./pages/Sightings"
import Shows from "./pages/Shows"
import './App.css';

import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);


function App() {
  return (
    <>
    <Navigation />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sightings" element={<Sightings />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/memes" element={<Memes />} />
      </Routes>
    </div>
  </>
  )
}

export default App;