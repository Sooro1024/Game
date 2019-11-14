import { differenceWith, random } from 'lodash';
import nanoid from 'nanoid';
import { find } from 'lodash';
import Eat from './music/Eat.mp3';
import GameOver from './music/GameOver.mp3';
import { BOARD } from './Board';

const EatSound = new Audio(Eat);
const GameOverSound = new Audio(GameOver);

function compare(obj1, obj2) {
  if (obj1.x === obj2.x && obj1.y === obj2.y) {
    return true;
  } else {
    return false;
  }
}

const newFoodRandom = snake => {
  const blankPart = differenceWith(BOARD, snake, compare);
  const length = blankPart.length - 1;
  const randomNumber = random(length);
  return { ...blankPart[randomNumber] };
};

const createInitalState = () => {
  const snake = [
    { x: 8, y: 3, id: nanoid() },
    { x: 9, y: 3, id: nanoid() },
    { x: 9, y: 4, id: nanoid() },
    { x: 9, y: 5, id: nanoid() }
  ];

  const food = newFoodRandom(snake);

  return {
    snake,
    food,
    direction: 'UP'
  };
};

export const initalState = createInitalState();

const Move = ({ snake, food, direction }, payload) => {
  const newSnake = [...snake];
  const length = newSnake.length - 1;
  const head = { ...newSnake[length], id: nanoid() };
  switch (direction) {
    case 'UP':
      head.y = head.y + 1;
      break;
    case 'DOWN':
      head.y = head.y - 1;
      break;
    case 'LEFT':
      head.x = head.x - 1;
      break;
    case 'RIGHT':
      head.x = head.x + 1;
      break;
    default:
      break;
  }
  const GameOverCondition = checkBorderAndSnake(
    head,
    snake,
    payload.setGameOver
  );
  if (GameOverCondition) {
    newSnake.push(head);
  }
  eatOrNot(
    newSnake,
    food,
    payload.dispatchGameAction,
    GameOverCondition,
    payload.scoreIncrease
  );
  return newSnake;
};

const eatOrNot = (snake, food, dispatch, gameOverCondition, scoreIncrease) => {
  const length = snake.length - 1;
  const head = snake[length];

  if (head.x === food.x && head.y === food.y) {
    scoreIncrease();
    EatSound.play();
    dispatch({ type: 'FOOD' });
  } else if (!gameOverCondition) {
    setTimeout(() => {
      dispatch({ type: 'RESSET' });
    }, 500);
    return;
  } else {
    snake.shift();
  }
};

const checkBorderAndSnake = (newHead, snake, gameOverTogle) => {
  if (
    newHead.x === 20 ||
    newHead.y === 20 ||
    newHead.x === -1 ||
    newHead.y === -1
  ) {
    GameOverSound.play();
    gameOverTogle(false);
  } else if (
    find(snake, function(el) {
      return el.x === newHead.x && el.y === newHead.y;
    })
  ) {
    GameOverSound.play();
    gameOverTogle(false);
  } else {
    return true;
  }
};

export const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case 'MOVE':
      return { ...state, snake: Move(state, payload) };
    case 'FOOD':
      return { ...state, food: newFoodRandom(state.snake) };
    case 'CHANGE_DIRECTION':
      return { ...state, direction: BlockOposit(state.direction, payload) };
    case 'RESSET':
      return NewGame();
    default:
      return state;
  }
};

const BlockOposit = (prevDir, nextDir) => {
  switch (prevDir) {
    case 'UP':
      if (nextDir === 'DOWN') {
        return 'UP';
      } else {
        return nextDir;
      }
    case 'DOWN':
      if (nextDir === 'UP') {
        return 'DOWN';
      } else {
        return nextDir;
      }
    case 'LEFT':
      if (nextDir === 'RIGHT') {
        return 'LEFT';
      } else {
        return nextDir;
      }
    case 'RIGHT':
      if (nextDir === 'LEFT') {
        return 'RIGHT';
      } else {
        return nextDir;
      }

    default:
      return;
  }
};

export const NewGame = () => {
  return createInitalState();
};
