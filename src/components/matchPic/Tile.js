import React from "react";
import styles from "./index.module.scss";
import posed from "react-pose";

const Tile = React.forwardRef(({ item, index, indexis, setIndexis }, ref) => {
  if (item.solved === false) {
    return (
      <div
        ref={ref}
        className={styles.tile}
        onClick={() => {
          if (indexis.length === 2 || indexis.includes(index)) {
            return;
          } else {
            setIndexis([...indexis, index]);
          }
        }}
      >
        <div
          className={`${styles.tileBack} ${
            indexis.includes(index) ? styles.show : ""
          }`}
          style={{
            backgroundImage: `url(${item.img})`
          }}
        ></div>
        <div
          className={`${styles.tileFront} ${
            indexis.includes(index) ? styles.show : ""
          }`}
        ></div>
      </div>
    );
  } else {
    return (
      <div ref={ref} className={styles.tile}>
        <div
          className={`${styles.tileBack} ${styles.show}`}
          style={{
            backgroundImage: `url(${item.img})`
          }}
        ></div>
      </div>
    );
  }
});

const PosedTile = posed(Tile)();

export default PosedTile;
