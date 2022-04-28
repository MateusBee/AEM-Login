import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-style: normal;
  font-weight: ${(props) => (props.layOut === 'logIn' ? '700' : '400')};
  font-size: ${(props) => (props.layOut === 'logIn' ? '18px' : '12px')};
  line-height: ${(props) => (props.layOut === 'logIn' ? '23px' : '15px')};
  color: ${(props) =>
    props.layOut === 'logIn' || props.layOut === 'logOut' ? '#ffffff' : '#C13216;'};
  background: ${(props) =>
    props.layOut === 'logIn'
      ? 'linear-gradient(90deg, #ff2d04 0%, #c13216 100%)'
      : props.layOut === 'logOut'
      ? 'linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);'
      : '#ffffff'};
  box-shadow: ${(props) =>
    props.layOut === 'logIn' ? 'inset 5px 5px 15px rgba(0, 0, 0, 0.15)' : 'none'};
  border-radius: ${(props) => (props.layOut === 'logIn' ? '50px' : '0px')};
  width: ${(props) => (props.layOut === 'logIn' ? '285px' : '105px')};
  height: ${(props) => (props.layOut === 'logIn' ? '45px' : '100%')};
  cursor: pointer;
  margin-top: ${(props) => (props.layOut === 'logIn' ? '70px' : '0px')};
  border-width: 0px;
`;
