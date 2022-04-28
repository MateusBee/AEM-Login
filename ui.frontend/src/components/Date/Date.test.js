import React from 'react';
import ReactDOM from 'react-dom';
import Time from './index';

it('Renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Time />, div);
});
