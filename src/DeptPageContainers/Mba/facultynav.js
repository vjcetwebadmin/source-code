import React, { Component } from "react";
import CSFaculty from "./Csfaculty";
import CSStaff from "./Csstaff";
import CSGFaculty from "./Csfacguest"
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
          value="Faculty-Full Time"
          class="buttongraph"
          onClick={this.OnClickFac}
        />
       <input
          type="button"
          value="Guest Speakers"
          class="buttongraph"
          onClick={this.OnClickGuest}
        />        
        <input
          type="button"
          value="Administrative Staff"
          class="buttongraph"
          onClick={this.OnClickStaff}
        />
 
        <div class="FacultyNavContent">
          {this.state.showfaculty ? <CSFaculty /> : null}
          {this.state.showguest ? <CSGFaculty /> : null}
          {this.state.showstaff ? <CSStaff /> : null}
        </div>
      </div>
    );
  }
}

export default FacultyNav;
