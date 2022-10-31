import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import BodyOne from "../../Components/Texts/BodyOne";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";
import { CardTitle } from "reactstrap";
class BhmctBrochure extends Component {
  state = {};
  BrochureHeading = {
    instanceID: "BrochureHeading",
    title: "BROCHURE"
  };
  BrochureDescription = {
    instanceID: "BrochureDescription",
    title:
      ""
  };

  render() {
    return (
      <div>
        <div className="BhmctBrochure" id="bhmctbrochure">
          <HeadingOne data={this.BrochureHeading} />
          {/*<BodyOne data={this.AdmissionDescription} />*/}
          <iframe src="https://vjcet.org/downloads/bhmct/BHMCTProspectus.pdf" width="96%" zoom="80%" height="850" title="Campus Map" align="center"></iframe> 
        </div>
     
        <p></p>
        
      </div>
    );
  }
}

export default BhmctBrochure;
