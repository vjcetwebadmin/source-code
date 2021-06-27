import React, { Component } from "react";
import PhotoData from "./PhotozoomData";
import "./imgzoom.css"
class Faculty extends Component {
  state = {
    showModal: false,
    caption: '',
    modalSrc: '',
  };
  Cefaculty13 = {
    image: "ph_placement/Sutherlandb.jpg",
    cname: "Sutherland 2021 Batch"
  }; 
  Cefaculty12 = {
    image: "ph_placement/Sutherlanda.jpg",
    cname: "Sutherland, 2021 Batch"
  }; 
  Cefaculty11 = {
    image: "ph_placement/Mitsogo.jpg",
    cname: "Mitsogo, 2021 Batch"
  }; 
  Cefaculty10 = {
    image: "ph_placement/Guidehouse.jpg",
    cname: "Guidehouse, 2021 Batch"
  }; 
  Cefaculty9 = {
    image: "ph_placement/Vvdn.jpg",
    cname: "VVDN, 2021 Batch"
  }; 
  Cefaculty8 = {
    image: "ph_placement/Factweavers.jpg",
    cname: "Factweavers, 2021 Batch"
  }; 
 Cefaculty1 = {
    image: "ph_placement/TCS.jpg",
    cname: "TCS, 2021 Batch"
  };  
  Cefaculty2 = {
    image: "ph_placement/VIT.jpg",
    cname: "VIT, 2021 Batch"
  };  
  Cefaculty3 = {
    image: "ph_placement/Quest.jpg",
    cname: "Quest, 2021 Batch"
  };  
  Cefaculty4 = {
    image: "ph_placement/Gadgeon.jpg",
    cname: "Gadgeon, 2021 Batch"
  };  
  Cefaculty5 = {
    image: "ph_placement/Experion.jpg",
    cname: "Experion, 2021 Batch"
  };  
  Cefaculty6 = {
    image: "ph_placement/Envestnet.jpg",
    cname: "Envestnet, 2021 Batch"
  };  
  Cefaculty7 = {
    image: "ph_placement/6Dtechn.jpg",
    cname: "6D Technologies, 2021 Batch"
  }; 
  render() {
    return (
      <div className="facultynew">    
        <div className="facultyContentnew">   
        <div>
            <PhotoData data={this.Cefaculty13} />        
          </div>
        <div>
            <PhotoData data={this.Cefaculty12} />        
          </div>
        <div>
            <PhotoData data={this.Cefaculty11} />        
          </div>
        <div>
            <PhotoData data={this.Cefaculty10} />        
          </div>
        <div>
            <PhotoData data={this.Cefaculty9} />        
          </div>
        <div>
            <PhotoData data={this.Cefaculty8} />        
          </div> 
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
