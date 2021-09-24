import React from "react";
//import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../../FacilitiesPageContainers/styles.css";

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
//import ImageTwo from "../../Components/Images/imageTwo";
//import BodyThree from "../../Components/Texts/BodyThree";
//import ButtonTwo from "../../Components/Buttons/ButtonTwo";
import "./news.css";
/* import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"

import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
 */
class Newsone extends React.Component {
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


    NewsTitle = {
        instanceID: "NewsTitle",
        title: "Student Council Election 2021-2022"
    };
    NewsContent1 = {
        instanceID: "NewsContent1",
        title: ""
    };
   
    
    NewsImagedata1 = {
        instanceID: "NewsImagedata1",
        image: "NewsImages/ME_fdp_front.jpg",
        width: "80%"
    }
    NewsImagedata2 = {
        instanceID: "NewsImagedata2",
        image: "NewsImages/ME_fdp_back.jpg",
        width: "80%"
    }
    NewsImagedata3 = {
        instanceID: "NewsImagedata3",
        image: "NewsImages/Registernow.jpg",
        width: "20%"
    }
    

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    
                    <div className="bodyContainer">
                    <HeadingOne data={this.NewsTitle}></HeadingOne>
                    <BodyOneJustified data={this.NewsContent1}/>                    
                    <h5><a href="https://vjcet.org/downloads/news/ElectNotice1.pdf" target="_blank" rel="noopener noreferrer">Election Notification</a></h5>
                    <h5><a href="https://vjcet.org/downloads/news/ElectNotice2.pdf" target="_blank" rel="noopener noreferrer">Eligibility</a></h5>
                    <h5><a href="https://vjcet.org/downloads/news/ElectNotice3.pdf" target="_blank" rel="noopener noreferrer">Notice</a></h5>
                    <h5><a href="https://vjcet.org/downloads/news/ElectNotice4.pdf" target="_blank" rel="noopener noreferrer">Election Schedule</a></h5>
                    <h5><a href="https://vjcet.org/downloads/news/ElectNotice5.pdf" target="_blank" rel="noopener noreferrer">Office Bearer Nomination Form</a><p style={{align:"left", fontSize:"23px"}}>(The duly filled nomination form can be sent to 'studentelection@vjcet.org')</p> </h5>
                    <h5><a href="https://vjcet.org/downloads/news/ElectNotice6.pdf" target="_blank" rel="noopener noreferrer">Declaration Form- Class Representatives</a></h5>
                    <h5>Notice</h5>
                    <iframe src="https://vjcet.org/downloads/news/ElectionNotification.pdf" width="100%" height="850" title="Campus Map" align="center"></iframe>
                </div>
             
                                    
                    <br />                 
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Newsone;