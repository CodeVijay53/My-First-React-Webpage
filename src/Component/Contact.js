import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/ContactStyle.css";
export default function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <form className="contact">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter your name"></input>
      </form>
      <form className="contact">
        <label htmlFor="name">Email</label>
        <input type="email" placeholder="Enter your email"></input>
      </form>
      <form className="contact">
        <label htmlFor="mobile">Mobile</label>
        <input type="text" placeholder="Enter your mobile number"></input>
        <div className="btnBox">
          <div className="btn">
            <NavLink exact to="/" className="readMore">
              Submit Details
            </NavLink>
          </div>
        </div>
      </form>
    </>
  );
}
