import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer } from './style';

const Button = ({ text, layOut, ...props }) => {
  return <ButtonContainer layOut={layOut} {...props}>{text}</ButtonContainer>;
};

Button.propTypes = {
  text: PropTypes.string
};

Button.defaultProps = {
  text: 'Continuar',
  layOut: 'logIn'
}

export default MapTo('reactapp/components/button')(
    Button,
  );