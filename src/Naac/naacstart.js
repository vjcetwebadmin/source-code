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
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td style={{width:"79%"}}>Self Study Report-NAAC Cycle-I</td><td style={{width:"15%"}}><a href="" rel="noopener noreferrer"><button class="buttonnaac1" disabled>Download</button></a></td></tr>                                                       
                    </table>
                </div>            
        </div> */}
            <div className="contain" style={{textAlign:"center"}}>                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle1} className="Heading" />
                    <table border="1"  id="tableformat1">
                   {/* <tr><th style={{width:"6%"}}>#</th><th style={{width:"79%"}}>Details</th><th style={{width:"15%"}}>Download</th></tr> */}
                        <tr><th colSpan="3">Details</th></tr> 
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>1.1.1_1</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/C1/1.1.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">1.1.1_2</td><td><a href="https://vjcet.org/downloads/naac/C1/1.1.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">1.1.2_1</td><td><a href="https://vjcet.org/downloads/naac/C1/1.1.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">1.1.2_2</td><td><a href="https://vjcet.org/downloads/naac/C1/1.1.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>5</td><td align="left">1.1.3_1</td><td><a href="https://vjcet.org/downloads/naac/C1/1.1.3_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>6</td><td align="left">1.1.3_2</td><td><a href="https://vjcet.org/downloads/naac/C1/1.1.3_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>7</td><td align="left">1.1.3_3</td><td><a href="https://vjcet.org/downloads/naac/C1/1.1.3_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>8</td><td align="left">1.1.3_4</td><td><a href="https://vjcet.org/downloads/naac/C1/1.1.3_4.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>9</td><td align="left">1.2.1_1</td><td><a href="https://vjcet.org/downloads/naac/C1/1.2.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>10</td><td align="left">1.2.1_2</td><td><a href="https://vjcet.org/downloads/naac/C1/1.2.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>11</td><td align="left">1.2.1_3</td><td><a href="https://vjcet.org/downloads/naac/C1/1.2.1_3.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>12</td><td align="left">1.2.1_4</td><td><a href="https://vjcet.org/downloads/naac/C1/1.2.1_4.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>13</td><td align="left">1.2.2_1</td><td><a href="https://vjcet.org/downloads/naac/C1/1.2.2_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>14</td><td align="left">1.2.2_2</td><td><a href="https://vjcet.org/downloads/naac/C1/1.2.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>   
                        <tr><td style={{textAlign:"center"}}>15</td><td align="left">1.2.2_3</td><td><a href="https://vjcet.org/downloads/naac/C1/1.2.2_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>16</td><td align="left">1.2.2_4</td><td><a href="https://vjcet.org/downloads/naac/C1/1.2.2_4.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>17</td><td align="left">1.2.3_1</td><td><a href="https://vjcet.org/downloads/naac/C1/1.2.3_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>18</td><td align="left">1.2.3_2</td><td><a href="https://vjcet.org/downloads/naac/C1/1.2.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>19</td><td align="left">1.3.1_1</td><td><a href="https://vjcet.org/downloads/naac/C1/1.3.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>20</td><td align="left">1.3.1_2</td><td><a href="https://vjcet.org/downloads/naac/C1/1.3.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>21</td><td align="left">1.3.2_1</td><td><a href="https://vjcet.org/downloads/naac/C1/1.3.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>22</td><td align="left">1.3.2_2</td><td><a href="https://vjcet.org/downloads/naac/C1/1.3.2_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>23</td><td align="left">1.3.2_3</td><td><a href="https://vjcet.org/downloads/naac/C1/1.3.2_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>24</td><td align="left">1.3.2_4</td><td><a href="https://vjcet.org/downloads/naac/C1/1.3.2_4.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>25</td><td align="left">1.3.3_1</td><td><a href="https://vjcet.org/downloads/naac/C1/1.3.3_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>26</td><td align="left">1.3.3_2</td><td><a href="https://vjcet.org/downloads/naac/C1/1.3.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <tr><td style={{textAlign:"center"}}>27</td><td align="left">1.4.1_1</td><td><a href="https://vjcet.org/downloads/naac/C1/1.4.1_1.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>28</td><td align="left">1.4.1_2</td><td><a href="https://vjcet.org/downloads/naac/C1/1.4.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>29</td><td align="left">1.4.1_3</td><td><a href="https://vjcet.org/downloads/naac/C1/1.4.1_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>30</td><td align="left">1.4.2_1</td><td><a href="https://vjcet.org/downloads/naac/C1/1.4.2_1.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>31</td><td align="left">1.4.2_2</td><td><a href="https://vjcet.org/downloads/naac/C1/1.4.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                     
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle2} className="Heading" />
                    <table border="1"  id="tableformat1">
                        <tr><th colSpan="3">Details</th></tr>  
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>2.1.1_1</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/C2/2.1.1_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">2.1.1_2</td><td><a href="https://vjcet.org/downloads/naac/C2/2.1.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">2.1.2_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.1.2_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">2.1.2_2</td><td><a href="https://vjcet.org/downloads/naac/C2/2.1.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>5</td><td align="left">2.2.1_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.2.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>6</td><td align="left">2.2.1_2</td><td><a href="https://vjcet.org/downloads/naac/C2/2.2.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>7</td><td align="left">2.2.2_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.2.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>8</td><td align="left">2.3.1_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.3.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>9</td><td align="left">2.3.1_2</td><td><a href="https://vjcet.org/downloads/naac/C2/2.3.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>10</td><td align="left">2.3.2_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.3.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>11</td><td align="left">2.3.2_2</td><td><a href="https://vjcet.org/downloads/naac/C2/2.3.2_2.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>12</td><td align="left">2.3.3_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.3.3_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>13</td><td align="left">2.3.3_2</td><td><a href="https://vjcet.org/downloads/naac/C2/2.3.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>14</td><td align="left">2.3.3_3</td><td><a href="https://vjcet.org/downloads/naac/C2/2.3.3_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>   
                        <tr><td style={{textAlign:"center"}}>15</td><td align="left">2.4.1_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.4.1_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>16</td><td align="left">2.4.1_2</td><td><a href="https://vjcet.org/downloads/naac/C2/2.4.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>17</td><td align="left">2.4.1_3</td><td><a href="https://vjcet.org/downloads/naac/C2/2.4.1_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>18</td><td align="left">2.4.2_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.4.2_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>19</td><td align="left">2.4.2_2</td><td><a href="https://vjcet.org/downloads/naac/C2/2.4.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>20</td><td align="left">2.4.3_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.4.3_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>21</td><td align="left">2.4.3_2</td><td><a href="https://vjcet.org/downloads/naac/C2/2.4.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>22</td><td align="left">2.5.1_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.5.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>23</td><td align="left">2.5.2_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.5.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>24</td><td align="left">2.6.1_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.6.1_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>25</td><td align="left">2.6.1_2</td><td><a href="https://vjcet.org/downloads/naac/C2/2.6.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>26</td><td align="left">2.6.1_3</td><td><a href="https://vjcet.org/downloads/naac/C2/2.6.1_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <tr><td style={{textAlign:"center"}}>27</td><td align="left">2.6.2_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.6.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>28</td><td align="left">2.6.3_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.6.3_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>29</td><td align="left">2.6.3_2</td><td><a href="https://vjcet.org/downloads/naac/C2/2.6.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>30</td><td align="left">2.6.3_3</td><td><a href="https://vjcet.org/downloads/naac/C2/2.6.3_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>31</td><td align="left">2.7.1_1</td><td><a href="https://vjcet.org/downloads/naac/C2/2.7.1_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle3} className="Heading" />
                    <table border="1"  id="tableformat1">
                        <tr><th colSpan="3">Details</th></tr>  
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>3.1.1_1</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/C3/3.1.1_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">3.1.1_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.1.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">3.1.1_3</td><td><a href="https://vjcet.org/downloads/naac/C3/3.1.1_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">3.1.2_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.1.2_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>5</td><td align="left">3.1.2_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.1.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>6</td><td align="left">3.1.3_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.1.3_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>7</td><td align="left">3.1.3_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.1.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>8</td><td align="left">3.1.3_3</td><td><a href="https://vjcet.org/downloads/naac/C3/3.1.3_3.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>9</td><td align="left">3.1.3_4</td><td><a href="https://vjcet.org/downloads/naac/C3/3.1.3_4.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>10</td><td align="left">3.2.1_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.2.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>11</td><td align="left">3.2.1_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.2.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>12</td><td align="left">3.2.2_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.2.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>13</td><td align="left">3.2.2_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.2.2_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>14</td><td align="left">3.2.2_3</td><td><a href="https://vjcet.org/downloads/naac/C3/3.2.2_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>   
                        <tr><td style={{textAlign:"center"}}>15</td><td align="left">3.3.1_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.3.1_1.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>16</td><td align="left">3.3.1_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.3.1_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>17</td><td align="left">3.3.1_3</td><td><a href="https://vjcet.org/downloads/naac/C3/3.3.1_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>18</td><td align="left">3.3.2_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.3.2_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>19</td><td align="left">3.3.2_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.3.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>20</td><td align="left">3.3.3_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.3.3_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>21</td><td align="left">3.3.3_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.3.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>22</td><td align="left">3.4.1_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.4.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>23</td><td align="left">3.4.1_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.4.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>24</td><td align="left">3.4.2_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.4.2_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>25</td><td align="left">3.4.2_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.4.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>26</td><td align="left">3.4.3_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.4.3_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <tr><td style={{textAlign:"center"}}>27</td><td align="left">3.4.3_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.4.3_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>28</td><td align="left">3.4.4_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.4.4_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>29</td><td align="left">3.4.4_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.4.4_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>30</td><td align="left">3.5.1_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.5.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>31</td><td align="left">3.5.1_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.5.1_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>32</td><td align="left">3.5.1_3</td><td><a href="https://vjcet.org/downloads/naac/C3/3.5.1_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>33</td><td align="left">3.5.2_1</td><td><a href="https://vjcet.org/downloads/naac/C3/3.5.2b_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>34</td><td align="left">3.5.2_2</td><td><a href="https://vjcet.org/downloads/naac/C3/3.5.2b_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>35</td><td align="left">3.5.2_3</td><td><a href="https://vjcet.org/downloads/naac/C3/3.5.2b_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                  
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle4} className="Heading" />
                    <table border="1"  id="tableformat1">
                    <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>4.1.1_1</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/C4/4.1.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">4.1.1_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.1.1_2.mp4" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">4.1.2_1</td><td><a href="https://vjcet.org/downloads/naac/C4/4.1.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">4.1.2_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.1.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>5</td><td align="left">4.1.3_1</td><td><a href="https://vjcet.org/downloads/naac/C4/4.1.3_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>6</td><td align="left">4.1.3_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.1.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>7</td><td align="left">4.1.3_3</td><td><a href="https://vjcet.org/downloads/naac/C4/4.1.3_3.mp4" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>8</td><td align="left">4.1.4_1</td><td><a href="https://vjcet.org/downloads/naac/C4/4.1.4_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>9</td><td align="left">4.1.4_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.1.4_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>10</td><td align="left">4.1.4_3</td><td><a href="https://vjcet.org/downloads/naac/C4/4.1.4_3.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>11</td><td align="left">4.2.1_1</td><td><a href="https://vjcet.org/downloads/naac/C4/4.2.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>12</td><td align="left">4.2.1_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.2.1_2.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>13</td><td align="left">4.2.2_1</td><td><a href="https://vjcet.org/downloads/naac/C4/4.2.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>14</td><td align="left">4.2.2_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.2.2_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>   
                        <tr><td style={{textAlign:"center"}}>15</td><td align="left">4.2.3_1</td><td><a href="https://vjcet.org/downloads/naac/C4/4.2.3_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>16</td><td align="left">4.2.3_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.2.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>17</td><td align="left">4.2.3_3</td><td><a href="https://vjcet.org/downloads/naac/C4/4.2.3_3.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>18</td><td align="left">4.2.4_1</td><td><a href="https://vjcet.org/downloads/naac/C4/4.2.4_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>19</td><td align="left">4.2.4_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.2.4_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>20</td><td align="left">4.3.1_1</td><td><a href="https://vjcet.org/downloads/naac/C4/4.3.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>21</td><td align="left">4.3.1_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.3.1_2.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>22</td><td align="left">4.3.2_1</td><td><a href="https://vjcet.org/downloads/naac/C4/4.3.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>23</td><td align="left">4.3.2_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.3.2_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>24</td><td align="left">4.3.3_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.3.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>25</td><td align="left">4.4.1_1</td><td><a href="https://vjcet.org/downloads/naac/C4/4.4.1_1.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>26</td><td align="left">4.4.1_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.4.1_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <tr><td style={{textAlign:"center"}}>27</td><td align="left">4.4.1_3</td><td><a href="https://vjcet.org/downloads/naac/C4/4.4.1_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>28</td><td align="left">4.4.2_1</td><td><a href="https://vjcet.org/downloads/naac/C4/4.4.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>29</td><td align="left">4.4.2_2</td><td><a href="https://vjcet.org/downloads/naac/C4/4.4.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        

                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle5} className="Heading" />
                    <table border="1"  id="tableformat1">
                        <tr><th colSpan="3">Details</th></tr>  
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>5.1.1_1</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/C5/5.1.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">5.1.1_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.1.1_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">5.1.2_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.1.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">5.1.2_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.1.2_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>5</td><td align="left">5.1.3_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.1.3_1.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>6</td><td align="left">5.1.3_3</td><td><a href="https://vjcet.org/downloads/naac/C5/5.1.3_3.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>7</td><td align="left">5.1.3_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.1.3_2.xls" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>8</td><td align="left">5.1.4_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.1.4_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>9</td><td align="left">5.1.4_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.1.4_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>10</td><td align="left">5.1.5_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.1.5_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>11</td><td align="left">5.1.5_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.1.5_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>12</td><td align="left">5.1.5_3</td><td><a href="https://vjcet.org/downloads/naac/C5/5.1.5_3.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>13</td><td align="left">5.2.1_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.2.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>14</td><td align="left">5.2.1_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.2.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>   
                        <tr><td style={{textAlign:"center"}}>15</td><td align="left">5.2.1_3</td><td><a href="https://vjcet.org/downloads/naac/C5/5.2.1_3.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>16</td><td align="left">5.2.2_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.2.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>17</td><td align="left">5.2.2_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.2.2_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>18</td><td align="left">5.2.2_3</td><td><a href="https://vjcet.org/downloads/naac/C5/5.2.2_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>19</td><td align="left">5.2.3_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.2.3_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>20</td><td align="left">5.2.3_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.2.3_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>21</td><td align="left">5.2.3_3</td><td><a href="https://vjcet.org/downloads/naac/C5/5.2.3_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>22</td><td align="left">5.3.1_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.3.1_1.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>23</td><td align="left">5.3.1_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.3.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>24</td><td align="left">5.3.2_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.3.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>25</td><td align="left">5.3.2_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.3.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>26</td><td align="left">5.3.3_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.3.3_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>27</td><td align="left">5.3.3_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.3.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <tr><td style={{textAlign:"center"}}>28</td><td align="left">5.3.3_3</td><td><a href="https://vjcet.org/downloads/naac/C5/5.3.3_3.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>29</td><td align="left">5.4.1_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.4.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>30</td><td align="left">5.4.1_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.4.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>31</td><td align="left">5.4.2_1</td><td><a href="https://vjcet.org/downloads/naac/C5/5.4.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>32</td><td align="left">5.4.2_2</td><td><a href="https://vjcet.org/downloads/naac/C5/5.4.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle6} className="Heading" />
                    <table border="1"  id="tableformat1">
                    <tr><th colSpan="3">Details</th></tr>  
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>6.1.1_1</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/C6/6.1.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">6.1.2_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.1.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">6.2.1_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.2.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">6.2.2_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.2.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>5</td><td align="left">6.2.3_2</td><td><a href="https://vjcet.org/downloads/naac/C6/6.2.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>6</td><td align="left">6.2.3_3</td><td><a href="https://vjcet.org/downloads/naac/C6/6.2.3_3.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>7</td><td align="left">6.2.3_4</td><td><a href="https://vjcet.org/downloads/naac/C6/6.2.3_4.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>8</td><td align="left">6.3.1_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.3.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>9</td><td align="left">6.3.2_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.3.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>10</td><td align="left">6.3.2_2</td><td><a href="https://vjcet.org/downloads/naac/C6/6.3.2_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>11</td><td align="left">6.3.3_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.3.3_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>12</td><td align="left">6.3.3_3</td><td><a href="https://vjcet.org/downloads/naac/C6/6.3.3_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>13</td><td align="left">6.3.3_4</td><td><a href="https://vjcet.org/downloads/naac/C6/6.3.3_4.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>14</td><td align="left">6.3.4_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.3.4_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>   
                        <tr><td style={{textAlign:"center"}}>15</td><td align="left">6.3.4_2</td><td><a href="https://vjcet.org/downloads/naac/C6/6.3.4_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>16</td><td align="left">6.3.4_4</td><td><a href="https://vjcet.org/downloads/naac/C6/6.3.4_4.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>17</td><td align="left">6.3.5_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.3.5_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>18</td><td align="left">6.4.1_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.4.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>19</td><td align="left">6.4.2_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.4.2_1.xls" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>20</td><td align="left">6.4.2_2</td><td><a href="https://vjcet.org/downloads/naac/C6/6.4.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>21</td><td align="left">6.4.3_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.4.3_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>22</td><td align="left">6.5.1_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.5.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>23</td><td align="left">6.5.1_2</td><td><a href="https://vjcet.org/downloads/naac/C6/6.5.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>24</td><td align="left">6.5.2_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.5.2_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>25</td><td align="left">6.5.3_1</td><td><a href="https://vjcet.org/downloads/naac/C6/6.5.3_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>26</td><td align="left">6.5.3_2</td><td><a href="https://vjcet.org/downloads/naac/C6/6.5.3_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <tr><td style={{textAlign:"center"}}>27</td><td align="left">6.5.3_3</td><td><a href="https://vjcet.org/downloads/naac/C6/6.5.3_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                    </table>
                </div>            
            </div> 
            <div className="contain">                 
                <div>
                    <HeadingTwo data={this.LibraryResourceTitle7} className="Heading" />
                    <table border="1"  id="tableformat1">
                    <tr><th colSpan="3">Details</th></tr>  
                        <tr><td style={{textAlign:"center",width:"6%"}}>1</td><td align="left" style={{width:"79%"}}>7.1.1_1</td><td style={{width:"15%"}}><a href="https://vjcet.org/downloads/naac/C7/7.1.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>    
                        <tr><td style={{textAlign:"center"}}>2</td><td align="left">7.1.1_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>3</td><td align="left">7.1.2_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.2_1.jpg" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>4</td><td align="left">7.1.2_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.2_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>5</td><td align="left">7.1.2_3</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.2_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>6</td><td align="left">7.1.3_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.3_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>7</td><td align="left">7.1.3_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.3_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>8</td><td align="left">7.1.3_3</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.3_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>9</td><td align="left">7.1.4_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.4_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>10</td><td align="left">7.1.4_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.4_2.jpg" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>11</td><td align="left">7.1.4_3</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.4_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>12</td><td align="left">7.1.5_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.5_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>13</td><td align="left">7.1.5_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.5_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>14</td><td align="left">7.1.5_3</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.5_3.jpeg" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>15</td><td align="left">7.1.5_4</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.5_4.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>   
                        <tr><td style={{textAlign:"center"}}>16</td><td align="left">7.1.6_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.6_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>17</td><td align="left">7.1.6_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.6_2.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>18</td><td align="left">7.1.6_3</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.6_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>19</td><td align="left">7.1.6_4</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.6_4.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>20</td><td align="left">7.1.6_5</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.6_5.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>21</td><td align="left">7.1.7_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.7_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>22</td><td align="left">7.1.7_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.7_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>23</td><td align="left">7.1.7_3</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.7_3.jpeg" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>24</td><td align="left">7.1.7_4</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.7_4.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>25</td><td align="left">7.1.7_5</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.7_5.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
                        <tr><td style={{textAlign:"center"}}>26</td><td align="left">7.1.8_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.8_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>27</td><td align="left">7.1.8_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.8_2.xlsx" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>28</td><td align="left">7.1.9_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.9_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>29</td><td align="left">7.1.9_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.9_2.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>30</td><td align="left">7.1.10_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.10_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>31</td><td align="left">7.1.10_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.10_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <tr><td style={{textAlign:"center"}}>32</td><td align="left">7.1.10_3</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.10_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>  
                        <tr><td style={{textAlign:"center"}}>33</td><td align="left">7.1.11_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.11_1.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>
                        <tr><td style={{textAlign:"center"}}>34</td><td align="left">7.1.11_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.11_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                        
                        <tr><td style={{textAlign:"center"}}>35</td><td align="left">7.1.11_3</td><td><a href="https://vjcet.org/downloads/naac/C7/7.1.11_3.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>36</td><td align="left">7.2.1_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.2.1_1.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>37</td><td align="left">7.3.1_1</td><td><a href="https://vjcet.org/downloads/naac/C7/7.3.1_1.txt" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr> 
                        <tr><td style={{textAlign:"center"}}>38</td><td align="left">7.3.1_2</td><td><a href="https://vjcet.org/downloads/naac/C7/7.3.1_2.pdf" target="_blank" rel="noopener noreferrer"><button class="buttonnaac1" >Download</button></a></td></tr>                                                                                                                                                                                                                                                         
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