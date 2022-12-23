import React from "react";
import homeimg from "../Images/homeimg.PNG";
import { NavLink } from "react-router-dom";
export default function Card(props) {
  return (
    <>
      <div className="card">
        <h2>{props.title1}</h2>
        <img src={props.imgSource} alt="service1" className="serviceImg" />
        <p>{props.desc1}</p>
        <div className="btnBox">
          <div className="btn">
            <NavLink exact to="/about" className="readMore">
              {props.btnservice}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
