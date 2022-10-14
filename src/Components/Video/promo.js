import React, { Component } from "react";
// import "../../node_modules/video-react/dist/video-react.css";
import "./promo.css";
import promovid from "./vjcet.mp4";
import poster from "./poster.png";
import ImageOne from "../Images/ImageOne";

class Promo extends Component {
  NBANAACLogo = {
    instanceID: "HeaderNBANAACLogo",
    image: "NAAC_NBA_LOGO.png",
    width: "70%"
  };
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
        
          <div class="overlay-desc-logo">
             
            <ImageOne data={this.NBANAACLogo} class="naac-nba-logo" /> 
          </div>
        
        <div class="overlay-desc">
        {/*<ImageOne data={this.NBANAACLogo} />*/}
          <h1>VJC</h1>
          
        </div>
      </div>
    );
  }
}

export default Promo;
