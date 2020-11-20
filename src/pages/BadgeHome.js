import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

import astro from '../images/astronauts.svg';
import logo from '../images/platziconf-logo.svg';

class BadgeHome extends React.Component{
  render() {
    return (
        <div className="Home">
        <dir className="col-text">
          <img src={logo} alt="Platzi conf logo"/>
          <p>
            <h1>BADGE MANAGEMENT SYSTEM</h1>
            <Link className="btn btn-primary" to="/Badges">Start</Link>
          </p>
        </dir>
        <dir className="col-img">
          <img src={astro} alt="Astronauta"/>
        </dir>
      </div>
    );
  }
  }

export default BadgeHome;