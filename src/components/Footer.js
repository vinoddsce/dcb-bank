
import React from 'react';

import './Footer.css';

import { Link, NavLink } from 'react-router-dom';
import expressIdeaLogo from '../assets/ideaxpress_logo.png';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer-component">
        <img src={expressIdeaLogo} width={"100px"} height={"100px"} />
        <span className="btn Footer-btn-primary">© Your Company</span>
      </div>
    );
  }
}

export default Footer;
