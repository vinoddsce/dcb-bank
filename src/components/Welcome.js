import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import banking from '../assets/banking_idea.gif';

import './Welcome.css';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Welcome-component" style={{ width: "100%", height: "100%" }} >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ReactPlayer url="https://www.youtube.com/watch?v=fTTGALaRZoc" playing />
                </div>
                <img src={banking} />
            </ div>
        );
    }
}



export default Welcome;