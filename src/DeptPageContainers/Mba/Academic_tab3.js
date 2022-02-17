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
      title: "Department of Management Studies regularly conducts invited talks from various industries such as Banking, Insurance, Retailing, IT, Automobile, Steel and Energy. We also facilitate panel discussions on rising challenges in the industry with a global outlook. Apart from talks and discussion, we arrange internship opportunity to our students. Every student, after completing their first year, has to associate with a company for a period of two months. During the program, students will obtain on the job work experience and get an opportunity to conduct a research project in their area of interest. Thus, our students will get a first experience of their future job while they study at Viswajyothi."
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
    LibraryServiceTitle2 = {
      instanceID: "LibraryServiceTitle1",
      title: "DOMAIN CERTIFICATION"
    };
    LibraryContent2 = {
      instanceID: "LibraryContent1",
      title: "The Certification seeks to create a common minimum knowledge benchmark for all associated persons registered as Research Analyst under SEBI (Research Analyst) Regulations, 2014, individuals employed as research analyst and partners of a Research Analyst, engaged in Preparation and/or publication of research report or research analysis."
    } 
    LibraryServiceTitle3 = {
      instanceID: "LibraryServiceTitle3",
      title: "INDUSTRY VISIT AND CONCURRENT FIELD WORK"
    };
    LibraryContent3 = {
      instanceID: "LibraryContent3",
      title: "Our MBA programme is designed in such a way that students have to visit a company and conduct a field work in every core subjects they learn in this course. Every students, mostly in groups, makes at least a visit to a company in every week. Thus they practice or learn to practice while they study the subject in the department. Faculty will also be accompanying the students. Department will arrange transportation facilities to and from the company they visit."
    } 
    LibraryServiceTitle4 = {
      instanceID: "LibraryServiceTitle4",
      title: "LIVE PROJECTS AND CONSULTANCY"
    };
    LibraryContent4 = {
      instanceID: "LibraryContent4",
      title: "VISWAJYOTHI CORPORATE RESOURCE CENTRE (VCRC), the consultancy wing of VJCET helps organizations imagine change, explore ideas, build capabilities, and implement organizational transformation. The Department of Management Studies team will partner with you to convert ideas into reality. We can provide you with industry-specific, actionable solutions to deal with your everyday and not everyday kind of problems. We combine faculty and student resources, bringing in expertise from diverse areas. We will develop unique work models to suit clients that will ensure perfect results. Our team is keen to collaborate and deliver expanded expectations. Technical capabilities, human strengths, rectitude, and a fastidious work style will turn client dreams into reality."
    } 
    LibraryContent5 = {
      instanceID: "LibraryContent5",
      title: "Dr. Jose Mamman, Project Head and Assistant professor, Department of Management Studies, Dr.Cyriac Joseph, Dean, Department of Management Studies,  Mr. Pratheep Kumar, Assistant professor, Department of Management Studies, Mr. Anish John A, Assistant professor, Department of Management Studies, and Dr.Geo Baby, External Consultant."
    } 
    LibraryServiceTitle6 = {
      instanceID: "LibraryServiceTitle6",
      title: "LIVE PROJECTS"
    };
    LibraryContent6 = {
      instanceID: "LibraryContent6",
      title: "First Year MBA students of Viswajyothi school of Management studies, batch 2018-20 . Mr Alex, Mr Rahul, Mr Aris, Mr Romal, Mr Basil, Mr Yadhukrishnan, MrAjas, Mr Nanda kumar, Mr Suhail taken up project with Era Fresh water distribution by Investing Rs 50000. This starts with the unique concept introduced by Viswajyothi school of Management Studies, Vazhakulam – ”EARN While U LEARN MBA”.. – Initiatives by Nelson Mathew Assistant Professor."
    } 
    LibraryServiceTitle7= {
      instanceID: "LibraryServiceTitle7",
      title: "PROFESSIONAL COLLABORATIONS"
    };
    LibraryContent7 = {
      instanceID: "LibraryContent7",
      title: "The department has professional ties with organisations like KMA, TiE, NIPM. The students participate in the activities organised by these bodies."
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
            <ul style={{lineHeight:"1.5em"}}>
              <li>A faculty is assigned to a group of 10 students as their mentor</li>
              <li>The mentees under the guidance of the faculty strives continuously for the attainment of the individual and collective goals</li>
              <li>Sharekhan Financial Services</li>
              <li>The mentor act as the local guardian of the student</li>
            </ul>
            <p>
            <b>The mentor is responsible for</b>
            </p>
            <ul style={{lineHeight:"1.5em"}}>
              <li>Goal setting-individual and collective</li>
              <li>Continuous training</li>
              <li>Discipline</li>
              <li>Motivation & counseling</li>
              <li>Career guidance</li>
              <li>OS, Project & Placements</li>
            </ul>
            <p>(Faculty in Charge – Mr. Sebin Joseph)</p>
      </div>
      <div  style={{textAlign:"left"}}>
          <p>
          <HeadingTwo data={this.LibraryServiceTitle2} className="Heading" />
          <p><b>NISM-Series-XV: Research Analyst Certification Examination</b></p>
            <BodyOneJustified data={this.LibraryContent2}/>
          </p>
            <p>
            <b>Course Objectives</b>
            </p>
            <ul style={{lineHeight:"1.5em"}}>
              <li>Know the basics of Indian Securities Markets and different terminologies used in equity and debt markets</li>
              <li>Learn about the top down and bottom up approach to fundamental research</li>
              <li>Know the basic principles for micro and macro-economic analysis, the sources of different information for analysis and the various macroeconomic variables affecting the analysis</li>
              <li>Know the key industry drivers and sources of information for industry analysis</li>
              <li>Understand about the Qualitative and Quantitative dimensions with regards to Company Analysis</li>
              <li>Learn about the Fundamentals of Risk and Return, Valuation Principles and the philosophy of various Corporate Actions</li>
              <li>Understand the qualities of a good research report</li>  
            </ul>            
      </div>
      <div  style={{textAlign:"left"}}>
            <ul style={{listStyleType:"none",lineHeight:"1.6em"}}>
                <li>CONTENTS</li>
                <li>CHAPTER 1: INTRODUCTION TO RESEARCH ANALYST PROFESSION</li>
                <li>CHAPTER 2: INTRODUCTION TO SECURITIES MARKET</li>
                <li>CHAPTER 3: TERMINOLOGY IN EQUITY AND DEBT MARKETS</li>
                <li>CHAPTER 4: FUNDAMENTALS OF RESEARCH</li>
                <li>CHAPTER 5: ECONOMIC ANALYSIS</li>
                <li>CHAPTER 6: INDUSTRY ANALYSIS</li>
                <li>CHAPTER 7: COMPANY ANALYSIS – QUALITATIVE DIMENSIONS</li>
                <li>CHAPTER 8: COMPANY ANALYSIS – QUANTITATIVE DIMENSIONS</li>
                <li>CHAPTER 9: CORPORATE ACTIONS</li>
                <li>CHAPTER 10: VALUATION PRINCIPLES</li>
                <li>CHAPTER 11: FUNDAMENTALS OF RISK AND RETURN</li>
                <li>CHAPTER 12: QUALITIES OF A GOOD RESEARCH REPORT</li>
                <li>CHAPTER 13: LEGAL AND REGULATORY ENVIRONMENT</li>
            </ul>
            <p><b>National Institute of Securities Markets (NISM) Certification Examination for Mutual Fund Distributors.</b></p>
            <p>
            <b>About the Certification Examination for Mutual Fund Distributors</b></p>
            <ul style={{listStyleType:"none",lineHeight:"1.6em"}}>
                <li>The examination seeks to create a common minimum knowledge benchmark for all persons involved in selling and distributing mutual funds including:</li>
                <li>Individual Mutual Fund Distributors</li>
                <li>Employees of organizations engaged in sales and distribution of Mutual Funds</li>
                <li>Employees of Asset Management Companies especially persons engaged in sales and distribution of Mutual Funds</li>
                <li>The certification aims to enhance the quality of sales, distribution and related support services in the mutual fund industry.</li>
            </ul>
            <p><b>Examination Objectives</b></p>
            <ul style={{listStyleType:"none",lineHeight:"1.6em"}}>
                <li>On successful completion of the examination, the candidate should:</li>
                <li>Know the basics of mutual funds, their role and structure, different kinds of mutual fund schemes and their features.</li>
                <li>Understand how mutual funds are distributed in the market-place, how schemes are to be evaluated, and how suitable products and services can be recommended to investors and prospective investors in the market</li>
                <li>Get oriented to the legalities, accounting, valuation and taxation aspects underlying mutual funds and their distribution.</li>
                <li>Get acquainted with financial planning as an approach to investing in mutual funds, and an aid for advisors to develop long term relationships with their clients.</li>
            </ul>
            <p><b>Course Duration: 30 hours</b></p>
            <p><b>Course Assessment Structure</b></p>
            <p>The examination consists of 100 questions of 1 mark each and should be completed in 2 hours. The passing score for the examination is 50 percent. There shall be no negative marking.</p>
            <p><b>Examination Objectives</b></p>

            <ul style={{listStyleType:"none",lineHeight:"1.6em"}}>
              <li>CONTENTS</li>
              <li>CHAPTER 1: CONCEPT AND ROLE OF A MUTUAL FUND</li>
              <li>CHAPTER 2: FUND STRUCTURE AND CONSTITUENTS</li>
              <li>CHAPTER 3: LEGAL AND REGULATORY ENVIRONMENT</li>
              <li>CHAPTER 4: OFFER DOCUMENT</li>
              <li>CHAPTER 5: FUND DISTRIBUTION AND CHANNEL MANAGEMENT PRACTICES</li>
              <li>CHAPTER 6: ACCOUNTING, VALUATION AND TAXATION</li>
              <li>CHAPTER 7: INVESTOR SERVICES</li>
              <li>CHAPTER 8: RETURN, RISK AND PERFORMANCE OF FUNDS</li>
              <li>CHAPTER 10: SELECTING THE RIGHT INVESTMENT PRODUCTS FOR INVESTORS</li>
              <li>CHAPTER 11: HELPING INVESTORS WITH FINANCIAL PLANNING</li>
              <li>CHAPTER 12: RECOMMENDING MODEL PORTFOLIOS AND FINANCIAL PLANS</li>
              </ul>
      </div>
        <p>
          <HeadingTwo data={this.LibraryServiceTitle3} className="Heading" />
          <BodyOneJustified data={this.LibraryContent3}/>          
        </p>
          <HeadingTwo data={this.LibraryServiceTitle4} className="Heading" />
          <p><b>VISWAJYOTHI CORPORATE RESOURCE CENTRE (VCRC)</b></p>
          <BodyOneJustified data={this.LibraryContent4}/>
      <div  style={{textAlign:"left"}}>
          <ul style={{lineHeight:"1.6em"}}>
              <p><b>WHAT WE OFFER</b></p>
              <li>Advisory</li>
              <li>Sectoral Study</li>
              <li>Customer and Market Research</li>
              <li>Management Development Programs</li>
            </ul>
            <ul style={{lineHeight:"1.6em"}}>
                <p><b>WHY VCRC</b></p>
                <li>PhDs in diverse areas – Finance, Marketing and HR</li>
                <li>Extended consulting team including students</li>
                <li>Research and consulting experience</li>
                <li>Corporate experience</li>
                <li>Strong research methodology base</li>
                <li>Women empowerment project with German collaboration</li>
                <li>Extensive library</li>
                <li>Business live labs</li>
            </ul> 
          <ul style={{lineHeight:"1.6em"}}>
              <p><b>CONSULTING FOOTPRINTS</b></p>
              <li>Market research consultancy for upcoming Mega Complex and sports Facility at Thrissur.</li>
              <li>Pre-poll analysis of the Ernakulam Constituency for 2019 Parliament Election.</li>
              <li>Our key consultants were part of the Akshaya Project of Kerala IT Mission, Project with MKN Constructions, and branding consultancy of Stiff and Shine a product of Jyothy Laboratories Ltd.</li>
              <li>Our key consultants provided training consultancy to LIC, KSFE, WHO, Kudumbasree units, IOC Kochi division, and various textile shops in Kochi.</li>
          </ul>
          <p><b>VCRC CONSULTING TEAM VCRC</b></p>
      </div>
      <BodyOneJustified data={this.LibraryContent5}/> 
      <HeadingTwo data={this.LibraryServiceTitle6} className="Heading" />
      <BodyOneJustified data={this.LibraryContent6}/> 
      <HeadingTwo data={this.LibraryServiceTitle7} className="Heading" />
      <div  style={{textAlign:"left"}}><p><b><i>Kerala Management Association</i></b></p></div>
      <BodyOneJustified data={this.LibraryContent7}/>  
  </div>
    );
  }
}

export default CSFaculty;
