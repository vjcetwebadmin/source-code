import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honours from "../../../Components/honours";
import "./honours.css";
class Mehonours extends Component {
  state = {};
  MehonoursHeading = {
    instanceID: "MehonoursHeading",
    title: "Mechanical Engineering"
  };
  Mehonours1 = {
    instanceID: "mehonours1",
    image: "Honours/mehonours1.jpg",
    width: "30%",
    name: "Deepu P",
    content: "Secured 1st Rank in B.Tech Mechanical Engineering May 2006"
  };
  Mehonours2 = {
    instanceID: "mehonours2",
    image: "Honours/mehonours2.JPEG",
    width: "30%",
    name: "Ms. Anju Joy",
    content: "Secured 2nd Rank in M.Tech May 2013"
  };
  Mehonours3 = {
    instanceID: "mehonours3",
    image: "Honours/mehonours3.JPEG",
    width: "30%",
    name: "Ms. Shari S Nair",
    content: "Secured 3rd Rank in M.Tech May 2013"
  };
  Mehonours4 = {
    instanceID: "mehonours4",
    image: "Honours/mehonours4.jpg",
    width: "30%",
    name: "Jyothin Mohan",
    content: "Secured 7th Rank in B.Tech Mechanical Engineering May 2018"
  };
  render() {
    return (
      <div className="honours">
        <HeadingOne data={this.MehonoursHeading} />
        <div className="photos">
          <div>
          <Honours data={this.Mehonours4} />
          </div>
          <div>
            <Honours data={this.Mehonours2} />
          </div>
          <div>
            <Honours data={this.Mehonours3} />
          </div>
          <div>
            <Honours data={this.Mehonours1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Mehonours;
