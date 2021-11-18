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
      "Moulding professionals catering to research, innovation and entrepreneurial developments for global digitalization"
  };
  MissionHeading = {
    instanceID: "MissionHeading",
    title: "Mission"
  };
  MissionListOne = {
    instanceID: "MissionListOne",
    title:
      "1.	To inculcate research culture for design and innovative development towards a better world."
  };
  MissionListTwo = {
    instanceID: "MissionListTwo",
    title:
      "2. To guide and mould the students to become globally competent professionals with ethical values."
  };
  MissionListThree = {
    instanceID: "MissionListThree",
    title:
      "3. To generate innovative ideas, and disseminate it through quality publications."
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
        </div>
      </div>
    );
  }
}

export default Vision;
