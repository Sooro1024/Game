import React from 'react';
import posed from 'react-pose';
const Tile = React.forwardRef(({ cell, move }, refer) => {
  return (
    <div
      ref={refer}
      onClick={move}
      className={cell === '' ? 'emptyCell' : 'cell'}
    >
      {cell}
    </div>
  );
});

const PosedTile = posed(Tile)();

export default PosedTile;
