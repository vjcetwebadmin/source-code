import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honours from "../../../Components/honours";
import "./honours.css";
class Echonours extends Component {
  state = {};
  EchonoursHeading = {
    instanceID: "EchonoursHeading",
    title: "Electronics & Communication Engineering"
  };
  Echonours1 = {
    instanceID: "echonours1",
    image: "Honours/echonours1.JPEG",
    width: "30%",
    name: "Meera M Nair",
    content: "Secured First Rank in M.Tech VLSI in May 2011"
  };
  Echonours2 = {
    instanceID: "echonours2",
    image: "Honours/echonours2.JPEG",
    width: "30%",
    name: "Jayaprasad K V",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2012"
  };
  Echonours3 = {
    instanceID: "echonours3",
    image: "Honours/echonours3.jpg",
    width: "30%",
    name: "Gayathri Anil",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2012"
  };
  Echonours4 = {
    instanceID: "echonours4",
    image: "Honours/echonours4.jpg",
    width: "30%",
    name: "Haripriya P",
    content: "Secured First Rank in M.Tech VLSI in May 2013"
  };
  Echonours5 = {
    instanceID: "echonours5",
    image: "Honours/echonours5.jpg",
    width: "30%",
    name: "Seena V P",
    content: "Secured Third Rank in M.Tech VLSI in May 2013"
  };
  Echonours6 = {
    instanceID: "echonours6",
    image: "Honours/echonours6.jpg",
    width: "30%",
    name: "Neenu Saju",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2016"
  };
  Echonours7 = {
    instanceID: "echonours7",
    image: "Honours/echonours7.jpg",
    width: "30%",
    name: "Deona Noble",
    content:
      "Secured Third Rank in B.Tech Electronics and Communication Engineering in May 2017"
  };
  Echonours8 = {
    instanceID: "echonours8",
    image: "Honours/echonours8.jpg",
    width: "30%",
    name: "Anjana Shaji",
    content:
      "Secured First Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  Echonours9 = {
    instanceID: "echonours9",
    image: "Honours/echonours9.jpg",
    width: "30%",
    name: "Minni Shaji",
    content:
      "Secured Seventh Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  Echonours10 = {
    instanceID: "echonours10",
    image: "Honours/echonours10.jpg",
    width: "30%",
    name: "Deepa S",
    content:
      "Secured Tenth Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  Echonours11 = {
    instanceID: "echonours11",
    image: "Honours/echonours11.jpg",
    width: "30%",
    name: "Minna Shaji",
    content:
      "Secured Tenth Rank in B.Tech Electronics and Communication Engineering in May 2018"
  };
  render() {
    return (
      <div className="honours">
        <HeadingOne data={this.EchonoursHeading} />
        <div className="photos">
          <div>
            <Honours data={this.Echonours8} />
          </div>
          <div>
            <Honours data={this.Echonours9} />
          </div>
          <div>
            <Honours data={this.Echonours10} />
          </div>
          <div>
            <Honours data={this.Echonours11} />
          </div>
          <div>
            <Honours data={this.Echonours7} />
          </div>
          <div>
            <Honours data={this.Echonours6} />
          </div>
          <div>
            <Honours data={this.Echonours4} />
          </div>
          <div>
            <Honours data={this.Echonours5} />
          </div>
          <div>
            <Honours data={this.Echonours2} />
          </div>
          <div>
            <Honours data={this.Echonours3} />
          </div>
          <div>
            <Honours data={this.Echonours1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Echonours;
