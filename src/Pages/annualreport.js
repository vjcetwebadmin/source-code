import "../ContactUsContainers/mocktest.css";
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
    title: "Annual Reports"
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
              <table width="60%"><tr><td><h3><b>The annual reports for all the academic year are furnished below. Follow the link to view.</b></h3></td></tr>
              <tr><td><a href="https://vjcet.org/downloads/an_report/AnnualReport2020.docx" target="_blank" rel="noopener noreferrer"><b>Annual Report for the Academic year 2019-2020</b></a></td></tr>
              <tr><td><a href="https://vjcet.org/downloads/an_report/AnnualReport2019.docx" target="_blank" rel="noopener noreferrer"><b>Annual Report for the Academic year 2018-2019</b></a></td></tr>
              <tr><td><a href="https://vjcet.org/downloads/an_report/AnnualReport2018.docx" target="_blank" rel="noopener noreferrer"><b>Annual Report for the Academic year 2017-2018</b></a></td></tr>
              <tr><td><a href="https://vjcet.org/downloads/an_report/AnnualReport2017.docx" target="_blank" rel="noopener noreferrer"><b>Annual Report for the Academic year 2016-2017</b></a></td></tr>
              <tr><td><a href="https://vjcet.org/downloads/an_report/AnnualReport2016.docx" target="_blank" rel="noopener noreferrer"><b>Annual Report for the Academic year 2015-2016</b></a></td></tr>             
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
