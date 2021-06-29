import React from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFour from "../Components/Texts/HeadingFour";
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
        image: "ProfessionalBodies/NSS.png",
        width: "50%"
      }
      ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "CODE OF CONDUCT"
    }

    MajoreventsTitle = {
        instanceID: "MajoreventsTitle",
        title: "STUDENTS"
    };
    MajoreventsTitle1 = {
        instanceID: "MajoreventsTitle1",
        title: "GOVERNING BODY"
    };
   



    EventContent1 = {
        instanceID: " EventContent1",
        title: "DISCIPLINE AND ANTI RAGGING."
    }
    EventContent2 = {
        instanceID: " EventContent2",
        title: "On 29th April 2018, The IMA thodupuzha honoured the NSS unit of our college as the Best Camp unit."
    }


    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />  
                <HeadingOne data={this.ResearchHeading}></HeadingOne>  
                 <div className="contain">     
                 <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Codeofthics.pdf" target="_blank" rel="noopener noreferrer"><b>Policy Document on Code of Ethics</b></a></p>           
                        <HeadingTwo data={this.MajoreventsTitle} className="Heading" />
                        <h4>DISCIPLINE AND ANTI RAGGING</h4>
                        <ul>                        
                        <li><p>All the students should maintain 100% attendance as far as possible.</p></li>
                        <li><p>Leave or absence due to sickness, attending family functions, unavoidable requirements etc. should not exceed 25% of the attendance.</p></li>
                        <li><p>Any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student. </p></li>
                        </ul>
                        <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Website-3-6.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>


                </div>
                
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default nss;