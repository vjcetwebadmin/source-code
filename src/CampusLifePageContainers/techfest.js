import React from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import Bodythree from "../Components/Texts/BodyThree";import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import "../Components/Images/gallery.css";


class techfest extends React.Component {
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


    ArtsfestTitle = {
        instanceID: "ArtsfestTitle",
        title: "BODHI – TECHNICAL FEST OF VJCET"
    };
    
    EventContent1 = {
        instanceID: " EventContent1",
        title: "To explore the thoughts, creativity, imagination and talents of young minds, ‘BODHI’ the annual Tech-Fest of Viswajyothi College of Engineering and Technology is conducted every year. It celebrates, fosters and proudly presents the pioneering and inquisitive minds of engineers. A fete like no other, it imbibes the true spirit of science and technology, and presents it in new modes and manners. It's not all about exhibits and presentations; even engineers like to have their share of fun and games, in a dignified manner. BODHI aims to connect students from campuses all over India by making them aware of Technical, Cultural, Management Fests, Workshops, Conferences, Seminars organized by each departments in the college."
    }
    EventContent2 = {
        instanceID: " EventContent2",
        title: "Oath taking ceremony of student’s council (2018-19) is conducted on 14th August 2018 at PTC seminar Hall in the presence of Principal. "
    }
    EventContent3 = {
        instanceID: " EventContent3",
        title: "Hon’ble Justice Cyriac Joseph inaugurated student’s council (18-19) on 9th October 2018.Students performed various cultural programs as part of the inauguration."
    }
   
    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                
                <HeadingOne data={this.ArtsfestTitle} />
                <h3 style={{textAlign:"center"}}><b>“What we think, we become.</b></h3>
                <h3 style={{textAlign:"center"}}><b>All that we are arises with our thoughts.</b></h3>
                <h3 style={{textAlign:"center"}}><b>With our thoughts, we make the world”.</b></h3>      
                 <h3 style={{textAlign:"right",paddingRight:"30%"}}><b>- The Buddha</b></h3>
                 <Bodythree data={this.EventContent1} /> 
                 <br></br>
               <div class="gallery">
                    
                    <iframe src="https://vjcet.org/downloads/gallery/bodhi.html" width="90%" height="500" title="Drishya" ></iframe>
                </div>        
               
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default techfest;