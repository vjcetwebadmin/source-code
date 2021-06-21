import React from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import "./Research.css"
import BodyOneJustified from "../Components/Texts/BodyOneJustified";


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
      ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Best Practices"
    }

    MajoreventsTitle = {
        instanceID: "MajoreventsTitle",
        title: "mm"
    };
    MajoreventsTitle1 = {
        instanceID: "MajoreventsTitle1",
        title: "mm"
    };
    MajoreventsTitle2 = {
        instanceID: "MajoreventsTitle2",
        title: "mm"
    };
    MajoreventsTitle3 = {
        instanceID: "MajoreventsTitle3",
        title: "mm"
    };
    MajoreventsTitle4 = {
        instanceID: "MajoreventsTitle4",
        title: "mm"
    };
    MajoreventsTitle5 = {
        instanceID: "MajoreventsTitle5",
        title: "VICE-PRINCIPAL"
    };
    MajoreventsTitle6 = {
        instanceID: "MajoreventsTitle6",
        title: "DEAN"
    };
    MajoreventsTitle7 = {
        instanceID: "MajoreventsTitle7",
        title: "HEAD OF THE DEPARTMENT"
    };
    MajoreventsTitle8 = {
        instanceID: "MajoreventsTitle8",
        title: "TEACHING STAFF"
    };
    MajoreventsTitle9 = {
        instanceID: "MajoreventsTitle9",
        title: "TECHNICAL STAFF"
    };
    MajoreventsTitle10 = {
        instanceID: "MajoreventsTitle10",
        title: "OTHER STAFF"
    };


    EventTitle1 = {
        instanceID: "EventTitle1",
        title: "DISCIPLINE AND ANTI RAGGING"
    };
    EventTitle2 = {
        instanceID: "EventTitle2",
        title: "LIBRARY"
    };
    EventTitle3 = {
        instanceID: "EventTitle3",
        title: "PLACEMENT & TRAINING CELL"
    };
    EventTitle4 = {
        instanceID: "EventTitle4",
        title: "COMMON COMPUTING CENTRE (CCC) "
    };




    EventContent1 = {
        instanceID: " EventContent1",
        title: "VJCET by its vision exist for the social development of the economically backward people in areas of its vicinity. The institute is committed in developing citizens who manifest values of societal responsibility and obligation. The college encourages staff and students to initiate new measures for the enhancement of human values and civic sense. They engage themselves in social activities through various forums operating in the campus. Moreover, the college plays an active role in the social spheres of the region and supports various social projects and initiatives mostly in rural areas."
    }
    EventContent2 = {
        instanceID: " EventContent2",
        title: "On 29th April 2018, The IMA thodupuzha honoured the NSS unit of our college as the Best Camp unit."
    }


    render() {
        return (
            <React.Fragment>
              {/*  <HeadingOne data={this.ResearchHeading}></HeadingOne> 
               <p style={{textAlign:"right"}}><a href="https://vjcet.org/downloads/codofcs/Codeofthics.pdf" target="_blank" rel="noopener noreferrer"><b>Policy Document on Code of Ethics</b></a></p>           */}
                 <div>     
                        
                 <HeadingOne data={this.ResearchHeading}></HeadingOne> 
                  
                        <h2 style={{textAlign:"left"}}>1. Title of the Practice: Philanthropic Stance & Students Driven Socially Responsible Activities</h2> 
                        <h2 style={{textAlign:"left"}}>2. Objectives of the Practice</h2>   
                        <ul style={{textAlign:"left"}}>                 
                        <li><p>To develop an integrated sustainable system for improving education, health and standard of living of the rural community.</p></li>
                        <li><p>To inculcate innovative thinking which, leads to projects benefiting the society.</p></li>
                        <li><p>To develop a group of socially committed citizens who possess the spirit of sharing.</p></li>
                        </ul>
                        <h2 style={{textAlign:"left"}}>3. The Context</h2>   
                        <BodyOneJustified data={this.EventContent1} />
                        <p style={{textAlign:"right",paddingRight:"3%"}}><a href="https://vjcet.org/downloads/naac/C7_data/7.2.1_1.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>

                        <h2 style={{textAlign:"left"}}>1. Title of the Practice:Industry Aligned Technical Education</h2> 
                        <h2 style={{textAlign:"left"}}>2. Objectives of the Practice</h2> 
                        <ul style={{textAlign:"left"}}>                        
                        <li><p>To accommodate the input from the practicing professionals in the strategic planning of VJCET.</p></li>
                        <li><p>To enable faculty members and students to become aware of industry standards and to train the students to meet industry expectations.</p></li>
                        <li><p>To prepare professional students for jobs in multinational companies, by exposing them to newer technologies and Engineering and managerial skills.</p></li>
                        <li><p>To establish convergence with Industrial and Research Organizations from various fields through MOUs.</p></li>
                        <li><p>To promote various research and consultancy activities by the faculty members and students.</p></li>
                        <li><p>To involve industry experts in the assessment process of students for genuine feedback.</p></li>
                        </ul>
                        <p style={{textAlign:"right",paddingRight:"3%"}}><a href="https://vjcet.org/downloads/naac/C7_data/7.2.1_2.pdf" target="_blank" rel="noopener noreferrer">Read More</a></p>


                </div>

            </React.Fragment>
        )
    }

}

export default nss;