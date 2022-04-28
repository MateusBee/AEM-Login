import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: 'Anonymous Pro', monospace;
  position: fixed;
  bottom: 65px;
`;

export const Img = styled.img`
  width: 50vh;
`;

export const TextContainer = styled.div`
  display: grid;
  text-align: end;
  padding-right: 15px;

  @media all and (max-width: 750px) {
    visibility: hidden;
    position: absolute;
  }
`;

export const Text = styled.span`
  font-size: ${(props) => props.font};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;