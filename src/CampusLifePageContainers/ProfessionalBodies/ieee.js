import React, { Component } from "react";
/* import HeadingOne from "../../Components/Texts/HeadingOne"; */
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
import ImageOne from "../../Components/Images/ImageOne";
import ImageTwo from "../../Components/Images/imageTwo";
import HeadingThree from "../../Components/Texts/HeadingThree";
import "../../Components/Tables/tableformat.css";
import Header from "../../Components/Header&Footer/Header";
class Profile extends Component {
  state = {};
 
  IEEEImage = {
    instanceID: "IEEEImage",
    image: "ProfessionalBodies/IEEE.png",
    width: "25%",    
    
}
GalleryImage = {
  instanceID: "GalleryImage",
  image: "Icons/ImageGallery.gif",
  width: "10%"
}
InchargesHeading = {
  instanceID: "InchargesHeading",
  title: "Office-Bearers"
};
ActivitiesHeading = {
  instanceID: "ActivitiesHeading",
  title: "Student Branch Events"
};
  Features1 = {
    instanceID: "Features1",
    title: "IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities."
  };
  Features2 = {
    instanceID: "Features2",
    title: "An active IEEE Student Branch can be one of the most positive elements of academic career, offering programs, activities, and professional networking opportunities that build critical skills outside of the classroom."
  };
  Features3 = {
    instanceID: "Features3",
    title: "IEEE SB VJCET was formed on September 2005.  Our vision is to help our students to build a professional career with excellent engineering and technical skills, with responsibility.  This will help in molding bright and excellent leaders in the future. IEEE SB VJCET had conducted many events which help our students to increase their potential and sharpen their knowledge in various fields."
  };
  Features4 = {
    instanceID: "Features4",
    title: "IEEE SB VJCET has awarded the Outstanding Student Branch of IEEE Kochi Sub Section (2019), this was a milestone on the way of our success."
  };
  InchargesHeading1 = {
    instanceID: "InchargesHeading1",
    title: "IEEE COMPUTER SOCIETY"
  };
  Features5 = {
    instanceID: "Features5",
    title: "IEEE Computer Society (IEEE CS) is a professional society under IEEE. Its purpose and scope is 'to advance the theory, practice, and application of computer and information processing science and technology' and the 'professional standing of its members'."
  };
  Features6 = {
    instanceID: "Features6",
    title: "IEEE CS VJCET focus on the technical improvement of our members in the upcoming technologies. Society conducts Technical talks and workshops for the development of our students members."
  };
  InchargesHeading2 = {
    instanceID: "InchargesHeading2",
    title: "IEEE POWER AND ENERGY SOCIETY"
  };
  Features7 = {
    instanceID: "Features7",
    title: "The IEEE Power & Energy Society (IEEE PES),  is the oldest society under IEEE focused on the scientific and engineering knowledge about electric power and energy."
  };
  Features8 = {
    instanceID: "Features8",
    title: "IEEE PES VJCET  works on the improvement in electrical knowledge of our students. We provide workshops and training sessions for our student members, which help them with hands-on experience and improving their knowledge."
  };
  InchargesHeading3 = {
    instanceID: "InchargesHeading3",
    title: "IEEE SIGHT AFFINITY GROUP"
  };
  Features9 = {
    instanceID: "Features9",
    title: "IEEE Special Interest Group on Humanitarian Technology (SIGHT) provides IEEE members with the opportunity to work with a large network of volunteers around the world carrying out and/or supporting impactful humanitarian activities on the local level."
  };
  Features10 = {
    instanceID: "Features11",
    title: "IEEE SIGHT focuses on sustainable solutions that make a long-term difference in the lives of people. SIGHT operates through local volunteers and partners working with local communities."
  };
  Features11= {
    instanceID: "Features11",
    title: "IEEE SIGHT VJCET is one of the vibrant group that works on the humanitarian activities which help the volunteer to experience the filed work skills. Our volunteers works on several humanitarian projects. One of the successful project was Smart Classroom among the woods. We still working on other humanitarian projects for the development of our society."
  };
  InchargesHeading4 = {
    instanceID: "InchargesHeading4",
    title: "IEEE WIE AFFINITY GROUP"
  };
  Features12 = {
    instanceID: "Features12",
    title: "IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests to a career in engineering."
  };
  Features13 = {
    instanceID: "Features13",
    title: "IEEE WIE AG VJCET focus on the improvement of our women volunteers in order to make them technical and skillful engineers. Also provide workshops and training sessions on latest technologies."
  };
  EEEimage1 = {
    instanceID: "EEEimage1",
    image: "ProfessionalBodies/IEEE/EEEevent1.jpeg",
    width: "50%"
}
EEEimage2 = {
  instanceID: "EEEimage2",
  image: "ProfessionalBodies/IEEE/EEEevent2.jpeg",
  width: "50%"
}
EEEimage3 = {
  instanceID: "EEEimage3",
  image: "ProfessionalBodies/IEEE/EEEevent3.jpeg",
  width: "50%"
}
EEEimage4 = {
  instanceID: "EEEimage4",
  image: "ProfessionalBodies/IEEE/EEEevent4.jpeg",
  width: "50%"
}
EEEimage6 = {
  instanceID: "EEEimage6",
  image: "ProfessionalBodies/IEEE/EEEevent6.jpeg",
  width: "50%"
}
EEEimage7 = {
  instanceID: "EEEimage7",
  image: "ProfessionalBodies/IEEE/EEEevent7.jpeg",
  width: "50%"
}
EEEimage8 = {
  instanceID: "EEEimage8",
  image: "ProfessionalBodies/IEEE/EEEevent8.jpeg",
  width: "50%"
}
EEEimage9 = {
  instanceID: "EEEimage9",
  image: "ProfessionalBodies/IEEE/EEEevent9.jpeg",
  width: "50%"
}
  render() {
    return (
      <div className="Program" id="program">
       {/* <p align="right"><a href="https://vjcet.org/downloads/Gallery/Drishya.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.Imagegallerydata} /></a></p> */}
       {/* <HeadingOne data={this.ProfileHeading} />  */}
      {/*  <p align="right"><a href="https://vjcet.org/downloads/Gallery/Drishya.html" target="_blank" rel="noopener noreferrer"><ImageTwo data={this.GalleryImage} /></a></p> */}
      <p align="center"><ImageTwo data={this.IEEEImage} /></p>
        <div className="bodyContainer">
          <p><BodyOneJustified data={this.Features1} /></p>
          <p><BodyOneJustified data={this.Features2} /></p>
          <p><BodyOneJustified data={this.Features3} /></p>
          <p><BodyOneJustified data={this.Features4} /></p>
          <p style={{textAlign:"left",fontSize:"18px"}}><b>IEEE COMPUTER SOCIETY</b></p>
          <p><BodyOneJustified data={this.Features5} /></p>
          <p><BodyOneJustified data={this.Features6} /></p>
          <p style={{textAlign:"left",fontSize:"18px"}}><b>IEEE POWER AND ENERGY SOCIETY</b></p>
          <p><BodyOneJustified data={this.Features7} /></p>
          <p><BodyOneJustified data={this.Features8} /></p>
          <p style={{textAlign:"left",fontSize:"18px"}}><b>IEEE SIGHT AFFINITY GROUP</b></p>
          <p><BodyOneJustified data={this.Features9} /></p>
          <p><BodyOneJustified data={this.Features10} /></p>
          <p><BodyOneJustified data={this.Features11} /></p>
          <p style={{textAlign:"left",fontSize:"18px"}}><b>IEEE WIE AFFINITY GROUP</b></p>
          <p><BodyOneJustified data={this.Features12} /></p>
          <p><BodyOneJustified data={this.Features13} /></p> 

          <HeadingThree data={this.InchargesHeading} />  
          <table id="tableformat">
                            <tr><th>POST</th><th>NAME</th></tr>
                            <tr><td>Branch Counsellor & IEEE SIGHT Counsellor</td><td>Mr. Anish M Jose, AP ECE</td></tr>
                            <tr><td>Computer Society Counsellor</td><td>Mr. Sivadas T Nair, AP CSE</td></tr>
                            <tr><td>Power & Energy Society Counsellor</td><td>Mr. Babu T Chacko, AP EEE</td></tr>
                            <tr><td>IEEE SIGHT & WIE Advisor</td><td>Mr. Anish M Jose, AP ECE</td></tr>
                            <tr><td>Branch Chairperson</td><td>Ms. Anjaly Saji, S5 IT</td></tr>
                            <tr><td>Computer Society Chairman</td><td>Ms. Dilna Elizabath Roy,S5 CSEB</td></tr>
                            <tr><td>Power & Energy Society Chairperson</td><td>Mr. Alen Shajan, S5 IT</td></tr>
                            <tr><td>IEEE SIGHT Chairman</td><td>Mr. Alen Salu S5 IT</td></tr>
                            <tr><td>IEEE WIE Chairperson</td><td>Ms. Sayana Fathima, S5 EEE</td></tr>
                            </table>
                            <HeadingThree data={this.ActivitiesHeading} /> 
                            <table id="tableformat">
                           
                            <tr><th>Sl. No</th><th>Event</th><th style={{width:"130px;"}}>Date</th><th>Details</th></tr>
                            <tr><td>1</td><td>Annual General Meeting</td><td>15-02-2019</td><td>New execom members officially took up their charge in respective roles. Our seniors gave us necessary instructions to be followed. Branch Counsellor Mr. Anish M Jose ,CS counsellor Mr.Sivadas T Nair, and PES counsellor Mr.Babu T Chacko facilitated the occasion. Previous execom members were rewarded with a certificate for their excellent volunteering.</td></tr>
                            <tr><td>2</td><td>IEEE Orientation Programme</td><td>23-02-2019</td><td>First years from all branches were given orientation on importance of joining IEEE. Membership benefits were clearly explained by two experienced membership development volunteers from kochi hub Mr Feni Roy from Mar Athanasius College of Engineering and Technology and Mr.Sreehari A S from Model Engineering College. We had a vibrant audience responding to all their comments.</td></tr>
                            <tr><td>3</td><td>Science week quiz on Space-X</td><td>28-02-2019</td><td>As a part of science week, our SB conducted a quiz on “Space-X”. There were a total of 25 participants.Out of the 25 participants, Miss Anusree R won the first prize and Mr Basil Eldhose won the second prize.</td></tr>
                            <tr><td>4</td><td>Ripples</td><td>07-03-2019</td><td>This was our women’s day celebration(since we didn’t get a slot on march 8th ,we conducted it on march 7). IEEE computer society and IEEE WIE branch of our college conducted this talk on “startup pitching for women”. The speaker for this event was Miss Mufeeda C K , from Model engineering College who is an active volunteer of Pehia Foundation.</td></tr>
                            <tr><td>5</td><td>WHAT IS?</td><td>25-02-2019 & 01-04-2019</td><td>It is a peer-to-peer learning session conducted for enhancing the knowledge of all the members of IEEE. For now we conducted it as one class per month and we are planning to make it once in a week.The topics covered till this date are Git and Github.</td></tr>
                            <tr><td>6</td><td>Code Zing</td><td>10-03-2019</td><td>Our SB in collaboration with “Coding Ninjas” conducted an online coding event on march 10,2019. The winner of the event was awarded with a cash prize of Rs.1000 along with swags from coding ninjas.</td></tr>
                            <tr><td>7</td><td>Arduino Challenge</td><td>15-03-2019 & 18-03-2019</td><td>As a part of Aurdino Day ,PES chapter of our SB conducted an “Arduino Challenge”. First level was a Quiz Competition followed by the 2nd round Programming. The final level was of Project Making. The winner team was awarded with a cash prize of Rs 3000 and the runner up team was awarded with a cash prize of Rs 2000.</td></tr>
                            <tr><td>8</td><td>Minerva 4.0</td><td>15-03-2019</td><td>IEEE Kochi Hub conducted minerva 4.0 as a part of Womens week in our SB. We had participants from various colleges. It was a full day event. The forenoon session was covered by Miss Anjana Krishnan, Ruby on Rails Developer. The afternoon session had 2 workshops . Participants had to choose any one among “Linux bash Workshop” and “Git and Github”.</td></tr>
                            <tr><td>9</td><td>Balance for Better</td><td>15-03-2019</td><td>As a part of women’s day, our SB in association with women cell of our college conducted a talk on “balance for better”-a woman engineer’s perspective. The talk was given by a faculty member of NIT calicut, Prof.Dr.Pournami P N. We were able to conduct this talk with the help of IEEE SDLP facility.</td></tr>
                            <tr><td>10</td><td>Vortex</td><td>20-03-2019</td><td>The CS chapter pf our SB conducted this event as a part of our techfest “bodhi 2k19”.the event was completely based on computer skills. There were 4 levels- quiz,code puzzle,pc assembly and coding. The winner was awarded a cash prize of Rs 5000 and the runner up was awarded with a cash prize of Rs.3000. All the participants were given certificates.</td></tr>
                            <tr><td>11</td><td>Megamind</td><td>23-02-2019</td><td>“Megamind” is an event conducted for finding the best among first years.The first level of megamind was conducted on 23-02-2019 along with the IEEE orientation program in the presence of link representatives.</td></tr>
                            <tr><td>12</td><td>Poster Designing</td><td>29-03-2019</td><td>A poster designing competition was conducted by IEEE SIGHT on 29th march. 116 students from various branches participated and the event was very successful.</td></tr>
                            <tr><td>13</td><td>KSEB 10th Seminar Series</td><td>29-03-2019</td><td>IEEE PES chapter of our SB hosted the 10th seminar series of KSEB . it was the final round of seminar series and student across Kerala participated in the event. All the participants and volunteers were awarded with certificates.</td></tr>
                            <tr><td>14</td><td>Inauguration of Smart Class Among the Woods</td><td>10-02-2020</td><td>The IEEE SIGHT team of Viswajyothi College of Engineering and Technology visited a remote village in Kuttampuzha, Kerala. for the sake of providing electricity as part of a project to a school situated there. Solar panels were installed on Kunjipara Tribal School, Kothamangalam. It was a funded by IEEE SIGHT and HAC.</td></tr>
                            <tr><td>15</td><td>Let’s Unchain It, Muvattupuzha</td><td>25-09-2020</td><td>As a part of IEEE R10 Special call for proposals related to Covid 19 our project won the 1st prize on 30-06-2021. Within 3 months we completed our project at Muvattupuzha and also received funding from IEEE R10.</td></tr>
                            <tr><td>16</td><td>AGM</td><td>09-02-2021</td><td>New execom members officially took up their charge in respective roles. Our seniors gave us necessary instructions to be followed. Branch Counsellor Mr. Anish M Jose ,CS counsellor Mr.Sivadas T Nair, and PES counsellor Mr.Babu T Chacko facilitated the occasion. Previous execom members were rewarded with a certificate for their excellent volunteering.</td></tr>
                            <tr><td>17</td><td>Inauguration of Let’s Unchain It , Adimali</td><td>18-02-2021</td><td>The IEEE SIGHT and HAC funded project ‘Let’s Unchain It’, based on Covid 19 pandemic. The project was to provide automatic hand sanitizer and automatic tap at the Adimali Thaluk hospital and the nearby primary health centre Valara, which works under the hospital.</td></tr>                            
                            <tr><td>18</td><td>IEEE Orientation  Programme from EEE</td><td>13-02-2021</td><td>First years from all branches were given orientation on importance of joining IEEE. Membership benefits were clearly explained by 3 experienced membership development volunteers ALTHAF MUHAMMAD who is a CSE B.Tech graduate and a young IEEE professional, VIGNESH HARIDAS who is the Chairman of IEEE SB ASIET and EC coordinator at IEEE PES KS, ABHINAV RAJEEV a software professional engineer, an active coordinator and also the IEEE PES Young professional. It was conducted as 3 slots since it was an online mode. We had a vibrant audience responding to all their comments.</td></tr>
                            <tr><td>19</td><td>Zenith</td><td>22-02-2021 to 28-02-2021 </td><td>As part of Science week, we have conducted a series of 4 events, Easton (quiz), Exodia (GD), Webinar, Idea pitching. It was a great event with 100+ participation.</td></tr>
                            <tr><td>20</td><td>Ice Breaking Session</td><td>27-02-2021 to 28-02-2021</td><td>Only 1st year students and the respective mentors took part in the meeting. This event was conducted to give them all information about the IEEE and IEEE VJCET SB , to make them aware about the ieee account and how to use the ieee account. The session was so interactive and well handled.</td></tr>
                            <tr><td>21</td><td>Sparkup</td><td>08-03-2021</td><td>This was our women’s day celebration on March 8th. IEEE WIE in association with IEEE SB VJCET conducted this talk on “Motivational Talk on Women’s day”. The speaker for this event was Ms. Jiby Krishna KG (IEEE WIE Secretary, Kerala Section, R&D Equipment Engineering : Agappe Diagnostic Ltd), an enthusiastic IEEE volunteer cum young professional.</td></tr>
                            <tr><td>22</td><td>PES DAY Events</td><td>05-04-21 to 12-04-2021</td><td>PES DAY Celebration of our college was conducted along with a series of 8 events. It was a great event with a large number of participation. We have include webinars.</td></tr>
                            <tr><td>23</td><td>IEEE PES HAC HTPDC R10 Local round – VJCET</td><td>10-04-2021</td><td>IEEE PES HAC HTPDC was an international project design competition. VJCET , was one among the 6 co hosts. The event was a grand success.</td></tr>
                            <tr><td>24</td><td>PANDORA’S BOX</td><td>26-04-2021 & 29-04-2021</td><td>As part of Students Humanitarian Technology Conference organized by IEEE Kerala Section SIGHT in association with IEEE LINK, IEEE SB VJCET conducted PANDORA’S BOX. It had two rounds. The first round was a quiz competition. The second round was a problem solving competition.</td></tr>                           
                            <tr><td>25</td><td>REFLECTIONS</td><td>28–04-2021</td><td>As a part of the IEEE SIGHT DAY 2021, organized by IEEE SIGHT VJCET in association with IEEE SB VJCET, REFLECTIONS was held. The event was all about our super seniors sharing their valuable experiences based on the SIGHT PROJECTS accomplished by them, with the first year IEEE members.</td></tr>
                            <tr><td>26</td><td>Workshop on Augmented Reality</td><td>11-05-2021</td><td>IEEE SIGHT VJCET and IEEE PES VJCET SB in association with IEEE PES young professionals Kerala, organized a workshop on the topic Augmented Reality. The resource person for the workshop was Mr. Shyam Pradeep Alil, Co-Founder and Chief Tech Labs Pvt Ltd. He showed us the importance of augmented reality in the present world and how we could use this technology for the advancement of our life’s. He also described about virtual reality and mixed reality which invoked curiosity in the minds of the participants.</td></tr>
                            <tr><td>27</td><td>What after BTECH</td><td>22-05-2021</td><td>IEEE VJCET SB in association with CGP CAREER AVENUES conducted a webinar on the topic WHAT AFTER BTECH. The session was taken by Mr. Aswin P Chandran founder director of Edzumo Pvt Ltd. The session was conducted exclusively for 3rd and 4th year students for them to pave their way after B.Tech.</td></tr>
                            <tr><td>28</td><td>Workshop on Photoshop </td><td>23-05-2021</td><td>As part of our project Ignite we have conducted a workshop on Photoshop. By one of our senior Kiran Shaji Augustine, Motion Graphics Designer Teqnocart Innovation OPC Pvt Ltd.</td></tr>
                            <tr><td>29</td><td>WIE Week Events</td><td>05–05-2021 to 08–05-2021</td><td>As part of WIE week Clusters are formed with 3 colleges. Our Cluster has conducted 3 events - Ginete -(Article writing competition), Wings up ( webinar) by Dr. Priya. V.S she is the 1st Transgender Doctor of Kerala , Interniteo (quiz competition).</td></tr>
                            </table>

                            <br />
                        <p style={{textAlign:"center"}}><ImageOne data={this.EEEimage1} /></p>
                        <br /> 
                        <p style={{textAlign:"center"}}><ImageOne data={this.EEEimage2} /></p>
                        <br />  
                        <p style={{textAlign:"center"}}><ImageOne data={this.EEEimage3} /></p>
                        <br />  
                        <p style={{textAlign:"center"}}><ImageOne data={this.EEEimage4} /></p>
                        <br />  
                        <p style={{textAlign:"center"}}><ImageOne data={this.EEEimage6} /></p>
                        <br />  
                        <p style={{textAlign:"center"}}><ImageOne data={this.EEEimage7} /></p>
                        <br />  
                        <p style={{textAlign:"center"}}><ImageOne data={this.EEEimage8} /></p>
                        <br />   
                        <p style={{textAlign:"center"}}><ImageOne data={this.EEEimage9} /></p>
                        <br /> 
                            
        </div>
      </div>
    );
  }
}

export default Profile;
