import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';

import Image from '../Image';
import Time from '../Date';
import Weather from '../Weather';

import { HeaderContainer } from './style';

const Header = () => {
  return <HeaderContainer>
      <Image />
      <Time />
      <Weather />
  </HeaderContainer>;
};

export default MapTo('reactapp/components/header')(
    Header,
  );