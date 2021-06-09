import React from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import HeadingFour from "../Components/Texts/HeadingFour";
//import ImageOne from "../../Components/Images/ImageOne";
import "./Research.css"


class nss extends React.Component {
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
    NsslogoImage = {
        instanceID: "NsslogoImage",
        image: "eresource/NSS.png",
        width: "50%"
      }
      ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "e-Resources"
    }

    MajoreventsTitle = {
        instanceID: "MajoreventsTitle",
        title: ""
    };
    MajoreventsTitle1 = {
        instanceID: "MajoreventsTitle1",
        title: "Online Courses"
    };
    MajoreventsTitle2 = {
        instanceID: "MajoreventsTitle2",
        title: "Digital Library"
    };
    MajoreventsTitle3 = {
        instanceID: "MajoreventsTitle3",
        title: "Online Book Search"
    };
    MajoreventsTitle4 = {
        instanceID: "MajoreventsTitle4",
        title: "Professional bodies"
    };
    MajoreventsTitle5 = {
        instanceID: "MajoreventsTitle5",
        title: "FDP & Webinars"
    };
    MajoreventsTitle6 = {
        instanceID: "MajoreventsTitle6",
        title: "PPTs & Videos"
    };
    EventTitle1 = {
        instanceID: "EventTitle1",
        title: "DISCIPLINE AND ANTI RAGGING"
    };
    EventContent1 = {
        instanceID: " EventContent1",
        title: ""
    }
   

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />  
                <HeadingOne data={this.ResearchHeading}></HeadingOne>  
                 <div className="contain">  
                        <HeadingTwo data={this.MajoreventsTitle} className="Heading" />
                        <HeadingTwo data={this.MajoreventsTitle1} className="Heading" />
                        <HeadingTwo data={this.MajoreventsTitle2} className="Heading" />
                    {/*  <p style={{fontWeight:"bold"}}>The Manager</p> 
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-10-11.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>   */}
                        <HeadingTwo data={this.MajoreventsTitle3} className="Heading" />           
                        <HeadingTwo data={this.MajoreventsTitle4} className="Heading" /> 
                        <HeadingTwo data={this.MajoreventsTitle5} className="Heading" />
                        <HeadingTwo data={this.MajoreventsTitle6} className="Heading" />
                 </div>
                
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default nss;