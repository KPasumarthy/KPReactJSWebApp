import React from 'react';
import ReactDOM from 'react-dom';
import AppZero from './AppZero';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppZero />, div);
  ReactDOM.unmountComponentAtNode(div);
});
