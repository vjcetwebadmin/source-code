import React, { Component } from "react";
import "../Components/SideNav.css";
import Profile from "./profile";
import Program from "./program";
import ProgramStaff from "./programstaff";
class SideNav extends Component {
  state = {
    showProfile: true,
    showVision: false,
    showPeo: false,
    showProgram: false,
    showProgramStaff: false,
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
      showProgramStaff: false,
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
      showProgramStaff: false,
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
      showProgramStaff: false,
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
      showProgramStaff: false,
      showLib: false,
      showAss: false,
      showRes: false,
      showfac: false
    });
  };
  onClickProgStaff = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showPeo: false,
      showProgram: false,
      showProgramStaff: true,
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
      showProgramStaff: false,
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
      showProgramStaff: false,
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
      showProgramStaff: false,
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
      showProgramStaff: false,
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
              value="Home"
              class="buttongriev1"
              onClick={this.onClickP}
            />
          <input
              value="Students Grievance Registration"
              class="buttongriev1"
              onClick={this.onClickProg}
           />    
           <input
              value="Staff Grievance Registration"
              class="buttongriev1"
              onClick={this.onClickProgStaff}
           />           
 
                <a href="https://vjcet.org/downloads/grievance/Policy.pdf" target="_blank" rel="noopener noreferrer"><button class="buttongriev1" >Policy</button></a> 
                <a href="https://vjcet.org/downloads/grievance/AICTEnotif.pdf" target="_blank" rel="noopener noreferrer"><button class="buttongriev1" >AICTE notification</button></a> 
                <a href="https://vjcet.org/downloads/grievance/UGCnot.pdf" target="_blank" rel="noopener noreferrer"><button class="buttongriev1" >UGC notification</button></a> 
                <a href="https://vjcet.org/downloads/grievance/KTUnot.pdf" target="_blank" rel="noopener noreferrer"><button class="buttongriev1" >KTU notification</button></a> 
                <a href="https://vjcet.org/downloads/grievance/TheKeralaProRagAct.pdf" target="_blank" rel="noopener noreferrer"><button class="buttongriev1" >The Kerala Prohibition of Ragging Act, 1998</button></a> 


            {/* <input
              value="Policy"
              class="buttongriev1"
              onClick={this.onClickLib}
            />  
            <input
              value="AICTE notification"
              class="buttongriev1"
              onClick={this.onClickLib}
            />
            <input
              value="UGC notification"
              class="buttongriev1"
              onClick={this.onClickLib}
            />
            <input
              value="KTU notification"
              class="buttongriev1"
              onClick={this.onClickLib}
            />
            <input
              value="The Kerala Prohibition of Ragging Act, 1998"
              class="buttongriev1"
              height="100px;"
              onClick={this.onClickLib}
            />

            <input
              value="Vision & Mission"
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
              value="Association"
              class="button"
              onClick={this.onClickAss}
            />
          <input
              value="Honours"
              class="button"
              onClick={this.onClickRes}
           />*/}
          </div>
          <div class="dropdownD">
            <button class="button">Menu</button>
            <div class="dropdownD-content">
              <input
                value="Profile"
                class="button"
                onClick={this.onClickP}
              />
              <input
                value="Vision & Mission"
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
                value="ProgramStaff"
                class="button"
                onClick={this.onClickProgStaff}
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
            {this.state.showProgram ? <Program /> : null}
            {this.state.showProgramStaff ? <ProgramStaff /> : null}
            {/*{this.state.showVision ? <Vision /> : null}
            {this.state.showPeo ? <PEO /> : null}            
            {this.state.showfac ? <FacultyNav /> : null}
            {this.state.showLib ? <Library /> : null}
            {this.state.showAss ? <Association /> : null}
          {this.state.showRes ? <Result /> : null}*/}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
