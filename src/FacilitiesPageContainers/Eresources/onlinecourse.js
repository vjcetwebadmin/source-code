import React from "react";
// import ImageOne from "../Components/Images/ImageOne";
import HeadingOne from "../../Components/Texts/HeadingOne";
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
        width: "70%"
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

      NsslogoImage8= {
        instanceID: "NsslogoImage8",
        image: "eresource/ieee.jpg",
        width: "60%"
      };
      NsslogoImage9 = {
        instanceID: "NsslogoImage9",
        image: "eresource/asce.jpg",
        width: "40%"
      };
      NsslogoImage10 = {
        instanceID: "NsslogoImage10",
        image: "eresource/asme.jpg",
        width: "60%"
      };
      NsslogoImage11= {
        instanceID: "NsslogoImage11",
        image: "eresource/ebsco.jpg",
        width: "30%"
      };
      NsslogoImage12 = {
        instanceID: "NsslogoImage12",
        image: "eresource/delnet.jpg",
        width: "50%"
      };
      NsslogoImage13 = {
        instanceID: "NsslogoImage13",
        image: "eresource/ndli.jpg",
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
    MajoreventsTitle7 = {
        instanceID: "MajoreventsTitle7",
        title: "e-Journals"
    };   
    MajoreventsTitle8 = {
        instanceID: "MajoreventsTitle8",
        title: "Institutional Memberships "
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
        <div > 
              <HeadingTwo data={this.MajoreventsTitle1} className="Heading" />
              <br></br>
              <div className="facultyC">
                  <div><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage2}/></a> </div>                        
                  <div><a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage1}/></a> </div>
                  <div><a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage}/></a> </div>
                  <div><a href="http://www.udemy.com/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage4}/></a> </div>
                  <div><a href="https://swayam.gov.in/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage3}/></a> </div>
                  
              </div>
  
          </div>
        )
    }

}

export default nss;