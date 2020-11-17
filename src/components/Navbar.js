import React from 'react';


import confLogo from '../images/confLogo.svg';
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src={confLogo} alt="Logo" />
          <span className="">Platzi</span>
          <span>Conf</span>
        </a>
      </div>
    );
  }
}

export default Navbar;