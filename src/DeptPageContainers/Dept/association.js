import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Bodythree from "../../Components/Texts/BodyThree";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
import ImageTwo from "../../Components/Images/imageTwo";
import ImageOne from "../../Components/Images/ImageOne";
class Library extends Component {
  state = {};
  DeptAssociationHeadingOne = {
    instanceID: "DeptAssociationHeadingOne",
    title: "Association"
  };
  DeptAssociationDescriptionOne = {
    instanceID: "DeptAssociationDescriptionOne",
    title:
      "The Civil Engineering Students’ Association “CIVISTA” aims to play a pivotal role in the development of students as engineers by various out-of-curriculum and extracurricular activities. It aims to inculcate among its members an awareness and appreciation of the various disciplines of not just Civil Engineering but also other relevant fields. The Civil Engineering Association of VJCET was constituted in the year 2013 and is having 23 Faculty members, 8 Technical staff and 318 students as members. Various academic activities and technical talks are being organized on behalf of Civil Engineering Association. By way of its activities CIVISTA aims to be a platform for all the students in general and particularly of the students of CE department and seeks to be an active organization of the CE department which promotes their career interests. The prime objectives of the association are"
  };
  DeptAssociationDescriptionTwo = {
    instanceID: "DeptAssociationDescriptionTwo",
    title:
      "As a part of Civil Engineering Association; academic activities, technical talks and software training classes were organized by eminent technocrats from outside institutions and within the department.It aims to inculcate among its members an awareness and appreciation of the various disciplines of not just Civil Engineering but also other relevant domains. Various academic activities such as technical talks and software training classes are organized by eminent technocrats from other institutions and within the department on behalf of Civil Engineering Association."
  };

  DeptAssociationDescriptionThree = {
    instanceID: "DeptAssociationDescriptionThree",
    title:
      "I sec ∞, the Structural Engineering club of VJCET, was formed with an objective to bridge the gap between academics and real time practices."
  };

  DeptAssociationDescriptionFour = {
    instanceID: "DeptAssociationDescriptionFour",
    title:
      "The club offers membership to final year and pre-final year students and prepares them with the industry -expected skill- set in structural engineering. Structural Engineering Club was constituted on 10th February 2016 with 40 members to expose students to the prevalent practices in the domain of Structural Engineering. I sec ∞ help the students keep in touch with the real world through technical talks, discussions and activities. The goal of the club is to keep students updated on the latest structural engineering news, events, innovations and developments. Structural design projects and technical talks are being organized on every Wednesdays. Technical sessions by industrial experts are also organized under the auspicious of Industry institute interaction cell in association with I sec ∞ to inoculate the young minds."
  };


  DeptAssociationDescriptionFive = {
    instanceID: "DeptAssociationDescriptionFive",
    title:
      "The stability analysis study was conducted. The casted portable Loop configuration was modelled in the Structural analysis and Design Software (e tabs). A detailed study on possible loading cases and required factor of safety was studied and the model was analysed for those conditions."
  };

  DeptAssociationDescriptionSix = {
    instanceID: "DeptAssociationDescriptionSix",
    title:
      "The club offers membership to final year and pre-final year students and prepares them with the industry -expected skill- set in structural engineering. Structural Engineering Club was constituted on 10th February 2016 with 40 members to expose students to the prevalent practices in the domain of Structural Engineering. I sec ∞ help the students keep in touch with the real world through technical talks, discussions and activities. The goal of the club is to keep students updated on the latest structural engineering news, events, innovations and developments. Structural design projects and technical talks are being organized on every Wednesdays. Technical sessions by industrial experts are also organized under the auspicious of Industry institute interaction cell in association with I sec ∞ to inoculate the young minds."
  };
  DeptAssociationDescriptionSeven = {
    instanceID: "DeptAssociationDescriptionSeven",
    title:
      "The analysis exposed one flaw in the system in terms of stability. A solution to mitigate the stability issue was designed such that it won’t hinder the portability aspect of the system. The solution proposal was discussed with the concerned authorities and necessary action was taken by the college to implement the solution for achieving a stable Loop configuration."
  };

  DeptAssociationDescription8 = {
    instanceID: "DeptAssociationDescription8",
    title:
      "Mindspark is a curriculum enrichment program where the final year students take lectures for junior students addressing the innovative techniques and challenges in the contemporary civil engineering arena."
  };

  DeptAssociationDescription9 = {
    instanceID: "DeptAssociationDescription9",
    title:
      "To promote innovative ideas of students."
  };
  DeptAssociationDescription10 = {
    instanceID: "DeptAssociationDescription10",
    title:
      "The program mission is to enlighten our students to mould their thoughts on transforming their professional lives beneficial for fellow human beings and for the well-being of the society as a whole. The proposed outcome is to instill innovative ideas in the students to replace the inept practices and complex methodologies adopted in construction industry."
  };

  DeptAssociationDescription11 = {
    instanceID: "DeptAssociationDescription11",
    title:
      "‘Ruparekha’ is an initiative from the Department to assist in preparation of plans, submission drawings and estimates to cater to Economically Weaker Sections (EWS) and Low Income Groups (LIG). The major beneficiaries are residents of the neighboring Panchayaths."
  };

  DeptAssociationDescription12 = {
    instanceID: "DeptAssociationDescription12",
    title:
      "To utilize technical skills of students for a social cause and for the benefit of the lesser privileged sections of the society."
  };
  DeptAssociationDescription13= {
    instanceID: "DeptAssociationDescription13",
    title:
      "To inculcate a civic sense among the graduates of the Department by getting them involved in developing plans, submission drawings and estimates for marginalized sections of the society; offering consultancy for infrastructure development of the state; free of charge."
  };

  DeptAssociationDescription14 = {
    instanceID: "DeptAssociationDescription14",
    title:
      "Academic books are being disbursed in each semester to the deserving students of our department. They in turn, return the books after use; to be re-circulated among students. Every year, new books are replenished by the Department."
  };

  DeptAssociationDescription15 = {
    instanceID: "DeptAssociationDescription15",
    title:
      "To render a helping hand to academically proficient students."
  };
  DeptAssociationDescription16= {
    instanceID: "DeptAssociationDescription16",
    title:
      "To encourage and elevate needy students with good academic potential."
  };

  DeptAssociationDescription17 = {
    instanceID: "DeptAssociationDescription17",
    title:
      "It had come to the notice of VJCET about the family of Akil (9) & Ajil (13), two children from Kalloorkadu Panchayath who were affected with muscular dystrophy-a medical condition characterized by progressive loss of muscle mass and consequent loss of strength from a news report on Mathrubhoomi daily dated September 14, 2016. Students and faculty members of Civil Engineering Department prepared the plan, estimate and supervised the works and mobilized all materials for the house construction. The construction was completed within 72 days. The entire project was funded by VJCET, for which several well-wishers, who requested anonymity; contributed benevolently. Swapanaveedu key was handed over to their parents Mr. Jacob Vengachottil (Household head) & his wife Shanty in the auspicious presence of Sri Eldho Abraham, M.L.A, Muvattupuzha."
  };

  DeptAssociationDescription18 = {
    instanceID: "DeptAssociationDescription18",
    title:
      "The Institute was selected as a nodal centre for Pradhan Mantri Awas Yojna- Gramin (PMAY-G) for the reconstruction of houses for financially backward people living within the jurisdiction of Avoly Grama Panchayath and Muvattupuzha Block Division. Under this initiative , students of Civil Engineering Department, Aswathy Warrier D, Hanna Mini Sabu, Mariamol Mathew, Sneha George prepared the plan and estimate for 47 houses under the guidance of Mr. Appu John in the year 2017. Maria James, Nihal Noor, Princy N. Paul and R. Harikrishnan , under the guidance of Dr.Anoop C.K prepared plan and estimate for 14 houses in 2018."
  };
  DeptAssociationDescription19= {
    instanceID: "DeptAssociationDescription19",
    title:
      "The National Green Tribunal (NGT), has directed urgent steps towards abatement of pollution and rejuvenation of 21 rivers identified as ‘critically polluted’ in the State. As directed, the Water Resources Department (WRD) of Kerala in collaboration with selected engineering colleges in the state has formulated a detailed project report of action plan for the concerned river. A team including four faculty members and eight students from Department of Civil Engineering analyze the water quality of Muvattupuzha river and submitted the report to Water Resources Department in February 2021 in accordance with the NGT."
  };

  DeptAssociationDescription20 = {
    instanceID: "DeptAssociationDescription20",
    title:
      "The College being selected as a Third Party Technical Agency, 71 Students from Civil Engineering Department conducted GIS Survey for the database creation of Marady Block Panchayath in 2019."
  };
  DeptAssociationDescription21= {
    instanceID: "DeptAssociationDescription21",
    title:
      "The College being selected as a Third Party Technical Agency , Ministry of Road Transport & Highways Road Safety Cell (Engineering) and concerned police Department of the state has designated selected Engineering Colleges to identify the blackspot as part of road safety program. Students of Civil Engineering Department, Abin Silven, Emin Eldho Mathew, Savitha Dominic and Tobin Roy identified 7 Black spots in and around Muvattupuzha. The work also focused on studying the reasons of accidents and proposal of remedial measures in order to reduce the number of accidents, accompanied by a faculty and Police personnel."
  };



  List1 = {
    instanceID: "List1",
    title: "•	To focus on the cutting edge technology and present it to the students in an interesting manner by means of lectures/talk, articles and workshops."
  };
  List2 = {
    instanceID: "List2",
    title: "•	To bridge the gap between theoretical and practical/field knowledge."
  };
  List3 = {
    instanceID: "List3",
    title: "•	Promoting the interests of students in various technical areas pertaining to civil engineering."
  };
  List4 = {
    instanceID: "List4",
    title: "•	Giving relevant information to students to sustain their interest in their field-specific applications of CE."
  };
  List5 = {
    instanceID: "List5",
    title: "•	Providing students of the department with relevant knowledge and fundamental applications of other disciplines of Engineering."
  };
  List6 = {
    instanceID: "List6",
    title: "•	Interacting with other technical societies, within and outside the institute to promote flow of knowledge and interest."
  };
  List7 = {
    instanceID: "List7",
    title: "•	To promote the interaction between academia and industry."
  };
  List8 = {
    instanceID: "List8",
    title: "•	To encourage novel ideas by means of innovative projects."
  };
  List9 = {
    instanceID: "List9",
    title: "•	To organize various events and competitions in BODHI – the technical fest of VJCET."
  };

  civillogo1 = {
    instanceID: "civillogo1",
    image: "DepartmentImages/CE/cilogo1.png",
    width: "20%" 
      };
      civillogo2 = {
        instanceID: "civillogo2",
        image: "DepartmentImages/CE/CErooparekha.jpg",
        width: "20%"
          };

civilmage1 = {
  instanceID: "civilmage1",
  image: "DepartmentImages/CE/civillab1.png",
  width: "70%"
}
civilmage2 = {
  instanceID: "civilmage2",
  image: "DepartmentImages/CE/civillab2.png",
  width: "70%"
}
  render() {
    return (
      <div className="DeptAssociation" id="dept-association">
        <HeadingOne data={this.DeptAssociationHeadingOne} />
        <Bodythree data={this.DeptAssociationDescriptionOne} />
        <div className="bodyContainer">         
          <div className="bodyContainerInner">
            <p><BodyOneJustified data={this.List1}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List2}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List3}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List4}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List5}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List6}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List7}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List8}></BodyOneJustified></p>
            <p><BodyOneJustified data={this.List9}></BodyOneJustified></p>
          </div>
          <p><BodyOneJustified data={this.DeptAssociationDescriptionTwo} /></p>
<h5>1. SEC ∞ - STRUCTURAL ENGINEERING CLUB</h5>
<p align="center"><ImageTwo data={this.civillogo1} /></p>
<p><BodyOneJustified data={this.DeptAssociationDescriptionThree} /></p>
<p><BodyOneJustified data={this.DeptAssociationDescriptionFour} /></p>
<p style={{textAlign:"center"}}><ImageOne data={this.civilmage1} /></p>
<p style={{textAlign:"center",fontSize:"13px",fontWeight:"bold"}}>Stability Analysis & Solution Proposal for Basket Ball Hoop Configuration &
FEM Stimulation of Basket Ball Hoop</p>
<p><BodyOneJustified data={this.DeptAssociationDescriptionFive} /></p>
<p><BodyOneJustified data={this.DeptAssociationDescriptionSix} /></p>
<p><BodyOneJustified data={this.DeptAssociationDescriptionSeven} /></p>
<h5>2. MINDSPARK</h5>
<BodyOneJustified data={this.DeptAssociationDescription8} />
<h6>Objective</h6>
<BodyOneJustified data={this.DeptAssociationDescription9} />
<h6>Mission</h6>
<BodyOneJustified data={this.DeptAssociationDescription10} />
<h5>3. RUPAREKHA</h5>
<p align="center"><ImageTwo data={this.civillogo2} /></p>
<BodyOneJustified data={this.DeptAssociationDescription11} />
<h6>Objective</h6>
<BodyOneJustified data={this.DeptAssociationDescription12} />
<h6>Mission</h6>
<BodyOneJustified data={this.DeptAssociationDescription13} />
<h5>4. VIDYANUPALANA </h5>
<p><BodyOneJustified data={this.DeptAssociationDescription14} /></p>
<h6>Objective</h6>
<p><BodyOneJustified data={this.DeptAssociationDescription15} /></p>
<h6>Mission</h6>
<p><BodyOneJustified data={this.DeptAssociationDescription16} /></p>
<h5>5. SOCIAL OUTREACH PROGRAMS</h5>
<h6>i. SWAPANA VEEDU - A Philanthropic Initiative of Viswajyothi College of Engineering </h6>
<p><BodyOneJustified data={this.DeptAssociationDescription17} /></p>
<p style={{textAlign:"center"}}><ImageOne data={this.civilmage2} /></p>
<h6>ii. Nodal centre for PMAY-G (Pradhan Mantri Awas Yojna-Gramin)</h6>
<p><BodyOneJustified data={this.DeptAssociationDescription18} /></p>
<h6>iii. Abatement of pollution of Muvattupuzha river</h6>
<p><BodyOneJustified data={this.DeptAssociationDescription19} /></p>
<h6>iv. GIS Survey in Marady  Block Panchayath</h6>
<p><BodyOneJustified data={this.DeptAssociationDescription20} /></p>
<h6>v. Identification of Black Spots</h6>
<p><BodyOneJustified data={this.DeptAssociationDescription21} /></p>

        </div>
      </div>
    );
  }
}

export default Library;
