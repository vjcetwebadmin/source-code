import React, { Component } from "react";
import CSFaculty from "./Academic_tab1";
import CSStaff from "./Academic_tab2";
import CSNonStaff from "./Academic_tab3";
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
          value="ABOUT PROGRAMME"
          class="buttongraph"
          onClick={this.OnClickFac}
        />
       <input
          type="button"
          value="COURSE STRUCTURE"
          class="buttongraph"
          onClick={this.OnClickStaff}
        />        
        <input
          type="button"
          value="COUNCILS AND COMMITTES"
          class="buttongraph"
          onClick={this.OnClickGuest}
        />
        <div class="FacultyNavContent">
          {this.state.showfaculty ? <CSFaculty /> : null}
          {this.state.showstaff ? <CSStaff/> : null}
          {this.state.showguest ? <CSNonStaff /> : null}
        </div>
      </div>
    );
  }
}

export default FacultyNav;
