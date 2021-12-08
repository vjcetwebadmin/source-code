import React, { Component } from "react";
import "../../Components/SideNav.css";
import Profile from "./profile";
import Vision from "./vision";
import PEO from "./peo";
import Program from "./program";
import Library from "./studlife";
import Association from "./association";
import Mbaadmission from "./mbaadmission";
import FacultyNav from "./facultynav";
import PlacementNav from "./placementnav";
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
        <div class="Deptcontent">
          <div class="sidenav">
            <input
              value="About Us"
              class="button"
              onClick={this.onClickP}
            />
            <input
              value="Vision"
              class="button"
              onClick={this.onClickV}
            />
           {/*<input
              value="PEO, PSO & CO"
              class="button"
              onClick={this.onClickPeo}
            />
            <input

              value="Program"
              class="button"
              onClick={this.onClickProg}
           />*/}
            <input
              value="Faculty"
              class="button"
              onClick={this.onClickFac}
            />
            <input
              value="Student Life"
              class="button"
              onClick={this.onClickLib}
            />
           <input
              value="Placements"
              class="button"
              onClick={this.onClickAss}
            />
          <input
              value="Admission"
              class="button"
              onClick={this.onClickRes}
            />
          </div>
          <div class="dropdownD">
            <button class="button">Menu</button>
            <div class="dropdownD-content">
              <input

                value="About"
                class="button"
                onClick={this.onClickP}
              />
              <input

                value="Vision"
                class="button"
                onClick={this.onClickV}
              />
              <input

                value="PEO, PSO & CO"
                class="button"
                onClick={this.onClickPeo}
              />
              <input

                value="Program"
                class="button"
                onClick={this.onClickProg}
              />
              <input

                value="Faculty"
                class="button"
                onClick={this.onClickFac}
              />
              <input

                value="Library"
                class="button"
                onClick={this.onClickLib}
              />
              <input

                value="Association"
                class="button"
                onClick={this.onClickAss}
              />
              <input

                value="Result"
                class="button"
                onClick={this.onClickRes}
              />
            </div>
          </div>
          <div class="content">
            {this.state.showProfile ? <Profile /> : null}
            {this.state.showVision ? <Vision /> : null}
            {this.state.showfac ? <FacultyNav /> : null}
            {this.state.showLib ? <Library /> : null}
            {this.state.showAss ? <PlacementNav /> : null}
            {/*{this.state.showPeo ? <PEO /> : null}
            {this.state.showProgram ? <Program /> : null}*/}         
            {this.state.showRes ? <Mbaadmission /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
