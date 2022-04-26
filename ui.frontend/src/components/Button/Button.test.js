import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index';

it('Renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Button text='Login' />, div);
});
