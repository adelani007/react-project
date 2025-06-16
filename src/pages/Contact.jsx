import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>

      <div className="rightSide">
        <h1>Contact Us</h1>
        <form action="">
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Enter Full Name" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Your Email" />
          <label htmlFor="mesage">Message</label>

          <textarea
            placeholder="Enter Your Message"
            name="message"
            id=""
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact