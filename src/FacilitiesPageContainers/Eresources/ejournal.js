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
      NsslogoImage12= {
        instanceID: "NsslogoImage12",
        image: "eresource/PUB_5.jpg",
        width: "60%"
      };




    MajoreventsTitle7 = {
        instanceID: "MajoreventsTitle7",
        title: "e-Journals"
    };   


    render() {
        return (
                <div > 

                        <HeadingTwo data={this.MajoreventsTitle7} className="Heading" /> 
                        <div className="facultyC">
                            <div><a href="http://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage8}/></a> </div> 
                            {/*<div><a href="http://ascelibrary.org" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage9}/></a> </div>
                            <div><a href="http://asmedigitalcollection.asme.org" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage10}/></a> </div>*/}
                            <div><a href="https://www.sciencedirect.com/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage12}/></a> </div>
                            <div><a href="https://search.ebscohost.com" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage11}/></a> </div>                                             
                        </div>                                                
 
          </div>
        )
    }

}

export default nss;