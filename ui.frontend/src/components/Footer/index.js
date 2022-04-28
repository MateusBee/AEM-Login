import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';
import PropTypes from 'prop-types';

import Divider from '../Divider';
import Timer from '../Timer';
import Button from '../Button';

import { Wrapper, FooterContainer, Text, Actions } from './style';

const Footer = ({ text, use, logOut, logOutUrl }) => {
  const [reset, setReset] = React.useState(true);

  const resetTime = () => {
    setReset(!reset);
  }

  return <Wrapper>
      <FooterContainer>
        <Text>{text}</Text>
        <Divider />
        <Actions>
            <Timer reset={reset} />
            <Button text={use} layOut="default" onClick={resetTime}/>
            <Button text={logOut} url={logOutUrl} layOut="logOut" />
        </Actions>
      </FooterContainer>
  </Wrapper>;
};

Footer.propTypes = {
  text: PropTypes.string,
  use: PropTypes.string,
  logOut: PropTypes.string,
};

Footer.defaultProps = {
  text: 'Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.',
  use: 'Continuar Navegando',
  logOut: 'LogOut',
}

export default MapTo('reactapp/components/footer')(
    Footer,
  );