import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
import "../../Components/faculty.css"
class Faculty extends Component {
  state = {};
  /*Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/SH/FAC/242.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC101" target="_blank" rel="noopener noreferrer">Mrs. Ann Neetha Sabu</a>,
    content: "Assistant Professor"
  };*/
  Cefaculty24 = {
    instanceID: "Cefaculty24",
    image: "Allstaffphoto/SH/FAC/140.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC120" target="_blank" rel="noopener noreferrer">Prof. George Kuriakose</a>,
    content: "Assistant Professor(on-leave)"
  };  
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/SH/FAC/SHFAC105.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC105" target="_blank" rel="noopener noreferrer">Mrs. Viji George</a>,
    content: "Assistant Professor"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/SH/FAC/SHFAC107.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC107" target="_blank" rel="noopener noreferrer">Mrs. Rose Mary Baby</a>,
    content: "Assistant Professor"
  };  
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/SH/FAC/249.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC109" target="_blank" rel="noopener noreferrer">Mrs. Jinta Jose</a>,
    content: "Assistant Professor"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/SH/FAC/SHFAC110.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC110" target="_blank" rel="noopener noreferrer">Mrs. Ansu Ann Abraham</a>,
    content: "Assistant Professor"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty",
    image: "Allstaffphoto/SH/FAC/251.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC111" target="_blank" rel="noopener noreferrer">Mrs. Manu Sebastiann</a>,
    content: "Assistant Professor"
  };
  
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/SH/FAC/252.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC112" target="_blank" rel="noopener noreferrer">Mr. Tony Augustine</a>,
    content: "Assistant Professor(on-leave Ph.D)"
  };  
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "Allstaffphoto/SH/FAC/SHFAC114.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC114" target="_blank" rel="noopener noreferrer">Mr. Biju George</a>,
    content: "Asst. Prof. & HOD"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "Allstaffphoto/SH/FAC/255.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC115" target="_blank" rel="noopener noreferrer">Mrs. Deenu Baby</a>,
    content: "Assistant Professor"
  };  
  Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "Allstaffphoto/SH/FAC/329.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC122" target="_blank" rel="noopener noreferrer">Mrs. Dany Sebatian</a>,
    content: "Assistant Professor"
  };
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "Allstaffphoto/SH/FAC/328.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC123" target="_blank" rel="noopener noreferrer">Mrs. Ashly Jacob</a>,
    content: "Assistant Professor"
  };
  Cefaculty18 = {
    instanceID: "Cefaculty18",
    image: "Allstaffphoto/SH/FAC/331.jpg",
    width: "50%",
    name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC124" target="_blank" rel="noopener noreferrer">Mr. Robin K. Augustine</a>,
    content: "Assistant Professor"
  };
  Cefaculty20 = {
    instanceID: "Cefaculty20",
    image: "Allstaffphoto/SH/FAC/johnodakkal.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHSTF101" target="_blank" rel="noopener noreferrer">Mr.	John Odackal</a>,
    content: "Assistant Professor"
  }; 
  Cefaculty26 = {
    instanceID: "Cefaculty26",
    image: "Allstaffphoto/SH/FAC/director.jpg",
    width: "50%",
    name:  "Rev. N.C. Paul",
    content: "Assistant Professor(on leave)"
  }; 
  Cefaculty25 = {
    instanceID: "Cefaculty25",
    image: "Allstaffphoto/SH/FAC/SHFAC140.jpeg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC140" target="_blank" rel="noopener noreferrer">Dr. Vincent Aerath</a>,
    content: "Associate Professor"
  };   
  Cefaculty23 = {
    instanceID: "Cefaculty23",
    image: "Allstaffphoto/SH/FAC/342.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC126" target="_blank" rel="noopener noreferrer">Mrs. Anitha Rajan</a>,
    content: "Assistant Professor(on leave)"
  }; 
  Cefaculty21 = {
    instanceID: "Cefaculty21",
    image: "Allstaffphoto/SH/FAC/shfac136.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC136" target="_blank" rel="noopener noreferrer">Ms. Saksy Joy</a>,
    content: "Assistant Professor"
  };
  Cefaculty22 = {
    instanceID: "Cefaculty22",
    image: "Allstaffphoto/SH/FAC/shfac139.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC139" target="_blank" rel="noopener noreferrer">Mr. George Joseph V</a>,
    content: "Assistant Professor"
  };
  Cefaculty27 = {
    instanceID: "Cefaculty27",
    image: "Allstaffphoto/SH/FAC/SHFAC141.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC141" target="_blank" rel="noopener noreferrer">Ms. Chithra Ramesh</a>,
    content: "Assistant Professor"
  };
  /*Cefaculty28 = {
    instanceID: "Cefaculty28",
    image: "Allstaffphoto/SH/FAC/SHFAC142.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC142" target="_blank" rel="noopener noreferrer">Ms. Ashly George</a>,
    content: "Assistant Professor"
  };*/
  /*Cefaculty29 = {
    instanceID: "Cefaculty29",
    image: "Allstaffphoto/SH/FAC/SHFAC143.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC143" target="_blank" rel="noopener noreferrer">Ms. Athira Sivan</a>,
    content: "Assistant Professor"
  };*/
  /*Cefaculty30 = {
    instanceID: "Cefaculty30",
    image: "Allstaffphoto/SH/FAC/SHFAC144.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=SHFAC144" target="_blank" rel="noopener noreferrer">Dr. Riya Sebastian</a>,
    content: "Assistant Professor"
  };*/
  Cefaculty31 = {
    instanceID: "Cefaculty31",
    image: "Allstaffphoto/SH/FAC/SHFAC145.jpg",
    width: "50%",
    name:  <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=Shfac145" target="_blank" rel="noopener noreferrer">Arunvishnu U</a>,
    content: "Assistant Professor"
  };
  
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent">        
          <div>
            <FacultyData data={this.Cefaculty12} />
          </div>
          {/*<div>
            <FacultyData data={this.Cefaculty1} />
          </div>*/}
          <div>
            <FacultyData data={this.Cefaculty24} />
          </div>            
          <div>
            <FacultyData data={this.Cefaculty3} />
          </div>          
          <div>
            <FacultyData data={this.Cefaculty5} />
          </div>
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
            <FacultyData data={this.Cefaculty14} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty18} />
          </div>          
          <div>
            <FacultyData data={this.Cefaculty16} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty17} />
          </div>
         {/* <div>
            <FacultyData data={this.Cefaculty20} />
         </div>*/}
           <div>
            <FacultyData data={this.Cefaculty26} />
          </div>  
          <div>
            <FacultyData data={this.Cefaculty25} />
          </div>          
          <div>
            <FacultyData data={this.Cefaculty23} />
          </div>         
          <div>
            <FacultyData data={this.Cefaculty21} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty22} />
          </div>
          <div>
            <FacultyData data={this.Cefaculty27} />
          </div>
          {/*<div>
            <FacultyData data={this.Cefaculty28} />
          </div>*/}
          {/*<div>
            <FacultyData data={this.Cefaculty29} />
          </div>*/}
          {/*<div>
            <FacultyData data={this.Cefaculty30} />
          </div>*/}      
          <div>
            <FacultyData data={this.Cefaculty31} />
          </div>
        </div>
      </div>
    );
  }
}

export default Faculty;
