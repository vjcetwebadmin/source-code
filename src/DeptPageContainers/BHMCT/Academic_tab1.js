import React, { Component } from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import HeadingOne from "../../Components/Texts/HeadingOne";
//import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
//import "../styles.css"
import "../../Components/Tables/tableformat.css";
class CSFaculty extends Component {
  state = {};
  LibraryServiceTitle = {
    instanceID: "LibraryServiceTitle",
    title: "MBA PROGRAMME"
};
LibraryContent1 = {
  instanceID: "LibraryContent1",
  title: "VISWAJYOTHI offers Management Programme (MBA, affiliated to APJ Abdul Kalam Technological University and approved by AICTE) through its Department of Management Studies. Department of Management Studies is dedicated to the development of promising leaders who can create wisdom, innovation from action, networks from contacts and sustained adaptability from changes."
}
LibraryContent2 = {
  instanceID: "LibraryContent2",
  title: "Department of Management Studies opens up new frontiers in the global management scene, and equips the students with the skill-set to cope with today’s business environment which is filled with complexity and uncertainty. At Department of Management Studies, students are exposed to emerging state of the art technologies and leading edge business management practices which will enable them to lead multinational work forces, communicate with stakeholders, and develop creative solutions to emerging business issues and drive innovation through entrepreneurial practices. Department of Management Studies provides a unique programme with quality, reliability, standards and recognition. Primary Objective of Department of Management Studies is to promote personal integrity and social responsibility among the students. Department of Management Studies provides the students with an ideal platform for the display of their creative and innovative abilities and offer unique opportunities to further enhance personal capabilities."
}
LibraryServiceTitle1 = {
  instanceID: "LibraryServiceTitle1",
  title: "PROGRAMME OUTCOMES"
};
LibraryServiceTitle2 = {
  instanceID: "LibraryServiceTitle2",
  title: "PROGRAMME EDUCATIONAL OBJECTIVES (PEOS)"
};
  render() {
    return (
      <div>                   
        <p>
          <HeadingTwo data={this.LibraryServiceTitle} className="Heading" />
          <BodyOneJustified data={this.LibraryContent1}/>
          <br />
          <BodyOneJustified data={this.LibraryContent2}/>
        </p>
        <p>
          <HeadingTwo data={this.LibraryServiceTitle1} className="Heading" />
          <div  style={{textAlign:"left"}}>
            <ul style={{lineHeight:"1.5em"}}>
              <li>Apply knowledge of management theories and practices to solve business problems.</li>
              <li>Foster analytical and critical thinking abilities for databased decision-making.</li>
              <li>Ability to develop value based leadership ability.</li>
              <li>Ability to understand, analyze and communicate global, economic, legal, and ethical aspects of business.</li>
              <li>Ability to lead themselves and others in the achievement of organizational goals, contributing effectively to a team environment.</li>
            </ul>
          </div>
        </p>
        <p>
          <HeadingTwo data={this.LibraryServiceTitle2} className="Heading" />
          <div  style={{textAlign:"left"}}>
            <ul style={{lineHeight:"1.5em"}}>
              <li>Core knowledge in management theories and practices with established expertise to serve the society.</li>
              <li>Sense of professionalism, ethical attitude, communication skills, team spirit, multidisciplinary approach and leadership skills to function productively and professionally.</li>
              <li>Attained a general level of competence in management and to enable them to act with creative, innovative and entrepreneurial potential employability skills and tools with attitude of lifelong learning.</li>
             </ul>
          </div>
        </p>
      </div>
    );
  }
}

export default CSFaculty;
