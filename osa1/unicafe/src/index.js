import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if(props.good != 0 || props.bad != 0 || props.neutral != 0 ) {
    return <div><table><tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all(props.good, props.bad, props.neutral)} />
      <StatisticLine text="average" value={average(props.good, props.bad, props.neutral)} />
      <StatisticLine text="positive" value={positive(props.good, props.bad, props.neutral)} />
      </tbody>
      </table>
    </div>
  } else {
    return <div>No feedback given yet</div>
  }
}

const StatisticLine = props => {
  return <tr><td>{props.text}</td><td>{props.value}</td></tr>
}

const all = (good, bad, neutral) => {
  return good + bad + neutral
}

const average = (good, bad, neutral) => {
  return (good - bad) / (good + bad + neutral)
}

const positive = (good, bad, neutral) => {
  return good / (good + bad + neutral)
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <p>Give feedback:</p>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <p>Statistics:</p>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
  