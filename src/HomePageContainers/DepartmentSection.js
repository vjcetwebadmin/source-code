import React, { Component } from "react";
import "./DepartmentSection.css";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyOne from "../Components/Texts/BodyOne";
import DepartmentList from "./LocalContainers/DepartmentList";
import { Link } from "react-router-dom";
class DepartmentSection extends Component {
  DepartmentSectionTitle = {
    instanceID: "DepartmentSectionTitle",
    title: "Departments"
  };

  DepartmentSectionSubTitle = {
    instanceID: "DepartmentSectionSubTitle",
    title:
      "B. Tech Branches – Civil Engineering, Computer Science & Engineering, Electronics & Communication Engineering, Information Technology and Mechanical Engineering - are Accredited by NBA. We are offering UG and PG courses ranging from B.Tech, M.Tech, Master of Business Administration and Hotel Management and Catering Technology."
  };

  DepartmentListOne = {
    instanceID: "DepartmentListOne",
    title: "Civil Engineering(CE)",
    description:
      "Civil Engineers are entrusted by the society to create a sustainable world and enhance the global quality of life- they serve competently, collaboratively, and ethically as innovators and integrators of ideas and technology across the public, private, and academic sectors; managers of risk and uncertainty caused by natural disasters and other threats; and leaders in discussions and decisions shaping public environmental and infrastructure policy."
  };

  DepartmentListTwo = {
    instanceID: "DepartmentListTwo",
    title: "Computer Science Engineering(CSE)",
    description:
      "We aim at exposing our students to the world of zeros and ones by inculcating design thinking, empathy and ethics in them. Rather than building supercomputers, we want the scholars to use their human intelligence to build green artificial intelligence and support humanity by addressing the real issues of the world."
  };

  DepartmentListThree = {
    instanceID: "DepartmentListThree",
    title: "Electronics & Communication Engineering(ECE)",
    description:
    "Electronics & Communication Engineering is the backbone of the modern world. Technologies ranging from Smart Phones to Satellites are powered by this branch of Engineering. B. Tech degree in ECE opens the door to fields like Internet of Things (IoT), Robotics, Telecommunications, Embedded Systems, Aviation, Defence, Space Technology, Health Care, Automobile Industry and many more."
      /*"In this era of globalization where the whole world is well knit and networked, the electronics engineering students are transformed with the practical and technological aspects of the newly evolving technologies."*/
  };

  DepartmentListFour = {
    instanceID: "DepartmentListFour",
    title: "Electrical & Electronics Engineering(EEE)",
    description:
      "The Electrical and Electronics Engineers are working today in all spheres of modern society, be it internet, power systems, DC and AC transmission systems , a quality engineer with the ability to explore, experiment and exhibit are refined. "
  };

  DepartmentListFive = {
    instanceID: "DepartmentListFive",
    title: "Information Technology (IT)",
    description:
      "With the excellence in providing the right environment for development of physical, intellectual, emotional and spiritual quotients with a view to produce total quality engineers preparing them to face challenges of modern information society."
  };

  DepartmentListSix = {
    instanceID: "DepartmentListSix",
    title: "Mechanical Engineering(ME)",
    description:
      "The students of Mechanical Engineering are provided with the most advanced equipment in our laboratories on which to experiment and innovate thereby moulding students  by coupling the theoretical knowledge with the industry exposure."
  };

  DepartmentListSeven = {
    instanceID: "DepartmentListSeven",
    title: "Management of Business Administration (MBA)",
    description:
      "A dynamic institute of repute in developing management professionals with value integration for social transformation."
  };

  DepartmentListEight = {
    instanceID: "DepartmentListEight",
    title: "Science & Humanities",
    description:
      "The Department deals in the disciplines of Chemistry, Physics, Mathematics, Statistics, Communicative English and Economics."
  };
  DepartmentListNine = {
    instanceID: "DepartmentListNine",
    title: "Artificial Intelligence and Data Science",
    description:
      "The prestigious course, B.Tech Artificial Intelligence and Data science which imparts in-demand technical skills in aspirants is commenced at VJCET in the year 2020"
  };
  DepartmentListTen = {
    instanceID: "DepartmentListTen",
    title: "Hotel Management and Catering Technology",
    description:
      "To help students acquire the technical and inter-personal skills required for successfully securing gainful employment in the burgeoning Travel and Tourism Industry."
  };


  render() {
    const { instanceID } = this.props.data;

    return (
      <div>
        <p>&nbsp;</p>        
        <HeadingOne data={this.DepartmentSectionTitle}  />
        <BodyOne data={this.DepartmentSectionSubTitle} />
        <div className="DepartmentSection" id={instanceID}>
          
          <Link to="/departments/aid" style={{textDecoration: "none" }}>
            <DepartmentList data={this.DepartmentListNine} />
          </Link>
          <Link to="/departments/ce" style={{ textDecoration: "none" }}>
            <DepartmentList data={this.DepartmentListOne} />
          </Link>
          <Link to="/departments/cse" style={{ textDecoration: "none" }}>
            <DepartmentList data={this.DepartmentListTwo} />
          </Link>
          <Link to="/departments/ece" style={{ textDecoration: "none" }}>
            <DepartmentList data={this.DepartmentListThree} />
          </Link>
          <Link to="departments/eee" style={{ textDecoration: "none" }}>
            <DepartmentList data={this.DepartmentListFour} />
          </Link>
          <Link to="departments/it" style={{textDecoration: "none" }}>
            <DepartmentList data={this.DepartmentListFive} />
          </Link>
          <Link to="departments/me" style={{textDecoration: "none" }}>
            <DepartmentList data={this.DepartmentListSix} />
          </Link>
          <Link to="departments/mba"  style={{textDecoration: "none" }}>
            <DepartmentList data={this.DepartmentListSeven} />
          </Link>          
          <Link to="departments/bhmct" style={{ textDecoration: "none" }}>
            <DepartmentList data={this.DepartmentListTen} />
          </Link>
          <Link to="departments/s&h" style={{ textDecoration: "none" }}>
            <DepartmentList data={this.DepartmentListEight} />
          </Link>
          
        </div>
      </div>
    );
  }
}

export default DepartmentSection;
