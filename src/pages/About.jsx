import React from 'react'
import Aboutimage from "../assets/multiplePizzas.jpeg";
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${Aboutimage})` }}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
           accusamus, omnis laborum maiores corporis autem?</p>
      </div>
    </div>
  );
}

export default About