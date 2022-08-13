import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import BodyOne from "../../Components/Texts/BodyOne";
class Vision extends Component {
  state = {};
  VisionHeading = {
    instanceID: "VisionHeading",
    title: "Vision"
  };
  VisionDescription = {
    instanceID: "VisionDescription",
    title:
      "To help students acquire the technical and inter-personal skills required for successfully securing gainful employment in the burgeoning Travel and Tourism Industry."
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1.	To put in place the best possible infrastructure and engage the most experienced staff in the Hospitality Industry to enable students to imbibe the knowledge and skills required to thrive in the industry."
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2.  To enable students to attain the intellectual and professional prowess to stay abreast of evolving technologies and trends in the Hospitality Sector."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3.  To provide students opportunities for internship with reputed hotel chains in India and abroad."
  };
  MissionListFour = {
    instanceID: "MissionListFour",
    title:
      "4.  To groom students not only to secure a successful career in the Travel and Tourism Industry, but also to be responsible citizens of the Country."
  };
  

  render() {
    return (
      <div>
        <div className="Vision&Mission" id="vision&mission">
          <HeadingOne data={this.VisionHeading} />
          <BodyOne data={this.VisionDescription} />
        </div>
        <div className="Mission" id="mission">
          <HeadingOne data={this.MissionHeading} />
          <Bodythree data={this.MissionListOne} />
          <Bodythree data={this.MissionListTwo} />
          <Bodythree data={this.MissionListThree} />
          <Bodythree data={this.MissionListFour} />
         
        </div>
      </div>
    );
  }
}

export default Vision;
