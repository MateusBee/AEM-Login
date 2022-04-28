import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';

import CircleCompass from '../../assets/CircleCompass.png';

import { BannerContainer, TextContainer, Img, Text } from './style';

const Banner = () => {
  return <BannerContainer>
      <Img src={CircleCompass} alt='CicleCompass' />
      <TextContainer>
        <Text color='#C12D18' font='35px' fontWeight='700'>Our mission is</Text>
        <Text color='#222222' font='20px' fontWeight='400'>Nossa missão é</Text>

        <Text color='#C12D18' font='40px' fontWeight='700'>to transform the world</Text>
        <Text color='#222222' font='20px' fontWeight='400'>transformar o mundo</Text>

        <Text color='#C12D18' font='40px' fontWeight='700'>building digital experiences</Text>
        <Text color='#222222' font='20px' fontWeight='400'>construindo experiências digitais</Text>

        <Text color='#C12D18' font='40px' fontWeight='700'>that enable our client’s growth</Text>
        <Text color='#222222' font='20px' fontWeight='400'>que permitam o crescimento dos nossos clientes</Text>
      </TextContainer>
    </BannerContainer>;
};

export default MapTo('reactapp/components/banner')(
    Banner,
  );