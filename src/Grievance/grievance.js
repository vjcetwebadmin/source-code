import React from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";

//import "../FacilitiesPageContainers/styles.css";
//import "../Components/News/gallery.css";

import "./Research.css";

class Grievance extends React.Component {
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

  ReachUsHeading = {
    instanceID: "ReachUsHeading",
    title: "Right To Information"
  };
  EnquiryHeading = {
    instanceID: "EnquiryHeading",
    title: "Reach Us"
  };
  render() {
    return (
      <React.Fragment>
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        <div className="container">
            <HeadingOne data={this.ReachUsHeading} className="Heading" />
            <div className="small-box" style={{border:"1px solid"}}>
                <a href="https://vjcet.org/downloads/naac/cr_all_files/1.2.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" >Policy</button></a> 
                <a href="https://vjcet.org/downloads/naac/cr_all_files/1.2.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" >Grievance Registration Mechanism</button></a> 
                <a href="https://vjcet.org/downloads/naac/cr_all_files/1.2.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" >AICTE notification</button></a> 
                <a href="https://vjcet.org/downloads/naac/cr_all_files/1.2.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" >UGC notification</button></a> 
                <a href="https://vjcet.org/downloads/naac/cr_all_files/1.2.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" >KTU notification</button></a> 
                <a href="https://vjcet.org/downloads/naac/cr_all_files/1.2.1.pdf" target="_blank" rel="noopener noreferrer"><button class="button1 button3" >The Kerala Prohibition of Ragging Act, 1998</button></a> 
               </div> 
              <div className="big-box" style={{border:"1px solid"}}>
                <h4>Right To Information</h4>  
                <h4>Right To Information</h4>
                <h4>Right To Information</h4>
                <h4>Right To Information</h4>
                <h4>Right To Information</h4>   
                <h4>Right To Information</h4>  
                <h4>Right To Information</h4>
                <h4>Right To Information</h4>
                <h4>Right To Information</h4>
                <h4>Right To Information</h4>        
                <h4>Right To Information</h4>  
                <h4>Right To Information</h4>
                <h4>Right To Information</h4>
                <h4>Right To Information</h4>
                <h4>Right To Information</h4>                 
              
              </div>      

              
        <Footer data={this.HomePageFooter} />
        {this.state.showMenu ? (
          <MenuOverlay closeMenuFunction={this.closeMenu} />
        ) : (
            ""
          )}           

          </div>
       </React.Fragment>
    );
  }
}

export default Grievance;
