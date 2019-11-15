import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
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
import Game from './Game';
import { ScoreModal } from '../comon/Modal';
import './index.scss';

const Puzzle15 = ({
  array,
  shuffle,
  findeEmptyAndClickbles,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  checkSolvedOrNot,
  clickForMove,
  moves,
  win
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

  return (
    <Container>
      <Row>
        <Col
          className='justify-content-center align-items-center d-flex flex-column'
          xs={6}
          md={{ size: 3, order: 1 }}
        >
          <p className='h4 w-100'>INSTRUCTIONS</p>
          <p className='h6'>
            Move tiles in grid to order them from 1 to 15. To move a tile you
            can click on it or use your arrow keys.
          </p>
        </Col>
        <Col
          className='justify-content-center align-items-center d-flex flex-column'
          xs={6}
          md={{ size: 3, order: 3 }}
        >
          <span className='no-select-text display-4 mb-3'>{moves}</span>
          <Button color='primary' onClick={shuffle}>
            Shuffle
          </Button>
        </Col>
        <Col
          className='justify-content-center align-items-center d-flex'
          xs={12}
          md={{ size: 6, order: 2 }}
        >
          <Game
            array={array}
            moveDown={moveDown}
            moveLeft={moveLeft}
            moveRight={moveRight}
            moveUp={moveUp}
            clickForMove={clickForMove}
          />
        </Col>
      </Row>
      <ScoreModal
        text={`Congratulations you have won in ${moves} moves !!`}
        title='You have won !!!'
        modal={win}
        score={null}
        newGame={shuffle}
        setModal={shuffle}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  array: state.Puzzle15.array,
  clickForMove: state.Puzzle15.clickForMove,
  moves: state.Puzzle15.moves,
  win: state.Puzzle15.win
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

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle15);
