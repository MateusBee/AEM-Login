import styled from 'styled-components';

export const TimeContainer = styled.div`
  display: flex;

  @media all and (max-width: 474px) {
    visibility: hidden;
    position: absolute;
  }
`;

export const TimeText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const SecondsContainer = styled.div`
  margin: 16px 40px 0px 40px;
`;

export const Time = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
`;