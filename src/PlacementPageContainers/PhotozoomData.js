import React, { Component } from "react";
import "./imgzoom.css"
class PhotoData extends Component {
  state = {};

  render() {
    const { image,alt} = this.props.data;

    return (
        <img
          id="myImg"
          src={image}
          onClick={() => {
            this.setState({ showModal: true, caption: alt, modalSrc: image });
          }}
          alt={alt}
          style={{ width: '100%', maxWidth: '300px' }}
        />
      );
     }
    }
export default PhotoData;
