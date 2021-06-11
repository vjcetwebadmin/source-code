import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import HeadingFour from "../../Components/Texts/HeadingFour";
import BodyThree from "../../Components/Texts/BodyThree";
class Library extends Component {
  state = {};
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "ECE Department Association ‘ZEALOUS’"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      "ZEALOUS is the association of the Electronics and Communication Engineering Department. It plays a vital role in moulding Electronics Engineers. Technical Quiz, Technical Talks, Group Discussions, Hands-On-Workshops etc. are conducted for enriching Electronics Engineers' knowledge in various core fields. The successful students in Academics, Technical/Managerial areas, Sports, Cultural Programs are honored on this day."
  };
  Activitiesheading = {
    instanceID: "Activitiesheading",
    title: "Club activities under ZEALOUS"
  }
  Activity1Heading = {
    instanceID: "Activity1Heading",
    title: "1.	 NATURE AND PHOTOGRAPHY CLUB"
  }
  Activity1Content1 = {
    instanceID: "Activity1Content1",
    title: "Objective"
  }
  Activity1Content2 = {
    instanceID: "Activity1Content2",
    title: " To promote the extra talents of students "
  }
  Activity1Content3 = {
    instanceID: "Activity1Content3",
    title: "Mission "
  }
  Activity1Content4 = {
    instanceID: "Activity1Content4",
    title: "A mini placement cell is running as a part of the Department to enhance the placement of students in the core field. ZEALOUS is run by the student coordinators under the guidance of faculty members from the Department."
  }
  Activity1Content5 = {
    instanceID: "Activity1Content5",
    title: "TThe association activities for the year 2020-21 was inaugurated by Mr. Joe Thomas (Senior Software Engineer, Amazon, USA) on 22nd March, 2021, and a technical talk on Career advancement and industry expectations was conducted by Mr. Joe Thomas and Mr. Lalu Paul (Senior Software Engineer, Xilinx, USA)."
  }
  Activity2Heading = {
    instanceID: "Activity2Heading",
    title: "2.	WRITERS CLUB"
  }
  Activity2Content1 = {
    instanceID: "Activity2Content1",
    title: "Objective"
  }
  Activity2Content2 = {
    instanceID: "Activity2Content2",
    title: "Writing and reading skills are promoted through an interactive, collaborative & creative environment."
  }
  Activity2Content3 = {
    instanceID: "Activity2Content3",
    title: "Mission "
  }
  Activity2Content4 = {
    instanceID: "Activity2Content4",
    title: "The purpose of the Creative Writing Club is to provide a positive and productive atmosphere for developing student writers to integrate, learn, and grow."
  }
  Activity2Content5 = {
    instanceID: "Activity2Content5",
    title: "Writers club engages students who enjoy writing or discussing creative works. This club will help students to harness creativity effectively with a variety of different contests or workshops and exercises so as to benefit an individual's skill and competence as a writer."
  }
  Activity3Heading = {
    instanceID: "Activity3Heading",
    title: "3.	 ENVIRONMENT AND HEALTH CLUB"
  }
  Activity3Content1 = {
    instanceID: "Activity3Content1",
    title: "Objective"
  }
  Activity3Content2 = {
    instanceID: "Activity3Content2",
    title: "To empower students to live healthier lives in a healthier environment"
  }
  Activity3Content3 = {
    instanceID: "Activity3Content3",
    title: "Mission "
  }
  Activity3Content4 = {
    instanceID: "Activity3Content4",
    title: "Raise awareness and support among students for issues related to health and protection of the environment."
  }
  Activity3Content5 = {
    instanceID: "Activity3Content5",
    title: " The mission of the Environment & Health Club is to not only conserve one’s environment and health but also to improve it substantially.  The club will hold meetings and discussions and organize events such as exhibitions and lectures to realize its mission. Students will also be made aware of and participate in the various off-campus activities like marathons and field trips though the mission of the club can be implemented."
  }
  Activity4Heading = {
    instanceID: "Activity4Heading",
    title: "4.	Quiz & Debate Club"
  }
  Activity4Content1 = {
    instanceID: "Activity4Content1",
    title: "Objective"
  }
  Activity4Content2 = {
    instanceID: "Activity4Content2",
    title: "To identify the students who are talented in quiz and debate and develop further in their quizzing and debating skills"
  }
  Activity4Content3 = {
    instanceID: "Activity4Content3",
    title: "The Quiz & Debate Club aims at identifying the students who are talented in quiz and debate and develop further in their quizzing and debating skills. Quiz competitions are organized in the campus in inter departmental levels and intercollegiate levels to improve general and technical knowledge of the students.  Inter department debating competitions and debates are also organized to make students aware about the current topics and issues that affect ones lives locally as well as globally."
  }
  render() {
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />
        <Bodythree data={this.DeptAssociationDescriptionOne} />
          <BodyThree data={this.Activity1Content4} />
          <Bodythree data={this.Activity1Content5} />
         
      </div>
    );
  }
}

export default Library;
