import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';

import { Line } from './style';

const Divider = () => {
  return <Line />;
};

export default MapTo('reactapp/components/divider')(
    Divider,
  );