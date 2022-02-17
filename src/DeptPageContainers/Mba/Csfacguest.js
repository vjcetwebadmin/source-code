import React, { Component } from "react";
import FacultyData from "../../Components/FacultyData";
import "../../Components/faculty.css"
class CSFaculty extends Component {
  state = {};
  Cefaculty1 = {
    instanceID: "Cefaculty1",
    image: "Allstaffphoto/MBA/GUEST/Guest_Gthanathu.jpg",
    width: "50%",
    name: "Dr. George Thanathuparambil",
    content: "Professor"
  };
  Cefaculty2 = {
    instanceID: "Cefaculty2",
    image: "Allstaffphoto/MBA/GUEST/Guest_davisorton.jpg",
    width: "50%",
    name: "Mr. Davis Orton",
    content: "Senior Lecturer - University of Derby"
  };
  Cefaculty3 = {
    instanceID: "Cefaculty3",
    image: "Allstaffphoto/MBA/GUEST/Guest_isobel.jpg",
    width: "50%",
    name: "Ms. Isobel Stockdale",
    content: "University of Derby"
  };
  Cefaculty4 = {
    instanceID: "Cefaculty4",
    image: "Allstaffphoto/MBA/GUEST/Guest_malacolm.jpg",
    width: "50%",
    name: "Mr. Malcolm Trotter",
    content: "IAAP, UK"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/MBA/GUEST/Guest_omkumar.jpg",
    width: "50%",
    name: "Dr. Omkumar Krishnan",
    content: "Area Chair - Marketing, IIM Kozhikode"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/MBA/GUEST/Guest_dominic.jpg",
    width: "50%",
    name: "Dr. Dominic Ponattu",
    content: "Project Leader, Bertelsmann Foundation, Germany"
  };
  Cefaculty7 = {
    instanceID: "Cefaculty7",
    image: "Allstaffphoto/MBA/GUEST/Guest_manojv.jpg",
    width: "50%",
    name: "Dr. Manoj Varghese",
    content: "Former Director XIME, Ex Infosys, Dell, Google and Facebook"
  };
  Cefaculty8 = {
    instanceID: "Cefaculty8",
    image: "Allstaffphoto/MBA/GUEST/Guest_kamalmampilly.jpg",
    width: "50%",
    name: "Mr. Kamal Mampilly",
    content: "VP, Geography Head - HR, Axis Bank"
  };
  Cefaculty9 = {
    instanceID: "Cefaculty9",
    image: "Allstaffphoto/MBA/GUEST/Guest_dinesh.jpg",
    width: "50%",
    name: "Mr. Dinesh Thampi",
    content: "VP & DCH, TCS Kerala"
  };
  Cefaculty10 = {
    instanceID: "Cefaculty10",
    image: "Allstaffphoto/MBA/GUEST/Guest_Satheshan.jpg",
    width: "50%",
    name: "Col. P V Satheeshan",
    content: "Head, Talent Acquisition, CSB."
  };
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/MBA/GUEST/Guest_murali.jpg",
    width: "50%",
    name: "Mr. Murali T",
    content: "GM-HR, TCS"
  };
  Cefaculty12 = {
    instanceID: "Cefaculty12",
    image: "Allstaffphoto/MBA/GUEST/Guest_jyothi.jpg",
    width: "50%",
    name: "Dr. Jyothi",
    content: "Ministry of Ayush, New Delhi"
  };
  Cefaculty13 = {
    instanceID: "Cefaculty13",
    image: "Allstaffphoto/MBA/GUEST/Guest_shyampadaman.jpg",
    width: "50%",
    name: "Adv. Shyam Padman",
    content: "Sr. Advocate, High Court of Kerala"
  };
  Cefaculty14 = {
    instanceID: "Cefaculty14",
    image: "Allstaffphoto/MBA/GUEST/Guest_josepiu.jpg",
    width: "50%",
    name: "Mr. Jose Pius Nedumkallel",
    content: "Assistant Professor, VJCET"
  };
  Cefaculty15 = {
    instanceID: "Cefaculty15",
    image: "Allstaffphoto/MBA/GUEST/Guest_Rajeshnair.jpg",
    width: "50%",
    name: "Mr. Rajesh Nair",
    content: "Associate Partner, Markets, Ernst & Young LLP"
  };
  Cefaculty16 = {
    instanceID: "Cefaculty16",
    image: "Allstaffphoto/MBA/GUEST/Guest_irudaya.jpg",
    width: "50%",
    name: "Dr. S. Irudaya Rajan",
    content: "Professor, Centre For Development Studies (CDS), Kerala"
  };
  Cefaculty17 = {
    instanceID: "Cefaculty17",
    image: "Allstaffphoto/MBA/GUEST/Guest_shushama.jpg",
    width: "50%",
    name: "Ms. Sushama Srikandath",
    content: "Managing Director, AVT Mc Cormick Ingriedients Pvt Ltd"
  };
  Cefaculty18 = {
    instanceID: "Cefaculty18",
    image: "Allstaffphoto/MBA/GUEST/Guest_jainair.jpg",
    width: "50%",
    name: "Mr. Jay Nair",
    content: "Director, Global Head of Trade Capture and Lifecycle, FX Technology, UBS Investment Bank, Zurich Area, Switzerland."
  };
  Cefaculty19 = {
    instanceID: "Cefaculty19",
    image: "Allstaffphoto/MBA/GUEST/Guest_rahulrama.jpg",
    width: "50%",
    name: "Mr. Rahul Rama Varior Ph.D",
    content: "Former Research Scientist, Amazone Web Services Rekognition, Seattle, WA"
  };
  Cefaculty20 = {
    instanceID: "Cefaculty20",
    image: "Allstaffphoto/MBA/GUEST/Guest_urgada.jpg",
    width: "50%",
    name: "Prof. Urgadas Sampath",
    content: "Chief Mentor and Solution Architect, Strategyk Consilium Pvt. Ltd., IIM – A Alumnus"
  };
  Cefaculty21 = {
    instanceID: "Cefaculty21",
    image: "Allstaffphoto/MBA/GUEST/Guest_vajoseph.jpg",
    width: "50%",
    name: "Dr. V A Joseph",
    content: "Former Chairman, Managing Director and CEO of South Indian Bank Ltd. Director of ESAF Small Finance Bank"
  };
  Cefaculty22 = {
    instanceID: "Cefaculty22",
    image: "Allstaffphoto/MBA/GUEST/Guest_soumyasp.jpg",
    width: "50%",
    name: "Ms. Soumya S Pai",
    content: "Sr. Practice Lead, Compensation and Benefits, Infosys Ltd."
  };
  Cefaculty23 = {
    instanceID: "Cefaculty23",
    image: "Allstaffphoto/MBA/GUEST/Guest_abrahamkoshy.jpg",
    width: "50%",
    name: "Dr. Abraham Koshy",
    content: "Former Professor, IIM Ahmedabad"
  };
  Cefaculty24 = {
    instanceID: "Cefaculty24",
    image: "Allstaffphoto/MBA/GUEST/Guest_jdennis.jpg",
    width: "50%",
    name: "Dr. J Dennis Rajakumar",
    content: "Director, EPW Research Foundation, Mumbai"
  };
  Cefaculty25 = {
    instanceID: "Cefaculty25",
    image: "Allstaffphoto/MBA/GUEST/Guest_joshyjacob.jpg",
    width: "50%",
    name: "Prof. Dr. Joshy Jacob",
    content: "IIM Ahmadabad"
  };  
  Cefaculty26 = {
    instanceID: "Cefaculty26",
    image: "Allstaffphoto/MBA/GUEST/Guest_francis.jpg",
    width: "50%",
    name: "Dr. Francis Cherunilam",
    content: "Former Director, SMS CUSAT, Author"
  };    
  render() {
    return (
      <div className="faculty">
        <div className="facultyContent" >
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
          <div>
            <FacultyData data={this.Cefaculty6} />
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
            <FacultyData data={this.Cefaculty22} />
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
            <FacultyData data={this.Cefaculty26} />
          </div>                   
        </div>
      </div>
    );
  }
}

export default CSFaculty;
