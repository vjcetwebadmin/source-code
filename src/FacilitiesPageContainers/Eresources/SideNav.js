import React, { Component } from "react";
import "../../Components/SideNav.css";
import Oncourse from "./onlinecourse";
import Digilib from "./digitallibrary";
import Onbooksearch from "./onbooksearch";
import Profbodies from "./profbodies";
import Fdpandweb from "./fdpandweb";
import Pptvideo from "./pptandvideo";
import Ejournal from "./ejournal";
import Instimemb from "./instimemb";
class SideNav extends Component {
  state = {
    showProfile: true,
    showVision: false,
    showPeo: false,
    showProgram: false,
    showLib: false,
    showAss: false,
    showRes: false,
    showfac: false
  };
  onClickP = () => {
    this.setState({
      showProfile: true,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false
    });
  };
  onClickV = () => {
    this.setState({
      showProfile: false,
      showVision: true,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false
    });
  };
  onClickPeo = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: true,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false
    });
  };
  onClickProg = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: true,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false
    });
  };
  onClickLib = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: true,
      showAss: false,
      showRes: false,
      showfac: false
    });
  };
  onClickAss = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: true,
      showRes: false,
      showfac: false
    });
  };
  onClickRes = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: true,
      showfac: false
    });
  };
  onClickFac = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: true
    });
  };

  render() {
    return (
      <React.Fragment>

      <div class="DeptcontentGriev">
          <div class="sidenav">
            <input
              value="Online Courses"
              class="buttongriev1"
              onClick={this.onClickP}
            />
            <input

              value="Digital Library"
              class="buttongriev1"
              onClick={this.onClickV}
            />
            <input

              value="Online Book Search"
              class="buttongriev1"
              onClick={this.onClickPeo}
            />
             <input

              value="Professional bodies"
              class="buttongriev1"
              onClick={this.onClickProg}
            />  
            <input

              value="FDP & Webinars"
              class="buttongriev1"
              onClick={this.onClickLib}
              />  
              <input

              value="PPTs & Videos"
              class="buttongriev1"
              onClick={this.onClickAss}
            /> 
            <input
              value="e-Journals"
              class="buttongriev1"
              onClick={this.onClickRes}
              />   
            <input
              value="Institutional Memberships"
              class="buttongriev1"
              onClick={this.onClickFac}
              />   
      

            {/*<a href="https://vjcet.org/downloads/naac/C7_data/7.2.1_1.pdf" target="_blank" rel="noopener noreferrer"><button class="button" >Best Practices</button></a> */}
          </div>
      
          <div class="content">
            {this.state.showProfile ? <Oncourse /> : null}
            {this.state.showVision ? <Digilib /> : null}
            {this.state.showPeo ? <Onbooksearch /> : null}
            {this.state.showProgram ? <Profbodies /> : null}
            {this.state.showLib ? <Fdpandweb /> : null}
            {this.state.showAss ? <Pptvideo /> : null}
            {this.state.showRes ? <Ejournal /> : null}
            {this.state.showfac ? <Instimemb /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
