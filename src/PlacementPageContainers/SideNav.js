import React, { Component } from "react";
import Profile from "./profile";
import Vision from "./vision";
import Faculty from "./PlacementTeam";
import Recruitment from "./Recruitment";
import Statistics from "./Statistics";
import Photoalbum from "./Photoalbum";
import "../Components/SideNav.css";
class SideNav extends Component {
  state = {
    showProfile: false,
    showVision: false,
    showfac: false,
    showRecurit: true,
    showStatistics: false,
    showPhoto:false
  };
  onClickP = () => {
    this.setState({
      showProfile: true,
      showVision: false,
      showfac: false,
      showRecurit: false,
      showStatistics: false,
      showPhoto:false
      
    });
  };
  onClickV = () => {
    this.setState({
      showProfile: false,
      showVision: true,
      showfac: false,
      showRecurit: false,
      showStatistics: false,
      showPhoto:false
    });
  };
  onClickFac = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showfac: true,
      showRecurit: false,
      showStatistics: false,
      showPhoto:false
    });
  };
  onClickRec = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showfac: false,
      showRecurit: true,
      showStatistics: false,
      showPhoto:false
    });
  };
  onClickStat = () => {
    this.setState({
      showProfile: false,
      showVision: false,
      showfac: false,
      showRecurit: false,
      showStatistics: true,
      showPhoto:false
    });
  };
    onClickPhoto = () => {
      this.setState({
        showProfile: false,
        showVision: false,
        showfac: false,
        showRecurit: false,
        showStatistics: false,
        showPhoto:true
      });   
  };
  render() {
    return (
      <React.Fragment>

        <div className="Deptcontent">
          <div class="sidenav">
          <input
              value="Recruitments"
              class="button"
              onClick={this.onClickRec}
            />
            <input
              value="About"
              class="button"
              onClick={this.onClickP}
            />
            <input
              value="Vision & Mission"
              class="button"
              onClick={this.onClickV}
            />
            <input
              value="Statistics"
              class="button"
              onClick={this.onClickStat}
            />
           <input
              value="Our Team"
              class="button"
              onClick={this.onClickFac}
            />

         {/* <input
              value="Photo Album"
              class="button"
              onClick={this.onClickPhoto}
         />*/}
            
          </div>
          <div className="content">
            {this.state.showRecurit ? <Recruitment /> : null}
            {this.state.showProfile ? <Profile /> : null}
            {this.state.showVision ? <Vision /> : null}
            {this.state.showfac ? <Faculty /> : null}
            {this.state.showStatistics ? <Statistics/> : null}
            {this.state.showPhoto ? <Photoalbum/> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
