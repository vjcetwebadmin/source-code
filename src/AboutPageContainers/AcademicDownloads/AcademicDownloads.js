import React, { Component } from "react";
import "./ResourcesGroup.css";
import ResourcesList from "./LocalContainers/ResourcesList";
import HeadingOne from "../../Components/Texts/HeadingOne";

import CSFaculty from "./Syllabusnewreg";
import CSStaff from "./Syllabusoldreg";


class ResourcesGroup extends Component {
  state = {
    showfaculty: true,
    showstaff: false
  };
  OnClickFac = () => {
    this.setState({
      showfaculty: true,
      showstaff: false
    });
  };
  OnClickStaff = () => {
    this.setState({
      showfaculty: false,
      showstaff: true
    });
  };




  ResourcesGroupTitle = {
    instanceID: "ResourcesGroupTitle",
    title: "Curriculum Plan"
  };
  SyllabusTitle = {
    instanceID: "SyllabusTitle",
    title: "Syllabus"
  };

  ResourceListOne = {
    instanceID: "ResourceListOne",
    listID: "One",
    title: "Curriculum Plan",
    icon: "Icons/calender.svg",
    filePath: "https://vjcet.org/downloads/Academic_Calander_odd_21.pdf"

  };
  ResourceListTwo = {
    instanceID: "ResourceListTwo",
    listID: "Two",
    title: "Semester Plan",
    icon: "Icons/calendar.png",
    filePath: "https://vjcet.org/downloads/S7SemesterPlan2021-22.pdf"

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



  render() {
    return (
      <div className="ResourcesGroup">
        <HeadingOne data={this.ResourcesGroupTitle} />
        <div className="ResourcesContainer" id="AboutPageResourcesContainer">
          <ResourcesList data={this.ResourceListOne} />
          <ResourcesList data={this.ResourceListTwo} />
        </div>        
          <HeadingOne data={this.SyllabusTitle} /> 
          <div class="facultyNav">
              <input
                type="button"
                value="B.Tech Regulation 2015-2016 to 2018-2019"
                class="buttongraph"
                onClick={this.OnClickStaff}
              />
              <input
                type="button"
                value="B.Tech Regulation 2019-2020 onwards"
                class="buttongraph"
                onClick={this.OnClickFac}
              />

                {this.state.showfaculty ? <CSFaculty /> : null}
                {this.state.showstaff ? <CSStaff /> : null}
          </div> 
          <div className="ResourcesContainer" id="AboutPageResourcesContainer">
          </div>
        {/*   button click

          <div className="ResourcesContainer" id="AboutPageResourcesContainer">
              <ResourcesList data={this.ResourceListThree} />
              <ResourcesList data={this.ResourceListFour} />
              <ResourcesList data={this.ResourceListFive} />
              <ResourcesList data={this.ResourceListSix} />
              <ResourcesList data={this.ResourceListEight} />
              <ResourcesList data={this.ResourceListNine} />       
        </div>*/}
    
      </div>
    );
  }
}

export default ResourcesGroup;
