import React, { Component } from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
class CSFaculty extends Component {
  state = {};
    LibraryServiceTitle = {
    instanceID: "LibraryServiceTitle",
    title: "INDUSTRY FAMILIARISATION PROGRAMME"
    };
    LibraryContent = {
      instanceID: "LibraryContent",
      title: "VSMS regularly conducts invited talks from various industries such as Banking, Insurance, Retailing, IT, Automobile, Steel and Energy. We also facilitate panel discussions on rising challenges in the industry with a global outlook. Apart from talks and discussion, we arrange internship opportunity to our students. Every student, after completing their first year, has to associate with a company for a period of two months. During the program, students will obtain on the job work experience and get an opportunity to conduct a research project in their area of interest. Thus, our students will get a first experience of their future job while they study at Viswajothi."
    }
    LibraryServiceTitle1 = {
      instanceID: "LibraryServiceTitle1",
      title: "BUSINESS QUIZ"
    };
    LibraryContent1 = {
      instanceID: "LibraryContent1",
      title: "The Business Quiz happens weekly once which is mainly conducted by the students based on the news from the Business Line of the respective week. The students are divided into various groups that compete with each other. The winning group is awarded prizes. Each group is coordinated and guided by a faculty."
    }
    LibraryServiceTitle1 = {
      instanceID: "LibraryServiceTitle1",
      title: "INDUSTRY INTERACTIONS"
    };
    LibraryContent1 = {
      instanceID: "LibraryContent1",
      title: "As we expect all of our students to join a company immediately after the program, we prepare them to rightly orient to understand the industry dynamics and expectations. We regularly take our students to seminars and conferences conducted by the industry and management associations in locations such as Cochin, Thiruvananthapuram, Bangalore and Chennai. Many of our students and Faculty are members of Kerala Management Association. Students build rapport with industrialists and these network of connections help them to identify internships, projects and even get placed in companies."
    } 
    LibraryServiceTitle1 = {
      instanceID: "LibraryServiceTitle1",
      title: "MENTORING"
    };
    LibraryContent1 = {
      instanceID: "LibraryContent1",
      title: "The Business Quiz happens weekly once which is mainly conducted by the students based on the news from the Business Line of the respective week. The students are divided into various groups that compete with each other. The winning group is awarded prizes. Each group is coordinated and guided by a faculty."
    } 
  render() {
    return (
      <div >
        <p>
          <HeadingTwo data={this.LibraryServiceTitle} className="Heading" />
          <BodyOneJustified data={this.LibraryContent}/>
        </p>
        <p>
          <HeadingTwo data={this.LibraryServiceTitle1} className="Heading" />
        </p>
        <div  style={{textAlign:"left"}}>
            <p>
            <b>A TEAM BASED APPROACH FOR PERSONAL AND PROFESSIONAL DEVELOPMENT</b>
            </p>
            <ul>
              <li>A faculty is assigned to a group of 10 students as their mentor</li>
              <li>The mentees under the guidance of the faculty strives continuously for the attainment of the individual and collective goals</li>
              <li>Sharekhan Financial Services</li>
              <li>The mentor act as the local guardian of the student</li>
              <li>Club Mahindra</li>
              <li>Envestnet</li>
              <li>Muthoot Fincop</li>
              <li>Vermora Ceramics</li>
              <li>Dent care</li>   
            </ul>
            <p>
            <b>The mentor is responsible for</b>
            </p>
            <ul>
              <li>Goal setting-individual and collective</li>
              <li>Continuous training</li>
              <li>Discipline</li>
              <li>Motivation & counseling</li>
              <li>Career guidance</li>
              <li>OS, Project & Placements</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default CSFaculty;
