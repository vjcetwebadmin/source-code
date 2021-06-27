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

      NsslogoImage7 = {
        instanceID: "NsslogoImage7",
        image: "eresource/pptvideo.jpg",
        width: "30%"
      };
      NsslogoImage6 = {
        instanceID: "NsslogoImage7",
        image: "eresource/nptel.png",
        width: "30%"
      };
 
    MajoreventsTitle6 = {
        instanceID: "MajoreventsTitle6",
        title: "PPTs & Videos"
    };

    render() {
        return (
                <div > 
                        <HeadingTwo data={this.MajoreventsTitle6} className="Heading" />
                        <div className="facultyC">
                            <div><a href="https://drive.google.com/drive/folders/19BBRotjhvKD83sxI9c7I82zvIRduwlxE" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage7}/></a> </div>                                              
                            <div><a href="ftp://nptel:nptel@202.88.251.252/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage6}/></a> </div>                                              
                        </div> 
                 </div>

        )
    }

}

export default nss;