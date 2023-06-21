import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import BodyOne from "../../Components/Texts/BodyOne";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";
import { CardTitle } from "reactstrap";
class BHMCTAdmission extends Component {
  state = {};
  AdmissionHeading = {
    instanceID: "AdmissionHeading",
    title: "Admission"
  };
  AdmissionDescription = {
    instanceID: "AdmissionDescription",
    title:
      "VJCET has secured approval from AICTE for conducting a four-year degree programme in Hotel Management and Catering Technology. The programme will follow the syllabus prescribed by APJ Abdul Kalam Technical University (KTU) to which the institution is affiliated. The approved intake capacity is of 60 students per batch."
  };
  AdmissionEligibilityHeading = {
    instanceID: "AdmissionEligibilityHeading",
    title:
      "Eligibility for Admission"
  };
  AdmissionEligibilityOne = {
    instanceID: "AdmissionEligibilityOne",
    title:
      "1)  +2(XII) In any discipline with 45% marks."
  };
  AdmissionEligibilityTwo = {
    instanceID: "AdmissionEligibilityTwooo",
    title:
      "2)  Candidate with valid score in the KHMAT (Kerala Hotel Management Aptitude Test)/ or equivalent national qualifying test."
  };
  AdmissionContactTitle = {
    instanceID: "AdmissionContactTitle",
    title:
      "For admission related queries, please contact:"
  };
  AdmissionContactOne = {
    instanceID: "AdmissionContact",
    title:
      "+91 9946004446"
  };
  AdmissionContactTwo = {
    instanceID: "AdmissionContact",
    title:
      "+91 9020141112"
  };
  AdmissionContactThree = {
    instanceID: "AdmissionContact",
    title:
      ""
  };

  render() {
    return (
      <div>
        <div className="BHMCTAdmission" id="bmctadmission">
          <HeadingOne data={this.AdmissionHeading} />
          <BodyOne data={this.AdmissionDescription} />
        </div>
        <div className="Eligibility" id="eligibility">
          <HeadingTwo data={this.AdmissionEligibilityHeading}/>
          <Bodythree data={this.AdmissionEligibilityOne}/>
          <Bodythree data={this.AdmissionEligibilityTwo}/>
        </div>
        <p></p>
        <div className="BHMCTAdmissionFeeStructure" id="bhmctadmissionfeestructure" >
          <table border="1" id="tableformat">
          <tr><th colspan="5" >Fee Structure (in INR)</th></tr> 
              <tr>
                  <td>Tuition Fees (Per Semester)</td>
                  <td>37500</td>
              </tr>
              <tr>
                  <td>Caution Deposit (one time)</td>
                  <td>10000</td>
              </tr>
              <tr>
                  <td>Other Fees</td>
                  <td>15650</td>
              </tr>
          </table>
        
        </div>
        <Bodythree data={this.AdmissionContactTitle}/>
        <Bodythree data={this.AdmissionContactOne}/>
        <Bodythree data={this.AdmissionContactTwo}/>
        <Bodythree data={this.AdmissionContactThree}/>
      </div>
    );
  }
}

export default BHMCTAdmission;
