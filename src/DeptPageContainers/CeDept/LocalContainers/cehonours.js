import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honours from "../../../Components/honours";
class Cehonours extends Component {
  state = {};
  CehonoursHeading = {
    instanceID: "CehonoursHeading",
    title: "Civil Engineering"
  };
  Cehonours1 = {
    instanceID: "cshonours1",
    image: "Honours/cehonour1.jpg",
    width: "30%",
    name: "Mariamol Mathew",
    content:
      "Tenth Rank in B.Tech May 2018"
  };
  render() {
    return (

      <div className="honours">
        <HeadingOne data={this.CehonoursHeading} />
        <div className="photos">
          <div>
            <Honours data={this.Cehonours1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cehonours;
