import { MapTo } from '@adobe/aem-react-editable-components';
import React from 'react';

import { TimeContainer, Hour, Day } from './style';

const Time = () => {
    const [date, setDate] = React.useState(new Date());
    const dayName = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
    const monName = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro"]

    React.useEffect(() => {
        setInterval(() => setDate(new Date()), 60000)
    }, [])

    return (
        <TimeContainer>
            <Hour>
                {`${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`}
            </Hour>
            <Day>
                {`${dayName[date.getDay()]}-feira, ${date.getDate()} de ${monName[date.getMonth()]} de ${date.getFullYear()}`}
            </Day>
        </TimeContainer>
    );
};

export default MapTo('reactapp/components/Time')(
    Time,
  );