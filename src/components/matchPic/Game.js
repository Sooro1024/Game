import React, { useState, useEffect } from 'react';
import { newGameData } from './Board';

export const Game = () => {
  return newGameData.map(el => (
    <div style={{ backgroundImage: `url(${el.img})` }}>{el.value}</div>
  ));
};
