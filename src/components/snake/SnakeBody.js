import React from 'react';
import style from './index.module.scss';

export const SnakeBody = ({ snake }) => {
  return snake.map(el => (
    <div
      key={el.id}
      className={style.snakeBody}
      style={{ bottom: `${el.y * 5}%`, left: `${el.x * 5}%` }}
    ></div>
  ));
};
