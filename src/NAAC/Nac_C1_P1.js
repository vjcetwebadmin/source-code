import "./naac.css";
import download_file from "./downld"
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
  componentDidMount = () => {  // using this syntax auto-binds 'this'
    download_file().then(res => {
      this.setState({ dfile: res });
    });
  }
  
  HomePageHeader = {
    instanceID: "HomePageHeader"
  };
  HomePageFooter = {
    instanceID: "HomePageFooter"
  };

  ReachUsHeading = {
    instanceID: "ReachUsHeading",
    title: "PROJECT WORK/FIELD WORK/INTERNSHIP"
  };
  EnquiryHeading = {
    instanceID: "EnquiryHeading",
    title: "Reach Us"
  };

  render() {
    return (
      <React.Fragment>
        <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
        {/*<div classNameName="bgg" id="contactUsListing"> two column design
          <div className="root">
            <div>
    <div className="child">*/}
    <div className="contain">
            <HeadingOne data={this.ReachUsHeading} className="Heading" />
              
              <table width="60%"><tr><td><h3><b>Criteria</b></h3></td></tr>
              <tr><td><a href="/downloads/naac/criterion1/c1_p1.html" target="_blank" rel="noopener noreferrer"><b>Criterion 1</b></a></td></tr>
              <tr><td><a href="/downloads/naac/criterion2/c2_p1.html" target="_blank" rel="noopener noreferrer"><b>Criterion 2</b></a></td></tr>
              </table>

               {/* <h3 className="add"> Level 1</h3>
                <p><a href=" https://forms.gle/fuoRWBMs1gQnNASj7" target="_blank" rel="noopener noreferrer"><b>Paper 1 - Physics & Chemistry</b></a></p>
  <p><a href="https://forms.gle/Ez6tRswMSidn4nYt5" target="_blank" rel="noopener noreferrer"><b>Paper 2 - Mathematics</b></a></p>               */}
        </div>
        <Footer data={this.HomePageFooter} />
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
