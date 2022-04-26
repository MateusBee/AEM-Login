import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  padding: 53px;
  width: 50%;
  justify-content: center;
  font-family: 'Space Mono', monospace;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

  @media (max-width: 815px) {
    width: 100%;
  }
`;

export const CompanyMob = styled.div`
  visibility: hidden;
  position: absolute;
  
  @media (max-width: 414px) {
    visibility: visible;
    position: relative;
    margin-bottom: 65px;
  }
`;

export const Img = styled.img`
  width: 677px;

  @media (width: 1024px) {
    width: 505px;
  }
`;

export const H1 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 76px;
  color: #e0e0e0;
`;

export const H3 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #e0e0e0;
  max-width: 300px;
`;
