import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class DropDownAb extends Component {
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
        <span>About VJCET <i class="fa fa-caret-down"></i></span>
        <div className="dropdown-content">
          <p>
            <Link
              to="/about"
              className="patch1"
            >
              About College
            </Link>
          </p>
          <p>
            <Link
              to="/about/vision"
              className="patch1"
            >
              Vision & Mission
            </Link>
          </p>
          <p>
            <Link
              to="/about/keyfunctionaries"
              className="patch1"
            >
              Key Functionaries
            </Link>
            </p> 
            <p>
            <Link
              to="/about/govbody"
              className="patch1"
            >
             Organogram
            </Link>
          </p>
           <p>
            <Link
              to="/about/affliations"
              className="patch1"
            >
             Affiliations
            </Link>
          </p>                  
          <p>
            <Link
              to="/about/accreditation"
              className="patch1"
            >
              Accreditation
            </Link>
          </p>        
 
          <p>
            <Link
              to="/about/mandatorydisclosure"
              className="patch1"
            >
              Mandatory Disclosure
            </Link>
          </p>
          <p>
            <Link
              to="/about/approval"
              className="patch1"
            >
              Approval Letters (EOA)
            </Link>
          </p>
          <p>
            <Link
              to="/about/RTI"
              className="patch1"
            >
              Right To Information
            </Link>
          </p>
          <p>
            <Link
              to="/codofc"
              className="patch1"
            >
              Code of Conduct
            </Link>
          </p>
          <p>
            <Link
              to="/greve"
              className="patch1"
            >
              Grievance and Redressal
            </Link>
          </p>
          {/*<p>
            <Link
              to="/about/annualrpt"
              className="patch1"
            >
              Annual Reports
            </Link>
          </p>*/}
        </div>
      </div>
    );
  }
}
export default DropDownAb;
