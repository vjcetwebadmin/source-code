import React, { Component } from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
//import BodyThree from "../Components/Texts/BodyThree";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFour from "../Components/Texts/HeadingFour";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "./Research.css"

//import Profile from "./csi";

class Profile extends Component {
    state = { showMenu: false };
    openMenu = () => {
        console.log("opening Menu");
        this.setState({ showMenu: true });
    };
    closeMenu = () => {
        this.setState({ showMenu: false });
    };

    HomePageHeader = {
        instanceID: "HomePageHeader"
    };
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };
    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };
    // ResearchImg = {
    //     instanceID: "ResearchImg",
    //     image: "cover2-1.jpg",
    //     width: "93%"
    // }
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Details regarding Ph.D Research Guidance"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "Some major initiatives taken by Center for Research & development(CRD) are"
    }

    MajoreventsTitle = {
      instanceID: "MajoreventsTitle",
      title: "Details regarding Ph.D Research Guidance"
  };
  EventTitle1 = {
      instanceID: "EventTitle1",
      title: "Master of Business Administration"
  };

   
    render() {
        return (
            <div className="HomePage">
               
                {/* <HeadingOne data={this.ResearchHeading}></HeadingOne>
                <ImageOne data={this.ResearchImg}></ImageOne> 
                <BodyThree data={this.ReserchBody1} /><br />
        <HeadingFour data={this.EventTitle1} className="Heading" />*/}
                <HeadingTwo data={this.MajoreventsTitle} className="Heading" />
               <p align="left" ><b>Master of Business Administration</b></p>
                  <p align="left" style={{lineHeight:1.5}} >There are three faculty members with Ph.D., who are currently working in this department. Currently, three research scholars are doing Ph.D. under the guidance of Dr. Cyriac Joseph and three have already completed Ph.D. The MBA department organises various innovative seminars, training programmes etc.</p>  
                  <p align="left" >Research Guide</p>
                  <p align="left" >Dr. Cyriac Joseph</p>

                  <p align="left" ><b>Department of Computer Science & Engineering</b></p>
                  <p align="justify" style={{lineHeight:1.5}} >There are three faculty members with Ph.D., who are currently working in this department. At present, nine faculty members are doing Ph.D. in reputed universities. During the last five years, one research scholar was awarded Ph.D. under the guidance of Dr. K.N. Ramachandran Nair. Faculty members of the CSE department continuously publish articles in Scopus indexed journals/conferences. The department conducts workshops, ATAL sponsored faculty development programmes and seminars on recent trends in computer science such as Artificial Intelligence, Data Science, Blockchain etc. Two faculty members are recognized as research guides under MG University and APJ Abdul Kalam Technological University during the period 2015-2021.</p>  
                  <p align="left" >Research Guides</p>
                  <p align="left" >Dr. K N Ramachandran Nair</p>
                  <p align="left" >Dr. Anishin Raj M.M</p>

                  <p align="left" ><b>Department of Electrical & Electronics Engineering</b></p>
                  <p align="justify" style={{lineHeight:1.5}} >The EEE department organizes training programmes, workshops and seminars on recent trends in their field. Currently, three faculty members with Ph.D are working in this department. Faculty members of the EEE department have received grants for projects from governmental agencies such as Department of Atomic Energy & Board of research in Nuclear Science. The EEE department encourages their faculties to publish articles in Scopus indexed journals/conferences. One faculty member is recognized as a research guide under APJ Abdul Kalam Technological University.</p>  
                  <p align="left" >Research Guide</p>
                  <p align="left" >Dr. Sony Kurian </p>

                  <p align="left" ><b>Department of Mechanical Engineering</b></p>
                  <p align="justify" style={{lineHeight:1.5}} >Currently two faculty members with Ph.D. are working in this department. Faculty members of ME department publish articles in SCI/Scopus indexed journals/conferences. Several Faculty members are currently pursuing Ph.D in reputed Universities. This department organizes different seminars, ATAL sponsored training programmes etc. Faculty members of ME have received grants from governmental and nongovernmental organizations for student projects as PI. Two faculty members are recognized as research guides under APJ Abdul Kalam Technological University.</p>  
                  <p align="left" >Research Guides</p>
                  <p align="left" >Dr. K. Shunmugesh</p>
                  <p align="left" >Dr. Sajan T John</p>

                  <p align="left" ><b>Department of Electronics & Communication Engineering</b></p>
                  <p align="justify" style={{lineHeight:1.5}} >The ECE department organizes different training programmes, workshops and seminars on emerging technologies in their field. Two faculty members with Ph.D. are currently working in this department and many faculty members are pursing Ph.D in reputed institutes. Many faculty members have already published their papers in reputed SCI/Scopus indexed journals. Many faculty members of the ECE department have received grants for projects from government (KSCSTE)/non-government agencies (IEEE SIGHT). The ECE department constantly encourages their faculty members to publish articles in Scopus/SCI indexed journals/conferences.</p>  
   
                  <p align="left" ><b>Department of Civil Engineering</b></p>
                  <p align="justify" style={{lineHeight:1.5}} >The Civil department organizes different workshops, KTU sponsored faculty development programmes and seminars on the latest technologies. Currently, three faculty members with Ph.D. are working in this department and several faculty members are pursuing Ph.D in esteemed institutes. Faculty members of this department have published articles in reputed indexed journals/conferences.</p>  

                  <p align="left" ><b>Department of Information Technology</b></p>
                  <p align="justify" style={{lineHeight:1.5}} >The IT department organizes different training programmes, workshops and seminars on the latest technologies such as the Internet of things, artificial intelligence etc. Currently, one faculty member with a Ph.D. is working in this department. At present, three faculty members are pursuing Ph.D in reputed universities. Many faculty members have published their papers in reputed Scopus indexed journals.</p>  

                  <p align="left" ><b>Department of Science & Humanities</b></p>
                  <p align="justify" style={{lineHeight:1.5}} >The S&H department organizes training programmes, workshops and seminars on recent trends. The S&H department encourages their faculties to publish articles in reputed journals/conferences. One faculty member was recognized as a research guide under Mahatma Gandhi University.</p>  
                  <p align="left" >Research Guide</p>
                  <p align="left" >Dr. Lovely Mathew</p>

                  <br />
                   
                   <table id="tableformat">
                   <tr><th>Sl No.</th><th>Ph.D Research Guides</th><th>Departments</th><th>Name of Research Scholars</th></tr>
                   <tr><td rowSpan="6">1</td><td rowSpan="6">Dr. Cyriac Joseph</td><td rowSpan="6">MBA</td><td>Ms. Amal Sharin T.J</td></tr>
                   <tr><td>Ms. Vinita Nair</td></tr>
                   <tr><td>Ms. RemaDevi T C</td></tr>
                   <tr><td>Ms. Gayana T S</td></tr>
                   <tr><td>Ms. Gincy Luckose. V</td></tr>
                   <tr><td>Ms. Mercy Mathew</td></tr>
                   <tr><td>2</td><td>Dr. K.N Ramachandran  Nair</td><td>CSE</td><td>Dr. Jina Varghese</td></tr>
                   <tr><td rowSpan="2">3</td><td rowSpan="2">Dr. Lovely Mathew</td><td rowSpan="2">S&H</td><td>Ms. Ajitha A R</td></tr>
                   <tr><td>Ms. Aswathi M K</td></tr>                   
                   <tr><td>4</td><td>Dr. Anishin Raj M.M</td><td>CSE</td><td>Recognized as Research Guide under KTU. Students are not assigned</td></tr>
                   <tr><td>5</td><td>Dr. Sony Kurian</td><td>EEE</td><td>Recognized as Research Guide under KTU. Students are not assigned</td></tr>
                   <tr><td>6</td><td>Dr. K. Shunmugesh</td><td>ME</td><td>Recognized as Research Guide under KTU. Students are not assigned</td></tr>
                   <tr><td>7</td><td>Dr. Sajan T John</td><td>ME</td><td>Recognized as Research Guide under KTU. Students are not assigned</td></tr>
                   </table>

              </div>
        );
    }
}

export default Profile;