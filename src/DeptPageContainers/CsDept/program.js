import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import HeadingThree from "../../Components/Texts/HeadingThree";
import Bodythree from "../../Components/Texts/BodyThree";
class Program extends Component {
  state = {};
  ProgramHeading = {
    instanceID: "ProgramHeading",
    title: "Program"
  };
  ProgramHeading1 = {
    instanceID: "ProgramHeading",
    title: "B.Tech Programs"
  };
  ProgramHeading2 = {
    instanceID: "ProgramHeading",
    title: "M.Tech Program"
  };
  ProgramDescriptionOne = {
    instanceID: "ProgramDescriptionOne",
    title:
      "The Department of Computer Science and Engineering offers the following programs."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      "B.Tech Computer Science and Engineering has started in the year 2001 with an intake of 60 students per batch. Later in July 2007 the intake is amplified to 120 students per batch."
  };
  ProgramDescription3 = {
    instanceID: "ProgramDescription3",
    title:
      "B.Tech Computer Science and Design has started in the year 2021 with an intake of 60 students. The course aims to mould engineers with good programming and design skills."
  };
  ProgramDescription4 = {
    instanceID: "ProgramDescription4",
    title:
      "The B.Tech program was affiliated to Mahatma Gandhi University from 2001 to 2014 admissions. From 2015 admission onwards, the B.Tech program is affiliated to APJ Abdul Kalam Kerala Technological University (KTU)."
  };
  ProgramDescription5 = {
    instanceID: "ProgramDescription5",
    title:
      "Postgraduate program in Computer Science and Engineering has started in the year 2010 with an intake of 18 students per batch."
  };
  ProgramDescription6 = {
    instanceID: "ProgramDescription6",
    title:
      "The M.Tech programs was affiliated to Mahatma Gandhi University from 2010 to 2014 admissions. From 2015 admission onwards, the M.Tech program is affiliated to APJ Abdul Kalam Kerala Technological University (KTU)."
  };
  render() {
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.ProgramHeading} />        
        <Bodythree data={this.ProgramDescriptionOne} />
        <br />
        <HeadingThree data={this.ProgramHeading1} />
        <Bodythree data={this.ProgramDescriptionTwo} />
        <Bodythree data={this.ProgramDescription3} />
        <Bodythree data={this.ProgramDescription4} />
        <HeadingThree data={this.ProgramHeading2}/>
        <Bodythree data={this.ProgramDescription5} />
        <Bodythree data={this.ProgramDescription6} />

      </div>
    );
  }
}

export default Program;
