import { useState } from 'react'


const Header = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticDisplay = ({text, number}) => <p>{text}: {number}</p>


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

        <StatisticDisplay text={'Good'} number={good} />
        <StatisticDisplay text={'Neutral'} number={neutral} />
        <StatisticDisplay text={'Bad'} number={bad} />
      </div>
  )
}

export default App