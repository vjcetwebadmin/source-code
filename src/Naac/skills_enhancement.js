
import React from "react";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import ImageOne from "../Components/Images/ImageOne";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "../FacilitiesPageContainers/styles.css";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne";

class powerandbackup extends React.Component {
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


    InstiBackupTitle = {
        instanceID: "InstiBackupTitle",
        title: "Capacity building and skills enhancement initiatives"
    };
    maincontent = {
        instanceID: "maincontent",
        title: "Climate change, energy security and environmental pollution have evolved as major challenges globally. The increase in Green House Gas (GHG) emissions aggravates it further.  The main composition of GHG is CO2 and the major source for man-made CO2 emission is the burning of fossil fuel, predominantly by thermal power plants.  Thermal power plants generate 70% of electricity utilized in India. The challenge is to replace the fuels which emits GHG with clean sources like solar energy. The pronounced need to check global warming calls for energy efficiency enhancement; and adoption of emission free, eco-friendly energy generation technologies. The college has dedicated a lot of effort in this direction and here are some of its efforts."
    };


    WheelTitle1 = {
        instanceID: "WheelTitle1",
        title: "Soft Skill Development Programmes"
    };
    wheelcontent = {
        instanceID: "wheelcontent",
        title: "Soft skills, personal traits development programmes are tailored into the academic schedule for the students. Professional help is sought from external agencies and from well experienced faculty at our institution to conduct these programmes as to prepare students to play efficiently the crucial role in the corporate world."
    };
    wheelgrid1 = {
        instanceID: "wheelgrid1",
        image: "naac/Skills/skill1.jpg",
        width: "60%"
    }; 
    wheelgrid2 = {
        instanceID: "wheelgrid2",
        image: "naac/Skills/skill2.jpg",
        width: "60%"
    }; 
    
    RainTitle1 = {
        instanceID: "RainTitle1",
        title: "Language and Communication Skills Development Initiatives"
    };
    raincontent = {
        instanceID: "raincontent",
        title: "Professional communication courses are designed and conducted as an effective tool for undergraduates to communicate efficiently and clearly. Various training programmes like Technical communication, Formal correspondence, Public speaking, and leadership skills are organised. Besides, GD practice, resume preparation, IELTS course and personal grooming sessions conducted contribute to the general progress of all students."
    };
    rainimage1 = {
        instanceID: "rainimage1",
        image: "naac/Skills/GD1.jpg",
        width: "60%"
    }; 
 

    sewageTitle1 = {
        instanceID: "sewageTitle1",
        title: "Life Skills"
    };
    sewagecontent = {
        instanceID: "sewagecontent",
        title: "Kaizen…continuous improvement! Every student has immense potentials just asking for opportunities to polish and transform one’s skills, to examine and utilise information gained, to develop personal management skills and to interact and deal effectively with the challenges of day to day life. At Viswajyothi College, we strive for the holistic development of every student through various skill development initiatives as well as value added training programmes arranged in a well-paced manner."
    };
  

    
    wasteTitle1 = {
        instanceID: "sewageTitle1",
        title: "ICT/Computing Skills"
    };
    wastecontent = {
        instanceID: "wastecontent",
        title: "Computer literacy is a necessity as a survival tool in the present day world. Customized software training programmes are arranged to enable students to confidently use computer, gather information, presenting and initiating online communication. Amble opportunity is provided to use computer operating systems to access software programmes, internet facility, and to manage other basic functions of computer."
    };
    wasteimage1 = {
        instanceID: "wasteimage1",
        image: "naac/Skills/compu1.jpg",
        width: "60%"
    }; 
 
    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <div className="contain">
                    <HeadingOne data={this.InstiBackupTitle}/>

                    <div className="bodyContainer">
                        <BodyOneJustified data={this.maincontent} />
                        <HeadingTwo data={this.WheelTitle1}/>
                        <BodyOneJustified data={this.wheelcontent} />
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.wheelgrid1}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}></p>
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.wheelgrid2}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Soft skill training Sessions</p>
     

                        <HeadingTwo data={this.RainTitle1}/>
                        <BodyOneJustified data={this.raincontent} />

                       <p style={{textAlign:"center"}}><ImageOne data={this.rainimage1}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>GD Practice</p>
    
                                                          

                        <HeadingTwo data={this.sewageTitle1}/>
                        <BodyOneJustified data={this.sewagecontent} />
                       
                      
                        <HeadingTwo data={this.wasteTitle1}/>
                        <BodyOneJustified data={this.wastecontent} />
                       
                        <p style={{textAlign:"center"}}><ImageOne data={this.wasteimage1}/></p>
                        <p style={{textAlign:"center",fontSize:"14px",fontWeight:"bold"}}>Photos of the Event</p>
                                         
             
                    </div>
                </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default powerandbackup;