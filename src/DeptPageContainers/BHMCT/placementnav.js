import React, { Component } from "react";
import CSFaculty from "./placementcell";
import CSStaff from "./placementtrain";
//import CSGFaculty from "./Csfacguest"
class FacultyNav extends Component {
  state = {
    showfaculty: true,
    showguest: false,
    showstaff: false
  };
  OnClickFac = () => {
    this.setState({
      showfaculty: true,
      showguest: false,
      showstaff: false
    });
  };
  OnClickStaff = () => {
    this.setState({
      showfaculty: false,
      showguest: false,
      showstaff: true
    });
  };
  OnClickGuest = () => {
    this.setState({
      showfaculty: false,
      showguest: true,
      showstaff: false
    });
  };
  render() {
    return (
      <div class="facultyNav">
        <input
          type="button"
          value="Placement Cell"
          class="buttongraph"
          onClick={this.OnClickFac}
        />
       <input
          type="button"
          value="Training And Development"
          class="buttongraph"
          onClick={this.OnClickStaff}
        />        
  {/*     <input
          type="button"
          value="Administrative Staff"
          class="buttongraph"
          onClick={this.OnClickGuest}
  />*/} 
        <div class="FacultyNavContent">
          {this.state.showfaculty ? <CSFaculty /> : null}
          {this.state.showstaff ? <CSStaff/> : null}
           {/*  {this.state.showguest ? <CSGFaculty /> : null}*/}
        </div>
      </div>
    );
  }
}

export default FacultyNav;
