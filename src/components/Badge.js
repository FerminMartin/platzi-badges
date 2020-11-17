import React from 'react';

import './styles/Badge.css'
import confLogo from '../images/confLogo.svg';

class Badge extends React.Component {
  render() {
    return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia"/>
      </div>
      <div className="Badge__section-name">
        <img className="Badge__avatar" src="https://s.gravatar.com/avatar/930f34bb64181c4cfc8a72d264fc90be?s=80
" alt="Avatar"/>
        <h1 className="">Fermin <br/> Martin</h1>
      </div>
      <div className="Badge__section-info">
        <p>Frontend Engineer</p>
        <p>@fermartorr</p>
      </div>
      <div className="Badge__footer">
        #platziconf
      </div>
    </div>);
  }
}

export default Badge;