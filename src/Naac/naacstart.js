import React from "react";
import HeadingTwo from "../Components/Texts/HeadingTwo";
/*import HeadingOne from "../Components/Texts/HeadingOne";
import ImageOne from "../Components/Images/ImageOne";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";*/
import "../FacilitiesPageContainers/styles.css"
import "../Components/Tables/tableformat.css";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";

class Library extends React.Component {
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

    LibraryTitle = {
        instanceID: "LibraryTitle",
        title: "The Central Library"
    };
    LibraryCentralTitle = {
        instanceID: "LibraryCentralTitle",
        title: "The Central Library"
    };
    LibraryDigitalTitle = {
        instanceID: "LibraryDigitalTitle",
        title: "DIGITAL LIBRARY"
    };
     LibraryDigitalResorceTitle = {
        instanceID: "LibraryDigitalResourceTitle",
        title: "E- RESOURCES"
    };

    LibraryResourceTitle = {
        instanceID: "LibraryResourceTitle",
        title: ""
    };   

    LibraryResourceTitle1 = {
        instanceID: "LibraryResourceTitle1",
        title: "Criterion-I"
    }; 
    LibraryResourceTitle2 = {
        instanceID: "LibraryResourceTitle2",
        title: "Criterion-II"
    }; 
    
    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle} className="Heading" />
                    <table border="1"  id="tableformat">  
                        <tr><th align="center">#</th><th align="left">Details</th><th align="center">Download</th></tr>                      
                        <tr><td>1</td><td>Self Study Report-NAAC Cycle-II</td><td>Download</td></tr> 
                        <tr><td>2</td><td>Core Values</td><td>Download</td></tr>  
                        <tr><td>3</td><td>Eligible Application</td><td>Download</td></tr>
                        <tr><td>4</td><td>Earmarked Seats</td><td>Download</td></tr>
                        <tr><td>5</td><td>Audited Statements</td><td>Download</td></tr>  
                        <tr><td>6</td><td>Core Values</td><td>Download</td></tr>                               
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle1} className="Heading" />
                    <table border="1"  id="tableformat">
                        <tr><th align="center">#</th><th align="left">Details</th><th align="center">Download</th></tr>
                        <tr><td>1</td><td>Field projects Internships-1.3.4</td><td>Download</td></tr> 
                        <tr><td>2</td><td>DVV-1.2.1</td><td>Download</td></tr>  
                        <tr><td>3</td><td>DVV-1.3.3</td><td>Download</td></tr>
                        <tr><td>4</td><td>DVV-1.4.1</td><td>Download</td></tr>                                
                    </table>
                </div>            
            </div> 

            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle2} className="Heading" />
                    <table border="1"  id="tableformat">
                        <tr><th align="center">#</th><th align="left">Details</th><th align="center">Download</th></tr>
                        <tr><td>1</td><td>Awards-2.4.4</td><td>Download</td></tr> 
                        <tr><td>2</td><td>DVV-2.1.1</td><td>Download</td></tr>  
                        <tr><td>3</td><td>DVV-2.2.3</td><td>Download</td></tr>
                        <tr><td>4</td><td>DVV-2.4.2</td><td>Download</td></tr>                                
                    </table>
                </div>            
            </div> 



                <Footer data={this.HomePageFooter} />
                {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} />) : ("")}

            </React.Fragment>
        )
    }

}

export default Library;