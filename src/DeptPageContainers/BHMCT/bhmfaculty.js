import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
import "../../Components/faculty.css"
class CSFaculty extends Component {
  state = {};
  Hmfaculty1 = {
    instanceID: "Hmfaculty1",
    image: "Allstaffphoto/BHM/FAC/HMFAC101.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?StaffCode=HMFAC101" target="_blank" rel="noopener noreferrer">Mr. Sujith K S</a>,
    content: "Asst. Professor & HOD"
  };
  Hmfaculty2 = {
    instanceID: "Hmfaculty2",
    image: "Allstaffphoto/BHM/FAC/HMFAC102.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?StaffCode=HMFAC102" target="_blank" rel="noopener noreferrer">Mr. Prasanth C B</a>,
    content: "Assistant Professor"
  };
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent" >
          <div>
            <FacultyData data={this.Hmfaculty1} />
          </div>
          <div>
            <FacultyData data={this.Hmfaculty2} />
          </div>
          {/*<div>
            <FacultyData data={this.Hmfaculty3} />
          </div> */}
          
          
        </div>
      </div>
    );
  }
}

export default CSFaculty;
