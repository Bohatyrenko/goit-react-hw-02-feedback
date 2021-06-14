import React from 'react';
// import PropTypes from 'prop-types';
import styles from '../Feedback.module.css';

const Statistics = ({ state: { good, neutral, bad }, total, percentage }) => (
  <div className={styles.baseShell}>
    <h2>Statistics</h2>
    <p>
      Good: <span>{good}</span>
    </p>
    <p>
      Neutral: <span>{neutral}</span>
    </p>
    <p>
      Bad: <span>{bad}</span>
    </p>
    <p>
      Total:
      <span>{total}</span>
    </p>
    <p>
      Positive feedback: <span>{percentage}%</span>
    </p>
  </div>
);

export default Statistics;
