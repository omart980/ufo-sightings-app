import "./Memes.css";
import React, { useState } from "react";

import Aliencow from '../images/Aliencow.jpeg';
import meme2021 from '../images/meme2021.jpg'
import alienvspredator from '../images/alienvspredator.jpg'
import americandad from '../images/americandad.jpg'
import baby from '../images/baby.jpg'
import couch from '../images/couch.jpg'
import crudo from '../images/crudo.jpg'
import drugs from '../images/drugs.jpg'
import everywhere from '../images/everywhere.jpg'
import hey from '../images/hey.jpg'
import humans from '../images/humans.jpg'
import idioma from '../images/idioma.jpg'
import job from '../images/job.jpg'
import meeting from '../images/meeting.jpg'
import millionaire from '../images/millionaire.jpg'
import money from '../images/money.jpg'
import otravez from '../images/otravez.jpg'
import overhead from '../images/overhead.jpeg'
import selfparking from '../images/selfparking.jpeg'
import simpsons from '../images/simpsons.jpg'
import toiletpaper from '../images/toiletpaper.jpg'
import toystory from '../images/toystory.jpeg'
import truth from '../images/truth.jpeg'

const images = [
  Aliencow, meme2021, alienvspredator, americandad, baby, couch, crudo,
  drugs, everywhere, hey, humans, idioma, job, meeting, millionaire, money,
  otravez, overhead, selfparking, simpsons, toiletpaper, toystory, truth,
];

function Memes() {
  const [currentImage, setImage] = useState(images[0]);

function handleClick() {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImage(images[randomIndex]);
}

  return (
    <div className="display">
      <img src={currentImage} alt="Random" style={{ width: "75%", height: "auto" }}/>
      <br />
      <button className="button_click" onClick={handleClick}>Generate random picture</button>
    </div>
  );
}

export default Memes;
