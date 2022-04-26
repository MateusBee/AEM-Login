import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';
import PropTypes from 'prop-types';

import { InputContainer } from './style';

const Input = ({ text, value, setValue, ...props }) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  return <InputContainer
    placeholder={text}
    value={value}
    onChange={handleChange}
    {...props}
  />;
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func
};

export default MapTo('reactapp/components/input')(
  Input,
);
