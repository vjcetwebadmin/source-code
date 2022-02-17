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
      "A Dynamic Institute of Repute in Developing Management Professionals With Value Integration For Social Transformation."
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1.	Contributing to the socio-economic transformation of the focus region of the Institute."
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2.  Molding managers, entrepreneurs, and organizational leaders with strategic, orientation, inquisitive and innovate mind, integrity, and social commitment."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3.  Improving performance standards by benchmarking as well as by internal drive."
  };
  MissionListFour = {
    instanceID: "MissionListFour",
    title:
      "4.  Developing students with attributes as required by the business world and society."
  };
  MissionListFive = {
    instanceID: "MissionListFive",
    title:
      "5.  Promoting R&D in the frontier areas of knowledge as well as the demanding needs of society."
  };
  MissionListSix = {
    instanceID: "MissionListSix",
    title:
      "6.  Evolving and disseminating appropriate management practices."
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
          <Bodythree data={this.MissionListFive} />
          <Bodythree data={this.MissionListSix} />
        </div>
      </div>
    );
  }
}

export default Vision;
