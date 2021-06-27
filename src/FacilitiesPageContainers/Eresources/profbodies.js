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

    MajoreventsTitle4 = {
        instanceID: "MajoreventsTitle4",
        title: "Professional bodies"
    };

    render() {
        return (

                <div > 
                       <HeadingTwo data={this.MajoreventsTitle4} className="Heading" /> 
                        <p className="paraeresource"><a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE (Institute of Electrical and Electronics Engineers)</a></p>
                        <p className="paraeresource"><a href="http://csi-india.org.in/" target="_blank" rel="noopener noreferrer">CSI (Computer Society of India)</a></p>
                        <p className="paraeresource"><a href="http://www.isteonline.in/" target="_blank" rel="noopener noreferrer">ISTE (Indian Society for Technical Education)</a></p>
                        <p className="paraeresource"><a href="https://www.iete.org/" target="_blank" rel="noopener noreferrer">IETE (Institution of Electronics and Telecommunication Engineers)</a></p>
                        <p className="paraeresource"><a href="https://igbc.in/igbc/" target="_blank" rel="noopener noreferrer">IGBC ( Indian green Building Council)</a></p>
                        <p className="paraeresource"><a href="https://imetsociety.org/" target="_blank" rel="noopener noreferrer">IMS ( Indian Meteorological Society)</a></p>
                        <p className="paraeresource"><a href="http://www.igs.org.in/" target="_blank" rel="noopener noreferrer">IGS (Indian Geotechnical Society)</a></p>
                        <p className="paraeresource"><a href="https://www.sae.org/" target="_blank" rel="noopener noreferrer">SAE (Society of Automotive Engineers)</a></p>
                        <p className="paraeresource"><a href="https://ishrae.in/" target="_blank" rel="noopener noreferrer">ISHRAE (Indian Society of Heating, Refrigerating and Air Conditioning Engineers)</a></p>
                        <p className="paraeresource"><a href="https://www.kma.org.in/" target="_blank" rel="noopener noreferrer">KMA  (Kerala Management Association)</a></p>
                        <p className="paraeresource"><a href="https://nipm.in/" target="_blank" rel="noopener noreferrer">NIPM (National Institute of Personnel Management – India)</a></p>
                  </div>

        )
    }

}

export default nss;