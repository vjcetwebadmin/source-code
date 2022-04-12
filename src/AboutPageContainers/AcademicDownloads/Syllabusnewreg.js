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
    filePath: "https://vjcet.org/downloads/academic/cesyllabusnew.zip"

  };

  ResourceListThree = {
    instanceID: "ResourceListThree",
    listID: "Five",
    title: "Computer Science & Engineering",
    icon: "Icons/csesyllabuslogo.svg",
    filePath: "https://vjcet.org/downloads/academic/csesyllabusnew.zip"

  };

  ResourceListFour = {
    instanceID: "ResourceListFour",
    listID: "Six",
    title: "Electronics & Communications Engineering",
    icon: "Icons/ecesyllabuslogo.svg",
    filePath: "https://vjcet.org/downloads/academic/ecesyllabusnew.zip"
  };

  ResourceListFive = {
    instanceID: "ResourceListFive",
    listID: "Seven",
    title: "Electrical & Electronics Engineering",
    icon: "Icons/eeesyllabuslogo.svg",
    filePath: "https://vjcet.org/downloads/academic/eeesyllabusnew.zip"
  };

  ResourceListSix = {
    instanceID: "ResourceListSix",
    listID: "Eight",
    title: "Information Technology",
    icon: "Icons/itsyllabuslogo.png",
    filePath: "https://vjcet.org/downloads/academic/itsyllabusnew.zip"

  };
  ResourceListNine = {
    instanceID: "ResourceListNine",
    listID: "Nine",
    title: "Mechanical Engineering",
    icon: "Icons/mesyllabuslogo.svg",
    filePath: "https://vjcet.org/downloads/academic/mesyllabusnew.zip"

  };
  ResourceListTen = {
    instanceID: "ResourceListTen",
    listID: "Nine",
    title: "Artificial Intelligence and Data Science",
    icon: "Icons/csesyllabuslogo.svg",
    filePath: "https://vjcet.org/downloads/academic/ADsyllabusnew.zip"

  }; 

  render() {
    return (
      <div className="ResourcesGroup">
        <h2>B.Tech Regulation 2019-2020 onwards</h2>
          <div className="ResourcesContainer" id="AboutPageResourcesContainer">          
          <ResourcesList data={this.ResourceListThree} />
          <ResourcesList data={this.ResourceListFour} />
          <ResourcesList data={this.ResourceListFive} />
          <ResourcesList data={this.ResourceListSix} />
          <ResourcesList data={this.ResourceListEight} />
          <ResourcesList data={this.ResourceListNine} /> 
          <ResourcesList data={this.ResourceListTen} />          
        </div>
      </div>
    );
  }
}

export default ResourcesGroup;
