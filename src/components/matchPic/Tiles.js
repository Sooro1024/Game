import React, { useState, useEffect } from 'react';
import { newGameData } from './Board';
import { Tile } from './Tile';

export const Tiles = ({ newGame, setStart, setModal }) => {
  const [state, setState] = useState([]);
  const [indexis, setIndexis] = useState([]);
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    setState(newGameData());
    setIndexis([]);
    setCounter([]);
  }, [newGame]);

  useEffect(() => {
    if (
      state.length !== 0 &&
      indexis.length === 2 &&
      state[indexis[0]].id !== state[indexis[1]].id &&
      state[indexis[0]].value === state[indexis[1]].value
    ) {
      setCounter([...counter, null]);
      setTimeout(() => {
        state[indexis[0]].solved = true;
        state[indexis[1]].solved = true;
        setIndexis([]);
      }, 700);
    } else if (
      state.length !== 0 &&
      indexis.length === 2 &&
      state[indexis[0]].id !== state[indexis[1]].id &&
      state[indexis[0]].value !== state[indexis[1]].value
    ) {
      setTimeout(() => {
        setIndexis([]);
      }, 700);
    }
    if (state.length !== 0 && counter.length === state.length / 2) {
      setStart('FINAL');
      setModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexis]);

  return (
    <div className='board-container'>
      <div className='board'>
        {state.map((el, index) => (
          <Tile
            index={index}
            item={el}
            key={el.id}
            indexis={indexis}
            setIndexis={setIndexis}
          />
        ))}
      </div>
    </div>
  );
};
