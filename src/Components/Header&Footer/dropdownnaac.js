import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownNaac extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className="dropdown">
        <span>NAAC <i class="fa fa-caret-down"></i></span>
        <div className="dropdown-content">
          <p>
            <a
              href="https://vjcet.org/downloads/KLCOGN110370.pdf"
              className="patch1"
              target="_blank"
              rel="noopener noreferrer"
              NAAC SSR
            >
              SSR
            </a>
          </p>
          <p>
          <a
              href="https://vjcet.org/downloads/IIQA.pdf"
              className="patch1"
              target="_blank"
              rel="noopener noreferrer"
              NAAC IIQA
            >
              IIQA
            </a>
          </p>
          
        </div>
      </div>
    );
  }
}
export default DropDownNaac;
