import { useState } from 'react'


const Header = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Count = ({text, number}) => <p>{text}: {number}</p>

const Statistic = ({text}) => <p>{text}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good + (bad * -1)) / total
  const positivePercentage = total === 0 ? 0 : (good / total) * 100

  return (
      <div>
        <Header text={'Give Feedback'}/>

        <Button onClick={incrementGood} text={'Good'}></Button>
        <Button onClick={incrementNeutral} text={'Neutral'}></Button>
        <Button onClick={incrementBad} text={'Bad'}></Button>

        <Header text={'Statistics'}/>

        <Count text={'Good'} number={good} />
        <Count text={'Neutral'} number={neutral} />
        <Count text={'Bad'} number={bad} />

        <Statistic text={`Total: ${total}`} />
        <Statistic text={`Average: ${average}`} />
        <Statistic text={`Positive Percentage: ${positivePercentage}%`} />
      </div>
  )
}

export default App