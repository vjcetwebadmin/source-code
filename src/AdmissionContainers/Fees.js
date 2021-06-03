import React, { Component } from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import HeadingThree from "../Components/Texts/HeadingThree";
import BodyOneJustified from "../Components/Texts/BodyOneJustified";
class Fees extends Component {
    state = {};
    ProfileHeading = {
        instanceID: "ProfileHeading",
        title: "Fee Structure"
    };
    Features1 = {
        instanceID: "Features1",
        title: "M. Tech Computer Science and Engineering"
    };
    Features2 = {
        instanceID: "Features3",
        title: "Rs. 25,000/- Semester for GATE/Non-GATE candidates"
    };
    Features4 = {
        instanceID: "Features4",
        title: "M.Tech in Electronics and Communication Engineering(VLSI & Embedded Systems)"
    };
    Features5 = {
        instanceID: "Features6",
        title: "Rs. 25,000/- Semester for GATE/Non-GATE candidates"
    };
    Features10 = {
        instanceID: "Features4",
        title: "M.Tech in Industrial Engineering and Management"
    };
    Features11 = {
        instanceID: "Features6",
        title: "Rs. 25,000/- Semester for GATE/Non-GATE candidates"
    };
    Features7 = {
        instanceID: "Features7",
        title: "FOR DETAILS CONTACT"
    };
    Features8 = {
        instanceID: "Features8",
        title: "Mr. Andrews Jose (CSE) - 9895987155"
    };
    Features9 = {
        instanceID: "Features9",
        title: "Ms. Niji Mathews(ECE) - 9847146256"
    };
    Features13 = {
        instanceID: "Features9",
        title: "Mr. Tijo Jose(ME) - 9946549118"
    };
    render() {
        return (
            <div className="Profile" id="profile">
                <HeadingOne data={this.ProfileHeading} />
                <div className="bodyContainer">
                    <p><HeadingThree data={this.Features1} /></p>
                    <p><BodyOneJustified data={this.Features2} /></p>
                    <p><HeadingThree data={this.Features4} /></p>
                    <p><BodyOneJustified data={this.Features5} /></p>
                    <p><HeadingThree data={this.Features10} /></p>
                    <p><BodyOneJustified data={this.Features11} /></p>
                    <p><HeadingThree data={this.Features7} /></p>
                    <p><BodyOneJustified data={this.Features8} /></p>
                    <p><BodyOneJustified data={this.Features9} /></p>
                    <p><BodyOneJustified data={this.Features13} /></p>
                </div>
            </div>
        );
    }
}

export default Fees;
