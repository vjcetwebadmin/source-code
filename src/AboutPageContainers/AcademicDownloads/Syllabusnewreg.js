import React, { Component } from "react";
import "./ResourcesGroup.css";
import ResourcesList from "./LocalContainers/ResourcesList";
import HeadingOne from "../../Components/Texts/HeadingOne";

class ResourcesGroup extends Component {
 

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
 

  render() {
    return (
      <div className="ResourcesGroup" style={{border:"3px solid gray"}}>
        <h2>B.Tech Regulation 2015-2016 to 2018-2019</h2>
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
