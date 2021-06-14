import React, { Component } from 'react';
import styles from './components/FeedbackStatistics/Feedback.module.css';

//Components
import Section from './components/FeedbackStatistics/Feedback/Section';
import FeedbackOptions from './components/FeedbackStatistics/Feedback/FeedbackOptions';
import Statistics from './components/FeedbackStatistics/Feedback/Statistick';
import Notification from './components/FeedbackStatistics/Feedback/Notification';
// import FeedbackStatistics from './components/FeedbackStatistics/FeedbackStatistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addReview = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.round((this.state.good * 100) / total);
    return percentage ? percentage : '0 ';
  };

  render() {
    const {
      addReview,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      state,
    } = this;
    return (
      <>
        <div className={styles.container}>
          <h1>Please leave feedback</h1>
          <Section>
            <FeedbackOptions onAddReview={addReview} />
            {countTotalFeedback() ? (
              <Statistics
                state={state}
                total={countTotalFeedback()}
                percentage={countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification massage="No feedback given" />
            )}
          </Section>
        </div>
      </>
    );
  }
}

export default App;
