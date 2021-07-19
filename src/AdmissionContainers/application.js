import React, { Component } from 'react';
import HeadingOne from '../Components/Texts/HeadingOne';
class Application extends Component {
    state = {}
    Heading = {
        instanceID: "Heading",
        title: "Application"
    }
    render() {
        return (
            <div>

                <HeadingOne data={this.Heading}></HeadingOne>
                <a href="http://172.104.189.51/login" target="_blank" rel="noopener noreferrer">
                Click here to fill M.Tech Application Online</a>
            </div>
        );
    }
}

export default Application;