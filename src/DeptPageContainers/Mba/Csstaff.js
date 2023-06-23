import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class CSStaff extends Component {
  state = {};
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/MBA/STAF/admLucy.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MBSTF102" target="_blank" rel="noopener noreferrer">Ms. Lucy Kurian</a>,
    content: "Librarian Grade II"
  };
 
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/MBA/STAF/admReji.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MBSTF104" target="_blank" rel="noopener noreferrer">Mr. Regi Abraham</a>,
    content: "Office Asstistant"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/MBA/STAF/admLijo.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MBSTF103" target="_blank" rel="noopener noreferrer">Mr. Lijo Thomas</a>,
    content: "UDC"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/CE/STAF/62.jpg",
    width: "50%",
    name: <a href="https://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CESTF113" target="_blank" rel="noopener noreferrer">Mr.Biju Joseph,</a>,
    content: "Trade Instructor"
  };
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cefaculty2} />
          </div> 
          <div>
            <FacultyData data={this.Cefaculty5} />
          </div>   
          <div>
            <FacultyData data={this.Cefaculty6} />
          </div>   
        </div>
      </div>
    );
  }
}

export default CSStaff;
