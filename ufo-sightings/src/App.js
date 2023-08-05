import Navigation from "./Navigation"
import Memes from "./pages/Memes.js"
import Home from "./pages/Home"
import About from "./pages/About"
import Sightings from "./pages/Sightings"
import Media from "./pages/Media"
import './App.css';
import React from 'react';
import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navigation />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ufo-sightings-app" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sightings" element={<Sightings />} />
        <Route path="/media" element={<Media />} />
        <Route path="/memes" element={<Memes />} />
      </Routes>
    </div>
  </>
  )
}

export default App;