import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class PEO extends Component {
  
  state = {};
  peoHeading = {
    instanceID: "psoHeading",
    title: "Programme Educational Objectives"
  };
  peoListOne = {
    instanceID: "peoListOne",
    title: "Our Graduates "
  };
  peoListTwo = {
    instanceID: "peoListTwo",
    title:
      "1.	Shall apply their skill-based knowledge attained during undergraduate education to adapt with the recent technological advancements and acquire a promising career."
  };
  peoListThree = {
    instanceID: "peoListThree",
    title:
      "2.	Shall possess critical thinking, professional skills and strong work ethics, to solve real world problems required to cater the needs of industry and to serve the society."
  };
  peoListFour = {
    instanceID: "peoListFour",
    title:
      "3.	Shall learn, apply and adapt to grow with the industrial needs thereby becoming a successful innovator in the challenging technological world."
  };
  peoListFive = {
    instanceID: "peoListFive",
    title:
      "4.	Shall have the competency to seek higher professional degrees, certifications and to do quality research work as an individual or as a team."
  };

  psoHeading = {
    instanceID: "psoHeading",
    title: "Programme Specific Outcomes"
  };
  psoListOne = {
    instanceID: "psoListOne",
    title:
      "1.	Able to apply the computational knowledge of data science, machine learning and deep learning to analyze, design and model novel applications."
  };
  psoListTwo = {
    instanceID: "psoListTwo",
    title:
      "2.	Ability to become an entrepreneur which provides engineering solutions for industrial and societal problems."
  };
  psoListThree = {
    instanceID: "psoListThree",
    title:
      "3.	Up-skilling in advanced data science, machine learning and deep learning technologies."
  };
 
  render() {
    return (
      <div className="PEO&PSO" id="peo&pso">
        <HeadingOne data={this.peoHeading} />
        <Bodythree data={this.peoListOne} />
        <Bodythree data={this.peoListTwo} />
        <Bodythree data={this.peoListThree} />
        <Bodythree data={this.peoListFour} />
        <Bodythree data={this.peoListFive} />
        <HeadingOne data={this.psoHeading} />
        <Bodythree data={this.psoListOne} />
        <Bodythree data={this.psoListTwo} />
        <Bodythree data={this.psoListThree} />
        <div className="HeadingOne">
            {/*<h1>Course Outcomes</h1>
            <a href="https://vjcet.org/downloads/COs/CSE.xlsx" target="_blank" rel="noopener noreferrer"><b>Click Here to download COs</b></a>*/}
        </div>
      </div>
    );
  }
}

export default PEO;
