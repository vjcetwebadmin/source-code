import React, { Component } from 'react'
import HeadingTwo from "../Components/Texts/HeadingTwo";
import BodyOneJustified from "../Components/Texts/BodyOneJustified"
class Profile extends Component {
  state = {};
  ProfileHeading = {
    instanceID: "ProfileHeading",
    title: "Staff Grievance Registration Mechanism"
  };
  Features1 = {
    instanceID: "Features1",
    title: "In order to submit complaints and difficulties of the student community we provide following mechanisms:"
  };

  Features2 = {
    instanceID: "Features2",
    title: "•	Students are free to handover the grievances to any of the committee members."
  };
  Features3 = {
    instanceID: "Features3",
    title: "•	They can drop their written grievances in the complaint box placed in front of the office."
  };
  Features4 = {
    instanceID: "Features4",
    title: "•	This branch deals with study, devise, development, execution, support and running of computer-based information systems."
  };

  render() {
    return (
      <div className="Profile" id="profile">
        <HeadingTwo data={this.ProfileHeading} />
          <p><BodyOneJustified data={this.Features1} /></p>
          <p><BodyOneJustified data={this.Features2} /></p>
          <p><BodyOneJustified data={this.Features3} /></p>
          <p style={{fontSize:"18px",textAlign:"justify"}}>• They can put up their grievance as an e-mail to <span style={{color:"blue"}}>grievance@vjcet.org</span></p>
          {/*<p style={{fontSize:"18px",textAlign:"justify"}}>• They may also register their complaints <a href="https://portal.vjcet.ac.in/" target="_blank" rel="noopener noreferrer">here</a></p>*/}
          <p></p>
      </div>
    );
  }
}

export default Profile;
