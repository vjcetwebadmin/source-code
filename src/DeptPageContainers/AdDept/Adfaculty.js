import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
import "../../Components/faculty.css"
class CSFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/AD/FAC/Somypmathew.jpg",
    width: "50%",
    name:  <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ECFAC107" target="_blank" rel="noopener noreferrer">Mr. Somy P Mathew</a>,
    content: "Vice-Principal & Assistant Professor"
  };  
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/AD/FAC/CSFACblank.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=AIFAC101" target="_blank" rel="noopener noreferrer">Dr. Anita Brigit Mathew</a>,
    content: "Associate Professor"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/AD/FAC/CSFAC102.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSFAC102" target="_blank" rel="noopener noreferrer">Mrs. Silpa Joseph</a>,
    content: "Associate Professor"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/AD/FAC/ECFAC126.jpg",
    width: "50%",
    name:  <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ECFAC126" target="_blank" rel="noopener noreferrer">Mrs. Femy John</a>,
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/AD/FAC/MaryNirmala.jpeg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ECFAC130" target="_blank" rel="noopener noreferrer">Mrs. Mary Nirmala George</a>,
    content: "Assistant Professor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/AD/FAC/87.jpg",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSFAC123" target="_blank" rel="noopener noreferrer">Mr. Sivadas T Nair</a>,
    content: "Assistant Professor"
  };

  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cefaculty1} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty3} />
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
         </div>
      </div>
    );
  }
}

export default CSFaculty;
