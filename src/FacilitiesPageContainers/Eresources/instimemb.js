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

  
    MajoreventsTitle8 = {
        instanceID: "MajoreventsTitle8",
        title: "Institutional Memberships "
    };   


    render() {
        return (

                <div > 
                                              
                        <HeadingTwo data={this.MajoreventsTitle8} className="Heading" /> 
                        <div className="facultyC" style={{textAlign:"left"}}>
                            <div style={{textAlign:"center"}}><a href="http://164.100.247.30" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage12}/>Link 1</a> </div> 
                            {/*<div style={{textAlign:"center"}}><a  href="www.delnet.nic.in" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage12}/>Link 2</a> </div>*/}
                            <div><a href="http://ndl.iitkgp.ac.in" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage13}/></a> </div>
                        </div>   
 
          </div>
        )
    }

}

export default nss;