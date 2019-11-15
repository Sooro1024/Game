import React from 'react';

export const Tile = ({ item, index, indexis, setIndexis }) => {
  if (item.solved === false) {
    return (
      <div
        className='tile'
        onClick={() => {
          if (indexis.length === 2 || indexis.includes(index)) {
            return;
          } else {
            setIndexis([...indexis, index]);
          }
        }}
      >
        <div
          className={`tile-back ${indexis.includes(index) ? 'show' : ''}`}
          style={{
            backgroundImage: `url(${item.img})`
          }}
        ></div>
        <div
          className={`tile-front ${indexis.includes(index) ? 'show' : ''}`}
        ></div>
      </div>
    );
  } else {
    return (
      <div className='tile'>
        <div
          className='tile-back show'
          style={{
            backgroundImage: `url(${item.img})`
          }}
        ></div>
      </div>
    );
  }
};
