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
      title: "Department of Management Studies of VISWAJYOTHI College of Engineering and Technology, (VJCET) approved by AICTE and affiliated to APJ Abdul Kalam Technological University (KTU), Kerala, started the full-time MBA course in 2009. Within a short span of time, the department has earned a name of itself and is poised for the next phase of development with a broader scope of activities and a clear vision, and mission. Department of Management Studies is dedicated to the development of promising leaders who can create wisdom, innovation from action, networks from contacts and sustained adaptability from changes. Management Studies at VJCET opens up new frontiers in the global management scene and equips the students with the skill-set to cope with today’s business environment which is filled with complexity and uncertainty."
  }

  CCCContent2 = {
    instanceID: "CCCContent2",
    title: "At VJCET, students are exposed to the emerging state of the art technologies and leading-edge business management practices which will enable them to lead multinational workforces, communicate with stakeholders, develop creative solutions to emerging business issues and drive innovation through entrepreneurial practices. The primary objective of the Department is to promote personal integrity and social responsibility among the students and provide them with an ideal platform for the display of their creative and innovative abilities and offer unique opportunities to further enhance personal capabilities. VJCET provides the unique Management Programme with quality, reliability, standards and recognition. The major strengths of the department are the dynamic, highly committed and visionary Management. Also the state of the art infrastructure and well qualified, experienced and very dedicated faculty with diverse academic and industrial backgrounds."
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
                   <BodyOneJustified data={this.CCCContent2} /> 
                </div>  

        );
    }

}
export default Profile;
