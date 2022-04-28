import styled from 'styled-components';

export const Line = styled.div`
  background-color: #ffffff;
  width: 1px;
  height: 45px;

  @media all and (max-width: 877px) {
    visibility: hidden;
    position: absolute;
  }
`;