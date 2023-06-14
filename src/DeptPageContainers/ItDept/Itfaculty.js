import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
import "../../Components/faculty.css"
class ITFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/IT/FAC/itfac001.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC102" target="_blank" rel="noopener noreferrer">Dr. Anju Susan George</a>,
    content: "Asso. Prof. & HOD"
  };  
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/IT/FAC/181.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC103" target="_blank" rel="noopener noreferrer">Mrs. Jesline Joseph</a>,
    content: "Asst. Professor & Asst. HOD"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/IT/FAC/itfac003.jpeg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC105" target="_blank" rel="noopener noreferrer">Mrs. Juliet A Murali</a>,
    content: "Assistant Professor"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/IT/FAC/itfac002.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC106" target="_blank" rel="noopener noreferrer">Mrs. Ann Preetha Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/IT/FAC/itfac006.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC107" target="_blank" rel="noopener noreferrer">Mrs. Tiny Molly V</a>,
    content: "Assistant Professor"
  };
  /*Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/IT/FAC/186.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC108" target="_blank" rel="noopener noreferrer">Mr. Prince Kurian</a>,
    content: "Assistant Professor"
  };*/
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/IT/FAC/itfac005.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC109" target="_blank" rel="noopener noreferrer">Mrs. Salini Dev P V</a>,
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/IT/FAC/188.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC110" target="_blank" rel="noopener noreferrer">Mr. Santhanu P Mohan</a>,
    content: "Assistant Professor(on leave)"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "Allstaffphoto/IT/FAC/189.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC111" target="_blank" rel="noopener noreferrer">Mrs. Diana Baby</a>,
    content: "Assistant Professor"
  };

  /*Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/IT/FAC/FAC112.jpeg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC112" target="_blank" rel="noopener noreferrer">Mr. Jacob Mathai</a>,
    content: "Assistant Professor(on leave)"
  };*/

  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/IT/FAC/354.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC113" target="_blank" rel="noopener noreferrer">Dr. Sheela V.K.</a>,
    content: "Asso. Prof. & Asst. HOD(on leave)"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "Allstaffphoto/IT/FAC/itfac116.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC119" target="_blank" rel="noopener noreferrer">Ms. Shilpa Sugathan</a>,
    content: "Assistant Professor"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "Allstaffphoto/IT/FAC/NibinIT.JPG",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC118" target="_blank" rel="noopener noreferrer">Mr. Nidhin R</a>,
    content: "Assistant Professor"
  };
  Cefaculty15 = {
    instanceID: "Cefaculty15",
    image: "Allstaffphoto/IT/FAC/AnittaIT.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC117" target="_blank" rel="noopener noreferrer">Ms. Anitta K mathew</a>,
    content: "Assistant Professor"
  };
  Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "Allstaffphoto/IT/FAC/itfac120.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC120" target="_blank" rel="noopener noreferrer">Mrs. Josna Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "Allstaffphoto/IT/FAC/ITFAC121.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ITFAC121" target="_blank" rel="noopener noreferrer">Mr. Jimy George</a>,
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
          {/*<div>
            <FacultyData data={this.Cefaculty6} />
          </div>*/}
          <div>
            <FacultyData data={this.Cefaculty7} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty8} />
          </div>
         {/* <div>
            <FacultyData data={this.Cefaculty9} />
         </div> 
          */}
          {/*<div>
            <FacultyData data={this.Cefaculty11} />
        </div> */}
          <div>
            <FacultyData data={this.Cefaculty15} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty14} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty13} />
          </div>  
          <div>
            <FacultyData data={this.Cefaculty16} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty17} />
          </div>            
        </div>
      </div>
    );
  }
}

export default ITFaculty;
