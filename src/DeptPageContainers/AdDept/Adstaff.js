import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class CSStaff extends Component {
  state = {};
  AIStaff1 = {
    instanceID: "AIStaff1",
    image: "Allstaffphoto/AD/STAF/ADSTF1.jpg",
    width: "100%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=AISTF101" target="_blank" rel="noopener noreferrer">Mrs. Meenu C Thayil</a>,
    content: "Instructor-Grade II"
  }; 
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.AIStaff1} />
         </div>
          
        </div>
      </div>
    );
  }
}

export default CSStaff;
