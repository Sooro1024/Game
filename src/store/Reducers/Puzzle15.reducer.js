import {
  SHUFFLE,
  FINDE_EMPTY_AND_CLICKBLES,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP
} from '../ActionTypes';
const initialState = {
  sortedArray: [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, '']
  ],
  array: [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, '']
  ],
  emptyCell: [3, 3],
  clickForMove: {
    up: null,
    right: null,
    down: null,
    left: null
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHUFFLE:
      return { ...state, array: payload };
    case FINDE_EMPTY_AND_CLICKBLES:
      return {
        ...state,
        emptyCell: payload.emptyCell,
        clickForMove: payload.clickForMove
      };
    case MOVE_UP:
      return { ...state, array: payload };
    case MOVE_RIGHT:
      return { ...state, array: payload };
    case MOVE_DOWN:
      return { ...state, array: payload };
    case MOVE_LEFT:
      return { ...state, array: payload };
    default:
      return state;
  }
};
