import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';

import { 
    TimeContainer,
    SecondsContainer,
    TimeText,
    Time,
 } from './style';


let count = 180;

const Timer = ({ reset }) => {
    const [time, setTime] = React.useState(180);

    const updateTime = () => {
        if(count <= 0) {
            setTime(0);
            return;
        }


        count -= 1
        setTime(count);
    }

    React.useEffect(() => {
        setInterval(() => updateTime(), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => { 
        count = 180;
        setTime(180);
     }, [reset]);

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

export default MapTo('reactapp/components/timer')(
    Timer,
  );