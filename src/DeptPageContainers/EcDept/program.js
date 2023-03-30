import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class Program extends Component {
  state = {};
  ProgramHeading = {
    instanceID: "ProgramHeading",
    title: "Program"
  };
  ProgramDescriptionOne = {
    instanceID: "ProgramDescriptionOne",
    title:
      "The department has about 24 teaching staff and 6 non teaching staffs."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "With technology becoming all pervasive in day-to-day life, opportunities for Electronic  Engineers are endless."
  };
  ProgramDescriptionThree = {
    instanceID: "ProgramDescriptionThree",
    title:
      "The ECE department at VJCET prepare students for careers in this constantly evolving discipline."
  };
  ProgramDescriptionFour = {
    instanceID: "ProgramDescriptionFour",
    title:
      ""
  };
  ProgramDescriptionFive = {
    instanceID: "ProgramDescriptionFive",
    title:
      ""
  };
  render() {
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.ProgramHeading} />
        <Bodythree data={this.ProgramDescriptionOne} />
        <Bodythree data={this.ProgramDescriptionTwo} />
        <Bodythree data={this.ProgramDescriptionThree} />
        <Bodythree data={this.ProgramDescriptionFour} />
        <Bodythree data={this.ProgramDescriptionFive} />
      </div>
    );
  }
}

export default Program;
