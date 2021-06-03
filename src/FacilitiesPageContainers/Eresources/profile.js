import React, { Component } from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyThree from "../../Components/Texts/BodyThree";
import "./Research.css"
import "../../Components/Tables/tableformat.css";
import HeadingThree from "../../Components/Texts/HeadingThree";
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
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: ""
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "E-Resources"
    }
    ReserchBody2 = {
        instanceID: "ReserchBody1",
        title: "IIIC is looking "
    }
    
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "IEDC Team"
      };
    
   
    render() {
        return (
            <div className="HomePage">
                
                <p align="left"><HeadingOne data={this.ResearchHeading} /></p>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
               {/* <BodyThree data={this.ReserchBody1} /><br />
               
                
                 <HeadingThree data={this.InchargesHeading}></HeadingThree>
               <table id="tableformat">
                            <tr><th>Name</th><th>Dept. Designation </th><th>IEDC Designation</th></tr>
                        
                </table> */}
                             
                
               
                
            </div>
        );
    }
}

export default Profile;