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

  const handleValidation = () => {
    if (user === 'admin' && password === 'admin') {
      localStorage.setItem('user', user);
      localStorage.setItem('password', password);
    }
    else setError(true);
  }

  React.useEffect(() => { console.log(error) }, [error]);

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
      <form>
        <Input text="Email" value={user} setValue={setUser} />
        <Input text="Password" type="password" value={password} setValue={setPassword}/>
        {error && <Img src={errorMessage} alt="Error" />}

        <ButtonContainer>
            <Button label="Entrar" type="submit" layOut="LogIn" onClick={handleValidation}/>
        </ButtonContainer>
      </form>
  </div>;
};

export default MapTo('reactapp/components/form')(
  Form,
);
