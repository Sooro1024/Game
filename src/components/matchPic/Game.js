import React, { useState } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { Timer } from './Timer';
import { Tiles } from './Tiles';
import { ScoreModal } from '../comon/Modal';
import './index.scss';

export const Game = () => {
  const [start, setStart] = useState(false);
  const [finalTime, setFinalTime] = useState(null);
  const [newGame, setNewGame] = useState({});
  const [modal, setModal] = useState(false);

  const startTogle = () => {
    setStart(!start);
  };

  const modalTogle = () => {
    setModal(!modal);
  };

  const newGameTogle = () => {
    modalTogle();
    setNewGame({});
  };

  return (
    <Container>
      <Row>
        <Col
          className='justify-content-center align-items-center d-flex flex-column'
          xs={6}
          md={{ size: 3, order: 1 }}
        >
          <h4>Find matching animals</h4>
          <Button className='mb-3' color='primary' onClick={startTogle}>
            {start ? 'Pause' : 'Start'}
          </Button>
          <Button
            className='mb-3'
            color='primary'
            onClick={() => {
              setNewGame({});
              setStart(true);
            }}
          >
            New Game
          </Button>
        </Col>
        <Col
          className='justify-content-center align-items-center d-flex'
          xs={6}
          md={{ size: 3, order: 3 }}
        >
          <Timer newGame={newGame} start={start} setFinalTime={setFinalTime} />
        </Col>
        <Col
          className='justify-content-center align-items-center d-flex'
          xs={12}
          md={{ size: 6, order: 2 }}
        >
          {!start && (
            <>
              <div className='board-container banner'></div>
              <h1 className='banner-text no-select-text'>Press Start</h1>
            </>
          )}
          <Tiles setModal={setModal} setStart={setStart} newGame={newGame} />
        </Col>
      </Row>
      <ScoreModal
        text='Congratulations you won!!! Your time is'
        title='Win time'
        modal={modal}
        score={finalTime}
        newGame={newGameTogle}
        setModal={modalTogle}
      />
    </Container>
  );
};