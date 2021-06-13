import React, { Component } from "react";
/* import HeadingOne from "../../Components/Texts/HeadingOne"; */
import Bodythree from "../../Components/Texts/BodyThree";
import ImageTwo from "../../Components/Images/imageTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";
import "../../Components/Tables/tableformat.css";
class Program extends Component {
  state = {};
  
  SaeindiaDescriptionOne = {
    instanceID: "SaeindiaDescriptionOne",
    title:
      "The Society of Automotive Engineers (SAE) is an international organization, which   is the leader in connecting and educating mobility professionals to enable safe, clean, and accessible mobility solutions. SAEINDIA is a subsidiary of SAE International, which promotes knowledge dissemination & skill development of mobility professionals, students, and faculty in the country through its various value added programs. Student chapters are an inevitable part of SAEINDIA. It has over 50,000 student members in more than 480 collegiate clubs located all over India. Collegiate clubs provide practical exposure to a professional engineering society as well as focal point for campus engineering programs and projects. The SAEINDIA Collegiate club started functioning in our college in 2017 with over 80 student members along with two faculty advisors in the department of Mechanical engineering. Since its inception, the students of the collegiate club are actively participating in various activities conducted by SAEINDIA. Last year 5 students were participated in the Tier 3 events of the SAEINDIA student convention held at Chennai. Also, a team of seven students went for Aero Design Challenge competition in which the students have to make their on aeroplane according to the criterion laid down by SAEINDIA. This year, the collegiate club have conducted a Student Knowledge Improvement Program (SKIP) under SAEINDIA Southern Section which was first of its kind conducted inside Kerala. Two renowned industrial experts have taken the session and 29 students participated from within and outside the college and the program was a grand success."
  };
  SaeIImage = {
    instanceID: "SaeIImage",
    image: "ProfessionalBodies/SAEINDIA.jpg",
    width: "35%"
}
ActivitiesHeading = {
  instanceID: "ActivitiesHeading",
  title: "Programs Conducted Under SAEINDIA Collegiate Club"
};
ActivitiesHeading1 = {
  instanceID: "ActivitiesHeading1",
  title: "SAEINDIA Collegiate Club Office Bearers"
};

  render() {
    return (
      <div className="Program" id="program">
          <p align="center"><ImageTwo data={this.SaeIImage} /></p>
        <Bodythree data={this.SaeindiaDescriptionOne} />
        <br></br>    
        <HeadingThree data={this.ActivitiesHeading1} />   
        <table id="tableformat">                           
                <tr><th>POST</th><th>NAME</th></tr>
                <tr><td>Senior Faculty Advisor</td><td>Mr. Eldhose Kurian, AP ME</td></tr>
                <tr><td>Additional Faculty Advisor</td><td>Mr. Eldhose Paul, AP ME</td></tr>
                <tr><td>Student Chair-person</td><td>Mr. Kiran Mathew George, S8 ME B</td></tr>
                <tr><td>Student Vice  Chair-person</td><td>Mr. Sagar Vincent,  S6 ME A</td></tr>
                <tr><td>Student Secretary</td><td>Mr. Gayus Eldho,  S8 ME A</td></tr>
                <tr><td>Student Treasurer</td><td>Mr. Joyal John, S8 ME B</td></tr>
        </table>

        <br></br>    
        <HeadingThree data={this.ActivitiesHeading} />   
        <table id="tableformat">
                          
              <tr><th>Sl. No</th><th>Event</th><th>Date</th><th>Details</th></tr>
              <tr><td>1</td><td>SAEINDIA Collegiate Club Inauguration and Technical Session</td><td>14-10-2017</td><td>SAEINDIA Collegiate Club was Inaugurated by Mr. C Pradeep, Principal Engineer, Vehicle Integration Centre, Mahindra followed by a technical talk on “Electric Mobility in India” by the resource Person</td></tr>
              <tr><td>2</td><td>Technical Talk</td><td>22-11-2018</td><td>Mr. Kasiraja Thangapandian,Software Project Manager , Visteon Technical and Services Centre Pvt Ltd, Chennai and Joint Secretary of SAEINDIA Southern Section delivered a session on “Vehicle Sensors”.</td></tr>
              <tr><td>3</td><td>Student Knowledge Improvement Program (SKIP)</td><td>29-04-2019 to 30-04-2019</td><td>A SKIP Program on “Electric Vehicles and Technology” was arranged for two days in association with SAEINDIA Southern Section. The resource persons  Mr. Pradeep C, (Mgmt Committee Member, SAEINDIA Southern Section) and Mr.Vallabha Rao Rikka (Project Scientist (middle level) , ARCI) delivered the sessions.</td></tr>
                           
        </table>
      </div>
    );
  }
}

export default Program;
