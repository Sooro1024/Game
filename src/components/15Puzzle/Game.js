import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  shuffleAction,
  findeEmptyAndClickblesAction,
  moveDownAction,
  moveLeftAction,
  moveRightAction,
  moveUpAction,
  checkSolvedOrNotAction
} from '../../store/Actions/Puzzle15.actions';
import { PoseGroup } from 'react-pose';
import PosedTile from './Tile';
import { Button } from 'reactstrap';
import './index.css';

const Game = ({
  array,
  shuffle,
  findeEmptyAndClickbles,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  checkSolvedOrNot,
  clickForMove
}) => {
  useEffect(() => {
    findeEmptyAndClickbles();
    checkSolvedOrNot();
  }, [findeEmptyAndClickbles, array, checkSolvedOrNot]);

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    shuffle();
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keyDownHandler = ev => {
    switch (ev.keyCode) {
      case 38:
        moveUp();
        break;
      case 40:
        moveDown();
        break;
      case 37:
        moveLeft();
        break;
      case 39:
        moveRight();
        break;
      default:
        break;
    }
  };

  const passClickFunctions = (obj, val) => {
    if (obj.left === val) {
      return moveLeft;
    }
    if (obj.right === val) {
      return moveRight;
    }
    if (obj.down === val) {
      return moveDown;
    }
    if (obj.up === val) {
      return moveUp;
    }
  };

  return (
    <>
      <Button color='primary' onClick={shuffle}>
        Shuffle
      </Button>
      <PoseGroup>
        {array.map(row =>
          row.map(cell => (
            <PosedTile
              move={passClickFunctions(clickForMove, cell)}
              cell={cell}
              key={cell}
            />
          ))
        )}
      </PoseGroup>
    </>
  );
};

const mapStateToProps = state => ({
  array: state.Puzzle15.array,
  clickForMove: state.Puzzle15.clickForMove
});
const mapDispatchToProps = dispatch => ({
  shuffle: () => dispatch(shuffleAction()),
  findeEmptyAndClickbles: () => dispatch(findeEmptyAndClickblesAction()),
  moveUp: () => dispatch(moveUpAction()),
  moveRight: () => dispatch(moveRightAction()),
  moveDown: () => dispatch(moveDownAction()),
  moveLeft: () => dispatch(moveLeftAction()),
  checkSolvedOrNot: () => dispatch(checkSolvedOrNotAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
