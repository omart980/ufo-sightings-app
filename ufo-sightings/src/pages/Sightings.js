import React from "react";
import "./Sightings.css";
import star from "../background_image/sightings_star.png";

const Sightings = () => {
  return (
    <div className="image-container">
      <div className="container">
        <div className="star-images">
          <img className="star-1" src={star} alt="star-1" />
        </div>
        <div className="images">
          <img className="star-2" src={star} alt="star-2" />
        </div>
        <div className="images">
          <img className="star-3" src={star} alt="star-3" />
        </div>
        <div className="images">
          <img className="star-4" src={star} alt="star-4" />
        </div>
        <div className="images">
          <img className="star-5" src={star} alt="star-4" />
        </div>
        <div className="images">
          <img className="star-6" src={star} alt="star-4" />
        </div>
        <div className="images">
          <img className="star-7" src={star} alt="star-4" />
        </div>
      </div>
    </div>
  );
};

export default Sightings;
