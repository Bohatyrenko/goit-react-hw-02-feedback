import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons/Buttons';
import styles from '../FeedbackStatistics.module.css';

class Feedback extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    percentage: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    percentage: PropTypes.number,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const percentage = Math.round((this.state.good * 100) / result);
    return percentage;
  };

  addGoodReview = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addNeutralReview = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBadReview = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const result = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <div className={styles.baseShell}>
          <h2>Please leave feedback</h2>
          <Buttons
            addGoodReview={this.addGoodReview}
            addNeutralReview={this.addNeutralReview}
            addBadReview={this.addBadReview}
          />
        </div>
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
            <span>{result}</span>
          </p>
          <p>
            Positive feedback:{' '}
            <span>{(good * 100) / (good + neutral + bad)}%</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
