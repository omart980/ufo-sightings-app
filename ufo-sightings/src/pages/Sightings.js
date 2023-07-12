import React from "react";
import "./Sightings.css";
import star from "../background_image/sightings_star.png";

const Sightings = () => {
  return (
    <div className="image-container ">
      <div className="big-dipper">
        <div className="star-images">
          <a href="https://www.britannica.com/topic/unidentified-flying-object/Other-investigations-of-UFOs" target="_blank" rel="noopener noreferrer">
            <img className="star-1" src={star} alt="star-1" />
          </a>
        </div>
        <div className="star-images">
          <a href="https://www.smithsonianmag.com/smithsonian-institution/in-1947-high-altitude-balloon-crash-landed-roswell-aliens-never-left-180963917/" target="_blank" rel="noopener noreferrer">
            <img className="star-2" src={star} alt="star-2" />
          </a>
        </div>
        <div className="star-images">
          <a href="https://theweek.com/articles/905215/30-years-later-still-dont-know-what-really-happened-during-belgian-ufo-wave" target="_blank" rel="noopener noreferrer">
            <img className="star-3" src={star} alt="star-3" />
          </a>
        </div>
        <div className="star-images">
          <a href="https://youtu.be/JarEi97OsAU" target="_blank" rel="noopener noreferrer">
            <img className="star-4" src={star} alt="star-4" />
          </a>
        </div>
        <div className="star-images">
          <a href="https://airandspace.si.edu/stories/editorial/1947-year-flying-saucer" target="_blank" rel="noopener noreferrer">
            <img className="star-5" src={star} alt="star-5" />
          </a>
        </div>
        <div className="star-images">
          <a href="https://youtu.be/zaBBdS226Vk" target="_blank" rel="noopener noreferrer">
            <img className="star-6" src={star} alt="star-6" />
          </a>
        </div>
        <div className="star-images">
          <a href="https://www.mirror.co.uk/news/weird-news/ufo-spotted-bracknell-pubgoer-who-1961461" target="_blank" rel="noopener noreferrer">
            <img className="star-7" src={star} alt="star-7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sightings;
