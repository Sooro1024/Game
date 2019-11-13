import React, { useReducer, useEffect } from 'react';
import { SnakeBody } from './SnakeBody';
import { Food } from './Food';
import style from './index.module.scss';
import { debounce } from 'lodash';
import { initalState, gameReducer, NewGame } from './Helpers';

export const Game = ({ setGameOver, gamePause, scoreIncrease }) => {
  const [gameState, dispatchGameAction] = useReducer(
    gameReducer,
    initalState,
    NewGame
  );
  const keyDownNorm = ev => {
    switch (ev.keyCode) {
      case 38:
        dispatchGameAction({ type: 'CHANGE_DIRECTION', payload: 'UP' });
        break;
      case 40:
        dispatchGameAction({ type: 'CHANGE_DIRECTION', payload: 'DOWN' });
        break;
      case 37:
        dispatchGameAction({ type: 'CHANGE_DIRECTION', payload: 'LEFT' });
        break;
      case 39:
        dispatchGameAction({ type: 'CHANGE_DIRECTION', payload: 'RIGHT' });
        break;
      default:
        break;
    }
  };
  const keyDown = debounce(keyDownNorm, 200);
  useEffect(() => {
    document.addEventListener('keydown', keyDown);
    const interval = setInterval(() => {
      if (gamePause === true) {
        dispatchGameAction({
          type: 'MOVE',
          payload: { setGameOver, dispatchGameAction, scoreIncrease }
        });
      }
    }, 300);
    return () => {
      document.removeEventListener('keydown', keyDown);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gamePause]);

  return (
    <>
      <div className={style.snakeGameBoard}>
        <SnakeBody snake={gameState.snake} />
        <Food food={gameState.food} />
      </div>
    </>
  );
};
