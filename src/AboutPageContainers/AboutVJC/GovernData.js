import React, { Component } from "react";
class FacultyData extends Component {
  state = {};

  render() {
    const { instanceID, image,mianhead, width, name, content } = this.props.data;

    return (
      <div
      
        className={` ${this.props.className ? this.props.className : ""}`}
        id={instanceID}
        style={{ ...this.props.containerStyle,textAlign:"center"}}
        onClick={
          this.props.onClickAction
            ? () => {
                this.props.onClickAction();
              }
            : () => {}
        }   
      >
        <table><th style={{backgroundColor:"#800000",color:"white",textAlign:"center",fontSize:"18px"}}>{mianhead}</th></table>
  
        <img
          src={require("../../Assets/" + image)}
         /*width={width}   */    
          height="225px;"
          style={{ ...this.props.imgStyle }}
          alt="img"
        />
        <h4>{name}</h4>
        <p>{content}</p>
      </div>
    );
  }
}

export default FacultyData;
