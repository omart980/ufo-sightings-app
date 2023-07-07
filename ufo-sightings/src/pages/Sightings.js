import "./Sightings.css"
import React, { useState, useEffect } from "react"
import Image from "../backbround_image/arnold.webp";
import ImageTwo from "../backbround_image/roswell.webp";
import ImageThree from "../backbround_image/lights.jpeg.webp";

const Sightings = () => {
  const [text, setText] = useState("");
  const [fullText] = useState(
      "The origin of today’s fascination can be traced back to civilian pilot Kenneth Arnold. While flying his small aircraft near Washington's Mount Rainier on June 24, 1947, Arnold claimed to have seen nine blue, glowing objects flying fast—at an estimated 1,700 m.p.h.—in a \"V” formation. He first believed the objects to be some sort of new military aircraft—this was, after all, just two years after WWII and the first year of the Cold War—but the military confirmed there were no tests being conducted near Mount Rainier that day. When Arnold described the crafts' motion as similar to “a saucer if you skip it across water,” the media coined the now-ubiquitous phrase “flying saucer.”",
    );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 40)
    }
  }, [index])
  
  return (
    <div className="sightings_about">
      <h1>Here are the top famous sightings so far!</h1>
      <div className="sighting">
        <h2>Kenneth Arnold</h2>
        <img src={Image} width="600" height="400" alt="cam"/>
        <p>{text}

        </p>
      </div>

      <div className="sighting">
        <h2>Roswell</h2>
        <img src={ImageTwo} width="600" height="400" alt="cam"/>
        <p>
          In the summer of 1947, 
          rancher William “Mac” Brazel discovered mysterious debris in one of 
          his New Mexico pastures, including metallic rods, chunks of plastic 
          and unusual, papery scraps. After Brazel reported the wreckage, soldiers 
          from nearby Roswell Army Air Force Base came to retrieve the materials. 
          News headlines claimed that a “flying saucer” crashed in Roswell, 
          but military officials said it was only a downed weather balloon. 
        </p>
      </div>

      <div className="sighting">
        <h2>Lubbock Lights</h2>
        <img src={ImageThree} width="600" height="400" alt="cam"/>
        <p>
          On the evening of August 25, 1951, three science professors from Texas 
          Tech were enjoying an evening outdoors in Lubbock, when they looked up 
          and saw a semicircle of lights flying above them at a high speed. Over 
          the next few days, dozens of reports flooded in from across town—Texas 
          Tech freshman Carl Hart Jr., even snapped photos of the so-called Lubbock 
          Lights phenomenon, which were published in newspapers across the country 
          and LIFE magazine. 
          <br></br>
          Project Blue Book, which led the Air Force inquiries into UFOs, investigated 
          the events, and its official conclusion was that the lights were birds 
          reflecting the luminescence from Lubbock’s new street lamps. Many people 
          who saw the lights, however, refuse to accept this explanation, arguing 
          that the lights were flying too fast.
        </p>
      </div>
    </div>
  )
}
export default Sightings;
