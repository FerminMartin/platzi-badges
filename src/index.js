import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
  <Badge 
    firstName="Lily" 
    lastName="Martin" 
    avatarUrl="https://s.gravatar.com/avatar/930f34bb64181c4cfc8a72d264fc90be?s=80"
    jobTitle="Kickass senior dev" 
    twitter="fermartorr" 
  />, 
  container
  );