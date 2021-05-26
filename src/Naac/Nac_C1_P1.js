import "./naac.css";
import React from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import Header from "../Components/Header&Footer/Header";
import Footer from "../Components/Header&Footer/Footer";
import MenuOverlay from "../Components/MenuOverlay/MenuOverlay";

class mocktest extends React.Component {
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
    title: "CRITERIA"
  };
  EnquiryHeading = {
    instanceID: "EnquiryHeading",
    title: "Reach Us"
  };

  render() {
    return (
      <React.Fragment>
     
        {/*<div classNameName="bgg" id="contactUsListing"> two column design
          <div className="root">
            <div>
    <div className="child">*/}
    <div className="contain">
            <HeadingOne data={this.ReachUsHeading} className="Heading" />        
               <table width="60%">
              <tr><td><a href="https://vjcet.org/downloads/naac/Criterion1/C1_P1.html" target="_blank" rel="noopener noreferrer"><b>Criterion 1</b></a></td></tr>
              <tr><td><a href="https://vjcet.org/downloads/naac/Criterion2/C2_P1.html" target="_blank" rel="noopener noreferrer"><b>Criterion 2</b></a></td></tr>
              </table>

            {/*   <h3 className="add"> Level 1</h3>
                <p><a href=" https://forms.gle/fuoRWBMs1gQnNASj7" target="_blank" rel="noopener noreferrer"><b>Paper 1 - Physics & Chemistry</b></a></p>
  <p><a href="https://forms.gle/Ez6tRswMSidn4nYt5" target="_blank" rel="noopener noreferrer"><b>Paper 2 - Mathematics</b></a></p>               */}



        </div>
        
        {this.state.showMenu ? (
          <MenuOverlay closeMenuFunction={this.closeMenu} />
        ) : (
            ""
          )}
      </React.Fragment>
    );
  }
}

export default mocktest;
