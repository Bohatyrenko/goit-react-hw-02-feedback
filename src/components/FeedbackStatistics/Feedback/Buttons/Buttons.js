import React from 'react';
import styles from './Button.module.css';

const Buttons = ({ addGoodReview, addNeutralReview, addBadReview }) => {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.button} type="button" onClick={addGoodReview}>
        Good
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={addNeutralReview}
      >
        Neutral
      </button>
      <button className={styles.button} type="button" onClick={addBadReview}>
        Bad
      </button>
    </div>
  );
};

export default Buttons;
