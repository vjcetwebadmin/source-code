import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
import "../../Components/faculty.css"
class CSFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/MBA/FAC/MbAfacdean.jpg",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/DR.Cyriac Joseph-converted.pdf" target="_blank" rel="noopener noreferrer">Dr. Cyriac Joseph</a>,
    content: "Dean & HoD - Management Studies"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/MBA/FAC/josemammen.jpg",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/DR.Cyriac Joseph-converted.pdf" target="_blank" rel="noopener noreferrer">Dr. Jose Mamman</a>,
    content: "Assistant Professor"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/MBA/FAC/sebin.jpg",
    width: "50%",
    name: <a  href="https://vjcet.org/downloads/MbaProfile/Mr.Sebin Joseph-converted.pdf" target="_blank" rel="noopener noreferrer">Mr. Sebin Joseph</a>,
    content: "Assistant Professor"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/MBA/FAC/anishjohn.jpg",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/Mr.Anish John A-converted.pdf" target="_blank" rel="noopener noreferrer">Mr. Anish John A</a>,
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/MBA/FAC/pratheepkumar.jpg",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/Mr.pratheep kumar-converted.pdf" target="_blank" rel="noopener noreferrer">Mr. Pratheep Kumar R</a>,
    content: "Assistant Professor"
  };
   Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/MBA/FAC/merrin.jpg",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/Merrin Geordie Pottas-converted.pdf" target="_blank" rel="noopener noreferrer">Mrs. Merrin Geordie Pottas</a>,
    content: "Assistant Professor"
  };
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent" >
          <div>
            <FacultyData data={this.Cefaculty1} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty3} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty5} />
          </div>  
          <div>
            <FacultyData data={this.Cefaculty4} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty2} />
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
