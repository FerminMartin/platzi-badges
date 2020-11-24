import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Gravatar from '../components/Gravatar';

import './styles/BadgesList.css';
function BadgesList (props) {
  const badges = props.badges;
    if(badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled BadgesList">
          {badges.map((badge) =>{
            return (
              <li key={badge.id} className="BadgesListItem">
                <Link className="text-reset text-decoration-none BadgesListItem-display" to={`/badges/${badge.id}`}>
                  <Gravatar className="BadgesListItem__avatar" email={badge.email} alt="Avatar"/>
                  <div>
                    <div><strong>{badge.firstName} {badge.lastName}</strong></div>
                    <div className="Twitter__name">
                      <span className="Twitter__logo twitter__text">@{badge.twitter}</span>
                    </div> 
                    <div>{badge.jobTitle}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>  
    );
  }

export default BadgesList;