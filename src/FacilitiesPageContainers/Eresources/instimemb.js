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
        width: "60%"
      };
      NsslogoImage13 = {
        instanceID: "NsslogoImage13",
        image: "eresource/ndli.jpg",
        width: "50%"
      };
      NsslogoImage14 = {
        instanceID: "NsslogoImage14",
        image: "eresource/ndliclub.png",
        width: "65%"
      };
      NsslogoImage6 = {
        instanceID: "NsslogoImage6",
        image: "eresource/shodu1.png",
        width: "80%"
      };
      NsslogoImage7 = {
        instanceID: "NsslogoImage7",
        image: "eresource/shodu2.png",
        width: "60%"
      };
 
    MajoreventsTitle8 = {
        instanceID: "MajoreventsTitle8",
        title: "Institutional Memberships "
    };   


    render() {
        return (

                <div > 
                                              
                        <HeadingTwo data={this.MajoreventsTitle8} className="Heading" /> 
                        <div className="facultyC">
                            <div ><a href="http://www.delnet.in/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage12}/></a> </div> 
                            <div ><a  href="http://ndl.iitkgp.ac.in" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage14}/></a> </div>
                            <div><a href="https://club.ndl.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage13}/></a> </div>
                            <div><a href="https://ess.inflibnet.ac.in/oes/selfsubscribed.php" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage6}/></a> </div>                                              
                            <div><a href="https://shodhganga.inflibnet.ac.in/" target="_blank" rel="noopener noreferrer"><ImageOne data={this.NsslogoImage7}/></a> </div>                                                                                       

                        </div>   
 
          </div>
        )
    }

}

export default nss;