import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
import "../../Components/faculty.css"
class CSFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/CS/FAC/73.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC109" target="_blank" rel="noopener noreferrer">Mr. Amel Austine</a>,
    content: "Asst. Prof. & HOD"
  };
/*  Cefaculty28 = {
    instanceID: "Cefaculty28",
    image: "Allstaffphoto/CS/FAC/CSFAC26.JPG",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CSFAC131" target="_blank" rel="noopener noreferrer">Dr. Janhan Lal P S</a>,
    content: "Professor"
  };*/
  Cefaculty29 = {
    instanceID: "Cefaculty29",
    image: "Allstaffphoto/CS/FAC/CSFAC29.jpg",
    width: "50%",
    name: <a  href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC132" target="_blank" rel="noopener noreferrer">Dr. K K Kuriakose</a>,
    content: "Professor"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/CS/FAC/CSFAC102.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC102" target="_blank" rel="noopener noreferrer">Mrs. Silpa Joseph</a>,
    content: "Associate Professor"
  };
/*   Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/CS/FAC/323.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC129" target="_blank" rel="noopener noreferrer">Dr. Anishin Raj M M</a>,
    content: "Dean R & D, Professor & Asst. HOD"
  }; */
   Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/CS/FAC/68.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC104" target="_blank" rel="noopener noreferrer">Mrs.Sindhu Jose</a>,
    content: "Assistant Professor (on-Leave)"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/CS/FAC/69.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC105" target="_blank" rel="noopener noreferrer">Mrs. Mili Els Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "Allstaffphoto/CS/FAC/CSFAC106.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC106" target="_blank" rel="noopener noreferrer">Mrs. Mayadevi P A</a>,
    content: "Assistant Professor"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/CS/FAC/CSFAC108.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC108" target="_blank" rel="noopener noreferrer">Mrs. Ritty Jacob</a>,
    content: "Assistant Professor"
  };

  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "Allstaffphoto/CS/FAC/CSFAC111.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC111" target="_blank" rel="noopener noreferrer">Mrs. Neenu Daniel</a>,
    content: "Assistant Professor"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "Allstaffphoto/CS/FAC/CSFAC112.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC112" target="_blank" rel="noopener noreferrer">Mr. Andrews Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "Allstaffphoto/CS/FAC/CSFAC114.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC114" target="_blank" rel="noopener noreferrer">Mrs. Sabitha Raju</a>,
    content: "Assistant Professor"
  };
  Cefaculty15 = {
    instanceID: "Cefaculty15",
    image: "Allstaffphoto/CS/FAC/CSFAC115.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC115" target="_blank" rel="noopener noreferrer">Mrs. Rini Simon</a>,
    content: "Assistant Professor (on-Leave)"
  };
  Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "Allstaffphoto/CS/FAC/80.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC116" target="_blank" rel="noopener noreferrer">Mrs. Arsha J K</a>,
    content: "Assistant Professor"
  };
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "Allstaffphoto/CS/FAC/81.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC117" target="_blank" rel="noopener noreferrer">Mrs. Dona Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty18 = {
    instanceID: "Cefaculty18",
    image: "Allstaffphoto/CS/FAC/82.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC118" target="_blank" rel="noopener noreferrer">Mr. Joe Mathew Jacob</a>,
    content: "Assistant Professor"
  };
  Cefaculty19 = {
    instanceID: "Cefaculty19",
    image: "Allstaffphoto/CS/FAC/83.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC119" target="_blank" rel="noopener noreferrer">Mrs. Bency Cleetus</a>,
    content: "Assistant Professor"
  };
  Cefaculty20 = {
    instanceID: "Cefaculty20",
    image: "Allstaffphoto/CS/FAC/85.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC121" target="_blank" rel="noopener noreferrer">Mrs. Remya Paul</a>,
    content: "Assistant Professor"
  };
  Cefaculty21 = {
    instanceID: "Cefaculty21",
    image: "Allstaffphoto/CS/FAC/87.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC123" target="_blank" rel="noopener noreferrer">Mr. Sivadas T Nair</a>,
    content: "Assistant Professor"
  };
  Cefaculty23 = {
    instanceID: "Cefaculty23",
    image: "Allstaffphoto/CS/FAC/CSFAC126.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC126" target="_blank" rel="noopener noreferrer">Mrs. Anu Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty24 = {
    instanceID: "Cefaculty24",
    image: "Allstaffphoto/CS/FAC/91.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC127" target="_blank" rel="noopener noreferrer">Mrs. Cinita Mary Mathew</a>,
     content: "Assistant Professor (on-Leave)"
  };
  Cefaculty25 = {
    instanceID: "Cefaculty25",
    image: "Allstaffphoto/CS/FAC/92.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC128" target="_blank" rel="noopener noreferrer">Mrs. Nimmy George</a>,
    content: "Assistant Professor"
  };
  Cefaculty26 = {
    instanceID: "Cefaculty26",
    image: "Allstaffphoto/CS/FAC/CSFAC124.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC124" target="_blank" rel="noopener noreferrer">Mrs. Soumya Mathew</a>,
    content: "Assistant Professor"
  };
  Cefaculty27 = {
    instanceID: "Cefaculty27",
    image: "Allstaffphoto/CS/FAC/sreejaspillai.JPEG",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC122" target="_blank" rel="noopener noreferrer">Mrs. Sreeja S Pillai</a>,
    content: "Assistant Professor(on-leave Ph.D)"
  };
  Cefaculty30 = {
    instanceID: "Cefaculty30",
    image: "Allstaffphoto/CS/FAC/CSFAC133.jpeg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC133" target="_blank" rel="noopener noreferrer">Ms. Asha Joseph</a>,
    content: "Assistant Professor"
  };
  Csfaculty31 = {
    instanceID: "Csfaculty31",
    image: "Allstaffphoto/CS/FAC/134.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC134" target="_blank" rel="noopener noreferrer">Mrs. ANJU MARKOSE</a>,
    content: "Assistant Professor"
  };
  Csfaculty32 = {
    instanceID: "Csfaculty32",
    image: "Allstaffphoto/CS/FAC/CSFAC135.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CSFAC135" target="_blank" rel="noopener noreferrer">Mrs. LAKSHMI SURESH</a>,
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
            <FacultyData data={this.Cefaculty29} />
          </div>
{/*           <div>
            <FacultyData data={this.Cefaculty4} />
          </div>       */}   
           <div>
            <FacultyData data={this.Cefaculty7} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty8} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty9} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty10} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty12} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty13} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty14} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty15} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty16} />
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
            <FacultyData data={this.Cefaculty27} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty26} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty23} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty24} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty25} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty30} />
          </div>
          <div>
            <FacultyData data={this.Csfaculty31} />
          </div>
          <div>
            <FacultyData data={this.Csfaculty32} />
          </div>
        </div>
      </div>
    );
  }
}

export default CSFaculty;
