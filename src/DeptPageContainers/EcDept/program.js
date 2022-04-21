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
      "ECE Department aims to deepen the knowledge and skills of the students on the basic concepts and theories that will equip them in their professional work involving analysis, systems implementation, operation, production, and maintenance of the various applications in the field of Electronics and Communications Engineering."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "The Department of Electronics and Communication Engineering is providing quality education at both Undergraduate (UG) and Postgraduate (PG) levels."
  };
  ProgramDescriptionThree = {
    instanceID: "ProgramDescriptionThree",
    title:
      "The annual intake of the B. Tech. program is 60 students and that of the M. Tech. is 18."
  };
  ProgramDescriptionFour = {
    instanceID: "ProgramDescriptionFour",
    title:
      "The department has about 27 teaching staff and 6 non teaching staffs."
  };
  ProgramDescriptionFive = {
    instanceID: "ProgramDescriptionFive",
    title:
      "With technology becoming all pervasive in everyday life, opportunities for electronic engineers are endless. The ECE department at VJCET prepares students for careers in this constantly evolving discipline."
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
