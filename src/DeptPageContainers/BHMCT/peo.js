import React, { Component } from "react";
import HeadingThree from "../../Components/Texts/HeadingThree";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
//import HeadingOne from "../../Components/Texts/HeadingOne";
//import Bodythree from "../../Components/Texts/BodyThree";
class PEO extends Component {
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
    title: "The Department of Management Studies of the VISWAJYOTHI College of Engineering and Technology (VJCET) is fully committed to contributing to the fulfilment of the vision and mission of the college. Department of Management Studies at VJCET has a pride of place among the B Schools of Kerala. Our students are empowered and enabled to acquire not only the MBA degree but also the critical skills and right mindset to be successful in the highly competitive and increasingly globalising business environment. They are exposed to the evolutions and revolutions on the business horizon and to the theoretical and practical dimensions of management with strategic orientation and social commitment. The MBA programme at the VISWAJYOTHI aims at moulding the youngsters not just as managers but leaders who will be business and organizational architects contributing to the societal welfare at large."
}

CCCContent2 = {
  instanceID: "CCCContent2",
  title: "At VJCET, students are exposed to the emerging state of the art technologies and leading-edge business management practices which will enable them to lead multinational workforces, communicate with stakeholders, develop creative solutions to emerging business issues and drive innovation through entrepreneurial practices. The primary objective of the Department is to promote personal integrity and social responsibility among the students and provide them with an ideal platform for the display of their creative and innovative abilities and offer unique opportunities to further enhance personal capabilities. VJCET provides the unique Management Programme with quality, reliability, standards and recognition. The major strengths of the department are the dynamic, highly committed and visionary Management. Also the state of the art infrastructure and well qualified, experienced and very dedicated faculty with diverse academic and industrial backgrounds."
}
  render() {
      return ( 
              <div className="contain">
                 <p align="center"> <ImageOne data={this.CCCImagedata} /></p>
                 {/*<p align="center"><b> Msgr. Dr. Pius Malekandathil [<a href="https://vjcet.org/downloads/keyfunctionaries/RevfrPiusMalekandathil.pdf" target="_blank" rel="noopener noreferrer">Profile</a>]</b></p> */}
                 <p align="center"><b>Dr. Cyriac Joseph</b></p> 
                 <HeadingThree data={this.CCCTitle} className="Heading" />
                 <BodyOneJustified data={this.CCCContent1} /> 
               </div>  

      );
  }

}

export default PEO;
