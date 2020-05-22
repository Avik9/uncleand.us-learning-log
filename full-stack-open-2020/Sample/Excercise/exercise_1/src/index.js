import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = props => <h1>{props.value}</h1>
const Text = ({ text, value }) => <p>{text}{" "}{value}</p>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {

  if (good + bad + neutral === 0) {
    return <Text text="No feedback given" />
  }
  else {
    return (
      <>
        <Text text="good" value={good} />
        <Text text="neutral" value={neutral} />
        <Text text="bad" value={bad} />
        <Text text="all" value={good + neutral + bad} />
        <Text text="average" value={(good + (bad * -1)) / (good + neutral + bad)} />
        <Text text="positive" value={((good * 100) / (good + neutral + bad)) + " %"} />
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Heading value={"give feedback"} />
      <p />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <p />
      <Heading value={"statistics"} />
      <p />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)