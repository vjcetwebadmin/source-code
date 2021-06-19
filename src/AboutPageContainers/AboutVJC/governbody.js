import React, { Component } from "react";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../../Components/Texts/HeadingOne";
import ImageOne from "../../Components/Images/ImageOne";
/*import GovData from "./GovernData"
import BodyThree from "../../Components/Texts/BodyThree";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import HeadingThree from "../../Components/Texts/HeadingThree";*/
import "./About.css";
import "../../Components/Tables/tableformat.css";


class Iedc extends Component {
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

    Govern1 = {
        instanceID: "Govern1",
        image: "KeyFunctionaries/manager.jpg",
        width: "50%",
        mianhead:"MANAGER",
        name:"Msgr. Cherian Kanjirakombil",
        content: "Manager"
      };
      Govern2 = {
        instanceID: "Govern2",
        image: "KeyFunctionaries/director.jpg",
        width: "50%",
        mianhead:"DIRECTOR",
        name:"Rev. Fr.  Paul Nedumpurath",
        content: "Director"
      };


    IedcHeading = {
        instanceID: "IedcHeading",
        title: "Organogram"
    }
    CompanyHeading = {
        instanceID: "IedcHeading",
        title: "Companies Functioning Form V-BIC"
    }
    LogoImagedata = {
        instanceID: "LogoImage",
        image: "ED/vbic.jpg",
        width: "15%"
    }
    IedcBody1 = {
        instanceID: "IedcBody1",
        title: "Realizing the need of entrepreneur development among the students"
    }
    InchargesHeading = {
        instanceID: "InchargesHeading",
        title: "V-BIC Team"
      };
    ObjectiveHeading = {
        instanceID: "ObjectiveHeading",
        title: "Objectives"
      };
    ReserchWork1 = {
        instanceID: "ReserchWork1",
        title: "Objectives of the venture,  V-BIC  is to achieve a transformation of minds of the students from being job-seekers to entrepreneurs themselves and become  job providers by effectively utilizing the theoretical and practical knowledge they are  acquiring  from the institution. Students and faculty will be encouraged to find innovative solutions to social problems."
    }
      FunctionHeading = {
        instanceID: "FunctionHeading",
        title: "Our Thrust Areas"
      };
    ReserchBody2 = {
        instanceID: "ReserchBody2",
        title: "Some major initiatives taken by CRD are :"
    }

    OrnogramImg = {
        instanceID: "OrnogramImg",
        image: "Organogramimg2.jpg",
        width: "85%"
    }
   
    render() {
        return (
            <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <HeadingOne data={this.IedcHeading} />
                <div className="inner-para" style={{margin:"auto",textAlign:"center"}}>
                   {/*
                   if photo needed
                    <div className="faculty">
                        <div className="facultyCon" >
                            <div style={{width:"80%",textAlign:"center"}}>
                                <GovData data={this.Govern1} />
                            </div>
                            <div style={{width:"80%",textAlign:"center"}}>
                                <GovData data={this.Govern2} />
                            </div>
                        </div>if photo needed
                   */}
                   </div>
                   
                 {/*<p align="center"><ImageOne data={this.LogoImagedata} /></p>
                <ImageOne data={this.ResearchImg}></ImageOne> */}
                {/*<BodyThree data={this.IedcBody1} /><br />
                <HeadingThree data={this.InchargesHeading} /> */}
                
                <div className="inner-para">
                <table id="organogramtable">
                    <tr><td colSpan="2" className="organogramst1">Patron</td></tr>
                    <tr><td style={{width:"3%"}}></td><td>Mar George Madathikandathil, Bishop, Kothamangalam Diocese</td></tr>
                    <tr><td colSpan="2" className="organogramst1">Board of Trustees (2020-2023)</td></tr>
                    <tr><td></td><td>1. Msgr. Dr. Cherian Kanjirakomnpil</td></tr>
                    <tr><td></td><td>2. Rev. Fr. Paul Nedumpurathu</td></tr>
                    <tr><td></td><td>3. Rev. Fr. Jose Kuzhikanniyil</td></tr>
                    <tr><td></td><td className="organogramsub">Elected Members from Institutional Trustees</td></tr>
                    <tr><td></td><td>4. Rev. Fr. John Mundackal</td></tr>
                    <tr><td></td><td>5. Rev. Fr. George Vallomkunnel</td></tr>
                    <tr><td></td><td>6. Rev. Fr. Kuriakose Kodakallil</td></tr>
                    <tr><td></td><td>7. Rev. Fr. Thomas Cheruparambil</td></tr>
                    <tr><td></td><td>8. Rev. Dr. George Thanathuparambil</td></tr>
                    <tr><td></td><td>9. Rev. Dr. Stanly Pulprayil</td></tr>
                    <tr><td></td><td>10 .Rev. Fr. Joseph Mulanjanany</td></tr>
                    <tr><td></td><td>11. Rev. Fr. Jose Ezhanikatt</td></tr>
                    <tr><td></td><td>12 Rev. Fr. Francis Kannadan</td></tr>
                    <tr><td></td><td>13. Rev. Sr. Dr. Christy, SH</td></tr>
                    <tr><td></td><td>14. Rev. Sr. Kochurani, SD</td></tr>
                    <tr><td></td><td>15. Rev. Sr. Theodocia, CSN</td></tr>
                    <tr><td></td><td className="organogramsub">Elected Members from Hereditary Trustees</td></tr>
                    <tr><td></td><td>16. Adv. K Francis George</td></tr>
                    <tr><td></td><td>17. Mr. Johnson P</td></tr>
                    <tr><td></td><td>18. Dr. K V Thomas</td></tr>
                    <tr><td></td><td>19. Adv. Johny Nelloor</td></tr>
                    <tr><td></td><td>20. Mr. Lukachan Olickal</td></tr>
                    <tr><td></td><td>21. Rev. Fr. Thomas Malekudy</td></tr>
                    <tr><td></td><td>22. Adv. K T Thomas</td></tr>
                    <tr><td></td><td>23. Mr. V V Kurian</td></tr>
                    <tr><td></td><td>24. Mr. K T Mathew</td></tr>
                    <tr><td></td><td>25. Prof. T S Chacko</td></tr>
                    <tr><td></td><td>26. Mr. Joseph Varghese</td></tr>
                    <tr><td></td><td>27. Mr. C P Vincent</td></tr>
                    <tr><td colSpan="2" className="organogramst1">Executive Committee (2020-2023)</td></tr>
                    <tr><td></td><td>1. Msgr. Dr. Cherian Kanjirakomnpil</td></tr>
                    <tr><td></td><td>2. Adv. K T Thomas</td></tr>
                    <tr><td></td><td>3. Adv. K Francis George</td></tr>
                    <tr><td></td><td>4. Mr. K T Mathew</td></tr>
                    <tr><td></td><td>5. Mr. Lukachan Olickal</td></tr>
                    <tr><td></td><td>6. Rev. Fr. Paul Nedumpurathu</td></tr>
                    <tr><td></td><td>7. Adv. Johny Nelloor</td></tr>
                    <tr><td></td><td>8. Mr. V V Kurian</td></tr>
                    <tr><td></td><td>9. Rev. Fr. John Mundackal</td></tr>
                    <tr><td  colSpan="2" className="organogramst1">Governing Body (2020-2021)</td></tr>
                    <tr><td></td><td>1. Msgr. Dr. Cherian Kanjirakomnpil</td></tr>
                    <tr><td></td><td>2. Rev. Fr. Thomas Malekudy</td></tr>
                    <tr><td></td><td>3. Rev. Dr. George Oliapuram</td></tr>
                    <tr><td></td><td>4. Adv. K T Thomas</td></tr>
                    <tr><td></td><td>5. Adv. K Francis George</td></tr>
                    <tr><td></td><td>6. Mr. Lukachan Olickal</td></tr>
                    <tr><td></td><td>7. Rev. Fr. Paul Nedumpurathu</td></tr>
                    <tr><td></td><td>8. Rev. Dr. George Thanathuparambil</td></tr>
                    <tr><td></td><td>9. Mr. Isaac Joseph Kottukapilly</td></tr>
                    <tr><td></td><td>10. Nominee of AICTE</td></tr>
                    <tr><td></td><td>11. Nominee of DTE</td></tr>
                    <tr><td></td><td>12. Nominee of KTU</td></tr>
                    <tr><td></td><td>13. Dr. K K Rajan</td></tr>
                    <tr><td colSpan="2" className="organogramst1">Advisory Board (2020-2021)</td></tr>
                    <tr><td></td><td>1. Msgr. Dr. Cherian Kanjirakomnpil</td></tr>
                    <tr><td></td><td>2. Rev. Dr. George Oliapuram</td></tr>
                    <tr><td></td><td>3. Rev. Fr. Thomas Malekudy</td></tr>
                    <tr><td></td><td>4. Rev. Fr. Paul Nedumpurathu</td></tr>
                    <tr><td></td><td>5. Dr. Cyriac Thomas</td></tr>
                    <tr><td></td><td>6. Rev. Dr. George Thanathuparambil</td></tr>
                    <tr><td></td><td>7. Sri. M Joseph IAS(Retrd)</td></tr>
                    <tr><td></td><td>8. Adv. K Francis George</td></tr>
                    <tr><td></td><td>9. Prof. Job Kurien</td></tr>
                    <tr><td></td><td>10. Prof. T L Jose</td></tr>
                    <tr><td></td><td>11. Dr. Paulose Jacob</td></tr>
                    <tr><td></td><td>12. Prof. Paul Pudussery</td></tr>
                    <tr><td></td><td>13. Mr. Isaac Joseph Kottukapilly</td></tr>
                    <tr><td></td><td>14. Dr. Abu Sebastian</td></tr>
                    <tr><td></td><td>15. Dr. K K Rajan</td></tr>
                    <tr><td></td><td></td></tr>
                    <tr><td></td><td></td></tr>
                    <tr><td colSpan="2" className="organogramst1" style={{textAlign:"center"}}>ORGANOGRAM OF VJCET</td></tr>
                    <tr><td colSpan="2"></td></tr>
                 </table> 
                <p style={{textAlign:"center"}}><ImageOne data={this.OrnogramImg}></ImageOne></p> 
 
            </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (
                    <MenuOverlay closeMenuFunction={this.closeMenu} />
                ) : (
                        ""
                    )}
            </div>
        );
    }
}

export default Iedc;