import React, { useState } from 'react';
import { Game } from './Game';
import { Score } from './Score';
import { Container, Col, Row, Button } from 'reactstrap';
import { ScoreModal } from './Modal';

export const Snake = () => {
  const [score, setScore] = useState(0);
  const [pause, setPause] = useState(false);
  const [modal, setModal] = useState(false);

  const scoreIncrease = () => {
    setScore(score => score + 100);
  };

  const gameOver = () => {
    setPause(false);
    setModal(true);
  };

  const newGame = () => {
    setModal(false);
    setPause(true);
    setScore(0);
  };

  return (
    <Container>
      <Row>
        <Col
          className='justify-content-center align-items-center d-flex flex-column'
          xs={6}
          md={{ size: 3, order: 1 }}
        >
          <Button
            className='mb-3'
            color='primary'
            onClick={ev => setPause(!pause)}
          >
            {pause ? 'Pause' : 'Start'}
          </Button>
        </Col>
        <Col
          className='justify-content-center align-items-center d-flex'
          xs={6}
          md={{ size: 3, order: 3 }}
        >
          <Score score={score} />
        </Col>
        <Col
          className='justify-content-center align-items-center d-flex'
          xs={12}
          md={{ size: 6, order: 2 }}
        >
          <Game
            gamePause={pause}
            setGameOver={gameOver}
            scoreIncrease={scoreIncrease}
            newGame={newGame}
          />
        </Col>
      </Row>
      <ScoreModal
        modal={modal}
        setModal={setModal}
        newGame={newGame}
        score={score}
      />
    </Container>
  );
};
