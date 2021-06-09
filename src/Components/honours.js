import React, { Component } from "react";
class honoursdata extends Component {
  state = {};

  render() {
    const { instanceID, image, width, name, content } = this.props.data;

    return (
      <div
        className={` ${this.props.className ? this.props.className : ""}`}
        id={instanceID}
        style={{ ...this.props.containerStyle }}
        onClick={
          this.props.onClickAction
            ? () => {
                this.props.onClickAction();
              }
            : () => {}
        }
      >
        <img
          src={require("../Assets/" + image)}
          // width={width}
          height="200px"
          style={{ ...this.props.imgStyle }}
          alt="alt"
        />
        <h3>{name}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

export default honoursdata;
