import { useState } from "react";

const Statistics = (props) => {
  const calculateAverage = ({ good, neutral, bad }) => {
    const numberAmount = good + neutral + bad;
    return good / numberAmount;
  };

  const calculatePositive = ({ good, neutral, bad }) => {
    const numberAmount = good + neutral + bad;
    return (good * 100) / numberAmount;
  };
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <>
        <h2>statistics</h2>
        <h5>No feedback given</h5>
      </>
    );
  } else {
    return (
      <>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine
              text="all"
              value={props.good + props.neutral + props.bad}
            />
            <StatisticLine text="average" value={calculateAverage(props)} />
            <StatisticLine text="positive" value={calculatePositive(props)} />
          </tbody>
        </table>
      </>
    );
  }
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [opinions, setOpinions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => {
    setOpinions({
      ...opinions,
      good: opinions.good + 1,
    });
  };

  const handleNeutralClick = () => {
    setOpinions({
      ...opinions,
      neutral: opinions.neutral + 1,
    });
  };

  const handleBadClick = () => {
    setOpinions({
      ...opinions,
      bad: opinions.bad + 1,
    });
  };

  return (
    <>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} name={"Good"} />
        <Button handleClick={handleNeutralClick} name={"Neutral"} />
        <Button handleClick={handleBadClick} name={"Bad"} />
        <Statistics
          good={opinions.good}
          neutral={opinions.neutral}
          bad={opinions.bad}
        />
      </div>
    </>
  );
};

export default App;
