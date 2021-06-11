import React, { Component } from "react";
import "./ResourcesGroup.css";
import ResourcesList from "./LocalContainers/ResourcesList";
import HeadingOne from "../../Components/Texts/HeadingOne";

class ResourcesGroup extends Component {
  ResourcesGroupTitle = {
    instanceID: "ResourcesGroupTitle",
    title: "Curriculum Plan"
  };
  SyllabusTitle = {
    instanceID: "SyllabusTitle",
    title: "Syllabus"
  };


  ResourceListEight = {
    instanceID: "ResourceListEight",
    listID: "Four",
    title: "Civil Engineering",
    icon: "Icons/civilsyllabuslogo.png",
    filePath: "https://vjcet.org/downloads/academic/cesyllabus.zip"

  };

  ResourceListThree = {
    instanceID: "ResourceListThree",
    listID: "Five",
    title: "Computer Science & Engineering",
    icon: "Icons/csesyllabuslogo.svg",
    filePath: "https://vjcet.org/downloads/academic/csesyllabus.zip"

  };

  ResourceListFour = {
    instanceID: "ResourceListFour",
    listID: "Six",
    title: "Electronics & Communications Engineering",
    icon: "Icons/ecesyllabuslogo.svg",
    filePath: "https://vjcet.org/downloads/academic/ecesyllabus.zip"
  };

  ResourceListFive = {
    instanceID: "ResourceListFive",
    listID: "Seven",
    title: "Electrical & Electronics Engineering",
    icon: "Icons/eeesyllabuslogo.svg",
    filePath: "https://vjcet.org/downloads/academic/eeesyllabus.zip"
  };

  ResourceListSix = {
    instanceID: "ResourceListSix",
    listID: "Eight",
    title: "Information Technology",
    icon: "Icons/itsyllabuslogo.png",
    filePath: "https://vjcet.org/downloads/academic/itsyllabus.zip"

  };
  ResourceListNine = {
    instanceID: "ResourceListNine",
    listID: "Nine",
    title: "Mechanical Engineering",
    icon: "Icons/mesyllabuslogo.svg",
    filePath: "https://vjcet.org/downloads/academic/mesyllabus.zip"

  };
  ResourceListOne = {
    instanceID: "ResourceListOne",
    listID: "One",
    title: "Curriculum Plan",
    icon: "Icons/calender.svg",
    filePath: "https://vjcet.org/downloads/Academic_Calander_odd_20.pdf"

  };
  ResourceListTwo = {
    instanceID: "ResourceListTwo",
    listID: "Two",
    title: "Semester Plan",
    icon: "Icons/calendar.png",
    filePath: "https://vjcet.org/downloads/Semester_Plan2019even.pdf"

  };

  render() {
    return (
      <div className="ResourcesGroup">
        <HeadingOne data={this.ResourcesGroupTitle} />
        <div className="ResourcesContainer" id="AboutPageResourcesContainer">
          <ResourcesList data={this.ResourceListOne} />
          <ResourcesList data={this.ResourceListTwo} />
        </div>        
          <HeadingOne data={this.SyllabusTitle} />
          <div className="ResourcesContainer" id="AboutPageResourcesContainer">
          
          <ResourcesList data={this.ResourceListThree} />
          <ResourcesList data={this.ResourceListFour} />
          <ResourcesList data={this.ResourceListFive} />
          <ResourcesList data={this.ResourceListSix} />
          <ResourcesList data={this.ResourceListEight} />
          <ResourcesList data={this.ResourceListNine} />
          
        </div>
      </div>
    );
  }
}

export default ResourcesGroup;
