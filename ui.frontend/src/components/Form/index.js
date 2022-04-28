import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';

import { TitleContainer, ButtonContainer, Img } from './style';

import Input from '../Input';
import Button from '../Button';

import errorMessage from '../../assets/errorMessage.png';

const Form = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleFields = (fields, formElements) => fields
    .map(field => ({
      [field]: formElements.namedItem(field).value
    }))
    .reduce((current, next) => ({ ...current, ...next }));

  const handleSubmit = async e => {
    e.preventDefault();

    let fields = [ 'user', 'password' ];

    const formElements = e.target.elements;

    const { user, password } = handleFields(fields, formElements)

    if (user === 'admin' && password === 'admin') {
      localStorage.setItem('user', user);
      localStorage.setItem('password', password);
      console.log('deu boa');
      // redirect
    } else {
      setError(true);
    }
  }

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    const password = localStorage.getItem('password');
    setUser(user);
    setPassword(password);
  }, []);

  return <div>
      <TitleContainer>
        <span>Login</span>
      </TitleContainer>
      <form onSubmit={handleSubmit}>
        <Input
          name="user"
          text="Usuário"
          required
          value={user}
          setValue={setUser}
        />
        <Input
          name="password"
          text="Password"
          type="password"
          required
          value={password}
          setValue={setPassword}
        />
        {error && <Img src={errorMessage} alt="Error" />}

        <ButtonContainer>
            <Button label="Entrar" type="submit" />
        </ButtonContainer>
      </form>
  </div>;
};

export default MapTo('reactapp/components/form')(
  Form,
);
