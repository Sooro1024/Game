import React, { useEffect, useState } from 'react';
import { secondsToMM_SS } from '../comon/Helpers';

export const Timer = ({ start, setFinalTime, newGame }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval;
    if (start === true) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
    if (start === 'FINAL') {
      setFinalTime(`${secondsToMM_SS(time)}`);
    }
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  useEffect(() => {
    setTime(0);
  }, [newGame]);

  return <h1 className='no-select-text'>{secondsToMM_SS(time)}</h1>;
};
