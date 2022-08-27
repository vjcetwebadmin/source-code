import React, { Component } from "react";
// import "../../node_modules/video-react/dist/video-react.css";
import "./promo.css";
import promovid from "./vjcet.mp4";
import poster from "./poster.png";
import ImageOne from "../Images/ImageOne";

class Promo extends Component {
  NBALogo = {
    instanceID: "HeaderNBALogo",
    image: "nbaac.png",
    width: "40%"
  };
  NAACLogo = {
    instanceID: "HeaderNAACLogo",
    image: "NAAC_LOGO.png",
    width: "50%"
  };
  render() {
    return (
      <div className="background-video">
        <video id="background-video" loop autoPlay muted poster={poster}>
          <source src={promovid} type="video/mp4" />
          <source src={promovid} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        {/*<div>
          <div class="overlay-desc-logo">
            <ImageOne data={this.NBALogo} /> 
            <ImageOne data={this.NAACLogo} /> 
          </div>
        </div>*/}
        <div class="overlay-desc">
          <h1>VJC</h1>
        </div>
      </div>
    );
  }
}

export default Promo;
