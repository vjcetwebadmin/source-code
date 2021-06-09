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
                        <p className="paraheading"><a href="http://117.239.154.83/" target="_blank" rel="noopener noreferrer">View Webpage</a></p>

                        <HeadingTwo data={this.MajoreventsTitle3} className="Heading" /> 
                        <p className="paraheading"><a href="http://117.239.154.83:83/" target="_blank" rel="noopener noreferrer">View Webpage</a></p>

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

                        <HeadingTwo data={this.MajoreventsTitle5} className="Heading" />
                        <p className="paraheading"><a href="https://drive.google.com/file/d/1FziOAoudmAdNRTChx4XkhFCZKtSs6rcb/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Webpage</a></p>
                        <HeadingTwo data={this.MajoreventsTitle6} className="Heading" />
                        <p className="paraheading"><a href="https://drive.google.com/drive/folders/19BBRotjhvKD83sxI9c7I82zvIRduwlxE" target="_blank" rel="noopener noreferrer">View Webpage</a></p>
                 </div>
                 </div>
                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default nss;