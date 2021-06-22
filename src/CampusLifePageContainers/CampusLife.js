import React, { Component } from "react";
import "./VisionSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingThree from "../Components/Texts/HeadingThree";
import BodyOne from "../Components/Texts/BodyOne";

class VisionSection extends Component {
  VisionSectionATitle = {
    instanceID: "VisionSectionTitle",
    title: "Campus Life"
  };

 /* VisionSectionABody = {
    instanceID: "VisionSectionBody",
    title:
      "The building complex of the college with an area of 45944.47 m.sq., is situated in a sprawling campus of 26 acres, nestled among lush greenery over a hillock on the side of Ernakulam - Thodupuzha State highway.The college is surrounded by a number of beautiful places blessed by mother nature. Here we have a number of locations which are must see locations for any tourist visiting Kerala."
  };*/

  VisionSectionBTitle = {
    instanceID: "VisionSectionTitle",
    title: "How to Reach"
  };

  VisionSectionBDescription = {
    instanceID: "VisionSectionDescription",
    title: "By Air"
  };

  VisionSectionBBody = {
    instanceID: "VisionSectionBody",
    title:
      "VJCET is situated about 40 KMs east of Nedumbassery International Airport."
  };
  VisionSectionEDescription = {
    instanceID: "VisionSectionDescription",
    title: "By Rail"
  };

  VisionSectionEBody = {
    instanceID: "VisionSectionBody",
    title:
      "Aluva / Ernakulam railway stations are approximately 45 kms from the VJCET Campus."
  };
  VisionSectionDDescription = {
    instanceID: "VisionSectionDescription",
    title: "By Road"
  };

  VisionSectionDBody = {
    instanceID: "VisionSectionBody",
    title:
      "VJCET Campus is just on the side of State Highway No.8, about 5 Kms from Muvattupuzha en-route to Thodupuzha."
  };
  MissionSectionTitle = {
    instanceID: "MissionSectionTitle",
    title: "Security"
  };

  MissionSectionOne = {
    instanceID: "MissionSectionOne",
    title:
      "College campus has two security points where permanent experienced security personals are appointed 24 X 7 for safekeeping the people, campus and college amenities ."
  };

  render() {
    const { instanceID } = this.props.data;

    return (
      /*<div className="VisionSection" id={instanceID}>*/
      <div>
        <div className="VisionSectionA">
          <HeadingOne data={this.VisionSectionATitle} />
          {/*<BodyOne data={this.VisionSectionABody} />*/}
          <p className="paramaintext">  The building complex of the college with an area of 45944.47 m<sup>2</sup>, is situated in a sprawling campus of 26 acres, nestled among lush greenery over a hillock on the side of Ernakulam - Thodupuzha State highway.The college is surrounded by a number of beautiful places blessed by mother nature. Here we have a number of locations which are must see locations for any tourist visiting Kerala.</p>
  
          <p className="paramainhead">How to Reach</p>
          <p className="parahead">By Air</p>
          <p className="paratext">VJCET is situated about 40 KMs east of Nedumbassery International Airport.</p>
          <p className="parahead">By Rail</p>
          <p className="paratext"> Aluva / Ernakulam railway stations are approximately 45 kms from the VJCET Campus. </p>
          <p className="parahead">By Road</p>
          <p className="paratext">VJCET Campus is just on the side of State Highway No.8, about 5 Kms from Muvattupuzha en-route to Thodupuzha.</p>
          <p className="paramainhead">Security</p>
          <p className="paratext">College campus has two security points where permanent experienced security personals are appointed 24 X 7 for safekeeping the people, campus and college amenities .</p>
        </div>
     </div>
    );
  }
}

export default VisionSection;
