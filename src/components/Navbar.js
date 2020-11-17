import React from 'react';

import './styles/Navbar.css';
import confLogo from '../images/confLogo.svg';
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <a href="/">
          <img src={confLogo} alt="Logo" />
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </a>
      </div>
    );
  }
}

export default Navbar;