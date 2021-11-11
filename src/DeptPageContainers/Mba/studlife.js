import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
/* import Bodythree from "../../Components/Texts/BodyThree"; */
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import ImageOne from "../../Components/Images/ImageOne";
import "../../Components/Tables/tableformat.css";
class Library extends Component {
  state = {};
  MbaHead1 = {
    instanceID: "MbaHead1",
    title: "LEARNING EXPERIENCE"
  };
  MbaImage1 = {
	instanceID: "MbaImage1",
	image: "DepartmentImages/MBA/StudLife/mb1.jpg",
	width: "55%"
}
MbaHead1Desc1 = {
	instanceID: "MbaHead1Desc1",
	title: "The core and crux of management education is the all-round development of the individual. VSMS through its multi-faceted training programmes, skill development initiatives and value oriented instruction strives to transform the students into self-reliant, confident and mature individuals with clear career goals and heightened vision in life. The training here is meant to help the students to identify their hidden positive strengths and encourage them to plunge into the uncharted seas of opportunities and possibilities; finally giving them a strong foothold in the management and business landscape. Above everything else, they are made to formulate a wider vision of life, so as to make each one ask himself – ‘what can i do with what i have got?’."
};

Pgprojwriteup6 = {
	instanceID: "Pgprojwriteup6",
	title: "This lab is dedicated for M. Tech students to work on practical experiments related to courses such as Computer Networks, Wireless Networks,Mobile Communications. Network systems lab is well equipped with 15 computers. This lab is to provide an exposure to the students with hands on experience on various simulator tools like NS2, NS3 and packet analyzers such as Wireshark."
};

  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingTwo data={this.MbaHead1} />
        <ImageOne data={this.MbaImage1} />
		<p></p>
		<p><BodyOneJustified data={this.MbaHead1Desc1}></BodyOneJustified></p>
		<p></p>  
      </div>
    );
  }
}

export default Library;
