import React from 'react';

import { PoseGroup } from 'react-pose';
import PosedTile from './Tile';
import Back from './Backgrounde';

const Game = ({
  array,
  moveUp,
  moveRight,
  moveLeft,
  moveDown,
  clickForMove
}) => {
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
    <div className='board'>
      <Back />
      <div className='game'>
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
      </div>
    </div>
  );
};

export default Game;
