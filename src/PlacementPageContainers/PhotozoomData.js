import React, { Component } from "react";
import "./imgzoom.css"
class PhotoData extends Component {
  state = {};

  render() {
    const { image,cname,cyear} = this.props.data;
    const alt="";
    return (

     <div>      
        <img
          id="myImg"
          src={require("../Assets/" + image)}
          onClick={() => {
            this.setState({ showModal: true, caption: alt, modalSrc: image });
          }}
          alt={alt}
          /*style={{ width: '100%', maxWidth: '200px' }}*/
          height="180px"
          
        />
         <div
            id="myModal"
            className="modal"
            style={{ display: this.state.showModal ? 'block' : 'none' }}>
            <div>
                <span className="close" onClick={() => this.setState({ showModal: false })}>
                    &times;
                </span>
                <img className="modal-content" id="img01" src={require("../Assets/" + image)}/>
                <div id="caption">
                   {this.state.caption}
                </div>
          </div>
       </div>  
       <h5>{cname}</h5>   
   </div>
      );
    
     }
    }
export default PhotoData;
