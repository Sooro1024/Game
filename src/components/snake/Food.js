import React from 'react';
import style from './index.module.scss';

export const Food = ({ food }) => {
  return (
    <div
      className={style.food}
      style={{ bottom: `${food.y * 5}%`, left: `${food.x * 5}%` }}
    ></div>
  );
};
