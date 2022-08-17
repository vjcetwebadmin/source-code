import React from "react";
import HeadingThree from "../Components/Texts/HeadingThree";
import ImageOne from "../Components/Images/ImageOne";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";

import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne";

class keyfunct extends React.Component {
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


    CCCNATitle = {
        instanceID: "CCCTitle",
        title: "National Day Celebrations"
    };
    CCCTitle = {
        instanceID: "CCCTitle",
        title: "Independence Day Celebration"
    };
    
    WifiTitle = {
        instanceID: "CCCTitle",
        title: "Republic Day Celebration"
    };
    ServerTitle = {
        instanceID: "Servernames",
        title: "Constitution Day Celebration"
    };
    CCCContent1 = {
        instanceID: "CCCContent1",
        title: "Viswajyothi College of Engineering and Technology celebrated Independence Day on 15th August 2022. Flag hosting and Independence Day message was delivered by our Principal Dr. K.K. Rajan."
    }
    CCCContent2 = {
        instanceID: "CCCContent2",
        title: "Republic day celebration was held on 26-1-2022 in the college. Principal Dr. K.K. Rajan hoisted the flag and delivered the message."
    }
    CCCContent3 = {
        instanceID: "CCCContent3",
        title: "Constitution Day celebrated on 26/11/2020. Adv.Shyam Padman took a webinar on Indian Constitution-Uniqueness & Features in Zoom platform."
    }
    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "Nationdays/indday.png",
        width: "60%"
    }
    DImagedata = {
      instanceID: "DImage",
      image: "Nationdays/repday.png",
      width: "60%"
    }
    PImagedata = {
      instanceID: "PImage",
      image: "Nationdays/constday.png",
      width: "60%"
    }
    

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

                <div className="contain">
                    <HeadingOne data={this.CCCNATitle} className="Heading" />
                    <HeadingThree data={this.CCCTitle} className="Heading" />
                    <BodyOneJustified data={this.CCCContent1} />
                   <p align="center"> <ImageOne data={this.CCCImagedata} /></p>                   
                   
                   <br />
                   <HeadingThree data={this.WifiTitle} className="Heading" />
                   <BodyOneJustified data={this.CCCContent2} />
                   <p align="center"> <ImageOne data={this.DImagedata} /></p>                
                   
                   <br />
                   <HeadingThree data={this.ServerTitle} className="Heading" />
                   <BodyOneJustified data={this.CCCContent3} />
                   <p align="center"> <ImageOne data={this.PImagedata} /></p>                 

                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default keyfunct;