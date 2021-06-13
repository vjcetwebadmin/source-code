import React, { Component } from "react";
/* import HeadingOne from "../../Components/Texts/HeadingOne"; */
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
import ImageTwo from "../../Components/Images/imageTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";
import "../../Components/Tables/tableformat.css";
import Header from "../../Components/Header&Footer/Header";
class Profile extends Component {
  state = {};
 
  seemmage = {
    instanceID: "seemmage",
    image: "ProfessionalBodies/seem.png",
    width: "30%",    
    
}
GalleryImage = {
  instanceID: "GalleryImage",
  image: "Icons/ImageGallery.gif",
  width: "10%"
}
InchargesHeading = {
  instanceID: "InchargesHeading",
  title: "Office-Bearers"
};
ActivitiesHeading = {
  instanceID: "ActivitiesHeading",
  title: "Student Branch Events"
};
  Features1 = {
    instanceID: "Features1",
    title: "Society of Energy Engineers and Managers (SEEM) India is the National Professional Body of Certified Energy Managers, Auditors and Energy Professionals in the country launched in 2005 and registered under the Charitable Societies Act 1955. SEEM works to help industries achieve the important goal of realizing energy efficiency, choosing the right service that gives the best possible outcome from energy audits, and engaging in meaningful discussions to achieve industrial energy efficiency targets.  Mr. Jayakumar (National Joint Secretary, SEEM) inaugurated SEEM student chapter at VJCET on 31st August 2016."
  };
  

  render() {
    return (
      <div className="Program" id="program">   
      <p align="center"><ImageTwo data={this.seemmage} /></p>
        <div className="bodyContainer">
          <p><BodyOneJustified data={this.Features1} /></p>

          <HeadingThree data={this.InchargesHeading} />  
          <table id="tableformat">
                <tr><th>POST</th><th>NAME</th></tr>
                <tr><td>Faculty in Charge</td><td>Ms. Jane Maria S, Assistant Professor, EEE Department</td></tr>
                <tr><td>Student Representative</td><td>Ms. Minnu Prakash, S8EEE A</td></tr>

            </table>
            <HeadingThree data={this.ActivitiesHeading} /> 
            <table id="tableformat">                           
                <tr><th>Sl. No</th><th>Date</th><th>Events</th></tr>
                <tr><td>1</td><td>31-08-2016</td><td>Inauguration of SEEM Student Chapter in VJCET  </td></tr>
                <tr><td>2</td><td>18-08-2017</td><td>Talk on "Sustainable Solutions "</td></tr>
                <tr><td>3</td><td>24-07-2018 to 28-07-2018</td><td>5 Day Training Program on Electrical CAD</td></tr>
                <tr><td>4</td><td>30-07-2018 to 31-07-2018</td><td>2 Day Training Program on Verilog HDL </td></tr>
                <tr><td>5</td><td>03-06-2020</td><td>Talk on “Relevance of sustainable development- post covid scenario”</td></tr>
                <tr><td>6</td><td>15-07-2020 to 16-07-2020</td><td>2 day National Conference on Advancements in Control and Computing Technologies in Electrical Engineering</td></tr>
                <tr><td>7</td><td>31-10-2020</td><td>Talk on “Sliding Mode Control: Theory and Applications”</td></tr>
                <tr><td>8</td><td>06-11-2020</td><td>Talk on “Guide to become a social entrepreneur” </td></tr>
                <tr><td>9</td><td>07-11-2020</td><td>Talk on “An introduction to Utility scale solar power plant Design”</td></tr>

           </table>

                            
        </div>
      </div>
    );
  }
}

export default Profile;
