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
        title: "Strategic plan of VJCET"
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
                      {/*  <HeadingTwo data={this.MajoreventsTitle} className="Heading" />*/}
                        <ul>                        
                        <li><p>Improving the teaching-learning process.</p></li>
                        <li><p>Enhancing the industry institute interaction.</p></li>
                        <li><p>Rendering successful entrepreneurs.</p></li>
                        <li><p>Providing personality development programs for students.</p></li>
                        <li><p>Achieving placement in reputed establishments.</p></li>
                        <li><p>Implementing e-governance in all areas.</p></li>
                        <li><p>Encouraging R & D by faculty and students.</p></li>
                        <li><p>Developing the campus to a clean and green one.</p></li>
                        <li><p>Implementing welfare measures for faculty members.</p></li>                    
                        </ul>
                        <p style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/codofcs/Strategic_Plan_vjcet.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>

                </div>
                
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default nss;