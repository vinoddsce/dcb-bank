import React, { Component } from 'react';
import UserActionNavbar from './UserActionNavbar';

class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ width: '100%', height: '567px', padding: '50px 20px' }}>
                <UserActionNavbar />
                <p>Achievements Under Construction</p>
            </div>
        );
    }
}

export default Achievements;