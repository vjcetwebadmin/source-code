import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
import "../../Components/faculty.css"
class MEFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/ME/FAC/195.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC101" target="_blank" rel="noopener noreferrer">Mr. Vinoj K</a>,
    content: "Associate Professor & Asst. HOD"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/ME/FAC/199.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC105" target="_blank" rel="noopener noreferrer">Dr. Shunmugesh K</a>,
    content: "Professor & HOD"
  };
  /*Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/ME/FAC/348.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC140" target="_blank" rel="noopener noreferrer">Dr. Sajan T.John</a>,
    content: "Asso. Prof. & Asst. HOD"
  };*/
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/ME/FAC/200.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC106" target="_blank" rel="noopener noreferrer">Mrs. Leeba Varghese</a>,
     content: "Associate Professor(on-leave Ph.D)"
  };
  
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/ME/FAC/209.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC115" target="_blank" rel="noopener noreferrer">Mr. Tijo Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/ME/FAC/388.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC150" target="_blank" rel="noopener noreferrer">Dr. Arun K.</a>,
    content: "Assistant Professor"
  };
  
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/ME/FAC/290.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC126" target="_blank" rel="noopener noreferrer">Mr. Eldhose Paul</a>,
    content: "Assistant Professor"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/ME/FAC/MEFAC118.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC118" target="_blank" rel="noopener noreferrer">Mr. Abraham Antony</a>,
    content: "Assistant Professor"
  };
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "Allstaffphoto/ME/FAC/213.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC119" target="_blank" rel="noopener noreferrer">Mr. Eldhose Kurian</a>,
    content: "Assistant Professor"
  };
  /*Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "Allstaffphoto/ME/FAC/214.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC120" target="_blank" rel="noopener noreferrer">Mr. Frenosh K Francis</a>,
    content: "Assistant Professor"
  };*/
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "Allstaffphoto/ME/FAC/292.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC127" target="_blank" rel="noopener noreferrer">Mr. Lovin Varghese</a>,
    content: "Assistant Professor"
  };
  Cefaculty15 = {
    instanceID: "Cefaculty15",
    image: "Allstaffphoto/ME/FAC/217.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC123" target="_blank" rel="noopener noreferrer">Mr. Unnikrishnan T G</a>,
    content: "Assistant Professor"
  };
  /*Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "Allstaffphoto/ME/FAC/300.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC128" target="_blank" rel="noopener noreferrer">Mr. Jerry Varghese</a>,
    content: "Assistant Professor(on-leave Ph.D)"
  };*/
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "Allstaffphoto/ME/FAC/301.JPG",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC129" target="_blank" rel="noopener noreferrer">Mr. Arun K.R</a>,
    content: "Assistant Professor"
  };
  Cefaculty18 = {
    instanceID: "Cefaculty18",
    image: "Allstaffphoto/ME/FAC/313.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC133" target="_blank" rel="noopener noreferrer">Mr. Rakesh Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty19 = {
    instanceID: "Cefaculty19",
    image: "Allstaffphoto/ME/FAC/314.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC134" target="_blank" rel="noopener noreferrer">Dr. Arun Raphel</a>,
    content: "Assistant Professor"
  };
  Cefaculty20 = {
    instanceID: "Cefaculty20",
    image: "Allstaffphoto/ME/FAC/372.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC145" target="_blank" rel="noopener noreferrer">Mr. Nibin B</a>,
    content: "Assistant Professor"
  };
  /*Cefaculty21 = {
    instanceID: "Cefaculty21",
    image: "Allstaffphoto/ME/FAC/376.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC144" target="_blank" rel="noopener noreferrer">Mr. Abin Paul</a>,
    content: "Assistant Professor"
  };*/
  Cefaculty22 = {
    instanceID: "Cefaculty22",
    image: "Allstaffphoto/ME/FAC/377.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC146" target="_blank" rel="noopener noreferrer">Mr. Nidheesh K.</a>,
    content: "Assistant Professor"
  };
  Cefaculty23 = {
    instanceID: "Cefaculty23",
    image: "Allstaffphoto/ME/FAC/378.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC147" target="_blank" rel="noopener noreferrer">Mr. Akash Paul Savio</a>,
    content: "Assistant Professor"
  };
  /*Cefaculty25 = {
    instanceID: "Cefaculty25",
    image: "Allstaffphoto/ME/FAC/379.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC148" target="_blank" rel="noopener noreferrer">Mr. Basil Baby</a>,
    content: "Assistant Professor"
  };*/
  Cefaculty26 = {
    instanceID: "Cefaculty26",
    image: "Allstaffphoto/ME/FAC/AravindS.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC112" target="_blank" rel="noopener noreferrer">Dr. Aravind S</a>,
    content: "Assistant Professor"
  };
  Cefaculty27 = {
    instanceID: "Cefaculty27",
    image: "Allstaffphoto/ME/FAC/MEFAC155.jpeg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=MEFAC155" target="_blank" rel="noopener noreferrer">Mr. Anoop Joy </a>,
    content: "Assistant Professor(Guest)"
  };
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cefaculty3} />
          </div>          
          <div>
            <FacultyData data={this.Cefaculty1} />
          </div>
          {/*<div>
            <FacultyData data={this.Cefaculty4} />
          </div>*/}
          <div>
            <FacultyData data={this.Cefaculty5} />
          </div> 
          <div>
            <FacultyData data={this.Cefaculty26} />
          </div>         
         {/* <div>
            <FacultyData data={this.Cefaculty7} />
         </div>   tijo me*/}
          <div>
            <FacultyData data={this.Cefaculty8} />
          </div>
          
          <div>
            <FacultyData data={this.Cefaculty10} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty11} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty12} />
          </div>
          {/*<div>
            <FacultyData data={this.Cefaculty13} />
          </div>*/}
          <div>
            <FacultyData data={this.Cefaculty14} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty15} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty17} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty18} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty19} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty20} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty22} />
          </div>
          {/*<div>
            <FacultyData data={this.Cefaculty25} />
          </div>  */}       
          <div>
            <FacultyData data={this.Cefaculty23} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty27} />
          </div>
          </div>
      </div>
    );
  }
}

export default MEFaculty;
