import React from 'react';
// import PropTypes from 'prop-types';
import Feedback from './Feedback/Feedback';
// import Statistics from './Statistics/Statistick';
import styles from './FeedbackStatistics.module.css';

const FeedbackStatistics = () => (
  <div className={styles.container}>
    <Feedback good={0} neutral={0} bad={0} total={0} percentage={0} />
    {/* <Statistics /> */}
  </div>
);

export default FeedbackStatistics;
