import React from 'react'
import Aboutimage from "../assets/multiplePizzas.jpeg";
import "../styles/About.css"

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Aboutimage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Pizza is a popular baked Italian dish consisting of a flattened,
          usually round, bread base topped with tomato sauce, cheese, and
          various toppings. It's a globally enjoyed food, with diverse regional
          variations and toppings.{" "}
        </p>
      </div>
    </div>
  );
}

export default About