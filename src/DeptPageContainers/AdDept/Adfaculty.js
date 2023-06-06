import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
import "../../Components/faculty.css"
class CSFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/AD/FAC/Somypmathew.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?StaffCode=ECFAC107" target="_blank" rel="noopener noreferrer">Mr. Somy P Mathew</a>,
    content: "Vice-Principal & Assistant Professor"
  }; 

  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/AD/FAC/Anita.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=AIFAC101" target="_blank" rel="noopener noreferrer">Dr. Anita Brigit Mathew</a>,
    content: "Associate Professor"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/AD/FAC/CSFAC102.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC102" target="_blank" rel="noopener noreferrer">Mrs. Silpa Joseph</a>,
    content: "Associate Professor"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/AD/FAC/ECFAC126.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC126" target="_blank" rel="noopener noreferrer">Mrs. Femy John</a>,
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/AD/FAC/MaryNirmala.jpeg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC130" target="_blank" rel="noopener noreferrer">Mrs. Mary Nirmala George</a>,
    content: "Assistant Professor"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/AD/FAC/87.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC123" target="_blank" rel="noopener noreferrer">Mr. Sivadas T Nair</a>,
    content: "Assistant Professor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/EC/FAC/ECFAC104.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC104" target="_blank" rel="noopener noreferrer">Dr. Melvin C Jose</a>,
    content: "Associate Professor & HOD"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/AD/FAC/AIFAC102.jpeg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=AIFAC102" target="_blank" rel="noopener noreferrer">Miss. Geethu Gopan</a>,
    content: "Assistant Professor(Guest)"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty9",
    image: "Allstaffphoto/AD/FAC/AIFAC103.jpeg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=AIFAC103" target="_blank" rel="noopener noreferrer">Miss. Sneha Benny</a>,
    content: "Assistant Professor(Guest)"
  };

  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cefaculty1} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty7} />
          </div> 
          <div>
            <FacultyData data={this.Cefaculty2} />
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
          <div>
            <FacultyData data={this.Cefaculty8} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty9} />
          </div>                   
         </div>
      </div>
    );
  }
}

export default CSFaculty;
