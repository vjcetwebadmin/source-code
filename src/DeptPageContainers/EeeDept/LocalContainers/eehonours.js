import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honours from "../../../Components/honours";
import "./honours.css";
class Eehonours extends Component {
  state = {};
  EehonoursHeading = {
    instanceID: "EehonoursHeading",
    title: "Electrical & Electronics Engineering"
  };
  Eehonours1 = {
    instanceID: "eehonours1",
    image: "Honours/eehonours1.JPG",
    width: "30%",
    name: "Jeswin Jose",
    content:
      "Secured First Rank in B.Tech Electrical & Electronics Engineering May 2017"
  };
  Eehonours2 = {
    instanceID: "eehonours2",
    image: "Honours/eehonours2.JPEG",
    width: "30%",
    name: "Devika K B",
    content:
      "Secured Second Rank in B.Tech Electrical & Electronics Engineering May 2010"
  };
  Eehonours3 = {
    instanceID: "eehonours3",
    image: "Honours/eehonours3.JPEG",
    width: "30%",
    name: "Breeza Paulose",
    content:
      "Secured Second Rank in B.Tech Electrical & Electronics Engineering May 2009"
  };
  Eehonours4 = {
    instanceID: "eehonours4",
    image: "Honours/eehonours4.JPEG",
    width: "30%",
    name: "Roseline Baby",
    content:
      "Secured Second Rank in B.Tech Electrical & Electronics Engineering May 2008"
  };
  Eehonours5 = {
    instanceID: "eehonours5",
    image: "Honours/eehonours5.JPEG",
    width: "30%",
    name: "Ashna Joseph",
    content:
      "Secured Third Rank in B.Tech Electrical & Electronics Engineering May 2008"
  };
  Eehonours6 = {
    instanceID: "eehonours6",
    image: "Honours/eehonours6.jpg",
    width: "30%",
    name: "Reshma Sajeev",
    content:
      "Secured Seventh Rank in B.Tech Electrical & Electronics Engineering May 2018"
  };

  render() {
    return (
      <div className="honours">
        <HeadingOne data={this.EehonoursHeading} />
        <div className="photos">
        <div>
            <Honours data={this.Eehonours6} />
          </div>
          <div>
            <Honours data={this.Eehonours1} />
          </div>
          <div>
            <Honours data={this.Eehonours2} />
          </div>
          <div>
            <Honours data={this.Eehonours3} />
          </div>
          <div>
            <Honours data={this.Eehonours4} />
          </div>
          <div>
            <Honours data={this.Eehonours5} />
          </div>
        </div>
      </div>
    );
  }
}

export default Eehonours;
