import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
import "../../Components/faculty.css"
class CSFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/MBA/FAC/MbAfacdean.jpg",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/Dr.CyriacJoseph.pdf" target="_blank" rel="noopener noreferrer">Dr. Cyriac Joseph</a>,
    content: "Dean & HOD - Management Studies"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/MBA/FAC/josemammen.jpg",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/Dr.Jose Mamman-converted.pdf" target="_blank" rel="noopener noreferrer">Dr. Jose Mamman</a>,
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
    name: <a href="https://vjcet.org/downloads/MbaProfile/Dr.AnishJohnA.pdf" target="_blank" rel="noopener noreferrer">Dr. Anish John A</a>,
    content: "Assistant Professor"
  };
  /*Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/MBA/FAC/pratheepkumar.jpg",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/Mr.pratheep kumar-converted.pdf" target="_blank" rel="noopener noreferrer">Mr. Pratheep Kumar R</a>,
    content: "Assistant Professor & Placement In Charge"
  };*/
   Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/MBA/FAC/merrin.jpg",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/Merrin Geordie Pottas-converted.pdf" target="_blank" rel="noopener noreferrer">Mrs. Merrin Geordie Pottas</a>,
    content: "Assistant Professor"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/MBA/GUEST/Guest_Gthanathu.jpg",
    width: "50%",
    name: "Dr. George Thanathuparambil",
    content: "Professor(Visit)"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/MBA/FAC/dranug.jpg",
    width: "50%",
    name: "Dr. Anu George",
    content: "Associate Professor (on-Leave)"
  };
  /*Cefaculty9 = {
    instanceID: "Cefaculty9",
    image: "Allstaffphoto/MBA/FAC/midun.jpeg",
    width: "50%",
    name: "Mr. Midhun Jose",
    content: "Assistant Professor(on-Leave)"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/MBA/FAC/Sreenath.jpeg",
    width: "50%",
    name: "Mr. Sreenath Rajagopalan",
    content: "Assistant Professor (on-Leave)"
  };*/
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/MBA/FAC/Ambily.jpeg",
    width: "50%",
    name: "Ms. Ambily Jose",
    content: "Assistant Professor (on-Leave)"
  };
  /*Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "Allstaffphoto/MBA/FAC/RiyaSusan.jpg",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/RiyaSusanSkaria.pdf" target="_blank" rel="noopener noreferrer">Ms.Riya Susan Skaria</a>,
    content: "Assistant Professor"
  };*/
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "Allstaffphoto/MBA/FAC/Fr.Mathew Puthenkulam.JPG",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/Fr.Mathew Puthenkulam.pdf" target="_blank" rel="noopener noreferrer">Fr.Mathew Puthenkulam</a>,
    content: "Assistant Professor & Skill Development & Competency Enhancement -Co-ordinator"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "Allstaffphoto/MBA/FAC/Dr.Anjali john.jpg",
    width: "50%",
    name: <a href="https://vjcet.org/downloads/MbaProfile/Dr.Anjali John.pdf" target="_blank" rel="noopener noreferrer">Dr.Anjali John</a>,
    content: "Assistant Professor & Placement Officer"
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
          {/*<div>
            <FacultyData data={this.Cefaculty5} />
          </div> */}
          <div>
            <FacultyData data={this.Cefaculty4} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty2} />
          </div>      
          <div>
            <FacultyData data={this.Cefaculty6} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty13} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty14} />
          </div>

          {/*<div>
            <FacultyData data={this.Cefaculty12} />
        </div>*/}
          <div>
            <FacultyData data={this.Cefaculty7} />
          </div>          
          <div>
            <FacultyData data={this.Cefaculty8} />
          </div>
          {/*<div>
            <FacultyData data={this.Cefaculty9} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty10} />
      </div>*/}
          <div>
            <FacultyData data={this.Cefaculty11} />
          </div>          
          
        </div>
      </div>
    );
  }
}

export default CSFaculty;
