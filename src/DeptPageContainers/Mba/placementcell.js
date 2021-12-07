import React, { Component } from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import HeadingOne from "../../Components/Texts/HeadingOne";
//import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
//import "../styles.css"
import "../../Components/Tables/tableformat.css";
class CSFaculty extends Component {
  state = {};
  LibraryServiceTitle = {
    instanceID: "LibraryServiceTitle",
    title: "ABOUT PLACEMENT CELL"
};
LibraryContent1 = {
  instanceID: "LibraryContent1",
  title: "Placement is a very important activity at VISWAJYOTHI College of Engineering and Technology .VJCET has an independent placement cell focused to cater to the needs of leading organizations in conducting campus interviews for the final year. The placement officer is assisted by student representatives. The committee evolves a broad policy framework every year. Students are closely co-opted in implementing these policy decisions. The cell keeps close liaison with various industrial establishments (both private and public sectors), which conduct campus interviews and select the student from all disciplines. Most of them visit the Campus for holding campus interviews. VISWAJYOTHI School of Management (VSMS) have a department representative who co ordinates the placement activities synchronizing with placement department."
}
LibraryServiceTitle1 = {
  instanceID: "LibraryServiceTitle1",
  title: "PLACEMENT RECORDS"
};
  render() {
    return (
      <div>                   
        <p>
          <HeadingTwo data={this.LibraryServiceTitle} className="Heading" />
          <BodyOneJustified data={this.LibraryContent1}/>
        </p>
        <p>
          <HeadingTwo data={this.LibraryServiceTitle1} className="Heading" />
        </p>
          <table border="1" id="tableformat">
          <tr><th colspan="5" >Placement Report of 2018 – 20 Batch</th></tr> 
              <tr>
                  <td>Lowest Salary (CTC)</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Highest Salary (CTC)</td>
                  <td></td>
              </tr>
              <tr>
                  <td>Number of Companies Visited</td>
                  <td></td>
              </tr>
          </table>
          <div  style={{textAlign:"left"}}>
            <p>
            <b>Companies attended</b>
            </p>
            <ul>
              <li>Orell Technologies</li>
              <li>Aditya Birla Fashion Retail Ltd</li>
              <li>Sharekhan Financial Services</li>
              <li>Telenova</li>
              <li>Club Mahindra</li>
              <li>Envestnet</li>
              <li>Muthoot Fincop</li>
              <li>Vermora Ceramics</li>
              <li>Dent care</li>
              <li>Pine Equipments</li>
              <li>Ethan craft</li>
              <li>Malayala Manorama</li>
              <li>MGF Hyundai</li>
              <li>Cult Fit</li>
              <li>Apollo Munich Health Insurance</li>
              <li>Zinemind Technologies</li>
              <li>KKR Group</li>
              <li>Just Dial</li>
              <li>Berger paint</li>
              <li>Naukri.com</li>
              <li>Federal Bank</li>
              <li>Metcon</li>
              <li>HCL</li>
              <li>Exl Service</li>
              <li>Eduonix Learning Solutions</li>
              </ul>   
            </div>       
      </div>
    );
  }
}

export default CSFaculty;
