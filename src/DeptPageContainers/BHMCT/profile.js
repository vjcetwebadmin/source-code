import React, { Component } from "react";
import HeadingThree from "../../Components/Texts/HeadingThree";
//import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import HeadingOne from "../../Components/Texts/HeadingOne";
//import Header from "../../Components/Header&Footer/Header";
//import Footer from "../../Components/Header&Footer/Footer";
//import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
//import HeadingOne from "../../Components/Texts/HeadingOne";

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
        title: "About Us"
    };   

    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "KeyFunctionaries/mbadean.png",
        width: "40%"
    }
    CCCContent1 = {
      instanceID: "CCCContent1",
      title: "The potential for employment in the hospitality sector is stupendous. Despite the crippling effect of the Covid-19 pandemic, the industry provided 87.5 million jobs and accounted for       12.75% of the total jobs created in the country in 2019. With an ever-increasing millennial population, higher disposable incomes and more affordable options for both travel and accommodation, tourism is the sector to watch for as far as employment potential is concerned. To help the youth of today take full advantage of this opportunity, Viswajyothi College of Engineering and Technology Vazhakulam has launched the programme Bachelor in Hotel Management and Catering Technology (BHMCT)"
  }

  CCCContent2 = {
    instanceID: "CCCContent2",
    title: ""
}
    render() {
        return ( 
                <div className="contain">
                   {/*<p align="center"> <ImageOne data={this.CCCImagedata} /></p>
                   <p align="center"><b> Msgr. Dr. Pius Malekandathil [<a href="https://vjcet.org/downloads/keyfunctionaries/RevfrPiusMalekandathil.pdf" target="_blank" rel="noopener noreferrer">Profile</a>]</b></p> 
                   <p align="center"><b>Dr. Cyriac Joseph</b></p> */}

                   <HeadingOne data={this.CCCTitle} className="Heading" />
                   <BodyOneJustified data={this.CCCContent1} /> 
                   <br /> 
                   {/*<BodyOneJustified data={this.CCCContent2} /> */}
                </div>  

        );
    }

}
export default Profile;
