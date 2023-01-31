import Navbar from "./Navbar"
import Memes from "./pages/Memes.js"
import Home from "./pages/Home"
import About from "./pages/About"
import Sightings from "./pages/Sightings"
import Shows from "./pages/Shows"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
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