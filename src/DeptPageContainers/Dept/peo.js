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
        {co.map(i => <a href={i.link} target="_blank" rel="noopener noreferrer"><b>Click Here to download COs</b></a>)}

        {/** if need any other data then like side 
         {co.map(i => <div><Bodythree data={i}/><a href={i.link} target="_blank" rel="noopener noreferrer"><b>Click Here to download COs</b></a></div>)}*/}
        
         </div>
    );
  }
}

export default PEO;
