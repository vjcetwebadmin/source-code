import React from "react";

import "../Components/Tables/tableformat.css";

import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne"; 
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFour from "../Components/Texts/HeadingFour";
import NewsHeading from "../Components/Texts/NewsHeading";
import HeadingFive from "../Components/Texts/HeadingFive";

class collegecouncil extends React.Component {
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


    CollegecouncilTitle = {
        instanceID: "CollegecouncilTitle",
        title: "Student Council 2023-24"
    };
    MajoreventsTitle = {
        instanceID: "MajoreventsTitle",
        title: "Major Events"
    };
    EventTitle1 = {
        instanceID: "EventTitle1",
        title: "1. Election 2019-20"
    };
    EventTitle2 = {
        instanceID: "EventTitle2",
        title: "2. Union Activity 2020-21"
    };
    EventTitle3 = {
        instanceID: "EventTitle3",
        title: "3. Student Council Inauguration"
    };
    EventTitle4 = {
        instanceID: "EventTitle4",
        title: "4. Annual Sports- DRONA 2K19"
    };
    EventTitle5 = {
        instanceID: "EventTitle5",
        title: "5. Inter Collegiate Technical Fest – BODHI’19 and College Arts Festival- DRISHYA’19"
    };
    EventTitle6 = {
        instanceID: "EventTitle6",
        title: "6. Basket Ball Tournament-Magnum 2019"
    };
    EventContent1 = {
        instanceID: " EventContent1",
        title: "Students Council Election was held on 17th August 2019. Dr. Anoop CK (Professor Civil Engineering Department) was the election returning officer. Twenty two student council members were elected."
    }
    EventContent2 = {
        instanceID: " EventContent2",
        title: "The students council coordinated the Onam Celebration of the academic year 2020 - 2021 on 27th August 2020, amidst the Covid 19 pandemic. The event was strictly conducted by keeping up with the Covid 19 norms. Principal Dr. K.K. Rajan inaugurated the ceremony. Pookkalam and payasam were included in the ceremony."
    }
    EventContent3 = {
        instanceID: " EventContent3",
        title: "Hon’ble Justice Cyriac Joseph inaugurated student’s council (18-19) on 9th October 2018.Students performed various cultural programs as part of the inauguration."
    }
    EventContent4 = {
        instanceID: " EventContent4",
        title: "Annual sports meet is conducted on 15th and 16th February 2019.Mr.Samson (Sub Inspector Muvattupuzha ) was  inaugurated the event in the presence of Manager and Principal."
    }
    EventContent51 = {
        instanceID: " EventContent51",
        title: "National Level Technical Fest (BODHI 2019) was conducted on 20th March and 21st March 2019. Mr. Sreedharan Radhakrishnan Nair (Managing Director,Team Front Line Ltd & Team e-Biz) inaugurated the program. Departments conducted various technical events as part of BODHI’19 and more than 1000 students were participated from other colleges. "
    }
    EventContent52 = {
        instanceID: " EventContent52",
        title: "College arts festival (DRISHYA – 2019) was held on 22nd March and 23rd March 2019.Mr.K.S. Harisankar (Playback Singer) was inaugurated the program. Different cultural competitions were conducted as part of DRISHYA- 2019. Inauguration Ceremony of BODHI’19 and DRISHYA’19 are held on 20th March 2019."
    }
    EventContent6 = {
        instanceID: " EventContent6",
        title: "Inter Collegiate Basket Ball Tournament was conducted on 19th to 21st March 2019.Mr.Sejin Mathew (Indian youth basket ball team caption) inaugurated the event in the presence Principal."
    }
    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />

            <div className="contain">
                    <HeadingOne data={this.CollegecouncilTitle}  />
                {/*<div  style={{float:"right"}}>*/} {/*class="absolute"  */}
                 {/*   <p id="rcorners1" align="center" ><a href="https://vjcet.org/downloads/gallery/collegeunion.html" target="_blank" rel="noopener noreferrer"><font color="white">Picture Book</font></a></p>
                </div>*/}
             <div>            
               {/* <p id="blankspace" align="right"></p> */}
             </div>                    
                    <br />                   
                        <table id="tableformat">
                        <tr><th>Post</th><th>Student Name</th><th>Branch & Semester</th></tr>
                            <tr><td>CHAIRMAN</td><td>JISHNU BAIJU</td><td>S5 ME</td></tr>
                            <tr><td>VICE CHAIRPERSON</td><td>APARNA SUNILKUMAR</td><td>S5 AD</td></tr>
                            <tr><td>GENERAL SECRETARY</td><td>ALBIN BEJOY</td><td>S5 IT</td></tr>
                            <tr><td rowSpan={2}>UNIVERSITY UNION COUNCILLORS</td><td>GEORGEENA JOJI</td><td>S3 CS A</td></tr>
                            <tr>                                                 <td>JERIN BOBY</td><td>BHMCT</td></tr>
                            <tr><td>EDITOR</td><td>AMEENA K BASHEER</td><td>S5 CE</td></tr>
                            <tr><td>ARTS CLUB SECRETARY</td><td>NISTEL ROJI</td><td>S5 CS A</td></tr>
                            <tr><td>SPORTS CLUB SECRETARY</td><td>VIVEK BIJU</td><td>S5 CE</td></tr>
                            <tr><td rowSpan={2}>LADY REPRESENTATIVES</td><td>AKSA ANN GLEMIN</td><td>S5 AD</td></tr>
                            <tr>                                <td>TESSA B THARAYIL</td><td>S3 CS B</td></tr>
                            <tr><td>MBA ASSOCIATION SECRETARY</td><td>RIJO MS</td><td>S3 MBA</td></tr>
                            <tr><td>AD ASSOCIATION SECRETARY</td><td>AMEER P IBRAHIM</td><td>S7 AD</td></tr>
                            <tr><td>CE ASSOCIATION SECRETARY</td><td>NOEL SUSAN CHACKO</td><td>S7 CE</td></tr>
                            <tr><td>CG ASSOCIATION SECRETARY</td><td>SANDRA AJI</td><td>S5 CG</td></tr>
                            <tr><td>CS ASSOCIATION SECRETARY</td><td>ANANYA S</td><td>S7 CS B</td></tr>    
                            <tr><td>ECE ASSOCIATION SECRETARY</td><td>AMY CHERIAN</td><td>S7 ECE</td></tr>
                            <tr><td>EEE ASSOCIATION SECRETARY</td><td>MERIN CHACKO</td><td>S7 EEE</td></tr>
                            <tr><td>IT ASSOCIATION SECRETARY</td><td>AKSHARA JOSHY</td><td>S7 IT</td></tr>
                            <tr><td>ME ASSOCIATION SECRETARY</td><td>ABIN THOMAS</td><td>S7 ME</td></tr>                        
                            <tr><td>BHMCT ASSOCIATION SECRETARY</td><td>ALBIN JOY</td><td>S3 BHMCT</td></tr>
                                                        
                            <tr><td>PG REPRESENTATIVE</td><td>ANJANA SHAJU</td><td>S3 MBA</td></tr>
                            <tr><td>FIRST YEAR REPRESENTATIVE</td><td>ADIYTHYAN BIJU</td><td>S1 IT</td></tr>                            
                            <tr><td>SECOND YEAR REPRESENTATIVE</td><td>ALBY AUGUSTINE</td><td>S3 ME</td></tr>                            
                            <tr><td>THIRD YEAR REPRESENTATIVE</td><td>RIYA XAVIER</td><td>S5 CS A </td></tr>                            
                            <tr><td>FOURTH YEAR REPRESENTATIVE</td><td>JOEL JOSE</td><td>S7 CS A</td></tr>                            
                            <tr><td>SC/ST REPRESENTATIVE</td><td>AJITH VINOJ</td><td>S5 ME</td></tr>
                            
                        </table>
                        {/*<HeadingTwo data={this.MajoreventsTitle} className="Heading" />
                        <HeadingFour data={this.EventTitle1} className="Heading" />
                        <BodyOneJustified data={this.EventContent1} />
                        <HeadingFour data={this.EventTitle2} className="Heading" />
                        <BodyOneJustified data={this.EventContent2} />


                         <HeadingFour data={this.EventTitle2} className="Heading" />
                        <BodyOneJustified data={this.EventContent2} />
                        <HeadingFour data={this.EventTitle3} className="Heading" />
                        <BodyOneJustified data={this.EventContent3} />
                        <HeadingFour data={this.EventTitle4} className="Heading" />
                        <BodyOneJustified data={this.EventContent4} />
                        <HeadingFour data={this.EventTitle5} className="Heading" />
                        <BodyOneJustified data={this.EventContent51} />
                        <BodyOneJustified data={this.EventContent52} />
                        <HeadingFour data={this.EventTitle6} className="Heading" />
                        <BodyOneJustified data={this.EventContent6} /> */}
                         
                        
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default collegecouncil;