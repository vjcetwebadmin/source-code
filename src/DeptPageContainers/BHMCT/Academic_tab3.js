import React, { Component } from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../Components/Tables/tableformat.css";
class CSFaculty extends Component {
  state = {};
  LibraryServiceTitle = {
    instanceID: "LibraryServiceTitle",
    title: "MBA ACADEMIC ADVISORY COUNCIL"
};
LibraryContent1 = {
  instanceID: "LibraryContent1",
  title: "An Academic Advisory Council for the MBA course of the Viswajyothi College of Engineering and Technology was constituted on 14th October 2016. Advisory board has 14 members headed by Msgr. Dr. Pius Malenkandathil (Manager) and Rev. Fr. Paul Nedumburath as the secretary. The members are nominated by the Board of Trustees."
}
LibraryContent2 = {
  instanceID: "LibraryContent2",
  title: "The Program Assessment Committee (PAC) has been formed for monitoring of different activities related to the MBA Program The PAC consists of faculty members of the department who periodically monitor the activities and evaluate different parameters."
}
LibraryServiceTitle1 = {
  instanceID: "LibraryServiceTitle1",
  title: "PROGRAMME ASSESSMENT COMMITTEE (PAC)"
};
LibraryServiceTitle2 = {
  instanceID: "LibraryServiceTitle2",
  title: "PROGRAMME EDUCATIONAL OBJECTIVES (PEOS)"
};
  render() {
    return (
      <div>                   
        <p>
          <HeadingTwo data={this.LibraryServiceTitle} className="Heading" />
          <BodyOneJustified data={this.LibraryContent1}/>
        </p>
        <table border="1" id="tableformat">
          <tr><th>Name</th><th>Designation</th></tr> 
            <tr>
                  <td>Msgr. Dr. Pius Malenkandathil (President)</td>
                  <td>Manager VJCET, President of Diocesan Technical Education Trust</td>
              </tr>
              <tr>
                  <td>Rev. Fr. Paul Nedumpurath (Director)</td>
                  <td>Secretary of the Trust</td>
              </tr>
              <tr>
                  <td>Adv. Francis George (Member)</td>
                  <td>Former Manager</td>
              </tr>
              <tr>
                  <td>Dr. V.A. Joseph (Former Chairman, SIB)</td>
                  <td>Former Manager</td>
              </tr>   
              <tr>
                  <td>Dr. Venugopal C Govind (Managing Partner, Varma and Varma Associate)</td>
                  <td>Member</td>
              </tr>   
              <tr>
                  <td>Ms. Preethi Gopala Krishnan (Assistant Director, Strategic Talent Consulting, E&Y)</td>
                  <td>Member</td>
              </tr>
              <tr>
                  <td>Dr. G.C. Gopalapillai (Former CMD, FACT.KELTORN, INKEL)</td>
                  <td>Member</td>
              </tr>                   
              <tr>
                  <td>Mr. Dinesh Thampi  (VP&DCH, TCS Kerala)</td>
                  <td>Former Manager</td>
              </tr>   
              <tr>
                  <td>Mr. Rajesh Nair (Director, E&Y)</td>
                  <td>Member</td>
              </tr>   
              <tr>
                  <td>Dr. Anandakuttan B Unnithan (Dean-IIM, Kozhikode)</td>
                  <td>Member</td>
            </tr>                                                                                               
        </table>        
        <p>
          <HeadingTwo data={this.LibraryServiceTitle1} className="Heading" />
          <br />
          <BodyOneJustified data={this.LibraryContent2}/>         
        </p>
        <table border="1" id="tableformat">
        <tr><th>Name</th><th>Designation</th></tr> 
              <tr>
                  <td>Dr. Cyriac Joseph</td>
                  <td>Dean & HOD-Management Studies</td>
              </tr>
              <tr>
                  <td>Mr. Sebin Joseph</td>
                  <td>Assistant Professor</td>
              </tr>
              <tr>
                  <td>Mr. Pratheep Kumar</td>
                  <td>Assistant Professor</td>
              </tr>
              <tr>
                  <td>Dr. Anish John A</td>
                  <td>Assistant Professor</td>
              </tr>   
              <tr>
                  <td>Dr. Jose Mamman</td>
                  <td>Assistant Professor & Placement Incharge</td>
              </tr>
              <tr>
                  <td>Mrs. Merrin Geordie Pottas</td>
                  <td>Assistant Professor</td>
              </tr>  
              <tr>
                  <td>Ms.Riya Susan  Skaria</td>
                  <td>Assistant Professor</td>
              </tr>                                                                           
        </table>
        </div>
    );
  }
}
export default CSFaculty;
