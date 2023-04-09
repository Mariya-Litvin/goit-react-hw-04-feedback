import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

import { Wrapper } from './App.styled';
import { useState } from 'react';

const buttons = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const handleIncrement = stateName => {
  //   this.setState(prevState => ({
  //     [stateName]: prevState[stateName] + 1,
  //   }));
  // };

  const handleIncrement = stateName => {
    if (stateName === 'good') setGood(good + 1);
    if (stateName === 'neutral') setNeutral(neutral + 1);
    if (stateName === 'bad') setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
};
