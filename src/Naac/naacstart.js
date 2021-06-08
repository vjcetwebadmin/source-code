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
    LibraryResourceTitle3 = {
        instanceID: "LibraryResourceTitle3",
        title: "Criterion-III"
    }; 
    LibraryResourceTitle4 = {
        instanceID: "LibraryResourceTitle4",
        title: "Criterion-IV"
    }; 
    LibraryResourceTitle5 = {
        instanceID: "LibraryResourceTitle5",
        title: "Criterion-V"
    }; 
    LibraryResourceTitle6 = {
        instanceID: "LibraryResourceTitle6",
        title: "Criterion-VI"
    }; 
    LibraryResourceTitle7 = {
        instanceID: "LibraryResourceTitle7",
        title: "Criterion-VII"
    }; 
    render() {
        return (
            <React.Fragment>
                <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
            {/*<div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle} className="Heading" />
                    <table border="1"  id="tableformat1">  
                       {/*} <tr><th style={{width:"6%"}}>#</th><th style={{width:"79%"}}>Details</th><th style={{width:"15%"}}>Download</th></tr> 
                        <tr><th colSpan="3">Details</th></tr>                     
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td style={{width:"79%"}}>Self Study Report-NAAC Cycle-I</td><td style={{width:"15%"}}><a href="" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                                                       
                    </table>
                </div>            
        </div> */}
            <div className="contain" style={{textAlign:"center"}}>                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle1} className="Heading" />
                    <table border="1"  id="tableformat1">
                   {/* <tr><th style={{width:"6%"}}>#</th><th style={{width:"79%"}}>Details</th><th style={{width:"15%"}}>Download</th></tr> */}
                        <tr><th colSpan="3">Details</th></tr> 
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>1.1.2</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/cr_all_files/1.1.2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">1.2.1</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/1.2.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>  
                      
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle2} className="Heading" />
                    <table border="1"  id="tableformat1">
                        <tr><th colSpan="3">Details</th></tr>  
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>2.3.1_1</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/cr_all_files/2.3.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">2.3.1_2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/2.3.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">2.5.1</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/2.5.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">2.5.2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/2.5.2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr> 
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle3} className="Heading" />
                    <table border="1"  id="tableformat1">
                        <tr><th colSpan="3">Details</th></tr>  
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>3.1.1_1</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/cr_all_files/3.1.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">3.1.1_2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/3.1.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">3.1.2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/3.1.2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">3.1.3</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/3.1.3WEB link.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>5</td><td align="left">3.1.3_1</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/3.1.3_1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>6</td><td align="left">3.1.3_2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/3.1.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                                                               
                        <tr><td style={{textAlign:"center"}}>7</td><td align="left">3.3.1</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/3.3.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>8</td><td align="left">3.3.2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/3.3.2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>9</td><td align="left">3.3.3</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/3.3.3.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>10</td><td align="left">3.4.1</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/3.4.1pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>11</td><td align="left">3.4.2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/3.4.2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>12</td><td align="left">3.5.2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/3.3.3.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle4} className="Heading" />
                    <table border="1"  id="tableformat1">
                        <tr><th colSpan="3">Details</th></tr>  
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>4.1.2</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/cr_all_files/4.1.2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">4.4.1</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/4.4.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                          
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle5} className="Heading" />
                    <table border="1"  id="tableformat1">
                        <tr><th colSpan="3">Details</th></tr>  
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>5.1.1_1</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/cr_all_files/5.1.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">5.1.1_2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/5.1.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                          
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">5.1.2_1</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/5.1.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                          
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">5.1.2_2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/5.1.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>5</td><td align="left">5.3.2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/5.3.2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                          
                        <tr><td style={{textAlign:"center"}}>6</td><td align="left">5.3.2_Magazine2016</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/5.3.2_Magazine2016.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                          
                        <tr><td style={{textAlign:"center"}}>7</td><td align="left">5.3.2_Magazine2017</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/5.3.2_Magazine2017.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                         
                        <tr><td style={{textAlign:"center"}}>8</td><td align="left">5.3.2_Magazine2018</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/5.3.2_Magazine2018.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                          
                        <tr><td style={{textAlign:"center"}}>9</td><td align="left">5.3.2_Magazine2019</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/5.3.2_Magazine2019.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                          
                        <tr><td style={{textAlign:"center"}}>10</td><td align="left">5.3.2_Magazine2020</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/5.3.2_Magazine2020.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                                                  
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle6} className="Heading" />
                    <table border="1"  id="tableformat1">
                        <tr><th colSpan="3">Details</th></tr>  
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>6.2.1</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/cr_all_files/6.2.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">6.3.5</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/6.3.5.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">6.5.1</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/6.5.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">6.5.2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/6.5.2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle7} className="Heading" />
                    <table border="1"  id="tableformat1">
                        <tr><th colSpan="3">Details</th></tr>  
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>7.1.2</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/cr_all_files/7.1.2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">7.1.3</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/7.1.3.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                          
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">7.1.4</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/7.1.4.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                          
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">7.1.5</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/7.1.5.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>5</td><td align="left">7.1.7_1</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/7.1.7_1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                          
                        <tr><td style={{textAlign:"center"}}>6</td><td align="left">7.1.7_2</td><td><a href="https://vjcet.org/downloads/naac/cr_all_files/7.1.7_2.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" disabled>Download</button></a></td></tr>                          
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