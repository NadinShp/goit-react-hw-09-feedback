import 'modern-normalize/modern-normalize.css';
import { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Nontification';

const App = () => {
  const [data, setData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const addFeedback = event => {
    const value = event.target.dataset.value;
    setData(prev => ({
      ...data,
      [value]: prev[value] + 1,
    }));
  };
  const countTotalFeedback = () => {
    const totalValue = Object.values(data).reduce(
      (acc, value) => (acc += value),
      0,
    );
    return totalValue;
  };
  const countPositiveFeedbackPercentage = count => {
    const { good } = data;
    const PositiveFeedbackPercentage = Math.floor((good * 100) / count);
    return PositiveFeedbackPercentage;
  };
  const checkRendering = () => {
    const values = Object.values(data).find(value => !!value);
    return values;
  };

  const { good, neutral, bad } = data;
  const totalFeedbacks = countTotalFeedback();
  const valueForCheckingRendering = checkRendering();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={data} onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {valueForCheckingRendering ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={
              totalFeedbacks && good
                ? countPositiveFeedbackPercentage(totalFeedbacks)
                : 0
            }
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default App;
