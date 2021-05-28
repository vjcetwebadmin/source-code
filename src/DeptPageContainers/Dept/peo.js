import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
class PEO extends Component {
  state = {};
  peoHeading = {
    instanceID: "psoHeading",
    title: "Program Educational Objectives"
  };
  psoHeading = {
    instanceID: "psoHeading",
    title: "Program Specific Outcomes"
  };
  coHeading = {
    instanceID: "coHeading",
    title: "Course Outcome",
    link:""
  };
  
  render() {
    const { peo, pso,co } = this.props.data;
    return (
      <div className="PEO&PSO" id="peo&pso">
        <HeadingOne data={this.peoHeading} />
        {peo.map(i => (<Bodythree data={i} />))}
        <HeadingOne data={this.psoHeading} />
        {pso.map(i => (<Bodythree data={i} />))}
        <HeadingOne data={this.coHeading} />
      {/*{<a href={co.link} target="_blank" rel="noopener noreferrer"><b>Click Here to download COs</b></a>}*/}
       <a href="https://vjcet.org/downloads/COs/CE.xlsx" target="_blank" rel="noopener noreferrer"><b>Click Here to download COs</b></a>
      </div>
    );
  }
}

export default PEO;
