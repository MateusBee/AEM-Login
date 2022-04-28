import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './index';

it('Renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Timer />, div);
});
