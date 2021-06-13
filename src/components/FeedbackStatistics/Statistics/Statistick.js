import React from 'react';
import PropTypes from 'prop-types';
import Feedback from '../Feedback/Feedback';
import styles from '../FeedbackStatistics.module.css';

class Statistics extends React.Component {
  render() {
    return (
      <div className={styles.baseShell}>
        <h2>Statistics</h2>
        <p>
          Good: <span>0</span>
        </p>
        <p>
          Neutral: <span>0</span>
        </p>
        <p>
          Bad: <span>0</span>
        </p>
      </div>
    );
  }
}

export default Statistics;
