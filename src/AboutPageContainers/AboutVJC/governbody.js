import React, { Component } from "react";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
import GovData from "./GovernData"
/*import ImageOne from "../../Components/Images/ImageOne";
import BodyThree from "../../Components/Texts/BodyThree";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import HeadingThree from "../../Components/Texts/HeadingThree";*/
import "./About.css";
import "../../Components/Tables/tableformat.css";


class Iedc extends Component {
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
    Govern1 = {
        instanceID: "Govern1",
        image: "KeyFunctionaries/manager.jpg",
        width: "50%",
        mianhead:"MANAGER",
        name:"Msgr. Cherian Kanjirakombil",
        content: "Manager"
      };
      Govern2 = {
        instanceID: "Govern2",
        image: "KeyFunctionaries/director.jpg",
        width: "50%",
        mianhead:"DIRECTOR",
        name:"Rev. Fr.  Paul Nedumpurath",
        content: "Director"
      };


    IedcHeading = {
        instanceID: "IedcHeading",
        title: "Governing Body"
    }
    CompanyHeading = {
        instanceID: "IedcHeading",
        title: "Companies Functioning Form V-BIC"
    }
    LogoImagedata = {
        instanceID: "LogoImage",
        image: "ED/vbic.jpg",
        width: "15%"
    }
    IedcBody1 = {
        instanceID: "IedcBody1",
        title: "Realizing the need of entrepreneur development among the students"
    }
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "V-BIC Team"
      };
    ObjectiveHeading = {
        instanceID: "ObjectiveHeading",
        title: "Objectives"
      };
    ReserchWork1 = {
        instanceID: "ReserchWork1",
        title: "Objectives of the venture,  V-BIC  is to achieve a transformation of minds of the students from being job-seekers to entrepreneurs themselves and become  job providers by effectively utilizing the theoretical and practical knowledge they are  acquiring  from the institution. Students and faculty will be encouraged to find innovative solutions to social problems."
    }
      FunctionHeading = {
        instanceID: "FunctionHeading",
        title: "Our Thrust Areas"
      };
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Some major initiatives taken by CRD are :"
    }
    
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.IedcHeading} />
                <div className="inner-para" style={{margin:"auto",textAlign:"center"}}>
                   {/*
                   if photo needed
                    <div className="faculty">
                        <div className="facultyCon" >
                            <div style={{width:"80%",textAlign:"center"}}>
                                <GovData data={this.Govern1} />
                            </div>
                            <div style={{width:"80%",textAlign:"center"}}>
                                <GovData data={this.Govern2} />
                            </div>
                        </div>if photo needed
                   */}
                   </div>
                   
                 {/*<p align="center"><ImageOne data={this.LogoImagedata} /></p>
                <ImageOne data={this.ResearchImg}></ImageOne> */}
                {/*<BodyThree data={this.IedcBody1} /><br />
                <HeadingThree data={this.InchargesHeading} /> 
                
                <div className="inner-para">
                <table id="tableformat">
                            <tr><th>Name</th><th>V-BIC Designation</th></tr>
                            <tr><td>Mr. Johnson Parayannilam</td><td>Management   Coordinator  - V-BIC</td></tr>
                             
                </table> 
                <HeadingThree data={this.ObjectiveHeading} /> 
                <BodyOneJustified data={this.ReserchWork1} />
                    <ul>
                        
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody2} />
                            </p>
                        </li>
                        <li>
                            <p>
                                <BodyOneJustified data={this.ReserchBody2} />
                            </p>
                        </li>
                </ul>
            </div>*/}
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (
                    <MenuOverlay closeMenuFunction={this.closeMenu} />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default Iedc;