import React from 'react';
import ReactDOM from 'react-dom';
import Image from './index';

it('Renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Image />, div);
});
