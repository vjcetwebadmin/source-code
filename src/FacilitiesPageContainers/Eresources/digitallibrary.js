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

      NsslogoImage5 = {
        instanceID: "NsslogoImage5",
        image: "eresource/digital.png",
        width: "50%"
      };


    MajoreventsTitle2 = {
        instanceID: "MajoreventsTitle2",
        title: "Digital Library"
    };
 

    render() {
        return (
        <div > 
            <HeadingTwo data={this.MajoreventsTitle2} className="Heading" />
                <div className="facultyC">
                    <div><a href="http://117.239.154.83/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage5}/></a> </div>     
                </div>  
          </div>
        )
    }

}

export default nss;