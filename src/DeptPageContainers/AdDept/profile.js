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
    title: "•	The prestigious course, B.Tech Artificial Intelligence and Data science which imparts in-demand technical skills in aspirants is commenced at VJCET in the year 2020."
  };

  Features2 = {
    instanceID: "Features2",
    title: "•	This course provides a profound knowledge in the cutting edge AI, Machine Learning and Deep Learning techniques through a pragmatic approach of providing trainings in Python, Pandas, BigData tools, Tensor Flow, Keras, NumPy etc."
  };
  Features3 = {
    instanceID: "Features3",
    title: "•	The department has highly qualified, well experienced faculty members trained in AI, ML and data analytic tools, headed by Dr. Melvin C Jose."
  };
  Features4 = {
    instanceID: "Features4",
    title: "•	The course is predicted to have a huge job opportunity since most of the enterprise applications will have an inbuilt AI application functionality incorporated in near future."
  };
  Features5 = {
    instanceID: "Features5",
    title: "•	The department will also assist the scholars to get well placed in the top reputed companies through the sedulous effort of the placement cell of VJCET in association with the dynamic Alumni Association."
  };
  Features6 = {
    instanceID: "Features6",
    title: "•	The students become proficient in their professional skills through the active participation in various professional bodies like ISTE, IEEE, CSI, Department Associations etc., of the college."
  };
  Features7 = {
    instanceID: "Features7",
    title: "•	The department constantly organises events such as External Seminars, Symposiums, Short Term Training Programs by industrial experts and Faculty Development Programs to inculcate novel ideas, industrial exposure and to get connected with like-minded enthusiasts in AI."
  };
  Features8 = {
    instanceID: "Features8",
    title: "•	Computer Society of India (CSI) student branch won the ‘Best Accredited Student Branch’ for the last four consecutive years."
  };
  Features9 = {
    instanceID: "Features9",
    title: "•	Collaborated with Senior Experten Service (SES) Germany for knowledge sharing in an international interdisciplinary platform."
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
        </div>
      </div>
    );
  }
}

export default Profile;
