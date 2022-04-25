import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class CSStaff extends Component {
  state = {};
  Cestaff1 = {
    instanceID: "Cestaff1",
    image: "Allstaffphoto/ADM/LIB/brightyjose.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ADSTF131" target="_blank" rel="noopener noreferrer">Mrs. Brighty Jose</a>,
    content: "Librarian"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/ADM/LIB/binopaul.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ADSTF132" target="_blank" rel="noopener noreferrer">Mr. Bino Paul</a>,
    content: "Librarian Grade III"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/ADM/LIB/jintoaugustine.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ADSTF134" target="_blank" rel="noopener noreferrer">Mr. Jinto Augustine</a>,
    content: "Librarian Grade IV(on-leave)"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/ADM/LIB/leenalisabraham.jpeg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ADSTF129" target="_blank" rel="noopener noreferrer">Mrs. Leena Lis Abraham</a>,
    content: "Library Assistant"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/ADM/LIB/marinashajan.jpeg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ADSTF122" target="_blank" rel="noopener noreferrer">Mrs. Marina Shajan</a>,
    content: "Class IV"
  };
  Cefaculty18 = {
    instanceID: "Cefaculty18",
    image: "Allstaffphoto/ADM/ADM/jorbinbaby.JPEG",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ADSTF116" target="_blank" rel="noopener noreferrer">Mr. Jorbin Baby</a>,
    content: "Office Asst."
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/CE/STAF/393.jpg", 
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CESTF109" target="_blank" rel="noopener noreferrer">Mrs. Doniya Johnson</a>,
    content: "Trade Instructor Civil"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/EE/STAF/134.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=EESTF107" target="_blank" rel="noopener noreferrer">Mr. Gince Kurian</a>,
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
            <FacultyData data={this.Cefaculty3} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty8} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty7} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty5} />
          </div>
          
        </div>
      </div>
    );
  }
}

export default CSStaff;
