import React from 'react';
import ReactDOM from 'react-dom';
import Divider from './index';

it('Renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Divider />, div);
});
