import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
//import "./honours.css";
import Honours from "../../../Components/honours";
class Cshonours extends Component {
  state = {};
  CshonoursHeading = {
    instanceID: "CehonoursHeading",
    title: "Computer Science & Engineering"
  };
  Cshonours1 = {
    instanceID: "cshonours1",
    image: "Honours/cshonour2.JPEG",
    width: "30%",
    name: "Anu Soosan Baby",
    content:
      "Secured Third Rank in B.Tech Computer Science & Engineering May 2011"
  };
  Cshonours2 = {
    instanceID: "cshonours2",
    image: "Honours/cshonour1.JPEG",
    width: "30%",
    name: "Lis Joy",
    content:
      "Secured Second Rank in B.Tech Computer Science & Engineering May 2008"
  };
  Cshonours3 = {
    instanceID: "cshonours3",
    image: "Honours/cshonour3.JPEG",
    width: "30%",
    name: "Nimmy George",
    content: "Secured First Rank in M.Tech Computer Science & Engineering May 2011"
  };
  Cshonours4 = {
    instanceID: "cshonours4",
    image: "Honours/cshonour4.JPEG",
    width: "30%",
    name: "Kavya Johny",
    content: "Secured Second Rank in M.Tech Computer Science & Engineering May 2011"
  };
  Cshonours5 = {
    instanceID: "cshonours5",
    image: "Honours/cshonour5.JPEG",
    width: "30%",
    name: "Sivadas T Nair",
    content: "Secured Third Rank in M.Tech Computer Science & Engineering May 2011"
  };
  Cshonours6 = {
    instanceID: "cshonours6",
    image: "Honours/cshonour6.JPEG",
    width: "30%",
    name: "Merin Francis",
    content: "Secured First Rank in M.Tech Computer Science & Engineering May 2014"
  };
  
  Cshonours7 = {
    instanceID: "cshonours7",
    image: "Honours/cshonour7.jpg",
    width: "30%",
    name: "Abhirami Aji",
    content: "Secured Fourth Rank in B.Tech Computer Science & Engineering May 2018"
  };
  Cshonours8 = {
    instanceID: "cshonours8",
    image: "Honours/cshonour8.jpg",
    width: "30%",
    name: "Ashna Paul",
    content: "Secured Fifth Rank in B.Tech Computer Science & Engineering May 2018"
  };
  Cshonours9 = {
    instanceID: "cshonours9",
    image: "Honours/cshonour9.jpg",
    width: "30%",
    name: "Lini Abraham",
    content: "Secured Second Rank in M.Tech Computer Science & Engineering May 2014"
  };
  render() {
    return (
      <div className="honours1">
        <HeadingOne data={this.CshonoursHeading} />
        <div className="photos">
          <div>
          <Honours data= {this.Cshonours7} />  
          </div>
          <div>
          <Honours data={this.Cshonours8} />
          </div>
          <div>
          <Honours data={this.Cshonours6} />
          </div>
          <div>
          <Honours data={this.Cshonours9} />
          </div>
          <div>
          <Honours data={this.Cshonours1} />
          </div>
          <div>
          <Honours data={this.Cshonours3} />
          </div>
          <div>
          <Honours data={this.Cshonours4} />
          </div>
          <div>
            <Honours data={this.Cshonours5} />
          </div>
          <div>
          <Honours data={this.Cshonours2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cshonours;
