import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Game from './Game';

export const Puzzle15 = () => {
  return (
    <Container>
      <Row>
        <Col
          className='justify-content-center align-items-center d-flex flex-column'
          xs={6}
          md={{ size: 3, order: 1 }}
        >
          <h2>INSTRUCTIONS</h2>
          <p>
            Move tiles in grid to order them from 1 to 15. To move a tile you
            can click on it or use your arrow keys.
          </p>
        </Col>
        <Col
          className='justify-content-center align-items-center d-flex'
          xs={6}
          md={{ size: 3, order: 3 }}
        ></Col>
        <Col
          className='justify-content-center align-items-center d-flex'
          xs={12}
          md={{ size: 6, order: 2 }}
        >
          <Game />
        </Col>
      </Row>
    </Container>
  );
};
