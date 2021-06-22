import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import HeadingFour from "../../Components/Texts/HeadingFour";
class Library extends Component {
  state = {};
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Department Association"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      "The Mechanical Engineering Students Association “MAGNA” of Viswajyothi College of Engineering and Technology, aims at playing a pivotal role in the development of students as engineers through various out-of-curriculum and extracurricular activities. It aims to inculcate, among its members, an awareness and appreciation of the various disciplines of Engineering not only Mechanical Engineering. By means of its various activities, MAGNA aims at being a platform for all students of institution and particularly Mechanical Engineering student’s and seeks to be an active organization of the ME department which promotes their career interests."
  };
  DeptAssociationHeadingTwo = {
    instanceID: "DeptAssociationHeadingTwo",
    title: "2019–2020"
  };
  DeptAssociationHeadingthree = {
    instanceID: "DeptAssociationHeadingthree",
    title: "2018-2019"
  };
  DeptAssociationDescriptionTwo = {
    instanceID: "DeptAssociationDescriptionTwo",
    title:
      "MAGNA was inaugurated by Mr. Johnson Panikulam, JGM (Production and Sale) Hindustan Machine Tools Limited, Kalamassery on 29th October 2018."
  };
  DeptAssociationDescriptionThree = {
    instanceID: "DeptAssociationDescriptionThree",
    title:
      "MAGNA was inaugurated by Dr. Madhusudanan Pillai V, Professor and Head in the School of Management Studies, NIT Calicut on 17th September 2018."
  };
  DeptAssociationDescriptionFour = {
    instanceID: "DeptAssociationDescriptionFour",
    title:
      "Mechanical Engineering Association organized an all Kerala Engineering college staff shuttle Badminton tournament in the loving memory of the Late Abilash T Chacko (Trade Instructor, Mechanical Engineering Department) on 24.05.2019."
  };
  DeptAssociationDescriptionFive = {
    instanceID: "DeptAssociationDescriptionFive",
    title:
      "MAGNA organized its first Annual Achievement Awards Function ATHENA’19 on Friday 17th May, 2019. The awards recognized exceptional performance in academics as well as sports, performing arts and active participation in social events. The purpose was to encourage “other-than-academic talents” of our students and motivate them to shine in their respective fields."
  };
  DeptAssociationDescriptionsix = {
    instanceID: "DeptAssociationDescriptionsix",
    title:
      "National technological day was celebrated by Department of Mechanical Engineering on 14/5/2019. It is observed every year on 11th of May, as a reminder of the anniversary of Shakti cities of Pokhran nuclear test which was held on 11th May 1998. The day highlights the importance of science in our daily lives."
  };

  render() {
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />
         <Bodythree data={this.DeptAssociationDescriptionOne} />
        <HeadingFour data={this.DeptAssociationHeadingTwo} />
        <Bodythree data={this.DeptAssociationDescriptionTwo} /> 
        <HeadingFour data={this.DeptAssociationHeadingthree} />
        <Bodythree data={this.DeptAssociationDescriptionThree} />
        <Bodythree data={this.DeptAssociationDescriptionFour} /> 
        <Bodythree data={this.DeptAssociationDescriptionFive} />
        <Bodythree data={this.DeptAssociationDescriptionsix} />
        <p><b>Programmes conducted by Mechanical Engineering Association</b></p>
        <table border="1">
          <tr>
            
            <th>PROGRAMME</th>
            <th>DATE</th>
            <th>RESOURCE PERSON</th>
          </tr>
          <tr>
            <td>Webinar on "Wind Tunnel Testing and Future Tests on Wind Tunnel Testing" organized by Dept. of Mechanical Engineering</td>
            <td>15/02/2021</td>
            <td>Mr. K Srinivasan, Division Head, Wind Tunnel Data Division, VSSC.</td>
          </tr>
          <tr>
            <td>AICTE SPONSORED One Week Short Term Training Program (STTP) on "Innovations in Manufacturing and Materials for Sustainability” - Phase 2</td>
            <td>14/12/2020 - 19/12/2020</td>
            <td>Dr. Shunmugesh K, Mr. Arun K, Mr. Arun Raphel.</td>
          </tr>
          <tr>
            <td>AICTE SPONSORED One Week Short Term Training Program (STTP) on "Innovations in Manufacturing and Materials for Sustainability” - Phase 1</td>
            <td>23/11/2020 - 28/11/2020</td>
            <td>Dr. Shunmugesh K, Mr. Arun K, Mr. Arun Raphel.</td>
          </tr>
          <tr>
            <td>Online training on "Introduction to Analysis Software ISRO FEAST" organized by Department of Mechanical Engineering in association with IIIC and IEDC VJCET</td>
            <td>21/08/2020</td>
            <td>Mr. Sreejan S, Application Engineer, interCAD Systems Pvt Ltd.</td>
          </tr>
          <tr>
            <td>Webinar on " What industry needs from Engineering Graduates", organized by Department of Mechanical Engineering in association with IIIC, VJCET</td>
            <td>24/07/2020</td>
            <td>Mr. Vinay S, Manager, Education and Training, Conceptia Technologies pvt Ltd.</td>
          </tr>
          <tr>
            <td>Webinar on “Role of Operations and Supply Chain Management in the Uncertain World” was organized by Mechanical Engineering Department in association with Centre for Research and Development, VJCET</td>
            <td>01/07/2020</td>
            <td>Dr. Vipin B, Assistant Professor, IIT Kanpur.</td>
          </tr>
          <tr>
            <td>Webinar on “Wheeled Mobile Robotics – Path Planning and Control” was organized by Mechanical Engineering Department in association with Centre for Research and Development</td>
            <td>24/06/2020</td>
            <td>Mr. Robin Mathews, Post-Doctoral Research Fellow, University College Dublin.</td>
          </tr>
          <tr>
            <td>Webinar on “Laser Surface Modifications (Additive Technology) & Design Outlook in an Industry (HMT)” was organized by Mechanical Engineering Department in association with Centre for Research and Development</td>
            <td>23/06/2020</td>
            <td>Dr. Rakesh K R, Deputy Engineer, HMT Kalamassery.</td>
          </tr>
          <tr>
            <td>Webinar on “Hints for writing a research Paper” was organized by Mechanical Engineering Department in association with Centre for Research and Development</td>
            <td>19/06/2020</td>
            <td>Dr. K Mathiyazhagan, Associate Professor, Amity University.</td>
          </tr>
          <tr>
            <td>Webinar on “Role of Mechanical Engineer in Society Development” was organized by Mechanical Engineering Department in association with Centre for Research and Development</td>
            <td>19/06/2020</td>
            <td>Dr. K Mathiyazhagan, Associate Professor, Amity University.</td>
          </tr>
          <tr>
            <td>Webinar on “Fuel Cells – Energy of the Future” was organized by Mechanical Engineering Department in association with Centre for Research and Development</td>
            <td>16/06/2020</td>
            <td>Dr. Rajesh Baby, HOD, MED, St Joseph's Palai.</td>
          </tr>
          <tr>
            <td>Webinar on “3D Printing and Medical Applications” was organized by Mechanical Engineering Department in association with Centre for Research and Development</td>
            <td>15/06/2020</td>
            <td>Dr. Praveen AS, Assistant Professor, Vel Tech Chennai.</td>
          </tr>
          <tr>
            
            <td>Expert Talk on "Modern Trends in Coal-Fired Thermal Power Plants" for all final year students organised by IIIC, VJCET and Mechanical Engineering Association, VJCET </td>
            <td>13/02/2019</td>
            <td>Mr. Sushil Cherian
Co Founder and Vice President
Kalki Communications pvt Ltd</td>
          </tr>
          <tr>
            
            <td>Ist INTERNATIONAL SYMPOSIUM ON INNOVATIVE ENGINEERING PARAGDIMS by SES</td>
            <td>03.12.2018-
21.12.2018</td>
            <td>RALPH SCHNEIDER
GERMANY</td>
          </tr>
          <tr>
            
            <td>Lecture Meet   on ‘AUTOMOTIVE ELECTRONICS 2020’
organised by Mechanical Engineering Department in association with SAEINDIA</td>
            <td>22.11.2018</td>
            <td>Mr. Kasiraja Thangapandian
Software Project Manager , Visteon Technical and Services  Centre Pvt Ltd,</td>
          </tr>
          <tr>
         
            <td>Alumni Talk on "Marine Engineering"
for S5 and S7 ME Students</td>
            <td>12.11.2018</td>
            <td>Mathaikutty Sunny
3rd Engineer, Anglo Eastern Ship Management Ltd</td>
          </tr>
          <tr>
           
            <td>Expert Talk on "Cyber Security"
for all ME students organised by Technical Staff MED</td>
            <td>07.11.2018</td>
            <td>Mr. Thalhath PM
Cyber Cell Officer Aluva</td>
          </tr>
          <tr>
          
            <td>One day Training on PLC for final year ME students organised by Robotics Club Mechanical Department</td>
            <td>23.10.2018
24.10.2018</td>
            <td>Recode Innovations, Muvattupuzha</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Library;
