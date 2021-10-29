import React, { Component } from "react";
import HeadingThree from "../../Components/Texts/HeadingThree";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";

class Profile extends Component {
    state = {};
    HomePageHeader = {
        instanceID: "HomePageHeader"
    };
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };

    CCCTitle = {
        instanceID: "CCCTitle",
        title: "DEAN & HOD MESSAGE"
    };   

    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "KeyFunctionaries/mbadean.png",
        width: "40%"
    }
    CCCContent1 = {
      instanceID: "CCCContent1",
      title: "The School of Management Studies of the VISWAJYOTHI College of Engineering and Technology is fully committed to contributing to the fulfillment of the vision and mission of the college."
  }

  CCCContent2 = {
    instanceID: "CCCContent2",
    title: "VISWAJYOTHI School of Management Studies (VSMS) has a pride of place among the B Schools of Kerala. Our students are empowered and enabled to acquire not only the MBA degree but also the critical skills and right mindset to be successful in the highly competitive and increasingly globalising business environment. They are exposed to the evolutions and revolutions on the business horizon and to the theoretical and practical dimensions of management with strategic orientation and social commitment. The MBA programme at the VISWAJYOTHI aims at moulding the youngsters not just as managers but leaders who will be business and organizational architects contributing to the societal welfare at large."
}
    render() {
        return ( 
                <div className="contain">
                   <p align="center"> <ImageOne data={this.CCCImagedata} /></p>
                   {/*<p align="center"><b> Msgr. Dr. Pius Malekandathil [<a href="https://vjcet.org/downloads/keyfunctionaries/RevfrPiusMalekandathil.pdf" target="_blank" rel="noopener noreferrer">Profile</a>]</b></p> */}
                   <p align="center"><b>Dr. Cyriac Joseph</b></p> 
                   <HeadingThree data={this.CCCTitle} className="Heading" />
                   <BodyOneJustified data={this.CCCContent1} />  
                   <BodyOneJustified data={this.CCCContent2} /> 
                </div>  

        );
    }

}
export default Profile;
