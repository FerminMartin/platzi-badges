import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  state = { form: {} };

  handleChange = e => {
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;

    this.setState({
        form: nextForm,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName="Fermin" 
                lastName="Martin" 
                twitter="fermartorr" 
                jobTitle="Frontend Engineer" 
                avatarUrl="https://s.gravatar.com/avatar/930f34bb64181c4cfc8a72d264fc90be?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;