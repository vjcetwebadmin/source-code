import React from "react";
import HeadingTwo from "../Components/Texts/HeadingTwo";
/*import HeadingOne from "../Components/Texts/HeadingOne";
import ImageOne from "../Components/Images/ImageOne";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
import "../Components/Tables/tableformat.css";*/
import "./naac.css";
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
                    <table border="1"  id="tableformat1">  
                        <tr><th style={{width:"6%"}}>#</th><th style={{width:"79%"}}>Details</th><th style={{width:"15%"}}>Download</th></tr>                      
                        <tr><td style={{textAlign:"center"}}>1</td><td>Self Study Report-NAAC Cycle-I</td><td><a href="" rel="noopener noreferrer"><button class="button1 button3">Download</button></a></td></tr>                                                       
                    </table>
                </div>            
            </div> 
            <div className="contain" style={{textAlign:"center"}}>                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle1} className="Heading" />
                    <table border="1"  id="tableformat1">
                    <tr><th style={{width:"6%"}}>#</th><th style={{width:"79%"}}>Details</th><th style={{width:"15%"}}>Download</th></tr> 
                        <tr><td style={{textAlign:"center"}}>1</td><td align="left">Field projects Internships-1.3.4</td><td><a href="" rel="noopener noreferrer"><button class="button1 button3">Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">DVV-1.2.1</td><td><a href="" rel="noopener noreferrer"><button class="button1 button3">Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">DVV-1.3.3</td><td><a href="" rel="noopener noreferrer"><button class="button1 button3">Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">DVV-1.4.1</td><td><a href="" rel="noopener noreferrer"><button class="button1 button3">Download</button></a></td></tr>                                
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle2} className="Heading" />
                    <table border="1"  id="tableformat1">
                    <tr><th style={{width:"6%"}}>#</th><th style={{width:"79%"}}>Details</th><th style={{width:"15%"}}>Download</th></tr> 
                        <tr><td style={{textAlign:"center"}}>1</td><td align="left">Awards-2.4.4</td><td><a href="" rel="noopener noreferrer"><button class="button1 button3">Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">DVV-2.1.1</td><td><a href="" rel="noopener noreferrer"><button class="button1 button3">Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">DVV-2.2.3</td><td><a href="" rel="noopener noreferrer"><button class="button1 button3">Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">DVV-2.4.2</td><td><a href="" rel="noopener noreferrer"><button class="button1 button3">Download</button></a></td></tr>                                
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