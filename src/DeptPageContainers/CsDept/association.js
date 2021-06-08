import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import HeadingFour from "../../Components/Texts/HeadingFour";
class Library extends Component {
  state = {};
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Association"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      " VOICE is the association of the Computer Science & Engineering department. VOICE plays its vital role of giving opportunities and exposure for the young minds of the department to the tech world through different events like Technical Quiz, Technical Talks, Group Discussions, Workshops etc. VOICE is run by the student coordinators under the guidance of faculty members from the department. "
  };
  DeptAssociationHeadingTwo = {
    instanceID: "DeptAssociationHeadingTwo",
    title: "2018-19"
  };  
  DeptAssociationDescriptionTwo = {
    instanceID: "DeptAssociationDescriptionTwo",
    title:
      "The association activities for the year was inaugurated by Dr. Vineesh K P ,Faculty, NIT Calicut on 3rd October, 2018, and a technical talk on Machine Learning was conducted. The newsletter was also released on the same venue."
  };
  DeptAssociationHeadingthree= {
    instanceID: "DeptAssociationHeadingthree",
    title: "2020-21"
  };  
  DeptAssociationDescriptionthree = {
    instanceID: "DeptAssociationDescriptionthree",
    title:
      "The association activities for the year was inaugurated by Mr. Akhil  Somnath, Senior Software Engineer, Microsoft, Seattle, (US) on 16Th March 2021 in a live Zoom Platform, and a talk “Bit and Bytes- Life as a software Engineer in Microsoft” was arranged."
  };


  render() {
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />
        <Bodythree data={this.DeptAssociationDescriptionOne} />
        <HeadingFour data={this.DeptAssociationHeadingthree} />
        <Bodythree data={this.DeptAssociationDescriptionthree} />
        <HeadingFour data={this.DeptAssociationHeadingTwo} />
        <Bodythree data={this.DeptAssociationDescriptionTwo} />
      </div>
    );
  }
}

export default Library;
