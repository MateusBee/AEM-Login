import React from 'react';
import ReactDOM from 'react-dom';
import Input from './index';

it('Renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Input text='Email' />, div);
});
