import React from "react";
//import HeadingThree from "../Components/Texts/HeadingThree";
//import ImageOne from "../Components/Images/ImageOne";
//import BodyOneJustified from "../Components/Texts/BodyOneJustified";

import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";
import HeadingOne from "../Components/Texts/HeadingOne";

class ApprovalLetters extends React.Component {
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


    CCCNATitle = {
        instanceID: "CCCTitle",
        title: "Approval Letters"
    };
    CCCTitle = {
        instanceID: "CCCTitle",
        title: "APJ Abdul Kalam Technological University"
    };
    
    WifiTitle = {
        instanceID: "CCCTitle",
        title: "AICTE"
    };
    ServerTitle = {
        instanceID: "Servernames",
        title: "PRINCIPAL"
    };
    CCCContent1 = {
        instanceID: "CCCContent1",
        title: "Viswajyothi was established with the aim of imparting quality professional education to aspiring students. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis. Our Alumni who have been placed at respectable posts in MNCs around the world has done us proud. We have been able to maintain the ties with a number of respectable MNCs which aids our placement.VJCET essentially has excellent infrastructure, ambiance conducive to learning, well equipped laboratories and workshops, comfortable hostels for gents and ladies,state-of-art-library and loads of other facilities.We have been serving the society for the past ten years and with steady steps, we continue our march forward. We look forward to meeting you at VJCET."
    }
    CCCContent2 = {
        instanceID: "CCCContent2",
        title: "The biggest challenge in front of a student is to choose the best. We endeavour to provide the best and to bring out what is best in our students. We strive to combine judiciously use of technology and moral values, employability and equity in the transformation of young minds. Already into the eighteenth year of excellence and continuing its pursuit of betterment Viswajyothi College of Engineering and Technology has earned a niche for itself in the engineering educational sector in the country. An amazing response of students from the very inception, consistent result with university ranks, state of the art infrastructure, quality faculty members, impetus given to research and development, campus recruitment and placement record, mentoring for students, sprawling campus and various student services ensure our credibility over the years."
    }
    CCCContent3 = {
        instanceID: "CCCContent3",
        title: "Viswajyothi College of Engineering & Technology, Vazhakulam can boast of producing competent engineers capable of facing the challenges in the technical field with zeal to social commitment and ethical values. Started only eighteen years back, our institution commands a formidable position amongst the various engineering colleges. This is achieved by excellent infrastructural facilities combined with the team work of enthusiastic management, dedicated faculty members, committed laboratory & workshop staff members, sincere administrative staff members,motivating alumni and dynamic students. Excellent track records in the University examinations and the considerable number of placements reveal the effective co-ordination of all these resources. This is not an end in itself. We are striving hard to make the vision of the institution “Moulding Engineers par Excellence with integrity, fairness and human values” a reality."
    }
    CCCImagedata = {
        instanceID: "CCCVjcImage",
        image: "KeyFunctionaries/manager.jpg",
        width: "50%"
    }
    DImagedata = {
      instanceID: "DImage",
      image: "KeyFunctionaries/director.jpg",
      width: "50%"
    }
    PImagedata = {
      instanceID: "PImage",
      image: "KeyFunctionaries/principal.jpg",
      width: "50%"
    }   

    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
                <div className="contain" >
                    <HeadingOne data={this.CCCNATitle} className="Heading" />
                    
                        <table border="1"  id="tableformat1" style={{margin:"auto",width:"90%"}}>
                    {/* <tr><th style={{width:"6%"}}>#</th><th style={{width:"79%"}}>Details</th><th style={{width:"15%"}}>Download</th></tr> */}
                            <tr><th colSpan="3">AICTE</th></tr> 
                            <tr><th style={{textAlign:"center",width:"10%"}}>Sl.No</th><th style={{textAlign:"center",width:"75%"}}>Year</th><th style={{textAlign:"center",width:"15%"}}>View</th></tr>                         
                            <tr><td style={{textAlign:"center"}}>1</td><td style={{textAlign:"center"}}>2022-23</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2022.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                            <tr><td style={{textAlign:"center"}}>2</td><td style={{textAlign:"center"}}>2021-22</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2021.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                            <tr><td style={{textAlign:"center"}}>3</td><td style={{textAlign:"center"}}>2020-21</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2020.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                            <tr><td style={{textAlign:"center"}}>4</td><td style={{textAlign:"center"}}>2019-20</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2019.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                            <tr><td style={{textAlign:"center"}}>5</td><td style={{textAlign:"center"}}>2018-19</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2018.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>6</td><td style={{textAlign:"center"}}>2017-18</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2017.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>7</td><td style={{textAlign:"center"}}>2016-17</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2016.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>8</td><td style={{textAlign:"center"}}>2015-16</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2015.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>9</td><td style={{textAlign:"center"}}>2014-15</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2014.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>10</td><td style={{textAlign:"center"}}>2013-14</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2013.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                            
                            <tr><td style={{textAlign:"center"}}>11</td><td style={{textAlign:"center"}}>2012-13</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2012.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>12</td><td style={{textAlign:"center"}}>2011-12</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2011.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>13</td><td style={{textAlign:"center"}}>2010-11</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2010.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>14</td><td style={{textAlign:"center"}}>2009-10</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2009.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>15</td><td style={{textAlign:"center"}}>2008-09</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2008.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>16</td><td style={{textAlign:"center"}}>2007-08</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2007.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>17</td><td style={{textAlign:"center"}}>2006-07</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2006.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>18</td><td style={{textAlign:"center"}}>2005-06</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2005.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>19</td><td style={{textAlign:"center"}}>2004-05</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2004.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>20</td><td style={{textAlign:"center"}}>2003-04</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2003.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>21</td><td style={{textAlign:"center"}}>2002-03</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2002.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                            <tr><td style={{textAlign:"center"}}>22</td><td style={{textAlign:"center"}}>2001-02</td><td style={{textAlign:"center"}}><a href="https://vjcet.org/downloads/ApprovalLetters/2001.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        
                        </table>
                    
                   <br />
                </div>
                {/*<p align="center"><h2><a href="https://vjcet.org/downloads/about/Attachments.pdf" target="_blank" rel="noopener noreferrer"> Attachments </a></h2> </p>
                <p align="center"><h2><a href="https://vjcet.org/downloads/about/AICTE.zip" target="_blank" rel="noopener noreferrer"> Approval Letters </a></h2> </p>*/}
                <Footer data={this.HomePageFooter} /> 
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}                
            </React.Fragment>
        )
    }

}

export default ApprovalLetters;