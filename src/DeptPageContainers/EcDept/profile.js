import React, { Component } from "react";
import HeadingOne from "../../Components/Texts/HeadingOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified"
class Profile extends Component {
  state = {};
  ProfileHeading = {
    instanceID: "ProfileHeading",
    title: "Profile"
  };
  Features1 = {
    instanceID: "Features1",
    title: "•	The Department of Electronics & Communication Engineering was established in the year 2001."
  };

  Features2 = {
    instanceID: "Features2",
    title: "•	The Department offers a B.Tech program in Electronics and Communication Engineering and an M.Tech program in VLSI and Embedded Systems."
  };
  Features3 = {
    instanceID: "Features3",
    title: "•	The B.Tech program was accredited by NBA in June 2010 and has been re-accredited in June 2018 for three years. In 2021, the status of accreditation was extended for 1 year. In June 2022, the B.Tech program was re-accredited by NBA for three years till June 2025."
  };
  Features4 = {
    instanceID: "Features4",
    title: "•	The Department is fully equipped with state-of-the-art laboratories along with dedicated and qualified teaching professionals."
  };
  Features5 = {
    instanceID: "Features5",
    title: "•	To meet the requirements of industry and everyday life, the students are trained to carryout research and to develop low power, cost effective electronic products."
  };
  Features6 = {
    instanceID: "Features6",
    title: "•	Students of ECE Department play active role in various professional bodies like ISTE, IEEE, IETE student chapters."
  };
  Features7 = {
    instanceID: "Features7",
    title: "•	The Department consistently organizes External Seminars and Symposiums, Internal Seminars, Short Term Training Programs, Faculty Development Programs etc. sponsored by KTU, IETE, AICTE, ISTE etc."
  };
  Features8 = {
    instanceID: "Features8",
    title: "•	The Department has a very good placement record in various MNC’s. The Department aids the students to get placed in the core companies with the help of a Mini-placement Cell in association with Alumni."
  };
  Features9 = {
    instanceID: "Features9",
    title: "•	The Department bagged many ranks in university exams including 5 first ranks 3 in B. Tech and 2 in M. Tech programs."
  };
  Features10 = {
    instanceID: "Features10",
    title: "•	ECE Department aims to   groom the students with high quality technical, managerial and research skills."
  };
  render() {
    return (
      <div className="Profile" id="profile">
        <HeadingOne data={this.ProfileHeading} />
        <div className="bodyContainer">
          <p><BodyOneJustified data={this.Features1} /></p>
          <p><BodyOneJustified data={this.Features2} /></p>
          <p><BodyOneJustified data={this.Features3} /></p>
          <p><BodyOneJustified data={this.Features4} /></p>
          <p><BodyOneJustified data={this.Features5} /></p>
          <p><BodyOneJustified data={this.Features6} /></p>
          <p><BodyOneJustified data={this.Features7} /></p>
          <p><BodyOneJustified data={this.Features8} /></p>
          <p><BodyOneJustified data={this.Features9} /></p>
          <p><BodyOneJustified data={this.Features10} /></p>
        </div>
      </div>
    );
  }
}

export default Profile;
