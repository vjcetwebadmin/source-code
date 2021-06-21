import React, { Component } from "react";
import PhotoData from "./PhotozoomData";
import "../Components/faculty.css"
import "./imgzoom.css"
//import "./imgscrip.jsx"
class Faculty extends Component {
  state = {
    showModal: false,
    caption: '',
    modalSrc: '',
  };
 /* componentDidMount() {
    this.getAllProjectRequirementImageList();
  }*/

    Cefaculty2 = {
    image: "../Assets/naac/img_snow.jpg",
    alt:"sample"
  };  
  Cefaculty11 = {
    instanceID: "Cefaculty11",
    image: "Allstaffphoto/ADM/ADM/arunbobyt.JPEG",
    width: "50%",
    name: <a href=" https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=ADSTF110" target="_blank" rel="noopener noreferrer">Mr. Arun Bobby T</a>,
    content: "Assistant Placement Officer"
  };
  Cefaculty5 = {
    instanceID: "Cefaculty5",
    image: "Allstaffphoto/PTC/IMG_7641.jpg",
    width: "50%",
    name: <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHSTF105" target="_blank" rel="noopener noreferrer">Mr. Sanoj Saju</a>,
    content: "Assistant Placement Officer"
  };
  Cefaculty6 = {
    instanceID: "Cefaculty6",
    image: "Allstaffphoto/SH/FAC/shfac136.jpg",
    width: "50%",
    name:  <a href="https://portal.vjcet.ac.in/StaffGeneralList.aspx?Staffcode=SHFAC136" target="_blank" rel="noopener noreferrer">Ms. Saksy Joy</a>,
    content: "IQAC Placement Co-ordinator"
  };

  render() {
    return (
      <div className="faculty">    
        <div className="facultyContent">    
          <div style={{border:"1px solid"}}>
            <PhotoData data={this.Cefaculty2} />        
          </div>
          <div style={{border:"1px solid"}}>
            <PhotoData data={this.Cefaculty2} />
          </div>
          <div style={{border:"1px solid"}}>
               
          </div>
         {/* <div style={{border:"1px solid"}}>
            
                <img id="myImg" src={require("../Assets/naac/img_snow.jpg")} alt="Snow"  onClick={() => {
            this.setState({ showModal: true, caption: "mmm", modalSrc: "../Assets/naac/img_snow.jpg" });
          }} style={{width:"100%",maxWidth:"200px"}}></img>

        </div>*/}
      </div>

        <div
          id="myModal"
          className="modal"
          style={{ display: this.state.showModal ? 'block' : 'none' }}
        >
          <div>
            <span className="close" onClick={() => this.setState({ showModal: false })}>
              &times;
            </span>
            <img className="modal-content" id="img01" src={this.state.modalSrc} />
            <div id="caption">
              {this.state.caption}
            </div>
          </div>
      </div>


      </div>

    );
  }
}

export default Faculty;
