import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-style: normal;
  font-weight: ${(props) => (props.layOut === 'LogIn' ? '700' : '400')};
  font-size: ${(props) => (props.layOut === 'LogIn' ? '18px' : '12px')};
  line-height: ${(props) => (props.layOut === 'LogIn' ? '23px' : '15px')};
  color: ${(props) =>
    props.layOut === 'LogIn' || props.layOut === 'logOut' ? '#ffffff' : '#C13216;'};
  background: ${(props) =>
    props.layOut === 'LogIn'
      ? 'linear-gradient(90deg, #ff2d04 0%, #c13216 100%)'
      : props.layOut === 'logOut'
      ? 'linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);'
      : '#ffffff'};
  box-shadow: ${(props) =>
    props.layOut === 'LogIn' ? 'inset 5px 5px 15px rgba(0, 0, 0, 0.15)' : 'none'};
  border-radius: ${(props) => (props.layOut === 'LogIn' ? '50px' : '0px')};
  width: ${(props) => (props.layOut === 'LogIn' ? '285px' : '105px')};
  height: ${(props) => (props.layOut === 'LogIn' ? '45px' : '100%')};
  cursor: pointer;
  margin-top: ${(props) => (props.layOut === 'LogIn' ? '70px' : '0px')};
  border-width: 0px;
`;
