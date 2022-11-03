import React, { Component } from "react";
import HomePage from "./Pages/HomePage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import Department from "./Pages/Departments/department";
import CampusLifePage from "./Pages/CampusLifePage";
import anualrep from "./Pages/annualreport";
import collegecounsil from "./CampusLifePageContainers/collegecouncil";
import committees from "./CampusLifePageContainers/committees";
import artsfest from "./CampusLifePageContainers/artsfest";
import sportsfest from "./CampusLifePageContainers/sportsfest";
import techfest from "./CampusLifePageContainers/techfest";
import nss from "./CampusLifePageContainers/nss";
import nationday from "./CampusLifePageContainers/natonalday";
import campusmap from "./CampusLifePageContainers/campusmap";
import Publications from "./CampusLifePageContainers/publications";
import professionalbodies from "./CampusLifePageContainers/ProfessionalBodies/csdepartment";
import ieee from "./CampusLifePageContainers/ProfessionalBodies/ieee";
import iste from "./CampusLifePageContainers/ProfessionalBodies/iste";
import csi from "./CampusLifePageContainers/ProfessionalBodies/csi";
import iete from "./CampusLifePageContainers/ProfessionalBodies/iete";
import igbc from "./DeptPageContainers/CeDept/Profbodies";
import sea from "./CampusLifePageContainers/ProfessionalBodies/saeindia";
import AIdepartment from "./Pages/Departments/artificial";
import CsDepartment from "./Pages/Departments/csdepartment";
import EeeDepartment from "./Pages/Departments/eeedepartment";
import EcDepartment from "./Pages/Departments/ecdepartment";
import ItDepartment from "./Pages/Departments/itdepartment";
import MeDepartment from "./Pages/Departments/medepartment";
import MbaDepartment from "./Pages/Departments/mbadepartment";
import BhmctDepartment from "./Pages/Departments/bhmctdepartment";
import SHDepartment from "./Pages/Departments/s&hdepartment";
import Admin from "./Pages/Departments/admin";
import honoursPage from "./Pages/HonoursPage";
import PlacementPage from "./Pages/placementpage";
import FacilitiesPage from "./Pages/FacilitiesPage";
import CCC from "./FacilitiesPageContainers/ComputingTechnology/computing";
import building from "./FacilitiesPageContainers/BuildingArea/building";
import powerandbackup from "./FacilitiesPageContainers/PowerandBackup/powerandbackup";
import solarplant from "./FacilitiesPageContainers/Solarplant/solarplant";
import Library from "./FacilitiesPageContainers/Library/index";
import Hostel from "./FacilitiesPageContainers/Hostel/index";
import Healthandfitness from "./FacilitiesPageContainers/Healthandfitness/index";
import eresource from "./FacilitiesPageContainers/Eresources/eresourcestart";
import campusamenities from "./Pages/CoreFacilities";
import transportation from "./FacilitiesPageContainers/Transportation/transportation";
import NBA from "./Pages/NBA";
import KeyFunc from "./Pages/KeyFunc";
import ContactUs from "./ContactUsContainers/ContactUs";
import mocktest from "./ContactUsContainers/MockTest";
import Academics from "./Pages/Academics";
import VisionPage from "./Pages/VisionPage";
import Affliations from "./Pages/Affliations";
import Mandatorydisclosure from "./Pages/mandatorydisclosure";
import RTI from "./Pages/RTI";
import SyllabusPage from "./Pages/SyllabusPage";
import Research from "./ResearchPageContainers/csdepartment";
import Mtech from "./Pages/Mtech"
import Phd from "./Pages/Phd"
import Syllabusplan from "./Pages/Syllabusplan";
import Blockchain from "./Pages/Blockchain";
import Newsone from "./Pages/NewsContainers/Newsone";
import Newstwo from "./Pages/NewsContainers/Newstwo";
import Newsthree from "./Pages/NewsContainers/Newsthree";
import Newsfour from "./Pages/NewsContainers/Newsfour";
import Newsfive from "./Pages/NewsContainers/Newsfive";
import Newssix from "./Pages/NewsContainers/Newssix";
import Newsseven from "./Pages/NewsContainers/Newsseven";
import newseight from "./Pages/NewsContainers/Newseight";
import newsnine from "./Pages/NewsContainers/Newsnine";
import Newsten from "./Pages/NewsContainers/Newsten";
import Newsfee from "./Pages/NewsContainers/Feenews";
import Iedc from "./EdPageContainers/IEDC/csdepartment";
import Vbic from "./EdPageContainers/Vbic";
import Iiic from "./EdPageContainers/IIIC/csdepartment";
import Unai from "./EdPageContainers/Unai";
import Iqacfull from "./iqac/csdepartment";
import Notify from "./Components/NewComponents/Notify";
import NotiPage from './Pages/Notifications';
import NISP from "./Pages/NISP";
import ErrorPage from "./Pages/ErrorPage";
import Ict from "./CampusLifePageContainers/ProfessionalBodies/ICT";
//import NAAC_C1_P1 from "./Naac/Nac_C1_P1";
import NAACbase from "./Naac/naacstart";
import codeofc from "./CodeofC/codeofconducts";
import strategic from "./CodeofC/strategicplan";
import grievance from "./Grievance/grievance";
import govenbody from "./AboutPageContainers/AboutVJC/governbody" 
import distinctiv from "./Naac/insti_disti_731"
import compuskills from "./Naac/skills_enhancement"
import ApprovalLetters from "./Pages/ApprovalLetters";

class App extends Component {

  ceProps = {
    HeadingSectionTitle: {
      instanceID: "Headingtext",
      title: "CIVIL ENGINEERING"
    },
    HeadingSectionDescription: {
      instanceID: "HeadingSectionDescription",
      title: "Building future on foundations of excellence"
    },
    CseImg: {
      instanceID: "CseImg",
      image: "DepBannerImages/ce.jpg",
      width: "100%"
    },
    SideNavData: {
      profile: {
        ProfileDescriptionOne: {
          instanceID: "ProfileDescriptionOne",
          title:
            "Consistently ranked as one of the top performers among the colleges affiliated to APJ Abdul Kalam Technological University, the Department maintains academic alliances with several industries and training institutes which help them evolve as socially committed Engineers. We seek to promote the overall growth of every student by way of academic mentoring as well as through provision of avenues for career development and career growth."
        },
        Ceheading: {
          instanceID: "Ceheading",
          title: ""/*Salient Features:*/
        },
        Features: [
          {
            instanceID: "Features1",
            title: "•	Well-equipped Laboratories which offer external consultancy services and students’ involvement in the same",
            list: [{
              instanceID: "Features1list1",
              title: "o	Concrete Mix Design"
            },
            {
              instanceID: "Features1list2",
              title: "o	BM&BC Mix Design",
            },
            {
              instanceID: "Features1list3",
              title: "o	Building Material Testing Services"
            },
            {
              instanceID: "Features1list4",
              title: "o	Water Quality Analysis"
            }]
          },
          {
            instanceID: "Features2",
            title: "•	Industry-oriented real-time student projects",
            list: []
          },
          {
            instanceID: "Features3",
            title: "•	Hands-on training sessions on BIM software and allied emerging technologies",
            list: []
          },
          {
            instanceID: "Features4",
            title: "•	Industry internships and interface  vide  III ( Industry-Institute-Interaction ) Cell , MoU  undertaken with industries of prominence in construction sector",
            list: []
          },
          {
            instanceID: "Features5",
            title: "•	Active student professional bodies such as:",
            list: [{
              instanceID: "Feature5list1",
              title: "o	IGBC ( Indian green Building Council)"
            },
            {
              instanceID: "Feature5list2",
              title: "o	IMS ( Indian Meteorological Society) "
            },
            {
              instanceID: "Feature5list3",
              title: "o	IGS (Indian Geotechnical Society) "
            },
            {
              instanceID: "Feature5list4",
              title: "o	UNAI   ( United Nations Academic Impact- ASPIRE)"
            }]
          },
          {
            instanceID: "Features6",
            title: "•	Student internship opportunities at IITs, KILA and other premier institutes ",
            list: []
          },
          {
            instanceID: "Features7",
            title: "•	Involvement with construction projects in the campus through SeC ∞ ( Structural Engineering Club) and FABLAB",
            list: []
          },
          {
            instanceID: "Features8",
            title: "•	Avenues for social outreach and inculcation of civic sense ; the department being a TPTA ( Third Party Technical Agency) for PMAY (G)",
            list: []
          },
          {
            instanceID: "Features9",
            title: "•	Student involvement in research initiatives through R&D Cell",
            list: []
          }
        ]
      },
      vision: {
        VisionDescription: {
          instanceID: "VisionDescription",
          title:
            "Building Professionally Competent and Motivated Engineers in the Arena of Civil Engineering with High Professional Ethics"
        },
        Missions: [
          {
            instanceID: "MissionListOne",
            title:
              "1.	To promote a better teaching learning process through academically proficient faculty, full fledged laboratories and excellent infrastructure facilities. "
          },
          {
            instanceID: "MissionListTwo",
            title:
              "2.	To equip the graduates with knowledge, research and practical skills in modern construction practices and techniques."
          },
          {
            instanceID: "MissionListThree",
            title:
              "3.	To inculcate knowledge of sustainability in various domains of Civil Engineering."
          },
          {
            instanceID: "MissionListFour",
            title:
              "4.	To nurture Civil Engineers into ethically strong and responsible leaders to address global challenges through quality education."
          }
        ]
      },
      peo: {
        peo: [
          {
            instanceID: "peoListOne",
            title: "Our Graduates "
          },
          {
            instanceID: "peoListTwo",
            title:
              "1.	Shall tackle the multiple responsibilities of analysis, design and construction of traditional and modern systems in compliance with various codes of practices and to meet the current technical challenges."
          },
          {
            instanceID: "peoListThree",
            title:
              "2.	Shall be proficient in the use of relevant software packages for planning, designing, scheduling, executing and controlling of Civil Engineering projects, with an urge for life-long learning."
          },
          {
            instanceID: "peoListFour",
            title:
              "3.	Shall function effectively with individual capabilities as well as with a collective strength as a professional team with good communication skills."
          }
        ],
        pso: [
          {
            instanceID: "psoListOne",
            title: "Our Graduates shall have"
          },
          {
            instanceID: "psoListTwo",
            title:
              "1.	Ability to utilize Civil Engineering principles and software that are appropriate to solve technical problems; prepare design and construction documents ; create structural systems; produce drawings, reports and quantity estimates related to the Civil Engineering domain."
          },
          {
            instanceID: "psoListThree",
            title:
              "2.	Ability to utilize modern surveying methods for land measurement and/or construction layout and to conduct standardized field /laboratory tests related to Civil Engineering."
          }
        ],
        co: [
          {
            instanceID: "coListOne",
            title:"title",
            link: "https://vjcet.org/downloads/COs/CE.xlsx"
          }
        ]
        
      },
      program: [
        {
          instanceID: "ProgramDescriptionOne",
          title:
            "The Department offers undergraduate program in Civil Engineering with an annual intake of 60 students. The program was accredited by NBA in 2018. Civil Engineers are in a privileged and hugely influential position to innovate, design and build a sustainable future."
        },
        /*{
          instanceID: "ProgramDescriptionTwo",
          title:
            "The program was accredited by NBA in 2018."
        },
        {
          instanceID: "ProgramDescriptionThree",
          title: "Civil Engineers are in a privileged and hugely influential position to innovate, design and build a sustainable future."
        },*/
        {
          instanceID: "ProgramDescriptionFour",
          title: "Civil Engineering Department strives to:"
        },
        {
          instanceID: "List1",
          title: "•	Put forth best- rated undergraduate education."
        },
        {
          instanceID: "List2",
          title: "•	Offer high-end professional consultancy,excellent work culture and campus atmosphere."
        },
        {
          instanceID: "List3",
          title: "•	Inculcate academic integrity and accountability among our faculty as well as students. "
        },
        {
          instanceID: "List4",
          title: "•	Cultivate a sense of civic and social responsibility among our students by way of various Forums and Clubs."
        },
        {
          instanceID: "List5",
          title: "•	Continue the process of building strong links with the building and construction industry."
        }
      ],
      faculty: {
        faculty: [
          {
            instanceID: "Cefaculty1",
            image: "Allstaffphoto/CE/FAC/cefacultyimg1.JPG",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC101" target="_blank" rel="noopener noreferrer">Dr. Shine George</a>,
            content: "Asso. Prof. & HOD"
          },
          {
            instanceID: "Cefaculty2",
            image: "Allstaffphoto/CE/FAC/347.jpg",
            width: "52%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC132" target="_blank" rel="noopener noreferrer">Dr. Anoop C.K.</a>,
            content: "Professor & Asst. HOD"
          },
          {
            instanceID: "Cefaculty24",
            image: "Allstaffphoto/CE/FAC/fac24.jpg", 
            width: "50%", 
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC144" target="_blank" rel="noopener noreferrer">Dr. Grasius  M. G</a>,
            content: "Professor(on-leave)"
          },
          {
            instanceID: "Cefaculty25",
            image: "Allstaffphoto/CE/FAC/RAVINDRANATH.jpg", 
            width: "50%", 
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC145" target="_blank" rel="noopener noreferrer">Dr. E. Ravindranath</a>,
            content: "Professor(on-leave)"
          },         
          {
            instanceID: "Cefaculty3",
            image: "Allstaffphoto/CE/FAC/37.JPG",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC102" target="_blank" rel="noopener noreferrer">Mrs. Tina Jose</a>,
            content: "Assistant Professor",

          },
          {
            instanceID: "Cefaculty4",
            image: "Allstaffphoto/CE/FAC/38.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC103" target="_blank" rel="noopener noreferrer">Mrs. Bijimol Joseph</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty5",
            image: "Allstaffphoto/CE/FAC/39.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC104" target="_blank" rel="noopener noreferrer">Mrs. Neena M Joseph</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty6",
            image: "Allstaffphoto/CE/FAC/40.jpg",
            width: "51%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC105" target="_blank" rel="noopener noreferrer">Mrs. Minu C Joy</a>,
            content: "Assistant Professor(on-leave)"
          },
          {
            instanceID: "Cefaculty7",
            image: "Allstaffphoto/CE/FAC/42.jpg",
            width: "55%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC107" target="_blank" rel="noopener noreferrer">Mrs. Amrutha S</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty8",
            image: "Allstaffphoto/CE/FAC/45.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC110" target="_blank" rel="noopener noreferrer">Mrs. Devina Vipinan</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty",
            image: "Allstaffphoto/CE/FAC/46.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC111" target="_blank" rel="noopener noreferrer">Mr. Appu John</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty10",
            image: "Allstaffphoto/CE/FAC/47.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC112" target="_blank" rel="noopener noreferrer">Mr. Lins Paul Kuriakose</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty11",
            image: "Allstaffphoto/CE/FAC/49.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC114" target="_blank" rel="noopener noreferrer">Mrs. Tintu Shine A L</a>,
            content: "Assistant Professor(on-leave)"
          },
          /*{
            instanceID: "Cefaculty12",
            image: "Allstaffphoto/CE/FAC/50.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC115" target="_blank" rel="noopener noreferrer">Mrs. Jerin Jose</a>,
            content: "Assistant Professor"
          },*/
          {
            instanceID: "Cefaculty14",
            image: "Allstaffphoto/CE/FAC/283.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC118" target="_blank" rel="noopener noreferrer">Mrs. Nivya Mary Abraham</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty15",
            image: "Allstaffphoto/CE/FAC/296.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC122" target="_blank" rel="noopener noreferrer">Mrs. Anu Paul</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty17",
            image: "Allstaffphoto/CE/FAC/311.JPG",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC125" target="_blank" rel="noopener noreferrer">Mrs. Soumya Rani P. Thomas</a>,
            content: "Assistant Professor"
          },
         /* {
            instanceID: "Cefaculty18",
            image: "Allstaffphoto/CE/FAC/312.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC126" target="_blank" rel="noopener noreferrer">Ms. Rose Mary Xavier</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty21",
            image: "Allstaffphoto/CE/FAC/366.jpg",
            width: "50%",
            name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=CEFAC134" target="_blank" rel="noopener noreferrer">Mr. Vishnu Krishnan</a>,
          content: "Assistant Professor(on-leave Ph.D)"
          },*/
          {
            instanceID: "Cefaculty22",
            image: "Allstaffphoto/CE/FAC/384.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC136" target="_blank" rel="noopener noreferrer">Mr. Basil Baby</a>,
            content: "Assistant Professor(on-leave Ph.D)"
          },
          {
            instanceID: "Cefaculty22",
            image: "Allstaffphoto/CE/FAC/385.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC137" target="_blank" rel="noopener noreferrer">Mrs. Nisa Ann Mathew </a>,
            content: "Assistant Professor(on-leave)"
          },
          {
            instanceID: "Cefaculty22",
            image: "Allstaffphoto/CE/FAC/389.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC138" target="_blank" rel="noopener noreferrer">Mrs. Finu John</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty23",
            image: "Allstaffphoto/CE/FAC/394.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC139" target="_blank" rel="noopener noreferrer">Mrs. Ancy Genu C.George</a>,
            content: "Assistant Professor"
          },
          {
            instanceID: "Cefaculty26",
            image: "Allstaffphoto/CE/FAC/meril.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CEFAC142" target="_blank" rel="noopener noreferrer">Ms. Meril Jose</a>,
            content: "Guest Lecturer"
          }
        ],
        staff: [
          {
            instanceID: "Cestaff1",
            image: "Allstaffphoto/CE/STAF/57.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CESTF101" target="_blank" rel="noopener noreferrer">Mrs. Simi N U</a>,
            content: "Instructor-Grade II"
          },
          {
            instanceID: "Cefaculty2",
            image: "Allstaffphoto/CE/STAF/59.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CESTF103" target="_blank" rel="noopener noreferrer">Mr. Jobish K Jose</a>,
            content: "Trade Instructor"
          },
         {
            instanceID: "Cefaculty3",
            image: "Allstaffphoto/CE/STAF/60.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CESTF110" target="_blank" rel="noopener noreferrer">Mr. Jibi Jose</a>,
            content: "Tradesman"
          },
          {
            instanceID: "Cefaculty4",
            image: "Allstaffphoto/CE/STAF/61.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CESTF111" target="_blank" rel="noopener noreferrer">Mr. Wilson V George</a>,
            content: "Tradesman"
          },
          {
            instanceID: "Cefaculty5",
            image: "Allstaffphoto/CE/STAF/62.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CESTF113" target="_blank" rel="noopener noreferrer">Mr. Biju Joseph</a>,
            content: "Tradesman"
          },
          {
            instanceID: "Cefaculty6",
            image: "Allstaffphoto/CE/STAF/63.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CESTF114" target="_blank" rel="noopener noreferrer">Mr. Shibu Augustine</a>,
            content: "Tradesman"
          },
          {
            instanceID: "Cefaculty7",
            image: "Allstaffphoto/CE/STAF/64.jpg",
            width: "50%",
            name: <a href="http://profile.vjcet.ac.in/StaffDetails/GetTeacherInfo?Staffcode=CESTF108" target="_blank" rel="noopener noreferrer">Mr. Mahesh Sankar</a>,
            content: "Tradesman"
          }
        ]
      },
      library: {
        DeptLibDescriptionOne: {
          instanceID: "DeptLibDescriptionOne",
          title:
            "In addition to the Central Library, a dedicated Department Library is functioning for the benefit of staff members and students. The library is solely intended for referral purposes. No issue of books is done. Students or faculty members can access the books and refer them within the library. The e-library facility of the central library is also made accessible in the Department Library. The library functions from 8:45 am to 4:30 pm."
        }
      },
     /* assosn: {
        desc: [
          {
            instanceID: "DeptAssociationDescriptionOne",
            title:
              "The Civil Engineering Students’ Association “CIVISTA” plays a pivotal role in the development of students as engineers by various out-of-curriculum and extra-curricular activities. "
          },
          {
            instanceID: "DeptAssociationDescriptionTwo",
            title:
              "It aims to inculcate among its members an awareness and appreciation of the various disciplines of not just Civil Engineering but also other relevant fields. Various academic activities and technical talks are being organized on behalf of Civil Engineering Association. "
          },
          {
            instanceID: "DeptAssociationDescriptionThree",
            title: "CIVISTA has 26 Faculty members, 8 Technical staff and 443 students on its roll. "
          },
          {
            instanceID: "DeptAssociationDescriptionFour",
            title:
              "CIVISTA involves in various Curriculum Enrichment Programs and Social Outreach Programs:"
          }],
        list: [
          {
            instanceID: "List1",
            title: "•	EXTERNAL CONSULTANCY SERVICES"
          },
          {
            instanceID: "List2",
            title: "•	SEC ∞"
          },
          {
            instanceID: "List3",
            title: "•	MINDSPARK "
          },
          {
            instanceID: "List4",
            title: "•	ROOPAREKHA"
          },
          {
            instanceID: "List5",
            title: "•	SOCIAL OUT REACH PROGRAMS"
          }
        ]
      },*/
      result: {
        heading: {
          instanceID: "CehonoursHeading",
          title: "Civil Engineering"
        },
        honours: [
          {
            instanceID: "cshonours1",
            image: "Honours/cehonour1.jpg",
            width: "30%",
            name: "Mariamol Mathew",
            content:
              "Tenth Rank in B.Tech May 2018"
          }
        ]
      },
      outreach: {
        list: [
          {
            instanceID: "List1Title",
            title: "EXTERNAL CONSULTANCY SERVICES",
            list: [{
              instanceID: "List1Content",
              title: "To provide an interface for students with the industry, we offer external consultancy services through our well-equipped Laboratories with students’ involvement in the same."
            },
            {
              instanceID: "List1Content1",
              title: "o	Concrete Mix Design"
            },
            {
              instanceID: "List1Content2",
              title: "o	BM & BC Mix Design"
            },
            {
              instanceID: "List1Content3",
              title: "o	Building material testing services"
            }, {
              instanceID: "List1Content4",
              title: "o	Water Quality Analysis"
            },
            ]
          },
          {
            instanceID: "List2Title",
            title: "SEC ∞",
            list: [{
              instanceID: "List2Content",
              title: "Structural Engineering Club of the Department aims to bridge the gap between academics and real time practices in the industry. The objective is to expose students to the prevalent techniques and practices in the domain of Structural Engineering. The club activities include Design projects, technical talks, group discussion and site visits."
            }]
          },
          {
            instanceID: "List3Title",
            title: "MINDSPARK",
            list: [
              {
                instanceID: "List3Content",
                title: "‘Mindspark’ is a curriculum enrichment program where the final year students deliver lectures for junior students addressing the innovative techniques and challenges in the contemporary Civil Engineering arena. The outcomes of the discussion are also meant to prompt the students with innovative ideas to replace the inept practices and complex methodologies adopted in construction industry."
              }

            ]
          },
          {
            instanceID: "List4Title",
            title: "INDUSTRY INSTITUTE INTERACTION CELL",
            list: [{
              instanceID: "List4Content",
              title: "Better interaction between Technical institutions and industry is the need of the hour. This will have great bearing on the Engineering Curriculum and provides exposure to industrial atmosphere for engineering students and subsequent placement of young graduating engineers in industries across the country. III Cell has organised several events to nurture the industry institute interaction at VJCET in association with institute and department level entities. "
            }]
          },
          {
            instanceID: "List5Title",
            title: "ROOPAREKHA",
            list: [{
              instanceID: "List5Content",
              title: "‘Rooparekha’ is an initiative from the Department to assist in preparation of plans, submission of drawings and estimates to cater to the Economically Weaker Sections (EWS) and Low Income Groups (LIG) beneficiaries of the neighbouring panchayaths."
            }]
          },
          {
            instanceID: "List6Title",
            title: "SOCIAL OUT REACH PROGRAMS",
            list: [{
              instanceID: "List6Content",
              title: "The Department is chosen as TPTA (Third Party Technical Agency) and Nodal centre for PMAY-G (Pradhan MantriAwasYojna-Gramin). Students can partake in projects and programs initiated under PMAY-G."
            }]
          }
        ]
      },
      profbody: [
        {
          title: {
            instanceID: "List1Title",
            title: "IGBC"
          },
          content: {
            instanceID: "List1Content",
            title: "The student chapter of Indian Green Building Council at VJCET is a part of the Confederation of Indian Industry. The individual members would work along with the esteemed community of green building professionals who facilitate the nation to be one among the global leaders in sustainable built environment. "
          }
        },
        {
          title: {
            instanceID: "List2Title",
            title: "IGS"
          }, content: {
            instanceID: "List2Content",
            title: "The Indian Geotechnical Society student chapter aims at promoting co-operation for the advancement and dissemination of knowledge in the fields of Soil Mechanics, Foundation Engineering, Soil Dynamics, Engineering Geology, and allied fields and their practical applications."
          }
        },
        {
          title:
          {
            instanceID: "List3Title",
            title: "IMS"
          },
          content: {
            instanceID: "List3Content",
            title: "Indian Meterological Society student chapter is constituted for the dissemination of knowledge on meteorological and allied sciences   It aims for the promotion of application of these to various constructive human activities such as agriculture and land uses, irrigation and power development, navigation of sea and air, engineering and technology and public health."
          }
        },
        {
          title: {
            instanceID: "List4Title",
            title: "UNAI-ASPIRE (Action by Students to Promote Innovation and Reform through Education)"
          },
          content: {
            instanceID: "List5Content",
            title: "-The United Nations Academic Impact (UNAI) is a global initiative that aligns institutions of higher education with the United Nations in furthering the realization of the purposes and mandate of the Organization through activities and research in a shared culture of intellectual social responsibility. ASPIRE is a student-driven initiative and actively embodies UNAI’s principles within student communities around the world. Operating locally within their communities, the activities of each ASPIRE group contributes to UNAI’s overall message of unity and action to address global challenges."
          }
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            {/*<Notify />*/}  {/* KTU Notification popup window at the webpage start */}
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/about/accreditation" component={NBA} />
              <Route exact path="/about/keyfunctionaries" component={KeyFunc} />
              <Route exact path="/about/vision" component={VisionPage} />
              <Route exact path="/about/affliations" component={Affliations} />
              <Route exact path="/about/mandatorydisclosure" component={Mandatorydisclosure} />
              <Route exact path="/about/approval" component={ApprovalLetters} />
              <Route exact path="/about/RTI" component={RTI} />
              <Route exact path="/academics/courses-offered" component={Academics} />
              <Route exact path="/academics/syllabus" component={SyllabusPage} />
              <Route exact path="/academics/honours" component={honoursPage} />
              <Route exact path="/facilities" component={FacilitiesPage} />
              <Route exact path="/campus-life" component={CampusLifePage} />
              <Route exact path="/about/annualrpt" component={anualrep} />
              <Route exact path="/campus-life/collegecouncil" component={collegecounsil} />
              <Route exact path="/campus-life/committees" component={committees} />
              <Route exact path="/campus-life/artsfest" component={artsfest} />
              <Route exact path="/campus-life/sportsfest" component={sportsfest} />
              <Route exact path="/campus-life/techfest" component={techfest} />
              <Route exact path="/campus-life/nss" component={nss} />
              <Route exact path="/campus-life/ndays" component={nationday} />
              <Route exact path="/campus-life/campusmap" component={campusmap} />
              <Route exact path="/campus-life/publications" component={Publications} />
              <Route exact path="/campus-life/professionalbodies" component={professionalbodies} />
              <Route exact path="/campus-life/professionalbodies/ieee" component={ieee} />
              <Route exact path="/campus-life/professionalbodies/iste" component={iste} />
              <Route exact path="/campus-life/professionalbodies/csi" component={csi} />
              <Route exact path="/campus-life/professionalbodies/igbc" component={igbc} />
              <Route exact path="/campus-life/professionalbodies/sae" component={sea} />
              <Route exact path="/campus-life/professionalbodies/iete" component={iete} />
              <Route exact path="/campus-life/professionalbodies/ict" component={Ict} />

              <Route exact path="/notifications" component={NotiPage} /> 
              <Route exact path="/departments/aid" component={AIdepartment} />
              <Route exact path="/departments/cse" component={CsDepartment} />
              <Route exact path="/departments/ce" ><Department data={this.ceProps} /></Route>
              <Route exact path="/departments/admin" component={Admin} />
              <Route exact path="/departments/eee" component={EeeDepartment} />
              <Route exact path="/departments/ece" component={EcDepartment} />
              <Route exact path="/departments/it" component={ItDepartment} /> 
              <Route exact path="/departments/me" component={MeDepartment} />
              <Route exact path="/departments/mba" component={MbaDepartment} />
              <Route exact path="/departments/bhmct" component={BhmctDepartment} />
              <Route exact path="/departments/s&h" component={SHDepartment} />
              <Route exact path="/placement" component={PlacementPage} />
              <Route exact path="/facilities/core-facilities" component={FacilitiesPage} />
              <Route exact path="/facilities/ccc" component={CCC} />
              <Route exact path="/facilities/eresources" component={eresource} />
              <Route exact path="/facilities/building" component={building} />
              <Route exact path="/facilities/library" component={Library} />
              <Route exact path="/facilities/powerandbackup" component={powerandbackup} />
              <Route exact path="/facilities/solar" component={solarplant} />
              <Route exact path="/facilities/hostel" component={Hostel} />
              <Route exact path="/facilities/healthandfitness" component={Healthandfitness} />
              <Route exact path="/facilities/campusamenities" component={campusamenities} />
              <Route exact path="/facilities/transportation" component={transportation} />
              <Route exact path="/contact" component={ContactUs} />
              <Route exact path="/mockt" component={mocktest} />              
              <Route exact path="/r&d" component={Research} />
              <Route exact path="/admission/mtech" component={Mtech} />
              <Route exact path="/admission/phd" component={Phd} />
              <Route exact path="/academics/Syllabusplan" component={Syllabusplan} />
              <Route exact path="/KBAIC_125" component={Blockchain} />
              <Route exact path="/newsone" component={Newsone} />
              <Route exact path="/newstwo" component={Newstwo} />
              <Route exact path="/newsthree" component={Newsthree} />
              <Route exact path="/newsfour" component={Newsfour} />
              <Route exact path="/newsfive" component={Newsfive} />
              <Route exact path="/newssix" component={Newssix} />
              <Route exact path="/newsseven" component={Newsseven} />
              <Route exact path="/newseight" component={newseight} />
              <Route exact path="/newsnine" component={newsnine} />
              <Route exact path="/newsten" component={Newsten} />
              <Route exact path="/newsfee" component={Newsfee} />
              <Route exact path="/ed/iedc" component={Iedc} />
              <Route exact path="/ed/v-bic" component={Vbic} />
              <Route exact path="/ed/iiic" component={Iiic} />
              <Route exact path="/ed/unai" component={Unai} />
              <Route exact path="/iqac" component={Iqacfull} />
              <Route exact path="/codofc" component={codeofc} />
              <Route exact path="/strategic_plan" component={strategic} />
              <Route exact path="/ed/nisp" component={NISP} />

              {/*<Route exact path="/NAAC/NAAC_C1_P1" component={NAAC_C1_P1} />*/}
              <Route exact path="/NAAC" component={NAACbase} /> 
              <Route exact path="/greve" component={grievance} />
              <Route exact path="/about/govbody" component={govenbody} />

              <Route exact path="/NAAC/distinct" component={distinctiv} /> 
              <Route exact path="/NAAC/skills" component={compuskills} /> 

              <Route component={ErrorPage} /> 
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
