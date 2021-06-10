import React, { Component } from "react";
import HeadingOne from "../../../Components/Texts/HeadingOne";
import Honours from "../../../Components/honours";
class Cehonours extends Component {
  state = {};
  render() {
    const { heading, honours } = this.props.data;
    return (
      <div className="honours">
        <HeadingOne data={heading} />
        <div className="photos">
          {honours.map(i => (
            <div>
              <Honours data={i} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cehonours;
