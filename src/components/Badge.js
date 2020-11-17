import React from 'react';

import confLogo from '../images/confLogo.svg';

class Badge extends React.Component {
  render() {
    return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia"/>
      </div>
      <div>
        <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
        <h1>Richard <br/> Kauffman</h1>
      </div>
      <div>
        <p>Frontend Engineer</p>
        <p>@asparragus</p>
      </div>
      <div>
        #platziconf
      </div>
    </div>);
  }
}

export default Badge;