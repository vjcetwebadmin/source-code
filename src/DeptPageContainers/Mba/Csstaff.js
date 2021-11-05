import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class CSStaff extends Component {
  state = {};
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/MBA/STAF/admLucy.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=MBSTF102" target="_blank" rel="noopener noreferrer">Ms. Lucy Kurian</a>,
    content: "Librarian Grade II"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/MBA/STAF/admLijo.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=MBSTF103" target="_blank" rel="noopener noreferrer">Mr. Lijo Thomas</a>,
    content: "UDC"
  };  
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/MBA/STAF/admReji.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=MBSTF104" target="_blank" rel="noopener noreferrer">Mr. Regi Abraham</a>,
    content: "Office Asstistant"
  };
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cefaculty2} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty3} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty4} />
          </div>
        
        </div>
      </div>
    );
  }
}

export default CSStaff;
