import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class Faculty extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "Allstaffphoto/EC/STAF/171.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECSTF101" target="_blank" rel="noopener noreferrer">Mr. Thankachan P J</a>,
    content: "1st  Grade Instructor "
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/EC/STAF/172.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECSTF102" target="_blank" rel="noopener noreferrer">Mr. Ginu Jose</a>,
    content: "1st  Grade Instructor"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/EC/STAF/174.JPG",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECSTF104" target="_blank" rel="noopener noreferrer">Mr. Renji Issac</a>,
    content: "Trade Instructor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/EC/STAF/175.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECSTF105" target="_blank" rel="noopener noreferrer">Mr. Shiju Jose</a>,
    content: "Trade Instructor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/EC/STAF/176.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECSTF112" target="_blank" rel="noopener noreferrer">Mr. Jekson George</a>,
    content: "Trade Instructor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/EC/STAF/177.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECSTF113" target="_blank" rel="noopener noreferrer">Mr. Thomas Mathew</a>,
    content: "Trade Instructor"
  };
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cestaff1} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty2} />
          </div>
           <div>
            <FacultyData data={this.Cefaculty4} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty5} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty6} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty7} />
          </div>
          {/*<div>
            <FacultyData data={this.Cefaculty8} />
          </div>*/}
        </div>
      </div>
    );
  }
}

export default Faculty;
