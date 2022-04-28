import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 0px;
  height: 90px;
  width: 100%;
  color: #ffffff;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  align-items: center;
  font-family: 'Anonymous Pro', monospace;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  max-width: 44%;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: right;

  @media all and (max-width: 877px) {
    visibility: hidden;
    position: absolute;
    }

`;

export const Actions = styled.div`
  display: flex;
  height: 100%;
`;