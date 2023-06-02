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
      "•	IT Department of VJCET was established in the year 2001 with an intake of 45 students."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "•	In 2002 the intake is amplified to 60 students."
  };
  ProgramDescriptionThree = {
    instanceID: "ProgramDescriptionThree",
    title:
      "•	The department provides its students an environment that stimulates their intellectual growth and personality development. "
  };
  ProgramDescriptionFour = {
    instanceID: "ProgramDescriptionFour",
    title:
      "•	Infrastructure facilities are excellent with well-equipped computer labs and classrooms."
  };
  ProgramDescriptionFive = {
    instanceID: "ProgramDescriptionFive",
    title:
      "•	The Department is accredited by NBA(National Board of Accreditation) on July 2018 for three years.  In 2021, the status of accreditation was extended for 1 year. In June 2022, the B.Tech program was re-accredited by NBA for three years till June 2025."
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
