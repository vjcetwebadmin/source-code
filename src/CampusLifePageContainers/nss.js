import React from "react";

import "../Components/Tables/tableformat.css";

import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFour from "../Components/Texts/HeadingFour";
import HeadingThree from "../Components/Texts/HeadingThree";
import "../Components/Images/gallery.css";


class nss extends React.Component {
    state = { showMenu: false };
    openMenu = () => {
        console.log("opening Menu");
        this.setState({ showMenu: true });
    };
    closeMenu = () => {
        this.setState({ showMenu: false });
    };
    HomePageHeader = {
        instanceID: "HomePageHeader"
    };
    HomePageFooter = {
        instanceID: "HomePageFooter"
    };
    NsslogoImage = {
        instanceID: "NsslogoImage",
        image: "ProfessionalBodies/NSS.png",
        width: "50%"
      }

   NssTitle = {
        instanceID: "NssTitle",
        title: "National Service Scheme (Technical Cell) Unit 197 & 587"
    };
    AboutNssTitle = {
        instanceID: "AboutNssTitle",
        title: "National Service Scheme"
    };
    AboutNssvjcTitle = {
        instanceID: "AboutNssvjcTitle",
        title: "National Service Scheme (Technical Cell) at Viswajyothi"
    };
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "Office-Bearers "
      };
    AboutNssContent = {
        instanceID: "AboutNssContent",
        title: "The National Service Scheme (NSS) was launched on September 24, 1969 in order to promote social consciousness, a sense of responsibility, and a sense of discipline and dignity of labour among college students. The scheme utilizes the leisure time between college studies of students, in various item of social service, which not only helps the community, but also develop the personality of students. The Motto of NSS “Not Me But You”, reflects the essence of democratic living and upholds the need for self-less service. NSS helps the students, develop appreciation to other person’s point of view and also show consideration to other living beings."
    }
    AboutNssvjcContent = {
        instanceID: "AboutNssvjcContent",
        title: "An Aided unit of National Service Scheme (Technical Cell) Unit-197 is started in the College in 12-02-2008 with Mr. Mable Varghese (Asst. Professor, Dept. of Information Technology) as the Program Officer, with 100 Volunteers. In July 2009, Mr. Naveen Jacob (Asst. Professor, Dept. of Electronics and Communication) took charge as the Program officer in 2009. Since the number of students enrolling to NSS has increased, an additional  self-financed unit is sanctioned in the year 2016, Unit-587."
    }
    GalleryImage = {
        instanceID: "GalleryImage",
        image: "Icons/ImageGallery.jpg",
        width: "8%"
      }
    MajoreventsTitle = {
        instanceID: "MajoreventsTitle",
        title: "Activities"
    };
    EventTitle1 = {
        instanceID: "EventTitle1",
        title: "1. Distribution of School Supplies"
    };
    EventTitle2 = {
        instanceID: "EventTitle2",
        title: "2. Best Camp Unit honour"
    };
    EventTitle3 = {
        instanceID: "EventTitle3",
        title: "3. Swachh Bharat Bbhiyan- Door to Door Survey"
    };
    EventTitle4 = {
        instanceID: "EventTitle4",
        title: "4. Swachh Bharat Bbhiyan- Activity-1"
    };
    EventTitle5 = {
        instanceID: "EventTitle5",
        title: "5. World Environment Day Celebrations"
    };
    EventTitle6 = {
        instanceID: "EventTitle6",
        title: "6. Swachh Bharat Bbhiyan- Activity-2"
    };
    EventTitle7 = {
        instanceID: "EventTitle7",
        title: "7. Swachh Bharat Bbhiyan- Activity-3"
    };
    EventTitle8 = {
        instanceID: "EventTitle8",
        title: "8. Swachh Bharat Bbhiyan- Activity-4"
    };
    EventTitle9 = {
        instanceID: "EventTitle9",
        title: "9. Orientation Talk"
    };
    EventTitle10 = {
        instanceID: "EventTitle10",
        title: "10. Independence Day Celebration"
    };
    EventTitle11 = {
        instanceID: "EventTitle11",
        title: "11. Flood Relief Activity"
    };
    EventTitle12 = {
        instanceID: "EventTitle12",
        title: "12. Rehabilitation Work-1"
    };
    EventTitle13 = {
        instanceID: "EventTitle13",
        title: "13. Cleaning Activity"
    };
    EventTitle14 = {
        instanceID: "EventTitle14",
        title: "14. Rehabilitation Work-2"
    };
    EventTitle15 = {
        instanceID: "EventTitle15",
        title: "15. NSS day Celebration"
    };
    EventTitle16 = {
        instanceID: "EventTitle16",
        title: "16. Blood Donation Camp"
    };
    EventTitle17 = {
        instanceID: "EventTitle17",
        title: "17. Visit to Providence Home"
    };
    EventTitle18 = {
        instanceID: "EventTitle18",
        title: "18. Implementation of Green Protocol"
    };
    EventTitle19 = {
        instanceID: "EventTitle19",
        title: "19. Distribution of First-Aid and Refreshment"
    };
    EventTitle20 = {
        instanceID: "EventTitle20",
        title: "20. IoT Challenge"
    };
    EventTitle21 = {
        instanceID: "EventTitle21",
        title: "21.  Distribution of Chekutty Dolls"
    };
    EventTitle22 = {
        instanceID: "EventTitle22",
        title: "22. Blood Donation Camp"
    };
    EventTitle23 = {
        instanceID: "EventTitle23",
        title: "23. Stem Cell Donor Registration Camp"
    };
    EventTitle24 = {
        instanceID: "EventTitle24",
        title: "24. Seven day Special Camp –Punarjani-2018"
    };
    EventTitle25 = {
        instanceID: "EventTitle25",
        title: "25. NSS environmental survey and board fixation work"
    };
    EventTitle26 = {
        instanceID: "EventTitle26",
        title: "26. Avoli Panchayat cleaning work"
    };
    EventTitle27 = {
        instanceID: "EventTitle27",
        title: "27. NSS PROJECT : CULTIVATION"
    };
    EventTitle28 = {
        instanceID: "EventTitle28",
        title: "28. BLOOD DONATION"
    };    
    EventTitle29 = {
        instanceID: "EventTitle29",
        title: "29. WEBINAR ON SUSTAINABLE ENGINEERING"
    };  
    EventTitle30 = {
        instanceID: "EventTitle30",
        title: "30. LIFE MISSION"
    };  
    EventTitle31 = {
        instanceID: "EventTitle31",
        title: "31. AVOLY PANCHAYAT DISCUSSION"
    }; 
    EventTitle32 = {
        instanceID: "EventTitle32",
        title: "32. LIFE MISSION"
    };     
    EventTitle33 = {
        instanceID: "EventTitle33",
        title: "33. NSS GARDEN"
    };     
    EventTitle34 = {
        instanceID: "EventTitle34",
        title: "34. BLOOD DONATION CAMP"
    };     
    EventTitle35 = {
        instanceID: "EventTitle35",
        title: "35. GROUND CULTIVATION"
    }; 
    EventTitle36 = {
        instanceID: "EventTitle36",
        title: "36. VANAMAHOTSAV 2022"
    }; 
    EventTitle37 = {
        instanceID: "EventTitle37",
        title: "37. BLOOD DONATION CAMP STAGE 2"
    }; 
    EventTitle38 = {
        instanceID: "EventTitle38",
        title: "38. SURVEY IN COLLABORATION WITH IIT ROORKE (PRELIMINARY STAGE)"
    }; 
    EventTitle39 = {
        instanceID: "EventTitle39",
        title: "39. JEEVANA COUPON RELEASE"
    };    

    EventContent1 = {
        instanceID: " EventContent1",
        title: "On 28 April 2018, school supplies including a bag, umbrella and necessary stationery were distributed at Kavana L P school. The function is inaugurated by Mr. Jordy, President Avoly Gramapanchayat and Presided by Prof. (Dr) Josephkunju Paul C."
    }
    EventContent2 = {
        instanceID: " EventContent2",
        title: "On 29th April 2018, The IMA thodupuzha honoured the NSS unit of our college as the Best Camp unit."
    }
    EventContent3 = {
        instanceID: " EventContent3",
        title: "On 6th and 7th on May, 2018 a door to door survey regarding Cleanliness (Swachh Bharat Bbhiyan) were undertaken in the various locations of Avoly Gramapanchyath."
    }
    EventContent4 = {
        instanceID: " EventContent4",
        title: "On 7th May 2018, the sourroundings of Lavana L P School were cleaned by the NSS volunteers in connection with Swachh Bharat Bbhiyan."
    }
    EventContent5 = {
        instanceID: " EventContent51",
        title: "On 5th and 6th June 2018, tree saplings were planted at various locations in the Avoly Gramapanchyath and at Kavana L P School, in connection with World Environment Day Celebrations."
    }
    
    EventContent6 = {
        instanceID: " EventContent6",
        title: "On 10th June 2018as part of  Swachh Bharat Bbhiyan,  NSS volunteers activelyparticipated in making disposable waste bins and manure pits, in the Avoly Gramapanchyath, in connection with Swachh Bharat Bbhiyan."
    }
    EventContent7 = {
        instanceID: " EventContent7",
        title: "On 27th and 28th June 2018, as part of Swachh Bharat Bbhiyan, NSS volunteers initiated in removing the plastic bottle waste on the either sides on the road on the college, over 1000 bottles were colleceed and were handover to the panchyath authorities for proper recycling and disposal."
    }
    EventContent8 = {
        instanceID: " EventContent8",
        title: "On 7th July 2018, the NSS volunteers involved in the cleaning of the local streams and water bodies under Swachh Bharat Bbhiyan."
    }
    EventContent9 = {
        instanceID: " EventContent9",
        title: "On 11th August 2018,  orientation talk is arranged to new NSS volunteers, the Classes were taken by Mr. Jithin Xavier."
    }
    EventContent10 = {
        instanceID: " EventContent10",
        title: "On 15th August 2018,  Independence Day is celebrated in the college campus by hoisting the National Flag."
    }
    EventContent11 = {
        instanceID: " EventContent11",
        title: "From 14th to 16th August, The NSS volunteers actively participated in collecting the necessary items of food and clothing from the Viswajyothi Family to distributed in relief camp of  the flood affected areas. All the collected material were distributed in the relief camps in the near by areas."
    }
    EventContent12 = {
        instanceID: " EventContent12",
        title: "From 27th Aug to 2nd Sept. 2018, the students s all departments (except 1st year students) under the guidance of Natinal Cell (Technical Cell) were engaged in the rehabilitation works ranging from preliminary survey and cleaning, to collection and distribution of necessary food and clothing and volunteering at relief camps, completing on an average of 100 hours per student. "
    }
    EventContent13 = {
        instanceID: " EventContent13",
        title: "On 15th September 2018,  the NSS volunteers participated in cleaning the Private Bus stand Vazhakulam."
    }
    EventContent14 = {
        instanceID: " EventContent14",
        title: "On 18th September 2018,  the second phase of rehabilitation survey is conducted by the volunteers at the homes in the Vazhakulam area. "
    }
    EventContent15 = {
        instanceID: " EventContent15",
        title: "On 24th September 2018,  the NSS day is celebrated by hoisting the NSS flag at the college campus by the Principal, Prof. (Dr.) Josephkunju Paul C."
    }
    EventContent16 = {
        instanceID: " EventContent16",
        title: "On 10th October, 2018,  a blood donation camp in organized in the campus with Indian Medical Association, Thoduouzha. Over 60 students came forward to donate blood in the event."
    }
    EventContent17 = {
        instanceID: " EventContent17",
        title: "On 9th October 2018, NSS volunteers visited the Providence Home, Kavana – a home for elderly and differently abled ladies."
    }
    EventContent18 = {
        instanceID: " EventContent18",
        title: "From 26th to 28th December 2018, several NSS volunteers actively participated in implementing Green Protocol at Thiruvairanikkulam Mahadeva temple."
    }
    EventContent19 = {
        instanceID: " EventContent19",
        title: "On 15th and 16th February 2019, NSS volunteers oversaw the first aid and refreshments for “Drona 2019” the annual sports event of VJCET."
    }
    EventContent20 = {
        instanceID: " EventContent20",
        title: "On 7th and 8th March 2019,  the NSS unit organised IoT Challenge at the college campus in association with i3Indya Technologies. The wining tean of S2EEE took part in the Radiance 2019-Technical fest of IIT-Bombay."
    }
    EventContent21 = {
        instanceID: " EventContent21",
        title: "On 26th March 2019, NSS volunteers distributed 200 Chekutty Dolls in the college campus. All the proceeds went to the weavers of chendamangalam handloom society, who lost their livelihood after the floods. The inauguration is done by giving the doll to the Principal at his office."
    }
    EventContent22 = {
        instanceID: " EventContent22",
        title: "On 6th April 2019 a blood donatin camp is arranged the the college campus in association with the IMA thodupuzha. "
    }
    EventContent23 = {
        instanceID: " EventContent24",
        title: "On 3rd May 2019,  a Stem Cell Donor registration camp is held at the college campus. In the event Ameer P A of S8 Mechanical Engineering, shared his experience in which he had volunteered stem cell transfer by bonemarrow."
    }
    EventContent24 = {
        instanceID: " EventContent24",
        title: "The NSS unit conducted this years Seven Day Special Camp-Punarjani-2018 at Govt. Taluk Hospital Thodupuzha from 25th to 31st January 2019. The aimed at repairing damaged and out-of-use furniture and other health-care facilities at government hospitals. During the camp the NSS unit reinstated an asset of worth Rs. 25lakhs."
    }
    EventContent25 = {
        instanceID: " EventContent25",
        title: "The National Service Scheme unit of VJCET, Vazhakulam had organized a four day Environmental Survey and Board fixation. The work started on 2nd December 2020 and ended up on 6th December 2020. The program was conducted in an offline mode and around 25 volunteers have actively participated. The main objective of the work was to identify the trees and to fix the name boards. It was conducted on college campus."
        
    }    
    EventContent26 = {
        instanceID: " EventContent26",
        title: "The National Service Scheme unit of VJCET, Vazhakulam had organized a cleaning work at Avoli Panchayat on 6th April 2021.Around 25 NSS volunteers had participated."
    }
    EventContent27 = {
        instanceID: " EventContent27",
        title: "On the 19th of April 2022 the NSS volunteers began to prepare the space allotted to set as garden. But the allotted land was not suitable for cultivation. As first the volunteers leveled the plot for cultivation. They removed the rocks,wastes from the soil.Then the soil was mixed with nutrients such as cow dung thus it lacks minerals. The work was not completed in a day as expected.We had to work for the next two days as well."
    }
    EventContent28 = {
        instanceID: " EventContent28",
        title: "On 2022 April 27th,As part of ‘ RED WINGS ’an initiative VJCET NSS blood donation, Our Rudhirasena Coordinators Jeevan Benny, Anand P Sasidharan, Eldho Mathew, Adarsh E Reji contacted our volunteers for the purpose of donating blood to Siby Varghese who is in need of blood as he was suffering from blood cancer."
    }
    EventContent29 = {
        instanceID: " EventContent29",
        title: "The NSS volunteers of VJCET conducted a webinar on National Technology Day on the topic &#39;Sustainable Engineering&#39;.It was conducted by Dr.Jai M Paul, NSS Ernakulam district coordinator, via google meet on May 11th 2022.The webinar started at 7 pm.It was really mesmerizing &amp; informative .An opportunity to clear their doubts regarding sustainable engineering was given.Through his words,&quot;As engineers we have seen marked shift towards delivering sustainable engineering solutions&quot;made the volunteers interested and more conscious on the topic.By 9.00 the webinar came to an end."
    }
    EventContent30 = {
        instanceID: " EventContent30",
        title: "NSS volunteers of VJCET conducted a survey on 13th May 2022. The name of the survey was LIFE MISSION. LIFE(Livelihood Inclusion Financial Empowerment) Mission is the mission of the government of Kerala to build free houses for all the homeless in the state. The most apt applicants are provided with a financial assistance of 4 lakh rupees. Our aim was to identify the most suitable beneficiaries- homeless people, those who have not been able to complete the housing or those who have a temporary home especially in the SC.ST category."
    }
    EventContent31 = {
        instanceID: " EventContent31",
        title: "On May 20th ,the members of Presiding group of VJCET NSS along with panchayat members arranged a meeting at avoly panchayat inorder to discuss and enquire about what all things can be done by our nss volunteers for the wellbeing and development of panchayat.Finally we arrived at a solution for that.Moreover, we planned to introduce several community ideas for the same."
    }
    EventContent32 = {
        instanceID: " EventContent32",
        title: "NSS volunteers of VJCET started working on the third stage of life mission on 3rd June 2022.The aim of the 3rd stage was to contact the beneficiaries who were approved by LB committee .Each volunteer contributed their best &amp; it was a great experience. On 11th June the 3rd stage came to an end &amp; we submitted the details of all the benefitiaries.As a token of appreciation for the efforts of the volunteers, certificates were granted to the volunteers BY LIFE MISSION KERALA in collabration with good deeds day and DC volunteers as a part of #EveryIndianVolunteering Campaign by Captain Social Foundationon 23rd June.The 3 rd stage was a great success with the activeness of all the volunteers."
    }
    EventContent33 = {
        instanceID: " EventContent33",
        title: "The beautiful vegetable garden we built in the past few months had reached the stage of harvesting. We NSS Volunteers were very proud and happy as it is our hard work and team coordination that helped us to make the NSS garden a great success . We collected many vegetables and made a great profit on that day. All NSS volunteers took part in the program, and it was a huge success."
    }
    EventContent34 = {
        instanceID: " EventContent34",
        title: "NSS volunteers decied to conduct Blood Donation Camp on 16/06/2022. So to gather the information about the donators, a google form containing a set of questions asking about their details like name, age, blood group etc was released on 6th of June.This form was circulated till the 12th of Junefor gaining as many donors as we can get. Aisa result we got an overwhelming amount of responses. We then sorted this list on the basis of classes. This concluded the day 3 of the blood donation camp."
    }
    EventContent35 = {
        instanceID: " EventContent35",
        title: "As a part of the institutional cultivation project ,the volunteers of NSS ,VJCET had done some maintenance work on the NSS cultivation ground &amp; cultivated some Vegetables on 29th June 2022.The volunteers worked hard to get a best result on the ground.Even in the worst climatic conditions like heavy rain &amp; hot sun the volunteers had done an astonishing work.We added natural fertilizers,removed weeds,provided adequate care.The tough grind of the volunteers made their hard work fruitful.The yields from our garden was a treat to the eyes and heart."
    }
    EventContent36 = {
        instanceID: " EventContent36",
        title: "NSS NRPF volunteers of VJCET decided to practice afforestation for van mahotsav on 1-7 of july 2022.All the volunteers planted trees in their own homes as part of this.After the event the photos of volunteers planting trees were submitted through google drive by 7th july."
    }
    EventContent37 = {
        instanceID: " EventContent37",
        title: "Rudhirasena NSS volunteers of VJCET conducted the second stage of blood donation camp on 4th July 2022. The 2nd stage was completed with 73 donations. In total, we were able to complete 145 donations. The NSS volunteers, college faculties and many others actively participated in this event making this a mass success."
    }
    EventContent38 = {
        instanceID: " EventContent38",
        title: "NSS volunteers of VJCET conducted a survey in collaboration with IIT ROORKE .The preliminary stage of the survey was completed on 24th July 2022 .Two google forms where provided to submit the responses. The first form was about the perspective on energy savings and climate change .The latter was demand side management ,EV-PV adoption ."
    }
    EventContent39 = {
        instanceID: " EventContent39",
        title: "Kidneys perform crucial and sophisticated functions within our body.So it is vital to treat kidney failure. In order to do that , dialysis is the best method. Most people need 3 sessions of dialysis a week. Many  poor families cannot afford the treatment . so KTU Care Coordinators of NSS VJCET collabed with Renal Care Foundation for collecting money for dialysis Coupon and its given to one who needs the most.As a kick start to this flagship event, the Renal care foundation provides us a platform for the official coupon handling.They presented the coupon toprincipal and our team. Principal Mr.KK.Rajan and all the eminent ones present over their especially MLA Mathew M Kuzhalnadan appreciated our startup."
    }

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
               
                <div className="contain">
                
                    <HeadingTwo data={this.NssTitle} className="Heading" />
                    <div  style={{float:"right"}}>{/*class="absolute"  */}
                <p id="rcorners1" align="center" ><a href="https://vjcet.org/downloads/gallery/nss.html" target="_blank" rel="noopener noreferrer"><font color="white">Picture Book</font></a></p>
              </div>
              <br></br>
                    <HeadingThree data={this.AboutNssTitle} className="Heading" />
                    <BodyOneJustified data={this.AboutNssContent} />
                    <HeadingThree data={this.AboutNssvjcTitle} className="Heading" />
                    <BodyOneJustified data={this.AboutNssvjcContent} />
                    <br />
                    <HeadingThree data={this.InchargesHeading} /> 
                         <table id="tableformat">
                            <tr><th colspan="3"> Program officers / Associate Program Officers Unit-197</th></tr>
                            <tr><td>Mr. Mable Varghese</td><td>Program Officer</td><td>2008-'09</td></tr>
                            <tr><td>Mr. Mr. Naveen Jacob</td><td>Program Officer</td><td>2009-'10 -2012-'13</td></tr>
                            <tr><td>Mr. Jibby Peter D'cruz</td><td>Program Officer</td><td>2012-'13 to 2015-'16</td></tr>
                            <tr><td>Mr. Sharone Varghese</td><td>Program Officer</td><td>2015-'16 to 2018-'19</td></tr>
                            <tr><td>Ms. Sreeja S. Pillai</td><td>Associate Program Officer</td><td>2015-'16</td></tr>
                            <tr><td>Ms. Anitta Thomas</td><td>Associate Program Officer</td><td>2016-'17</td></tr>
                            <tr><td>Mr. Shibu K R</td><td>Program Officer</td><td>2019-'20</td></tr>
                            <tr><td>Ms. Jerin Jose</td><td>Associate Program Officer</td><td>2019-'20</td></tr>
                            <tr><td>Mr. Aneesh Kurian</td><td>Program Officer</td><td>2020-'21</td></tr>
                            <tr><td>Ms. Jerin Jose</td><td>Associate Program Officer</td><td>2020-'21</td></tr>
                            <tr><td>Mr. Rakesh Jose</td><td>Program Officer</td><td>2021-'22  onwards</td></tr> 
                            
                        </table> 
                        <table id="tableformat">
                            <tr><th colspan="3"> Program officers / Associate Program Officers Unit-587</th></tr>
                            <tr><td>Mr. Jacob Mathai</td><td>Program Officer</td><td>2015-'16 to 2018-'19</td></tr>
                            <tr><td>Ms. Vineetha Thankachan</td><td>Associate Program Officer</td><td>2015-'16 to 2018-'19</td></tr>
                            <tr><td>Mr. Nibin B. </td><td>Program Officer</td><td>2016-'17 to 2019-'20</td></tr>
                            <tr><td>Mr. Santhanu P Mohan</td><td>Program Officer</td><td>2020-'21 </td></tr>
                            <tr><td>Ms. Mary Nirmala George </td><td>Associate Program Officer</td><td>2020-'21</td></tr>
                            <tr><td>Mr. Shandhanu P Mohan </td><td>Program Officer</td><td>2021-'22  onwards</td></tr>
                        </table> 
                        <table id="tableformat">
                            <tr><th colspan="2"> Volunteer Secretary Unit-197</th></tr>
                            <tr><td>Mr. Jithin Xavier</td><td>2016-'17</td></tr>
                            <tr><td>Ms.Grace Maria George</td><td>2016-'17</td></tr>
                            <tr><td>Mr. Charles George</td><td>2017-'18</td></tr>
                            <tr><td>Ms. Riya Alex</td><td>2017-'18</td></tr>
                            <tr><td>Mr. George M. Roy</td><td>2018-'19</td></tr>
                            <tr><td>Ms. Lakshmipriya</td><td>2018-'19</td></tr>
                            <tr><td>Mr. Akash Satheesan</td><td>2019-'20</td></tr>
                            <tr><td>Ms. Arya Vijayan</td><td>2019-'20</td></tr> 
                            <tr><td>Mr. Sidharth T.S.</td><td>2020-'21</td></tr>
                            <tr><td>Ms. Irene Meriyam Jos</td><td>2020-'21</td></tr>
                            <tr><td>Mr. Alen Salu </td><td>2021-'22</td></tr> 
                            <tr><td>Ms. Taniya Tijo </td><td>2021-'22</td></tr>  
                            <tr><td>Mr. Abhinav P George </td><td>2022-'23</td></tr> 
                            <tr><td>Ms. Gadha Ashok </td><td>2022-'23</td></tr> 
                            </table> 
                        <table id="tableformat">
                            <tr><th colspan="2"> Volunteer Secretary Unit-587</th></tr>
                            <tr><td>Mr. Balu M. N</td><td>2016-'17</td></tr>
                            <tr><td>Ms. Ashna Mathew</td><td>2016-'17</td></tr>
                            <tr><td>Mr. Pranav Pradeep</td><td>2017-'18</td></tr>
                            <tr><td>Ms. Ceeba Cleatus</td><td>2017-'18</td></tr>
                            <tr><td>Mr. Jeevo Johnson</td><td>2018-'19</td></tr>
                            <tr><td>Ms. Sandra Rojas</td><td>2018-'19</td></tr>
                            <tr><td>Mr. Basil Sunny</td><td>2019-'20</td></tr>
                            <tr><td>Ms. Arsha Paulose</td><td>2019-'20</td></tr>
                            <tr><td>Mr. Navin Joseph</td><td>2020-'21</td></tr>
                            <tr><td>Ms. Megha Jomon</td><td>2020-'21</td></tr> 
                            <tr><td>Mr. Soyal Sunny</td><td>2021-'22</td></tr> 
                            <tr><td>Ms. Haripriya Biju</td><td>2021-'22</td></tr>                              
                            <tr><td>Mr. Eldho Peter Regi</td><td>2022-'23</td></tr> 
                            <tr><td>Ms. Akshara Joshy</td><td>2022-'23</td></tr>
                            
                         </table> 
                        <HeadingTwo data={this.MajoreventsTitle} className="Heading" />
                        <HeadingFour data={this.EventTitle1} className="Heading" />
                        <BodyOneJustified data={this.EventContent1} />
                        <HeadingFour data={this.EventTitle2} className="Heading" />
                        <BodyOneJustified data={this.EventContent2} />
                        <HeadingFour data={this.EventTitle3} className="Heading" />
                        <BodyOneJustified data={this.EventContent3} />
                        <HeadingFour data={this.EventTitle4} className="Heading" />
                        <BodyOneJustified data={this.EventContent4} />
                        <HeadingFour data={this.EventTitle5} className="Heading" />
                        <BodyOneJustified data={this.EventContent5} />
                        <HeadingFour data={this.EventTitle6} className="Heading" />
                        <BodyOneJustified data={this.EventContent6} />
                        <HeadingFour data={this.EventTitle7} className="Heading" />
                        <BodyOneJustified data={this.EventContent7} />
                        <HeadingFour data={this.EventTitle8} className="Heading" />
                        <BodyOneJustified data={this.EventContent8} />
                        <HeadingFour data={this.EventTitle9} className="Heading" />
                        <BodyOneJustified data={this.EventContent9} />
                        <HeadingFour data={this.EventTitle10} className="Heading" />
                        <BodyOneJustified data={this.EventContent10} />
                        <HeadingFour data={this.EventTitle11} className="Heading" />
                        <BodyOneJustified data={this.EventContent11} />
                        <HeadingFour data={this.EventTitle12} className="Heading" />
                        <BodyOneJustified data={this.EventContent12} />
                        <HeadingFour data={this.EventTitle13} className="Heading" />
                        <BodyOneJustified data={this.EventContent13} />
                        <HeadingFour data={this.EventTitle14} className="Heading" />
                        <BodyOneJustified data={this.EventContent14} />
                        <HeadingFour data={this.EventTitle15} className="Heading" />
                        <BodyOneJustified data={this.EventContent15} />
                        <HeadingFour data={this.EventTitle16} className="Heading" />
                        <BodyOneJustified data={this.EventContent16} />
                        <HeadingFour data={this.EventTitle17} className="Heading" />
                        <BodyOneJustified data={this.EventContent17} />
                        <HeadingFour data={this.EventTitle18} className="Heading" />
                        <BodyOneJustified data={this.EventContent18} />
                        <HeadingFour data={this.EventTitle19} className="Heading" />
                        <BodyOneJustified data={this.EventContent19} />
                        <HeadingFour data={this.EventTitle20} className="Heading" />
                        <BodyOneJustified data={this.EventContent20} />
                        <HeadingFour data={this.EventTitle21} className="Heading" />
                        <BodyOneJustified data={this.EventContent21} />
                        <HeadingFour data={this.EventTitle22} className="Heading" />
                        <BodyOneJustified data={this.EventContent22} />
                        <HeadingFour data={this.EventTitle23} className="Heading" />
                        <BodyOneJustified data={this.EventContent23} />
                        <HeadingFour data={this.EventTitle24} className="Heading" />
                        <BodyOneJustified data={this.EventContent24} />
                        <HeadingFour data={this.EventTitle25} className="Heading" />
                        <BodyOneJustified data={this.EventContent25} />
                        <HeadingFour data={this.EventTitle26} className="Heading" />
                        <BodyOneJustified data={this.EventContent26} />
                        <HeadingFour data={this.EventTitle27} className="Heading" />
                        <BodyOneJustified data={this.EventContent27} />
                        <HeadingFour data={this.EventTitle28} className="Heading" />
                        <BodyOneJustified data={this.EventContent28} />
                        <HeadingFour data={this.EventTitle29} className="Heading" />
                        <BodyOneJustified data={this.EventContent29} />
                        <HeadingFour data={this.EventTitle30} className="Heading" />
                        <BodyOneJustified data={this.EventContent30} />
                        <HeadingFour data={this.EventTitle31} className="Heading" />
                        <BodyOneJustified data={this.EventContent31} />
                        <HeadingFour data={this.EventTitle32} className="Heading" />
                        <BodyOneJustified data={this.EventContent32} />
                        <HeadingFour data={this.EventTitle33} className="Heading" />
                        <BodyOneJustified data={this.EventContent33} />
                        <HeadingFour data={this.EventTitle34} className="Heading" />
                        <BodyOneJustified data={this.EventContent34} />
                        <HeadingFour data={this.EventTitle35} className="Heading" />
                        <BodyOneJustified data={this.EventContent35} />
                        <HeadingFour data={this.EventTitle36} className="Heading" />
                        <BodyOneJustified data={this.EventContent36} />
                        <HeadingFour data={this.EventTitle37} className="Heading" />
                        <BodyOneJustified data={this.EventContent37} />
                        <HeadingFour data={this.EventTitle38} className="Heading" />
                        <BodyOneJustified data={this.EventContent38} />
                        <HeadingFour data={this.EventTitle39} className="Heading" />
                        <BodyOneJustified data={this.EventContent39} />

                </div>
                
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default nss;