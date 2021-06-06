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
                <a href="https://docs.google.com/forms/d/1v2ETMV9R5seZgJCXlvk2enjfnT9S0lFCm7u8e1b4QsM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                Click here to fill M.Tech Application Online</a>
            </div>
        );
    }
}

export default Application;