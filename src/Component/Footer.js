import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Css/FooterStyle.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container container-flex">
          <div className="icons">
            <LinkedInIcon className="icon" />
            <TwitterIcon className="icon" />
            <FacebookIcon className="icon" />
          </div>
          <div className="line">
            <hr />
            <hr />
          </div>
          <div className="copyright">
            <p>All rights reserved &copy;</p>
            <p>Made with Love by Vijay Shankar</p>
          </div>
        </div>
      </footer>
    </>
  );
}
