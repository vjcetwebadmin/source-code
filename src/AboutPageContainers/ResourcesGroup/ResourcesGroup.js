import React, { Component } from "react";
import "./ResourcesGroup.css";
import ResourcesList from "./LocalContainers/ResourcesList";
import HeadingOne from "../../Components/Texts/HeadingOne";

class ResourcesGroup extends Component {
  ResourcesGroupTitle = {
    instanceID: "ResourcesGroupTitle",
    title: "Academic Downloads"
  };

  ResourceListTwo = {
    instanceID: "ResourceListTwo",
    listID: "One",
    title: "Rules & Regulations",
    icon: "Icons/icon1.svg",
    filePath: "https://vjcet.org/downloads/Rules.pdf"
  };

  ResourceListThree = {
    instanceID: "ResourceListThree",
    listID: "Two",
    title: "Staff Manual",
    icon: "Icons/icon2.svg",
    filePath: "https://vjcet.org/downloads/staff manual 2021 Final.pdf"

  };

  ResourceListFour = {
    instanceID: "ResourceListFour",
    listID: "Three",
    title: "AICTE Documents",
    icon: "Icons/icon3.svg",
    /*filePath: "/downloads/AICTE.pdf"*/
    filePath: "https://vjcet.org/downloads/about/Mandatory2022.pdf"

  };

  ResourceListSix = {
    instanceID: "ResourceListSix",
    listID: "Four",
    title: "Audited Financial Statements",
    icon: "Icons/icon4.svg",
    filePath: "https://vjcet.org/downloads/academic/Financialstatements.zip"
  };

  ResourceListFive = {
    instanceID: "ResourceListFive",
    listID: "Five",
    title: "IQAC",
    icon: "Icons/icon5.svg",
    filePath: "https://vjcet.org/downloads/IQAC.pdf"
  };

  ResourceListOne = {
    instanceID: "ResourceListOne",
    listID: "Five",
    title: "Academic Schema",
    icon: "Icons/icon6.svg",
    filePath: "https://vjcet.org/downloads/AcedemicSchema.pdf"

  };
  ResourceListSeven = {
    instanceID: "ResourceListSeven",
    listID: "Seven",
    title: "VJCET Undertaking",
    icon: "Icons/icon5.svg",
    filePath: "https://vjcet.org/downloads/Undertaking.pdf"

  };
  ResourceListEight = {
    instanceID: "ResourceListEight",
    listID: "Eight",
    title: "Annual Reports",
    icon: "Icons/icon5.svg",
    filePath: "https://vjcet.org/downloads/an_report/AnnualReports.zip"

  }; 
  ResourceListNine = {
    instanceID: "ResourceListNine",
    listID: "Nine",
    title: "Time Table (Even Semester)",
    icon: "Icons/icon5.svg",
    filePath: "https://vjcet.org/downloads/timetable2021-22.pdf"

  }; 

  render() {
    return (
      <div className="ResourcesGroup">
        <HeadingOne data={this.ResourcesGroupTitle} />
        <div className="ResourcesContainer" id="AboutPageResourcesContainer">
          <ResourcesList data={this.ResourceListOne} />
          <ResourcesList data={this.ResourceListTwo} />
          <ResourcesList data={this.ResourceListThree} />
          <ResourcesList data={this.ResourceListFour} />
          <ResourcesList data={this.ResourceListFive} />
          <ResourcesList data={this.ResourceListSix} />
          <ResourcesList data={this.ResourceListSeven} />
          <ResourcesList data={this.ResourceListEight} />
          <ResourcesList data={this.ResourceListNine} />
        </div>
      </div>
    );
  }
}

export default ResourcesGroup;
