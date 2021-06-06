import React, { Component } from "react";
import HeadingOne from "../Components/Texts/HeadingOne";
import "../Components/Tables/tableformat.css";
class Dates extends Component {
    state = {};
    ProfileHeading = {
        instanceID: "ProfileHeading",
        title: "Important Dates"
    };
    render() {
        return (
            <div className="Profile" id="profile">
                <HeadingOne data={this.ProfileHeading} />
                <div className="bodyContainer">
                    <table border="1" id="tableformat">
                        <tr>
                            <td>Filling up of ONLINE application form</td>
                            <td>will be updated soon</td>
                        </tr>
                        <tr>
                            <td>
                                Last date to receive the online/printed application
                            </td>
                            <td>will be updated soon</td>
                        </tr>
                        <tr>
                            <td>
                                Publication of Provisional Rank List
	    </td>
                            <td>will be updated soon</td>
                        </tr>
                        <tr>
                            <td>
                                Selection and Admission
                            </td>
                            <td>will be updated soon</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Dates;
