import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';

import { 
    TimeContainer,
    SecondsContainer,
    TimeText,
    Time,
 } from './style';

const Timer = () => {

    const [time, setTime] = React.useState('');

    const updateTime = () => {
        const end = 180;
        const now = 0;

        const distance = end - now;

        if(distance <= 0) {
            setTime(0);
            return;
        }

        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime(seconds)
    }

    React.useEffect(() => {
        setInterval(() => updateTime(), 1000);
    }, [])

    return (
        <TimeContainer>
            <TimeText>
                Application
                <br /> refresh in
            </TimeText>
            <SecondsContainer>
                <Time>{time}</Time>
                <TimeText>seconds</TimeText>
            </SecondsContainer>
        </TimeContainer>
    );
};

export default MapTo('reactapp/components/button')(
    Timer,
  );