import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';

import BlackCompass from '../../assets/BlackCompass.png'

const Image = () => {
    return <img src={BlackCompass} alt="Compass" />
};

export default MapTo('reactapp/components/image')(
    Image,
  );