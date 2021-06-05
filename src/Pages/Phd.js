import React, { Component } from "react";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne";
//import BodyOne from "../Components/Texts/BodyOne";
// import ImageOne from "../Components/Images/ImageOne";
//import SideNav from "../AdmissionContainers/SideNav";

class Phd extends Component {
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

    HomePageCarouselOne = {
        instanceID: "HomePageCarouselOne"
    };

    HomePageCarouselTwo = {
        instanceID: "HomePageCarouselTwo"
    };

    HomePageCarouselThree = {
        instanceID: "HomePageCarouselThree"
    };

    HomePageDepartmentSection = {
        instanceID: "HomePageDepartmentSection"
    };

    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };

    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };

    HomePageCarouselFour = {
        instanceID: "HomePageCarouselFour"
    };

    HomePageFooter = {
        instanceID: "HomePageFooter"
    };
    HeadingSectionTitle = {
        instanceID: "Headingtext",
        title: "Ph.D Admissions"
    };

    HeadingSectionDescription = {
        instanceID: "HeadingSectionDescription",
        title: ""
    };
    CseImg = {
        instanceID: "CseImg",
        image: "mtechbg.JPG",
        width: "100%"
    };
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.HeadingSectionTitle} />
               {/*  <BodyOne data={this.HeadingSectionDescription} /> */}
                <div>
                    <p allign="justify">
                       
                    Viswajyothi has recognized Ph.D Guides in various branches of APJ Abdul Kalam Technological University such as
                     
                    </p> 
                      <ol style={{textAlign:"left", lineHeight:"1.7em",fontSize:"13",marginLeft:"225px"}}>
                            <li>Computer Science & Engineering</li>
                            <li>Mechanical Engineering</li>
                            <li>Electrical and Electronics Engineering</li>
                            <li>MBA</li>
                        </ol>

                    <p>
                                <b>To know more about admission procedure, kindly visit the Research section in <a href="https://www.ktu.edu.in" target="_blank" rel="noopener noreferrer">KTU official website</a></b> 
                               
                         
                    </p>
                </div> 
                
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

export default Phd;
