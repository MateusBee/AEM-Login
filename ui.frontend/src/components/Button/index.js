import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ButtonContainer } from './style';

const Button = ({ text, url, layOut, onClick, ...props }) => {
  return (
    url ? <Link to={url}>
      <ButtonContainer layOut={layOut} {...props}>{text}</ButtonContainer>
    </Link>
    : <ButtonContainer layOut={layOut} onClick={() => onClick()} {...props}>{text}</ButtonContainer>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: 'Continuar',
  layOut: 'logIn',
  onClick: () => {},
}

export default MapTo('reactapp/components/button')(
    Button,
  );