import { get } from 'lodash';
import {
  SHUFFLE,
  FINDE_EMPTY_AND_CLICKBLES,
  MOVE_UP,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT
} from '../ActionTypes';

export const shuffleAction = () => (dispatch, getState) => {
  const {
    Puzzle15: { array }
  } = getState();
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    for (let x = 0; x < array[i].length; x++) {
      const y = Math.floor(Math.random() * (x + 1));
      [array[i][x], array[i][y]] = [array[i][y], array[i][x]];
    }
  }
  dispatch({
    type: SHUFFLE,
    payload: [...array]
  });
};

export const findeEmptyAndClickblesAction = () => (dispatch, getState) => {
  const {
    Puzzle15: { array, clickForMove }
  } = getState();
  let emptyCell = [];
  let newClickForMove;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === '') {
        newClickForMove = setClickbles(i, j, array, clickForMove);
        emptyCell = [i, j];
      }
    }
  }
  dispatch({
    type: FINDE_EMPTY_AND_CLICKBLES,
    payload: { emptyCell, clickForMove: newClickForMove }
  });
};

export const moveUpAction = (payload = [1, 0]) => (dispatch, getState) => {
  const vector = payload;
  const {
    Puzzle15: { array, emptyCell }
  } = getState();
  const newArray = moveCellFunction(vector, array, emptyCell);
  if (newArray !== null) {
    dispatch({
      type: MOVE_UP,
      payload: [...newArray]
    });
  }
  return;
};

export const moveRightAction = (payload = [0, -1]) => (dispatch, getState) => {
  const vector = payload;
  const {
    Puzzle15: { array, emptyCell }
  } = getState();
  const newArray = moveCellFunction(vector, array, emptyCell);
  if (newArray !== null) {
    dispatch({
      type: MOVE_RIGHT,
      payload: [...newArray]
    });
  }
  return;
};

export const moveDownAction = (payload = [-1, 0]) => (dispatch, getState) => {
  const vector = payload;
  const {
    Puzzle15: { array, emptyCell }
  } = getState();
  const newArray = moveCellFunction(vector, array, emptyCell);
  if (newArray !== null) {
    dispatch({
      type: MOVE_DOWN,
      payload: [...newArray]
    });
  }
  return;
};
export const moveLeftAction = (payload = [0, 1]) => (dispatch, getState) => {
  const vector = payload;
  const {
    Puzzle15: { array, emptyCell }
  } = getState();
  const newArray = moveCellFunction(vector, array, emptyCell);
  if (newArray !== null) {
    dispatch({
      type: MOVE_LEFT,
      payload: [...newArray]
    });
  }
  return;
};

const moveCellFunction = (vector, array, emptyCell) => {
  let x = emptyCell[0] + vector[0];
  let y = emptyCell[1] + vector[1];
  if (x >= 0 && y >= 0 && y < 4 && x < 4) {
    [array[emptyCell[0]][emptyCell[1]], array[x][y]] = [
      array[x][y],
      array[emptyCell[0]][emptyCell[1]]
    ];
    return [...array];
  } else {
    return null;
  }
};

export const checkSolvedOrNotAction = () => (dispatch, getState) => {
  const {
    Puzzle15: { array, sortedArray }
  } = getState();
  let similarity = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === sortedArray[i][j]) {
        similarity++;
      }
    }
  }
  // if (similarity === 16) {
  //   alert('Congratulation! You win!');
  // }
};

const setClickbles = (i, j, array, clickForMove) => {
  const newClickForMove = { ...clickForMove };
  const right = get(array, `[${i}][${j - 1}]`, null);
  const left = get(array, `[${i}][${j + 1}]`, null);
  const down = get(array, `[${i - 1}][${j}]`, null);
  const up = get(array, `[${i + 1}][${j}]`, null);
  if (left !== null) {
    newClickForMove.left = left;
  } else {
    newClickForMove.left = null;
  }
  if (right !== null) {
    newClickForMove.right = right;
  } else {
    newClickForMove.right = null;
  }
  if (up !== null) {
    newClickForMove.up = up;
  } else {
    newClickForMove.up = null;
  }
  if (down !== null) {
    newClickForMove.down = down;
  } else {
    newClickForMove.down = null;
  }
  return newClickForMove;
};
