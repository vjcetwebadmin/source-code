import React from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
//import HeadingFour from "../Components/Texts/HeadingFour";
import ImageOne from "../../Components/Images/ImageOne";
import "./Research.css"


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
        image: "eresource/nptel.png",
        width: "35%"
      };
      NsslogoImage1 = {
        instanceID: "NsslogoImage1",
        image: "eresource/edx.png",
        width: "35%"
      };
      NsslogoImage2 = {
        instanceID: "NsslogoImage2",
        image: "eresource/ursera.png",
        width: "42%"
      };
      NsslogoImage3 = {
        instanceID: "NsslogoImage3",
        image: "eresource/swayam.png",
        width: "60%"
      };
      NsslogoImage4 = {
        instanceID: "NsslogoImage4",
        image: "eresource/uacademy.png",
        width: "50%"
      };
      NsslogoImage5 = {
        instanceID: "NsslogoImage5",
        image: "eresource/digital.png",
        width: "40%"
      };
      NsslogoImage6 = {
        instanceID: "NsslogoImage6",
        image: "eresource/onlinebs.png",
        width: "50%"
      };
      NsslogoImage7 = {
        instanceID: "NsslogoImage7",
        image: "eresource/pptvideo.jpg",
        width: "30%"
      };


      ResearchHeading = {
        instanceID: "ResearchHeading",
        title: "e-Resources"
    };

    MajoreventsTitle = {
        instanceID: "MajoreventsTitle",
        title: ""
    };
    MajoreventsTitle1 = {
        instanceID: "MajoreventsTitle1",
        title: "Online Courses"
    };
    MajoreventsTitle2 = {
        instanceID: "MajoreventsTitle2",
        title: "Digital Library"
    };
    MajoreventsTitle3 = {
        instanceID: "MajoreventsTitle3",
        title: "Online Book Search"
    };
    MajoreventsTitle4 = {
        instanceID: "MajoreventsTitle4",
        title: "Professional bodies"
    };
    MajoreventsTitle5 = {
        instanceID: "MajoreventsTitle5",
        title: "FDP & Webinars"
    };
    MajoreventsTitle6 = {
        instanceID: "MajoreventsTitle6",
        title: "PPTs & Videos"
    };
    EventTitle1 = {
        instanceID: "EventTitle1",
        title: "DISCIPLINE AND ANTI RAGGING"
    };
    EventContent1 = {
        instanceID: " EventContent1",
        title: ""
    }   

    render() {
        return (
            <React.Fragment>
                <div className="HomePage">
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />  
                <HeadingOne data={this.ResearchHeading}></HeadingOne>  
                <div className="contain"> 
                    <HeadingTwo data={this.MajoreventsTitle1} className="Heading" />
                    <br></br>
                    <div className="facultyContent">
                        <div><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage2}/></a> </div>                        
                        <div><a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage1}/></a> </div>
                        <div><a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage}/></a> </div>
                        <div><a href="http://www.udemy.com/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage4}/></a> </div>
                        <div><a href="https://swayam.gov.in/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage3}/></a> </div>
                       
                    </div>
                    <HeadingTwo data={this.MajoreventsTitle2} className="Heading" />
                        <div className="facultyContent">
                            <div><a href="http://117.239.154.83/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage5}/></a> </div>                                              
                        </div>
                        {/*<p className="paraheading"><a href="http://117.239.154.83/" target="_blank" rel="noopener noreferrer">View Webpage</a></p>*/}

                        <HeadingTwo data={this.MajoreventsTitle3} className="Heading" /> 
                        <div className="facultyContent">
                            <div><a href="http://117.239.154.83:83/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage6}/></a> </div>                                              
                        </div>                         
                        {/* <p className="paraheading"><a href="http://117.239.154.83:83/" target="_blank" rel="noopener noreferrer">View Webpage</a></p>*/}

                        <HeadingTwo data={this.MajoreventsTitle4} className="Heading" /> 
                        <p className="paraheading"><a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE (Institute of Electrical and Electronics Engineers)</a></p>
                        <p className="paraheading"><a href="http://csi-india.org.in/" target="_blank" rel="noopener noreferrer">CSI (Computer Society of India)</a></p>
                        <p className="paraheading"><a href="http://www.isteonline.in/" target="_blank" rel="noopener noreferrer">ISTE (Indian Society for Technical Education)</a></p>
                        <p className="paraheading"><a href="https://www.iete.org/" target="_blank" rel="noopener noreferrer">IETE (Institution of Electronics and Telecommunication Engineers)</a></p>
                        <p className="paraheading"><a href="https://igbc.in/igbc/" target="_blank" rel="noopener noreferrer">IGBC ( Indian green Building Council)</a></p>
                        <p className="paraheading"><a href="https://imetsociety.org/" target="_blank" rel="noopener noreferrer">IMS ( Indian Meteorological Society)</a></p>
                        <p className="paraheading"><a href="http://www.igs.org.in/" target="_blank" rel="noopener noreferrer">IGS (Indian Geotechnical Society)</a></p>
                        <p className="paraheading"><a href="https://www.sae.org/" target="_blank" rel="noopener noreferrer">SAE (Society of Automotive Engineers)</a></p>
                        <p className="paraheading"><a href="https://ishrae.in/" target="_blank" rel="noopener noreferrer">ISHRAE (Indian Society of Heating, Refrigerating and Air Conditioning Engineers)</a></p>
                        <p className="paraheading"><a href="https://www.kma.org.in/" target="_blank" rel="noopener noreferrer">KMA  (Kerala Management Association)</a></p>
                        <p className="paraheading"><a href="https://nipm.in/" target="_blank" rel="noopener noreferrer">NIPM (National Institute of Personnel Management – India)</a></p>

                        <HeadingTwo data={this.MajoreventsTitle6} className="Heading" />
                        <div className="facultyContent">
                            <div><a href="https://drive.google.com/drive/folders/19BBRotjhvKD83sxI9c7I82zvIRduwlxE" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage7}/></a> </div>                                              
                        </div>
                        {/*<p className="paraheading"><a href="https://drive.google.com/drive/folders/19BBRotjhvKD83sxI9c7I82zvIRduwlxE" target="_blank" rel="noopener noreferrer">View Webpage</a></p>*/}


                        <HeadingTwo data={this.MajoreventsTitle5} className="Heading" />
                        {/*<p className="paraheading"><a href="https://drive.google.com/file/d/1FziOAoudmAdNRTChx4XkhFCZKtSs6rcb/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Webpage</a></p>*/}

                        <p className="paraheading">AICTE sponsored One Week Online Short Term Training Programme (STTP) on "Iot Based Manufacturing and Design - Challenges and Opportunity” Phase 1 - 23rd Nov - 28th Nov  2020-<a href="https://drive.google.com/file/d/1zd-WauHsGH8Rm7bC_62Dx4Y8CN0xkDK0/view?usp=sharing" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">AICTE sponsored One Week Online Short Term Training Programme (STTP) on  "Iot Based Manufacturing and Design - Challenges and Opportunity” Phase 2 - Phase 2: 14th to 19th December ‘2020-<a href="https://www.youtube.com/watch?v=z3SgoMmgUS0" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">Five Days Online Faculty Development Program (FDP) on    BLOCKCHAIN from 19-23 OCT 2020 sponsored by AICTE Training and Learning (ATAL) Academy- <a href="https://drive.google.com/drive/folders/1RkR7HNjZNIDzO1AcJEF0wip9i7Fj2Gf2?usp=sharing" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">KTU sponsored FDP on "Advancements in Systems for Electric and Hybrid Vehicles ” at VJCET (19th - 23rd April 2021)-<a href="https://drive.google.com/drive/folders/17LgPXYJSpBqrLMVxAB-gAXCctBdVnwN2?usp=sharing" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">Webinar on “How to File National and International Patents” conducted on 17-10-2020-<a href="https://www.youtube.com/watch?v=blkWwvnqLmM" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">Webinar on “Introduction to Foss Cell” conducted on 09-12-2020-<a href="https://www.youtube.com/watch?v=eA-Sh7CWtm8" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">Webinar on “Familiarizing Yourself with the Field” conducted on 17-11-2020.-<a href="https://www.youtube.com/watch?v=fOYq8_fcvtE" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">Webinar on “Indian Space: An Inspiring Story” conducted on 30-12-2020-<a href="https://www.youtube.com/watch?v=ITRAGitpxjk" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">Webinar on “Interactive Session with "Successful Start-up Founders" conducted on 03-03-2021<a href="https://www.youtube.com/watch?v=mTdjVYtqLdo" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">Webinar on “Power Transmission and Distribution in Kerala” conducted on 30-12-2020<a href="https://www.youtube.com/watch?v=T4HAuOnY4Bk" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">Webinar on “Building a Data Science Portfolio” conducted on 09-09-2020-<a href="https://www.youtube.com/watch?v=TCt1KPp8d9A" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">Webinar on “Introduction to Development Boards” conducted on 07-09-2020- <a href="https://youtu.be/_Sy2263NlYQ" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">Webinar on “How to Be Equipped as a Promising Professional” conducted on 27-09-2020-<a href="https://www.youtube.com/watch?v=51g01qkpz4U" target="_blank" rel="noopener noreferrer">click here</a></p>
                        <p className="paraheading">Webinar on “How to Market Yourself in a Competitive World” conducted on 15-07-2020-<a href="https://www.youtube.com/watch?v=gnP6M2I0tTg" target="_blank" rel="noopener noreferrer">click here</a></p>
                     
                 </div>
                 </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default nss;