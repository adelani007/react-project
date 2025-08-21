import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from "../assets/pizza.jpeg"

import "../styles/Home.css"

 

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="pizzaHeader">
        <h1 className="mb-5">Sidikat Aduke's PIZZA</h1>
        <p className='bg-black w-[30rem]'>A SAVORY MIXTURE TYPICALLY MADE TO FIT ANY TASTE</p>
        <Link to="/Menu">
          <button className='mt-5'>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home