// const element = document.createElement('h1');
// element.innerText = 'Hello Platzi! Yeah';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello Platzi!</h1>;
// const element = React.createElement(
//   'a',
//   { href: 'https://platzi.com' },
//   'Ir');
// const name = 'Angela';
// const element = React.createElement('h1', {}, `Hola, soy ${name}`);
// const jsx = <h1>Hola, soy {name}</h1>

const jsx = (<div>
  <h1>Hola, soy Fermin</h1>
  <p>Soy ingeniero frontend</p>
</div>); //jsx

const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Hola, soy Fermin'),
  React.createElement('p', {}, 'Soy ingeniera frontend')
); //React.createElement

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__)
ReactDOM.render(element, container);