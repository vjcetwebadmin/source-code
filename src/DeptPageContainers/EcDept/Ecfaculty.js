import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
import "../../Components/faculty.css"
class Faculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/EC/FAC/144.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC108" target="_blank" rel="noopener noreferrer">Mrs. Smitha Cyriac</a>,
    content: "Assistant Professor"
  }; 
  /*Cefaculty33 = {
    instanceID: "Cefaculty33",
    image: "Allstaffphoto/EC/FAC/368.JPG",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC137" target="_blank" rel="noopener noreferrer">Dr. Edgar Ruskin Frank A</a>,
    content: "Professor(on-leave)"
  };*/  
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/EC/FAC/138.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC102" target="_blank" rel="noopener noreferrer">Dr. Cyriac M Odackal</a>,
    content: "Associate Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/EC/FAC/139.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC103" target="_blank" rel="noopener noreferrer">Mr. R Anil Kumar</a>,
    content: "Assistant Professor"
  };
  /*Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/EC/FAC/ECFAC104.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC104" target="_blank" rel="noopener noreferrer">Dr. Melvin C Jose</a>,
    content: "Associate Professor"
  };*/
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/EC/FAC/142.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC106" target="_blank" rel="noopener noreferrer">Mrs. Lekshmi M S</a>,
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/EC/FAC/145.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC109" target="_blank" rel="noopener noreferrer">Dr. Tony D</a>,
    content: "Associate Professor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "Allstaffphoto/EC/FAC/146.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC110" target="_blank" rel="noopener noreferrer">Mrs. Anitta Thomas</a>,
    content: "Assistant Professor"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/EC/FAC/ECFAC111.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC111" target="_blank" rel="noopener noreferrer">Mrs. Ranjini Surendran</a>,
    content: "Asso. Professor & Asst. HOD"
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/EC/FAC/148.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC112" target="_blank" rel="noopener noreferrer">Mrs. Niji Mathews</a>,
    content: "Assistant Professor"
  };
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "Allstaffphoto/EC/FAC/ECFAC113.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC113" target="_blank" rel="noopener noreferrer">Mrs. Rose Maria Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "Allstaffphoto/EC/FAC/150.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC114" target="_blank" rel="noopener noreferrer">Mrs. Merlin Thomas</a>,
    content: "Assistant Professor"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "Allstaffphoto/EC/FAC/151.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC115" target="_blank" rel="noopener noreferrer">Mrs. V K Vanitha Rugmoni</a>,
    content: "Assistant Professor"
  };
  Cefaculty15 = {
    instanceID: "Cefaculty15",
    image: "Allstaffphoto/EC/FAC/152.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC116" target="_blank" rel="noopener noreferrer">Mrs. Cuckoo Anitha Joseph</a>,
    content: "Assistant Professor"
  };
  Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "Allstaffphoto/EC/FAC/153.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC117" target="_blank" rel="noopener noreferrer">Mrs. Anu Rani Philip</a>,
    content: "Assistant Professor"
  };
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "Allstaffphoto/EC/FAC/154.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC118" target="_blank" rel="noopener noreferrer">Mrs. Sani John</a>,
    content: "Assistant Professor(on-leave Ph.D)"
  };
  Cefaculty18 = {
    instanceID: "Cefaculty18",
    image: "Allstaffphoto/EC/FAC/155.JPG",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC119" target="_blank" rel="noopener noreferrer">Mr. Manu Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty19 = {
    instanceID: "Cefaculty19",
    image: "Allstaffphoto/EC/FAC/ECFAC120.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC120" target="_blank" rel="noopener noreferrer">Mrs. Manju Thomas T</a>,
    content: "Assistant Professor"
  };
  Cefaculty20 = {
    instanceID: "Cefaculty20",
    image: "Allstaffphoto/EC/FAC/157.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC121" target="_blank" rel="noopener noreferrer">Mr. Krishnendu K</a>,
    content: "Assistant Professor(on-leave Ph.D)"
  };
  Cefaculty21 = {
    instanceID: "Cefaculty21",
    image: "Allstaffphoto/EC/FAC/158.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC122" target="_blank" rel="noopener noreferrer">Mrs. Rose Mary Kuruvithadam</a>,
    content: "Assistant Professor(on-leave Ph.D)"
  };

  Cefaculty23 = {
    instanceID: "Cefaculty23",
    image: "Allstaffphoto/EC/FAC/SimiZerineSleeba.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC140" target="_blank" rel="noopener noreferrer">Dr. Simi Zerine Sleeba</a>,
    content: "Associate Professor"
  };
  Cefaculty24 = {
    instanceID: "Cefaculty24",
    image: "Allstaffphoto/EC/FAC/Naveenjacob.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC105" target="_blank" rel="noopener noreferrer">Dr. Naveen Jacob</a>,
    content: "Asso. Professor & HOD"
  };

  Cefaculty26 = {
    instanceID: "Cefaculty26",
    image: "Allstaffphoto/EC/FAC/PriyaGL.jpeg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC123" target="_blank" rel="noopener noreferrer">Mrs. Priya G L</a>,
    content: "Assistant Professor(on-leave Ph.D)"
  };
  Cefaculty27 = {
    instanceID: "Cefaculty27",
    image: "Allstaffphoto/EC/FAC/Anishmjose.JPEG",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC127" target="_blank" rel="noopener noreferrer">Mr. Anish M Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty28 = {
    instanceID: "Cefaculty28",
    image: "Allstaffphoto/EC/FAC/MinuGeorge.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC129" target="_blank" rel="noopener noreferrer">Mrs.Minu George</a>,
    content: "Assistant Professor(on-leave)"
  };
  /*Cefaculty30 = {
    instanceID: "Cefaculty30",
    image: "Allstaffphoto/EC/FAC/Jibbypeter.JPEG",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC131" target="_blank" rel="noopener noreferrer">Mr. Jibby Peter Dcruz</a>,
    content: "Assistant Professor"
  };*/
  Cefaculty31 = {
    instanceID: "Cefaculty31",
    image: "Allstaffphoto/EC/FAC/Vinijakurian.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC132" target="_blank" rel="noopener noreferrer">Mrs. Vinija Kurian</a>,
    content: "Assistant Professor"
  };
  Cefaculty32 = {
    instanceID: "Cefaculty32",
    image: "Allstaffphoto/EC/FAC/anuckunjachan.JPEG",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=ECFAC133" target="_blank" rel="noopener noreferrer">Mrs. Anu C Kunjachan</a>,
    content: "Assistant Professor"
  };
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">
          <div>
            <FacultyData data={this.Cefaculty24} />
          </div>          
          {/*<div>
            <FacultyData data={this.Cefaculty33} />
          </div>  */}
          <div>
            <FacultyData data={this.Cefaculty1} />
          </div>       
          <div>
            <FacultyData data={this.Cefaculty4} />
          </div>
         
          <div>
            <FacultyData data={this.Cefaculty8} />
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
            <FacultyData data={this.Cefaculty9} />
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
            <FacultyData data={this.Cefaculty21} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty26} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty27} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty28} />
          </div>
          {/*<div>
            <FacultyData data={this.Cefaculty30} />
        </div>*/}
          <div>
            <FacultyData data={this.Cefaculty31} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty32} />
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty;
