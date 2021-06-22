import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honours from "../../../Components/honours";
import "../../../Components/honours.css";
class Ithonours extends Component {
  state = {};
  IthonoursHeading = {
    instanceID: "IthonoursHeading",
    title: "Information Technology"
  };
  Ithonours1 = {
    instanceID: "ithonours1",
    image: "Honours/ithonours1.jpg",
    width: "30%",
    name: "Sonam Susan Mathews",
    content: "Second Rank in B.Tech May 2018"
  };
  Ithonours2 = {
    instanceID: "ithonours2",
    image: "Honours/ithonours2.jpeg",
    width: "30%",
    name: " Jeesmon Johny",
    content: "Sixth Rank in B.Tech May 2017"
  };
  
  Ithonours5 = {
    instanceID: "ithonours5",
    image: "Honours/ithonours5.png",
    width: "30%",
    name: "Akshay Aggarwal",
    content: "First Rank in B.Tech May 2014"
  };
  Ithonours6 = {
    instanceID: "ithonours6",
    image: "Honours/ithonours6.JPEG",
    width: "30%",
    name: "Dincy Devasia",
    content: "Third rank in B.Tech May 2013"
  };
  Ithonours7 = {
    instanceID: "ithonours7",
    image: "Honours/ithonours7.jpg",
    width: "30%",
    name: "Rhimi KX",
    content: "Second Rank in B.Tech May 2012"
  };
  
  Ithonours8 = {
    instanceID: "ithonours8",
    image: "Honours/ithonours8.JPEG",
    width: "30%",
    name: "Soumya Joseph",
    content: "First Rank in B.Tech May 2011"
  };
  Ithonours9 = {
    instanceID: "ithonours9",
    image: "Honours/ithonuors9.JPEG",
    width: "30%",
    name: "Neethu Devassy",
    content: "First Rank in B.Tech May 2010"
  };
  Ithonours10 = {
    instanceID: "ithonours10",
    image: "Honours/ithonours10.JPEG",
    width: "30%",
    name: "Priya Joseph",
    content: "First Rank in B.Tech May 2009"
  };
 
  Ithonours14 = {
    instanceID: "ithonours14",
    image: "Honours/ithonours14.JPEG",
    width: "30%",
    name: "Jithin Joy",
    content: "First Rank in B.Tech May 2005"
  };
  Ithonours15 = {
    instanceID: "ithonours15",
    image: "Honours/ithonours15.jpg",
    width: "30%",
    name: "Swathi Krishna",
    content: "Third Rank in B.Tech May 2018"
  };
  Ithonours16 = {
    instanceID: "ithonours16",
    image: "Honours/ithonours16.jpg",
    width: "30%",
    name: "Manya Kurian",
    content: "Seventh Rank in B.Tech May 2018"
  };
  Ithonours17 = {
    instanceID: "ithonours17",
    image: "Honours/ithonours17.jpg",
    width: "30%",
    name: "Daya Philip",
    content: "Fourth Rank in B.Tech May 2013"
  };
  Ithonours18 = {
    instanceID: "ithonours18",
    image: "Honours/ithonours18.jpg",
    width: "30%",
    name: "Nimitha Joy",
    content: "First Rank in B.Tech May 2015"
  };
  Ithonours19 = {
    instanceID: "ithonours19",
    image: "Honours/ithonours19.jpg",
    width: "30%",
    name: "Maria Jolly",
    content: "Fifth Rank in B.Tech May 2016"
  };
  Ithonours20 = {
    instanceID: "ithonours20",
    image: "Honours/ithonours20.jpg",
    width: "30%",
    name: "Anjana Krishnan",
    content: "Seventh Rank in B.Tech May 2016"
  };
  Ithonours21 = {
    instanceID: "ithonours21",
    image: "Honours/ithonours21.jpg",
    width: "30%",
    name: " Reshma Saju",
    content: "Third Rank in B.Tech May 2015"
  };
  Ithonours22 = {
    instanceID: "ithonours22",
    image: "Honours/ithonours22.jpg",
    width: "30%",
    name: " Noyal Wilson",
    content: "Seventh Rank in B.Tech May 2015"
  };
  Ithonours23 = {
    instanceID: "ithonours23",
    image: "Honours/ithonours23.jpg",
    width: "30%",
    name: " Amalraj Vidhyadharan",
    content: "Fifth Rank in B.Tech May 2019(KTU)"
  };



  render() {
    return (
      <div className="honours">
        <HeadingOne data={this.IthonoursHeading} />
        <div className="photos">
        <div>
            <Honours data={this.Ithonours23} />
          </div>
          <div>
            <Honours data={this.Ithonours1} />
          </div>
          <div>
            {<Honours data={this.Ithonours15} />}
          </div>
          <div>
            {<Honours data={this.Ithonours16} />}
          </div>
          <div>
            <Honours data={this.Ithonours2} />
          </div>
          <div>
            <Honours data={this.Ithonours19} />
          </div>
          <div>
            <Honours data={this.Ithonours20} />
          </div>
          <div>
            <Honours data={this.Ithonours18} />
          </div>
          <div>
            <Honours data={this.Ithonours21} />
          </div>
          <div>
            <Honours data={this.Ithonours22} />
          </div>
          <div>
            <Honours data={this.Ithonours5} />
          </div>
          <div>
            <Honours data={this.Ithonours6} />
          </div>
          <div>
            <Honours data={this.Ithonours17} />
          </div>
          <div>
            <Honours data={this.Ithonours7} />
          </div>
          <div>
            <Honours data={this.Ithonours8} />
          </div>
          <div>
            <Honours data={this.Ithonours9} />
          </div>
          <div>
            <Honours data={this.Ithonours10} />
          </div>
          <div>
            {<Honours data={this.Ithonours14} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Ithonours;
