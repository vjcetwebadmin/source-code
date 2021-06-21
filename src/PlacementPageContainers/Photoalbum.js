import React, { Component } from "react";
import PhotoData from "./PhotozoomData";
//import "./zoomalbum.css"
import "./imgzoom.css"
//import "./imgscrip.jsx"
class Faculty extends Component {
  state = {
    showModal: false,
    caption: '',
    modalSrc: '',
  };
 Cefaculty1 = {
    image: "ph_placement/TCS.jpg",
    cname: "TCS, 2020 Batch"
  };  
  Cefaculty2 = {
    image: "ph_placement/VIT.jpg",
    cname: "VIT, 2020 Batch"
  };  
  Cefaculty3 = {
    image: "ph_placement/Quest.jpg",
    cname: "Quest, 2020 Batch"
  };  
  Cefaculty4 = {
    image: "ph_placement/Gadgeon.jpg",
    cname: "Gadgeon, 2020 Batch"
  };  
  Cefaculty5 = {
    image: "ph_placement/Experion.jpg",
    cname: "Experion, 2020 Batch"
  };  
  Cefaculty6 = {
    image: "ph_placement/Envestnet.jpg",
    cname: "Envestnet, 2020 Batch"
  };  
  Cefaculty7 = {
    image: "ph_placement/6Dtechn.jpg",
    cname: "6D Technologies, 2020 Batch"
  }; 
  render() {
    return (
      <div className="facultynew">    
        <div className="facultyContentnew">    
          <div>
            <PhotoData data={this.Cefaculty1} />        
          </div>
          <div >
            <PhotoData data={this.Cefaculty2} />
          </div>
          <div >
            <PhotoData data={this.Cefaculty3} />
          </div>
          <div >
            <PhotoData data={this.Cefaculty4} />
          </div>
          <div >
            <PhotoData data={this.Cefaculty5} />
          </div>
          <div >
            <PhotoData data={this.Cefaculty6} />
          </div>    
          <div >
            <PhotoData data={this.Cefaculty7} />
          </div>               
      </div>

     
   </div>

    );
  }
}

export default Faculty;
