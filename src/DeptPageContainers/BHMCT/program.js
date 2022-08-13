import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
class Program extends Component {
  state = {};
  ProgramHeading = {
    instanceID: "ProgramHeading",
    title: "PROGRAMME"
  };
  ProgramDescriptionOne = {
    instanceID: "ProgramDescriptionOne",
    title:
      "VJCET has secured approval from AICTE for conducting a four-year degree programme in Hotel Management and Catering Technology. The programme will follow the syllabus prescribed by APJ Abdul Kalam Technical University (KTU) to which the institution is affiliated. The approved intake capacity is of 60 students per batch."
  };
  ProgramDescriptionTwo = {
    instanceID: "ProgramDescriptionTwo",
    title:
      ""
  };
  ProgrammeHighlights={
    instanceID: "ProgramDescriptionTwo",
    title:"Programme Highlights"
  }
  ProgrammeHighlightsOne = {
    instanceID: "ProgrammeHighlightsOne",
    title:
      "1.	Approved by AICTE and Affiliated to A P J Abdul Kalam Technological University. (KTU)."
  };
  ProgrammeHighlightsTwo = {
    instanceID: "ProgrammeHighlightsTwo",
    title:
      "2.	Four-year programme divided into eight semesters."
  };
  ProgrammeHighlightsThree = {
    instanceID: "ProgrammeHighlightsThree",
    title:
      "3.	Highly experienced faculty with significant international exposure."
  };
  ProgrammeHighlightsFour = {
    instanceID: "ProgrammeHighlightsFour",
    title:
      "4.	Top notch infrastructure."
  };
  ProgrammeHighlightsFive = {
    instanceID: "ProgrammeHighlightsFive",
    title:
      "5.	Affordable annual fee of INR 75,000/-."
  };
  ProgrammeHighlightsSix = {
    instanceID: "ProgrammeHighlightsSix",
    title:
      "6.	Scholarships for meritorious students."
  };
  ProgrammeHighlightsSeven = {
    instanceID: "ProgrammeHighlightsSeven",
    title:
      "7.	Hostel facilities for boys and girls."
  };
  ProgrammeHighlightsEight = {
    instanceID: "ProgrammeHighlightsEight",
    title:
      "8.	Internship with internationally acclaimed hotel chains."
  };
  ProgrammeHighlightsNine = {
    instanceID: "ProgrammeHighlightsNine",
    title:
      "9.	100% assurance of placement abroad."
  };


  render() {
    return (
      <div className="Program" id="program">
        <HeadingOne data={this.ProgramHeading} />        
        <Bodythree data={this.ProgramDescriptionOne} />
        <Bodythree data={this.ProgramDescriptionTwo} />
        <HeadingTwo data={this.ProgrammeHighlights}/>
        <Bodythree data={this.ProgrammeHighlightsOne} />
        <Bodythree data={this.ProgrammeHighlightsTwo} />
        <Bodythree data={this.ProgrammeHighlightsThree} />
        <Bodythree data={this.ProgrammeHighlightsFour} />
        <Bodythree data={this.ProgrammeHighlightsFive} />
        <Bodythree data={this.ProgrammeHighlightsSix} />
        <Bodythree data={this.ProgrammeHighlightsSeven} />
        <Bodythree data={this.ProgrammeHighlightsEight} />
        <Bodythree data={this.ProgrammeHighlightsNine} />

        {/*<b><a href="https://vjcet.org/downloads/academic/ACADEMICS.docx" target="_blank" rel="noopener noreferrer">ACADEMICS</a></b><br /><br />
        <b><a href="https://vjcet.org/downloads/academic/Curriculum2020.pdf" target="_blank" rel="noopener noreferrer">CURRICULUM 2020</a></b><br /><br />        
        <b><a href="https://vjcet.org/downloads/academic/MBARegulations2020.pdf" target="_blank" rel="noopener noreferrer">REGULATIONS</a></b><br /><br />
        <b><a href="https://vjcet.org/downloads/academic/MBASyllabus2020.pdf" target="_blank" rel="noopener noreferrer">S1&S2 SYLLABUS</a></b><br /><br />
        <b><a href="https://vjcet.org/downloads/academic/MBAS3S4Syllabus.pdf" target="_blank" rel="noopener noreferrer">S3&S4 SYLLABUS</a></b><br /><br />*/}
      
      </div>
    );
  }
}

export default Program;
