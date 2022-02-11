import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
class CSStaff extends Component {
  state = {};
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/CS/STAF/94.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSSTF102" target="_blank" rel="noopener noreferrer">Mr. Lijo Mathew</a>,
    content: "Systems Engineer"
  };
 
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
         {/* <div>
            <FacultyData data={this.Cefaculty2} />
         </div>*/}
          
        </div>
      </div>
    );
  }
}

export default CSStaff;
