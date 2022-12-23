import React from "react";
import logo from "../Images/logo.PNG";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import "../Css/ListStyle.css";

export default function List() {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <nav>
            <div className="list">
              <NavLink
                exact
                to="/"
                className="ListItems"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/about"
                className="ListItems"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavLink
                exact
                to="/services"
                className="ListItems"
                activeClassName="active"
              >
                Services
              </NavLink>
              <NavLink
                exact
                to="/contact"
                className="ListItems"
                activeClassName="active"
              >
                Contact
              </NavLink>
              <NavLink
                exact
                to="/policy"
                className="ListItems"
                activeClassName="active"
              >
                Policy
              </NavLink>
            </div>
          </nav>
          <div className="icons">
            <SearchIcon className="icon" />
            <AccountCircleIcon className="icon" />
            <CallIcon className="icon" />
          </div>
        </div>
      </header>
    </>
  );
}
