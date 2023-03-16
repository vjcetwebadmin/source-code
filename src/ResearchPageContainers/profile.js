import React, { Component } from "react";
//import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../Components/Texts/HeadingOne";
import BodyThree from "../Components/Texts/BodyThree";
import "./Research.css"
import "../Components/Tables/tableformat.css";
import HeadingThree from "../Components/Texts/HeadingThree";
//import Profile from "./csi";

class Profile extends Component {
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
    HomePageVisionSection = {
        instanceID: "HomePageVisionSection"
    };
    HomePageFacilitiesSection = {
        instanceID: "HomePageFacilitiesSection"
    };
    
    ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "Profile"
    }
    ReserchBody1 = {
        instanceID: "ReserchBody1",
        title: "The Centre for Research & Development was established in 2010 with Prof. Dr. K Babu Joseph formerly Vice Chancellor Cochin University of Science And Technology (CUSAT) as it’s Dean. He has initiated new ideas to kindle the research interest of the staff and students."
    }
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Presently it’s headed by Dr. Anishin Raj M. M, Dean R&D, Professor, CSE Dept along with the following team of dedicated and hard working personnel."
    }
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "Committee Members"
    };
    CommitteeResponsibleHeading = {
        instanceID: "InchargesHeading",
        title: " The committee is responsible for"
    };
    InchargesHeading1 = {
        instanceID: "InchargesHeading1",
        title: "Funded Projects"
    };
   
    render() {
        return (
            <div className="HomePage">
                
                <HeadingOne data={this.ResearchHeading}></HeadingOne>
                {/* <ImageOne data={this.ResearchImg}></ImageOne> */}
                <BodyThree data={this.ReserchBody1} /><br />
                {/* <p>
                    <BodyThree data={this.ReserchBody2} />
                </p>*/}
                <HeadingThree data={this.InchargesHeading}></HeadingThree>
                <table id="tableformat">
                            <tr><th>NAME</th><th>POST</th></tr>
                            <tr><td>Dr. Anita Brigit Mathew</td><td>Convenor, R & D Centre</td></tr>
                            <tr><td>Mr. Unnikrishnan T G</td><td>Secretary, ME Dept. Coordinator</td></tr>
                            <tr><td>Dr. Pradeep Kumar</td><td>CSE Dept. Coordinator</td></tr>
                            <tr><td>Mrs. Saksy Joy</td><td>S&H Dept. Coordinator</td></tr>
                            <tr><td>Dr. Neena M Joseph</td><td>CE, Dept. Coordinator</td></tr>
                            <tr><td>Dr. Tony 0</td><td>ECE Dept. Coordinator</td></tr>
                            <tr><td>Mrs. Mereya Baby</td><td>EEE Dept. Coordinator</td></tr>
                            <tr><td>Mrs. Josna Jose</td><td>IT Dept. Coordinator</td></tr>
                            <tr><td>Dr. Jose Mamman </td><td>MBA Dept. Coordinator</td></tr>
                </table>
                <p></p>
                    <HeadingThree data={this.CommitteeResponsibleHeading}></HeadingThree>
                <p></p>
                <ol style={{textAlign:"justify", lineHeight:"1.7em",fontSize:"13"}}>
                    <li>Timely release of the Research Publication T & F of VJCET.</li>
                    <li>Effective utilisation of Fab lab of VJCET.</li>
                    <li>Responsible for the activities of Project monitoring cell under IQAC.</li>
                    <li>Coordinating the professional development of the college staff in their respective domains.</li>
                    <li>Encouraging the faculty and students in presenting of papers in international conferences and publishing in Scopus indexed journals.</li>
                    <li>Encouraging and guiding faculty to apply for funded projects.</li>
                    <li>Organising technical events such as Webinars, Workshops, FOP etc..</li>
                    <li>Any other assignments by the management from Time to time.</li>                    
                </ol>    
                <p></p>
                <HeadingThree data={this.InchargesHeading1}></HeadingThree>
                <p></p>
                 <ol style={{textAlign:"justify", lineHeight:"1.7em",fontSize:"13"}}>
                <li>Dr. K K Rajan, Development of Level Sensor for Lead Lithium loop System (2017), 33.085 Lakhs, Department of Atomic Energy & Board of Research in Nuclear Science.</li>
                <li>Mr. Eldhose Kurian, V-Rex Lifting Equipment (2019), Rs.20000/-, Kerala State Council for Science, Technology and Environment (KSCSTE).</li>
                <li>Mr. Unnikrishnan T G, Fully Automatic Weed Controller (2019), Rs.20000/-, Kerala State Council for Science, Technology and Environment (KSCSTE).</li>
                <li>Mr. Basil Baby, KISSAN - DHO (Pineapple Planter Machine) (2019), Rs.20000/-, Kerala State Council for Science, Technology and Environment (KSCSTE).</li>
                <li>Mr. Sivadas T Nair, IGNITE-Multi grade learning centre (2020), 3.72 Lakhs, IEEE SIGHT.</li>
                <li>Mr. Anish M Jose, "Let's Unchain It”, for initializing automatic hand sanitizer and automatic tap at Adimali Taluk Hospital (2020), 1.62 Lakhs, IEEE SIGHT.</li>
                <li>Mr. Anish M Jose, "Smart Class Room in the Woods" installed smart class Room at Kunjipara Tribal settlement Colony School in Kuttampuzha, Kothamangalam (2020), 3.27Lakhs, IEEE SIGHT.</li>
                <li>Dr. Cyriac M Odackal, Stroke Rehab & Exercising Glove (2020), Rs.10000/-, Kerala State Council for Science, Technology and Environment (KSCSTE).</li>
                <li>Ms. Anu C Kunjachan, ATM theft prevention and security system when surveillance camera are cut and made out of order (2020), Rs.10000/-, Kerala State Council for Science, Technology and Environment (KSCSTE).</li>
                <li>Mr. Eldhose Kurian, Portable Nutmeg Separator- NutX (2020), Rs.10000/-, Kerala State Council for Science, Technology and Environment (KSCSTE).</li>
                <li>Mr. Eldhose Kurian, Portable Nutmeg Separator- NutX (2020), Rs.7000/-, Malayala Manorama & Startup Valley Amal Jyothi TBI & Makerhub IEDC, Amal Jyothi College of Engineering.</li>
                <li>Mr. Nibin B, Robotic Assist for Walking Disability (2020), Rs.10000/-, Kerala State Council for Science, Technology and Environment (KSCSTE).</li>
                </ol>            
                
               
                
            </div>
        );
    }
}

export default Profile;