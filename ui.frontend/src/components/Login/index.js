import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, CompanyMob, Img, H1, H3 } from './style';

import Form from '../Form';

import LoginImage from '../../assets/LoginImage.png';
import Compass from '../../assets/compass.png'

const Login = ({ title, text, url }) => {
  return <Wrapper>
      <Container>
        <div>
            <CompanyMob>
                <img src={Compass} alt="Compass"/>
            </CompanyMob>
            <H1>{title}</H1>
            <H3>{text}</H3>
            <Form />
        </div>
      </Container>
      <Img alt='login' src={LoginImage} />
  </Wrapper>;
};

Login.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
  };
  
Login.defaultProps = {
    title: 'Olá,',
    text: 'Para continuar navegando de forma segura, efetue o login na rede.'
}

export default MapTo('reactapp/components/login')(
  Login,
);
