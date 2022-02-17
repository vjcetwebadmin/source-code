import React, { Component } from "react";

import HeadingTwo from "../../Components/Texts/HeadingTwo";
/*
import HeadingOne from "../../Components/Texts/HeadingOne";
 import Bodythree from "../../Components/Texts/BodyThree"; */
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
	title: "The core and crux of management education is the all-round development of the individual. Department of Management Studies through its multi-faceted training programmes, skill development initiatives and value oriented instruction strives to transform the students into self-reliant, confident and mature individuals with clear career goals and heightened vision in life. The training here is meant to help the students to identify their hidden positive strengths and encourage them to plunge into the uncharted seas of opportunities and possibilities; finally giving them a strong foothold in the management and business landscape. Above everything else, they are made to formulate a wider vision of life, so as to make each one ask himself – ‘what can i do with what i have got?’."
};

MbaHead2 = {
  instanceID: "MbaHead2",
  title: "EDUCATION BEYOND THE CLASSROOMS"
};
MbaHead1Desc2 = {
  instanceID: "MbaHead1Desc2",
  title: "Moreover they learn international business, Department of Management Studies students will accustom to international culture and cuisines from the international industrial visits. International visits in the past were focused on South East Asian countries and China. A fortnight long program include visits to multinational companies, universities and advanced manufacturing plants."
  };
MbaHead1Desc2_2 = {
  instanceID: "MbaHead1Desc2_2",
  title: "Our students not just attend international conferences but they are actively involved in organizing international conferences and seminars. Past conferences witnessed overwhelming response from participants from different colleges in south India. Thus, they get opportunity to listen from academicians from leading universities in US and Europe. Being organizers, our students apply the management principles of planning, organizing and coordinating."
  };
MbaHead1Desc2_3 = {
  instanceID: "MbaHead1Desc2_3",
  title: "Team work is inevitable as far as an organization is concerned. To make our students understand the importance of team work, we take our students for outbound training held in geographically challenging terrains. Training programs throw challenging tasks to students, so that they should expend physical and mental energy to accomplish them."
  };
  MbaImage2 = {
    instanceID: "MbaImage2",
    image: "DepartmentImages/MBA/StudLife/mb2.jpg",
    width: "60%"
  }
  MbaImage3 = {
    instanceID: "MbaImage3",
    image: "DepartmentImages/MBA/StudLife/mb3.jpg",
    width: "60%"
  }
  MbaImage4 = {
    instanceID: "MbaImage4",
    image: "DepartmentImages/MBA/StudLife/mb4.jpg",
    width: "60%"
  }


  MbaHead3 = {
    instanceID: "MbaHead3",
    title: "VISWAJYOTHI MANAGEMENT ASSOCIATION"
  };
  MbaHead1Desc3 = {
    instanceID: "MbaHead1Desc3",
    title: "VMA is completely a student driven organization for the promotion of the curricular and extracurricular activities in the campus. It acts as a bridge between the student body and the administration in matters of general, academic or individual importance while ensuring that all guidelines are followed. It has an executive committee selected by the students of the department. Executive committee has members from both first year and second year batches. Alumni’s, who were members of the committee, plays a vital role in mentoring the association. VMA organizes programs for college day, Independence Day, republic day and other important days. VMA plays a big role in conducting national symposiums and conferences. They make sure the student life at VISWAJYOTHI is colourful and memorable."
    };
  MbaHead1Desc3_2 = {
    instanceID: "MbaHead1Desc3_2",
    title: "VMA is very active in providing Induction Programme for all students at the start of the course. They will debrief the forthcoming challenges and issues faced by the students during the course of the MBA programme.  They also conduct sessions on Communication skills, fostering interpersonal relationships, time management, goal setting, public speaking, career opportunities, soft skill development, study techniques and life skills in general are covered during the programme. Thus such programmes will help them to alleviate their fears and apprehensions about their compatibility in a business management atmosphere."
    };
    MbaImage5 = {
      instanceID: "MbaImage5",
      image: "DepartmentImages/MBA/StudLife/mb5.jpg",
      width: "58%"
    }

    MbaHead4 = {
      instanceID: "MbaHead4",
      title: "COMMITTEES & CLUBS"
    };
    MbaHead1Desc4 = {
      instanceID: "MbaHead1Desc4",
      title: "Finance  Club of Department of Management Studies is  a platform  for acquiring financial knowledge, a place for interactive learning and an ideal  club to facilitate career  development  for finance  students.  It is a club  that connects students of MBA , alumni, industry experts and academicians. Finance club also conducts Business quiz and discussions, handles  fund management and trading games which help them to learn more about stock market ,portfolio management and financial analysis. It provides forum for  financial research and analysis, and publish their research findings."
      };
    bullet1 = {
      instanceID: "bullet1",
      title: "Stock market game -online stock trading game and portfolio management."
    };
    bullet2 = {
      instanceID: "bullet2",
      title: "Finance quiz- College level finance quiz to enrich the knowledge in the areas of finance."
    };
    bullet3 = {
      instanceID: "bullet3",
      title: "External speaker series and workshops on online stock trading and portfolio management."
    };

    MbaHead1Desc4_2 = {
      instanceID: "MbaHead1Desc4_2",
      title: "The vibrant marketing club of Department of Management Studies provides the students ample opportunities in identifying various needs and requirements of the campus and respond with relevant goods and services creatively. The club also organizes interactions with working professionals at various levels from different sectors."
      };


      bullet4 = {
        instanceID: "bullet4",
        title: "To generate interest towards the stream of marketing."
      };
      bullet5 = {
        instanceID: "bullet5",
        title: "To apply the marketing concepts learned in the class with real life situations."
      };
      bullet6 = {
        instanceID: "bullet6",
        title: "To enhance the marketing skill of the students."
      };

      bullet7 = {
        instanceID: "bullet7",
        title: "Designing & marketing various competitions."
      };
      bullet8 = {
        instanceID: "bullet8",
        title: "Marketing different  products and services."
      };
      bullet9 = {
        instanceID: "bullet9",
        title: "Interaction with the Marketing Managers from various sectors."
      };


    MbaHead1Desc4_3 = {
      instanceID: "MbaHead1Desc4_3",
      title: "Through this club we would like to provide valuable insights to the field of HRM and also give an overview of how the HR field is being perceived and attempt to bring a fresh perspective on HR issues and challenges that the business world faces today. The HR Club hosts events where distinguished industry leaders in the HR domain interact with students. It also helps Faculty to accompany in research and consultancy projects."
      };
    MbaHead1Desc4_4 = {
      instanceID: "MbaHead1Desc4_4",
      title: "Operations aims to help students to gain knowledge in this domain by bringing industry experts and exploring opportunities to visit manufacturing plants. This forum also prepares students for inter-collegiate management fests."
      }; 
    MbaHead1Desc4_5 = {
      instanceID: "MbaHead1Desc4_5",
      title: "Cultural Committee at Department of Management Studies provides a platform for students to express their latent talents. It hosts various events such as Bodhi and College day programs ensuring an equal share of fun and frolic alongside academic rigor."
      };
      MbaImage6 = {
        instanceID: "MbaImage6",
        image: "DepartmentImages/MBA/StudLife/mb6.jpg",
        width: "58%"
      }
      MbaImage7 = {
        instanceID: "MbaImage7",
        image: "DepartmentImages/MBA/StudLife/mb7.jpg",
        width: "58%"
      }
      MbaImage8 = {
        instanceID: "MbaImage8",
        image: "DepartmentImages/MBA/StudLife/mb8.jpg",
        width: "58%"
      }
      MbaImage9 = {
        instanceID: "MbaImage9",
        image: "DepartmentImages/MBA/StudLife/mb9.jpg",
        width: "58%"
      }

      MbaHead5 = {
        instanceID: "MbaHead5",
        title: "SOCIAL RESPONSIBILITY"
      };
      MbaHead1Desc5 = {
        instanceID: "MbaHead1Desc5",
        title: "To create socially responsible young managers and leaders, we take our students for outreach activities. Students engage in community development activities in remote villages in Kerala. Thus, our students will learn the importance of giving back to society while progressing in their careers. As part of the outreach program, students render their services to local hospitals, orphanages, and old age homes. Apart from these activities, students are actively involved in National Service Scheme programs too."
        };


  render() {
    return (
      <div className="DeptLibrary" id="dept-library">
        <HeadingTwo data={this.MbaHead1} />
        <ImageOne data={this.MbaImage1} />
        <p></p>
        <p><BodyOneJustified data={this.MbaHead1Desc1}></BodyOneJustified></p>
        <p></p> 
        <HeadingTwo data={this.MbaHead2} />
        <p></p>
        <p className="inner-parahead">International Industrial Visits</p>
        <p><BodyOneJustified data={this.MbaHead1Desc2}></BodyOneJustified></p>
        <p className="inner-parahead">International Conferences</p>
        <p><BodyOneJustified data={this.MbaHead1Desc2_2}></BodyOneJustified></p>
        <p className="inner-parahead">Kalypso outbound training</p>
        <p><BodyOneJustified data={this.MbaHead1Desc2_3}></BodyOneJustified></p>
        <p></p>
        <ImageOne data={this.MbaImage2} />
        <br></br>
        <ImageOne data={this.MbaImage3} />
        <ImageOne data={this.MbaImage4} />
        <br></br>
        <p></p>
        <HeadingTwo data={this.MbaHead3} />
        <p></p>
        <p><BodyOneJustified data={this.MbaHead1Desc3}></BodyOneJustified></p>
        <p><BodyOneJustified data={this.MbaHead1Desc3_2}></BodyOneJustified></p>  
        <p></p> 
        <br></br>
        <ImageOne data={this.MbaImage5} />
        <br></br>        
        <p></p>
        <HeadingTwo data={this.MbaHead4} />
        <p></p>
        <p className="inner-parahead">Finance Club</p>
        <p><BodyOneJustified data={this.MbaHead1Desc4}></BodyOneJustified></p>
        <div className="inner-para">
          <p><b>Key activities of the year are:</b></p>
          <ul>
              <li><p><BodyOneJustified data={this.bullet1} /></p></li>
              <li><p><BodyOneJustified data={this.bullet2} /></p></li>
              <li><p><BodyOneJustified data={this.bullet3} /></p></li>
        </ul>
        </div>
        <p className="inner-parahead">Marketing Club</p>
        <p><BodyOneJustified data={this.MbaHead1Desc4_2}></BodyOneJustified></p> 
        <div className="inner-para">
        <p><b>Objectives</b></p>
              <ul>
              <li><p><BodyOneJustified data={this.bullet4} /></p></li>
              <li><p><BodyOneJustified data={this.bullet5} /></p></li>
              <li><p><BodyOneJustified data={this.bullet6} /></p></li>
        </ul>        
        <p><b>Activities</b></p>
        <ul>
              <li><p><BodyOneJustified data={this.bullet7} /></p></li>
              <li><p><BodyOneJustified data={this.bullet8} /></p></li>
              <li><p><BodyOneJustified data={this.bullet9} /></p></li>
        </ul>
        </div>
        <p className="inner-parahead">HR Club</p>
        <p><BodyOneJustified data={this.MbaHead1Desc4_3}></BodyOneJustified></p>
        <p className="inner-parahead">Operations Forum</p>
        <p><BodyOneJustified data={this.MbaHead1Desc4_4}></BodyOneJustified></p> 
        <p className="inner-parahead">Cultural Committee</p> 
        <p><BodyOneJustified data={this.MbaHead1Desc4_5}></BodyOneJustified></p>
        <p></p> 
        <br></br>
        <ImageOne data={this.MbaImage6} /> 
        <br></br>
        <ImageOne data={this.MbaImage7} />
        <br></br>
        <ImageOne data={this.MbaImage8} />
        <br></br>
        <ImageOne data={this.MbaImage9} />
        <br></br> 
        <p></p>
        <HeadingTwo data={this.MbaHead5} />
        <p></p>
        <p><BodyOneJustified data={this.MbaHead1Desc5}></BodyOneJustified></p>                
      </div>
    );
  }
}

export default Library;
