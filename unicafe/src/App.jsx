import { useState } from 'react'


const Header = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, number, percent}) => (
    <tr>
      <td>{text}</td>
      <td>{number} {percent ? "%" : ""}</td>
    </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good + (bad * -1)) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return <p>No Feedback Given</p>
  }

  return (
      <table>
        <StatisticLine text={'Good '} number={good} percent={false} />
        <StatisticLine text={'Neutral '} number={neutral} percent={false}/>
        <StatisticLine text={'Bad '} number={bad} percent={false} />

        <StatisticLine text={'Total '} number={total} percent={false} />
        <StatisticLine text={'Average '} number={average.toFixed(1)} percent={false}/>
        <StatisticLine text={'Positive '} number={positive.toFixed(1)} percent={true} />
      </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  return (
      <div>
        <Header text={'Give Feedback'}/>
        <Button onClick={incrementGood} text={'Good'}></Button>
        <Button onClick={incrementNeutral} text={'Neutral'}></Button>
        <Button onClick={incrementBad} text={'Bad'}></Button>

        <Header text={'Statistics'}/>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}

export default App