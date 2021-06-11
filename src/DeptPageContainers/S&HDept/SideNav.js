import React, { Component } from "react";
import Profile from "./profile";
import Vision from "./vision";
import Labs from "./labs";
import FacultyNav from "./facultynav";
class SideNav extends Component {
  state = {
    showProfile: true,
    showVision: false,
    showLib: false,
    showfac: false
  };
  onClickP = () => {
    this.setState({
      showProfile: true,
      showVision: false,
      showLib: false,
      showfac: false
    });
  };
  onClickV = () => {
    this.setState({
      showProfile: false,
      showVision: true,
      showLib: false,
      showfac: false
    });
  };
  onClickFac = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showLib: false,
      showfac: true
    });
  };
  onClicklib = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showLib: true,
      showfac: false
    });
  };
  render() {
    return (
      <React.Fragment>

        <div className="Deptcontent">
          <div class="sidenav">
            <input
              value="Profile"
              className="button"
              onClick={this.onClickP}
            />
            <input
              value="Vision & Mission"
              className="button"
              onClick={this.onClickV}
            />
            <input
              value="Faculty"
              className="button"
              onClick={this.onClickFac}
            />
            <input
              value="Labs"
              className="button"
              onClick={this.onClicklib}
            />
          </div>
          <div className="content">
            {this.state.showProfile ? <Profile /> : null}
            {this.state.showVision ? <Vision /> : null}
            {this.state.showfac ? <FacultyNav /> : null}
            {this.state.showLib ? <Labs /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
