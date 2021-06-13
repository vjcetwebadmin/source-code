import React, { Component } from "react";
/* import HeadingOne from "../../Components/Texts/HeadingOne"; */
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
import ImageOne from "../../Components/Images/ImageOne";
import ImageTwo from "../../Components/Images/imageTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";
import HeadingFive from "../../Components/Texts/HeadingFive";


import "../../Components/Tables/tableformat.css";
class Profile extends Component {
  state = {};
 
  CSIImage = {
    instanceID: "CSIImage",
    image: "ProfessionalBodies/CSI.png",
    width: "15%"
}
InchargesHeading = {
  instanceID: "InchargesHeading",
  title: "Office-Bearers "
};
ActivitiesHeading = {
  instanceID: "ActivitiesHeading",
  title: "Student Branch Events"
};
ActivitiesHeading1 = {
  instanceID: "ActivitiesHeading1",
  title: "AWARDS"
};

VisionHeading = {
  instanceID: "VisionHeading",
  title: "Vision"
};
MissionHeading = {
  instanceID: "MissionHeading",
  title: "Mission"
};

  Features1 = {
    instanceID: "Features1",
    title: "One of the vibrant branches of CSI (Computer Society of India) Cochin Chapter initiated by Dr. Sasikumar, Free Software Foundation on 13th February 2009."
  };
  Features2 = {
    instanceID: "Features3",
    title: "Make Software Engineers of global standard who believe in values, creativity and professionalism, through interaction with well trained professionals in the IT industry."
  };
  Features3 = {
    instanceID: "Features3",
    title: "Enable student employability, making stronger, the links between industry and academia through value added courses and out of the box training. The CSI of VJCET aims to develop the IT skills of the students, helping them to integrate into IT industry."
  };
  Features4 = {
    instanceID: "Features4",
    title: "CSI Chapter Organizes knowledge sharing programmes and seminars, new technology oriented talks by experts / allied workshops and HRD courses. Besides, various competitions like website designing, programming, debugging, technical quiz, are also our events that throw open a platform for student participants to measure up to the needs of the time as leaders and organizers."
  };


  ActivitiesHeading1 = {
    instanceID: "ActivitiesHeading1",
    title: "AWARDS"
  };
  Features5 = {
    instanceID: "Features5",
    title: "One of the vibrant branches of CSI (Computer Society of India) Cochin Chapter initiated by Dr. Sasikumar, Free Software Foundation on 13th February 2009. CSI Student branch of VJC organize knowledge sharing programmes and seminars, new technology oriented talks by experts/allied workshops and HRD courses. Besides, various competitions like website designing, programming, debugging, technical quiz, are also our events that throw open a platform for student participants to measure up to the needs of the time as leaders and organizers."
  };

  ActivitiesHeading2 = {
    instanceID: "ActivitiesHeading2",
    title: "CSI STUDENT BRANCH RECIEVES “BEST ACCREDITED STUDENT BRANCH AWARD”"
  };
  Features6 = {
    instanceID: "Features6",
    title: "The CSI Student Branch of Viswajyothi College of Engineering and Technology, one of the most vibrant branches of CSI Cochin Chapter was selected to receive the prestigious “Best Accredited Student Branch Award” in the year 2017-2018 and 2018-2019 by the Computer Society of India which has 73 chapters all over India, over 500 student branches, and more than 200000 members. The student branch receives “ The Best Accredited Student Branch” consecutively for 5 years is a noticeable achievement. The award was received by Head of Computer Science and Engineering Department Prof. Amel Austine from  Prof  Mike Hinchy, President of IFIP and Dr. R.K Vyas, Vicepresident CSI in the CSI Annual Convention 2020 at Kalinga Instituite of Industrial Technology, Bhuvaneswar on 18th January 2020."
  };
  LabImagedata1 = {
    instanceID: "LabImagedata1",
    image: "ProfessionalBodies/csi/CSI05.jpg",
    width: "65%"
      };
  
  ActivitiesHeading3 = {
    instanceID: "ActivitiesHeading3",
    title: "TECHNICAL TALK ON “BLOCK CHAIN TECHNOLOGIES”"
  };
  Features7 = {
    instanceID: "Features7",
    title: "The CSI student branch of Viswajyothi College of Engineering and Technology conducted a Technical talk on Internet of Things on 29th July 2019"
  };
 LabImagedata2= {
	instanceID: "LabImagedata2",
	image: "ProfessionalBodies/csi/CSI06.jpg",
	width: "65%"
    };


    ActivitiesHeading4 = {
      instanceID: "ActivitiesHeading4",
      title: "Motivating Talk “Personality Development”"
    };
    Features8 = {
      instanceID: "Features8",
      title: "The CSI Student Branch of Viswajyothi College of Engineering and Technology, Vazhakulam, has conducted a Motivating talk titled “Personality Development” on 01-08-2019 for the students of First semester CSE.  The programme venue was the Main Auditorium."
    };
   LabImagedata3 = {
    instanceID: "LabImagedata3",
    image: "ProfessionalBodies/csi/CSI07.jpg",
    width: "65%"
      };

    LabImagedata4 = {
        instanceID: "LabImagedata4",
        image: "ProfessionalBodies/csi/CSI08.jpg",
        width: "65%"
     };



     ActivitiesHeading5 = {
      instanceID: "ActivitiesHeading5",
      title: "Motivating TShort Term Training Programme on “LATEX”"
    };
    Features9 = {
      instanceID: "Features9",
      title: "The CSI Student Branch of Viswajyothi College of Engineering and Technology, Vazhakulam, in association with CSI Cochin Chapter has conducted a Workshop on “LATEX”.  The workshop venue was the Computer Research Lab, R&D Block. This workshop aims to provide a comprehensive theoretical and hands on practical experience on LaTeX to the beginners. LaTeX is a document preparation system for high-quality typesetting, which is preferably used for technical/scientific papers writing for journals by researchers, engineers and mathematicians at large. The typesetting system offers programmable writing features and extensive facilities for automating most aspects of typesetting."
    };
   LabImagedata5 = {
    instanceID: "LabImagedata5",
    image: "ProfessionalBodies/csi/CSI09.jpg",
    width: "65%"
      };

    LabImagedata6 = {
        instanceID: "LabImagedata6",
        image: "ProfessionalBodies/csi/CSI10.jpg",
        width: "65%"
     }

     ActivitiesHeading6 = {
      instanceID: "ActivitiesHeading6",
      title: "EXPERT LECTURE  on  “BugBouny and Android Development”"
    };
    Features10 = {
      instanceID: "Features10",
      title: "The CSI Student Branch of Viswajyothi College of Engineering and Technology, Vazhakulam, has conducted a EXPERT LECTURE  on  “BugBouny and Android Development” The programme venue was Common Computing Center. Selected Students are participated for the program and the program was successful."
    };
   LabImagedata7 = {
    instanceID: "LabImagedata7",
    image: "ProfessionalBodies/csi/CSI11.jpg",
    width: "65%"
      };

 
      ActivitiesHeading7 = {
        instanceID: "ActivitiesHeading7",
        title: "Codewar’19 Competition"
      };
      Features11 = {
        instanceID: "Features11",
        title: "CODEWAR ’19 added another gem to the crown of CSI Student Branch of Viswajyothi. The grant successful event was held in association with CSE Department.  The contest attracted an enthralling crowd of enthusiastic students from various branches. A total of 43 students from various branches participated in the event. The closing ceremony was blessed with the presence of Dr. Josephkunju Paul C, Principal and Mr. Amel Austine, HOD-CSE.  Deepak Benny of Final year student bagged the first prize. Ananthu of Final year won the second prize. Attractive prizes of Rs.1500/-, Rs.500/- and Certificate of Merit were awarded to the winners."
      };
     LabImagedata8 = {
      instanceID: "LabImagedata8",
      image: "ProfessionalBodies/csi/CSI12.jpg",
      width: "65%"
        };
        LabImagedata9 = {
          instanceID: "LabImagedata9",
          image: "ProfessionalBodies/csi/CSI13.jpg",
          width: "65%"
            }; 

            ActivitiesHeading8 = {
              instanceID: "ActivitiesHeading8",
              title: "Motivating Talk “Personality Development”"
            };
            Features12 = {
              instanceID: "Features12",
              title: "The CSI Student Branch of Viswajyothi College of Engineering and Technology, Vazhakulam, has conducted a Motivating talk titled “Personality Development” on 4th , October  2019 for the students of 3rd  semester CSE."
            };


            ActivitiesHeading9= {
              instanceID: "ActivitiesHeading9",
              title: "National Level Intercollegiate Quiz Competition Prayudh ’20"
            };
            Features13 = {
              instanceID: "Features13",
              title: "The Intercollegiate Quiz Competition, PRAYUDH ’20 added another gem to the crown of CSI Student Branch of Viswajyothi. The grant successful event was held in association with CSE Department.  The quiz attracted an enthralling crowd of enthusiastic students from different colleges. A total of 203 teams from various colleges participated in the event. A preliminary test was conducted and the top 6 teams were qualified for the main contest. The main event on stage consisted of six rounds. The closing ceremony was blessed with the presence of Mr. Somy P Mathew, Vice Principal and Mr. Amel Austine, HOD-CSE. Sebastian Thomas and Basil Eldho of MA College of Engineering and Technology, Kothamangalam bagged the first prize. The team composed of Felix Palatty and Deepak Krishnan H of MA College of Engineering and Technology, Kothamangalam is in the second position.. Attractive prizes of Rs.10000/-, Rs.6000/- , Rs.3000/- and Certificate of Merit were awarded to the winners. The other three teams qualified for the finals received a Certificate of Appreciation and a Consolation Prize worth Rs. 2000/-."
            };
            LabImagedata10 = {
              instanceID: "LabImagedata10",
              image: "ProfessionalBodies/csi/CSI14.jpg",
              width: "65%"
                }; 
    LabImagedata11 = {
      instanceID: "LabImagedata11",
      image: "ProfessionalBodies/csi/CSI15.jpg",
      width: "65%"
        }; 
        LabImagedata12 = {
          instanceID: "LabImagedata12",
          image: "ProfessionalBodies/csi/CSI16.jpg",
          width: "65%"
            }; 
            LabImagedata13= {
              instanceID: "LabImagedata13",
              image: "ProfessionalBodies/csi/CSI17.jpg",
              width: "65%"
                }; 
    LabImagedata14 = {
      instanceID: "LabImagedata14",
      image: "ProfessionalBodies/csi/CSI18.jpg",
      width: "65%"
        }; 
        LabImagedata15 = {
          instanceID: "LabImagedata15",
          image: "ProfessionalBodies/csi/CSI19.jpg",
          width: "65%"
            }; 



  render() {
    return (
      <div className="Profile" id="profile">
        
      {/*  <p align="right"><a href="https://vjcet.org/downloads/Gallery/Drishya.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.Imagegallerydata} /></a></p> */}
       {/* <HeadingOne data={this.ProfileHeading} />  */}
       <p align="center"><ImageTwo data={this.CSIImage} /></p>

        <div className="bodyContainer">
          <p><BodyOneJustified data={this.Features1} /></p>
          <p><BodyOneJustified data={this.Features4} /></p>
          <HeadingFive data={this.VisionHeading} /> 
          <p><BodyOneJustified data={this.Features2} /></p>
          <HeadingFive data={this.MissionHeading} /> 
          <p><BodyOneJustified data={this.Features3} /></p>

          <HeadingThree data={this.ActivitiesHeading1} />   
          <p><BodyOneJustified data={this.Features5} /></p>
            <table id="tableformat" >
        {/*  <tr><th>Awards</th></tr>*/}
              <tr><td>Best Accredited Student Branch Award during 2018-2019</td></tr>
              <tr><td>Best Accredited Student Branch Award during 2017-2018</td></tr>
             <tr><td>Longest Continuous SBC Award during 2016-2017</td></tr>
             <tr><td>Best Accredited Student Branch Award during 2016-2017</td></tr>
             <tr><td>Distinguished College Award during 2016-2017 by CSI Mumbai Chapter and IIT Mumbai</td></tr>
             <tr><td>Best Accredited Student Branch Award during 2015-2016 by CSI</td></tr>
             <tr><td>Longest Continuous SBC Award during 2014-2015 by CSI</td></tr>
             <tr><td>Best Active Student Branch Award during 2014-2015 by CSI</td></tr>
             <tr><td>Longest Continuous SBC Award during 2013-2014 by CSI</td></tr>
             <tr><td>Best Accredited Student Branch Award during 2013-2014 by CSI</td></tr>
             
          </table> 
          <HeadingThree data={this.ActivitiesHeading} /> 
                            <table id="tableformat">
                            <tr><th>Sl. No</th><th>Event</th><th>Date</th><th>Resource Person</th></tr>
                            <tr><td>1</td><td>Technical Talk : Software Engineering - Industry Perspective for S7 CSE & S7 IT</td><td>25-09-2018</td><td>Mr. Arun Narayanan, Tata Consultancy Services ,TCS  Centre SEZ Unit,  Infopark PO, Kochi</td></tr>
                            <tr><td>2</td><td>Technical Talk  on Design Thinking for S5 CS & S5 IT</td><td>26-09-2018</td><td>  Mr. Anas K A, Tata Consultancy Services ,TCS  Centre SEZ Unit,  Infopark PO, Kochi</td></tr>
                            <tr><td>3</td><td>Motivating Talk- S7CSE for S3 CS</td><td>4/10/2018</td><td>Ms. Grace Lal, Motivational Speaker and Psychologist</td></tr>
                            <tr><td>4</td><td>Workshop on IoT for S5 CS</td><td>10/10/2018</td><td>Naveen Antony,Pantech</td></tr>
                            <tr><td>5</td><td>Expert Lecture on "Latest Trend in Digital for S7 CS & IT, S5 CS</td><td>26/11/2018</td><td>Sreekumar Ramakrishnan,"Senior Bussiness Consultant, TCS, Cochin</td></tr>
                            <tr><td>6</td><td>International Workshop on Database for CS & IT Faculties</td><td>03-12-2018-10-12-2018</td><td>Mr. Gau, Senior SES Expert, Germany</td></tr>
                            <tr><td>7</td><td>One week FDP on Embedded Systems and Data Mining for CS & IT Faculties</td><td>10-01-2019-16-01-2019</td><td> <li>Dr. Aji Joy (Associate Professor, Dept. ECE, Mar Athanasius College of Engineering, Ernakulam, Kerala)</li> <li>Dr.Anand H S (HOD, Dept. CSE, Muthoot Institute of Technology & Science, Ernakulam Dst, Kerala)</li> <li>Dr.Resmi N G (Assistant Professor, Dept. CSE, Muthoot Institute of Technology & Science, Ernakulam Dst, Kerala)</li> <li>Ms.Sreenu G (Assistant Professor, Dept. CSE, Muthoot Institute of Technology & Science, Ernakulam Dst, Kerala)</li> </td></tr>
                            <tr><td>8</td><td>Workshop on PHP for S4 CS</td><td>28-01-2019-31-01-2019</td><td>Mr Manoj Francis, Programmer CSE</td></tr>
                            <tr><td>9</td><td>Motivational Talk for S8 CS</td><td>1/2/2019</td><td>Rev. Fr. Shinu Sebastian </td></tr>
                            <tr><td>10</td><td>Workshop on IoT for S8 CS</td><td>2/2/2019</td><td>Mr. Naveen Antony, Pantech Solution </td></tr>
                            <tr><td>11</td><td>Motivational talk for S8 & S6 CS</td><td>7/2/2019</td><td>Mr.Baazil Thampy,Research Scholar ,CUSAT</td></tr>
                            <tr><td>12</td><td>Workshop AND Awareness program on Advanced Technologies for S6 CS,IT & EC </td><td>07/02/2019-08/02/2019</td><td>Mr. Mukesh Murali , Data Scientist, Jazeel K., Artificial Intelligence Researcher, Akhil Mohandas, Blockchain Developer from Creopedia Business Intelligence Pvt. Ltd</td></tr>
                            <tr><td>13</td><td>Prayudh'19 Intercollegiate Quiz Competion</td><td>20/02/2019</td><td>NA</td></tr>
                            <tr><td>14</td><td>Workshop AND Awareness program on React Native-Mobile Application Development Framework for S8 CS</td><td>23/02/2019</td><td>Mr. Mr.Georgekutty George, Managing Director, Lookins Soft Pvt Ltd. </td></tr>
<tr><td>15</td><td>CSI STATE LEVEL STUDENT CONVENTION 2019- KEARALA STATE</td><td>12/3/2019</td><td>Prof. (Dr.)  B. Kannan, Chairman of CSI Cochin Chapter </td></tr>
<tr><td>16</td><td>Intercollege Technical Fest on “Bodhi 2K19”</td><td>20/03/2019-21/03/2019</td><td>NA</td></tr>
<tr><td>17</td><td>Hands on session on GIT Vesrion Control System for S4 CS </td><td>3/4/2019</td><td>Mr. Balu M N, Student , S8 CSE</td></tr>
                            </table>

<br />
          <HeadingThree data={this.ActivitiesHeading2} />   
          <p><BodyOneJustified data={this.Features6} /></p>
          <br />
         <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata1} /></p>
          <br /> 

           <HeadingThree data={this.ActivitiesHeading3} />   
          <p><BodyOneJustified data={this.Features7} /></p>
          <br />
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata2} /></p>
          <br />  
          <HeadingThree data={this.ActivitiesHeading4} />   
          <p><BodyOneJustified data={this.Features8} /></p>
          <br />
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata3} /></p>
          <br />   
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata4} /></p>
          <br />      

          <HeadingThree data={this.ActivitiesHeading5} />   
          <p><BodyOneJustified data={this.Features9} /></p>
          <br />
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata5} /></p>
          <br />   
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata6} /></p>
          <br />  

          <HeadingThree data={this.ActivitiesHeading6} />   
          <p><BodyOneJustified data={this.Features10} /></p>
          <br />
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata7} /></p>
          <br />           
      

          <HeadingThree data={this.ActivitiesHeading7} />   
          <p><BodyOneJustified data={this.Features11} /></p>
          <br />
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata8} /></p>
          <br />      
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata9} /></p>
          <br />   

          <HeadingThree data={this.ActivitiesHeading8} />   
          <p><BodyOneJustified data={this.Features12} /></p>
                             

          <HeadingThree data={this.ActivitiesHeading9} />   
          <p><BodyOneJustified data={this.Features13} /></p>         
          <br />
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata10} /></p>
          <br />     
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata11} /></p>
          <br />                           
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata12} /></p>
          <br />   
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata13} /></p>
          <br />                       
          <p style={{textAlign:"center"}}>  <ImageOne data={this.LabImagedata14} /></p>
          <br />   
          <p style={{textAlign:"center"}}> <ImageOne data={this.LabImagedata15} /> </p>                      
        </div>
      </div>
    );
  }
}

export default Profile;
