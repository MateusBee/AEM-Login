import styled from 'styled-components';

export const TimeContainer = styled.div`
    text-align: center;
    font-family: 'Anonymous Pro', monospace;

    @media all and (max-width: 540px) {
        visibility: hidden;
        position: absolute;
    }
`;

export const Hour = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
`;


export const Day = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
`;
