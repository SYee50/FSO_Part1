import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const StatisticDisplay = (props) => <p>{props.text}: {props.number}</p>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    console.log(good + 1)
    setGood(good + 1)
  }

  const incrementNeutral = () => {
    console.log(neutral + 1)
    setNeutral(neutral + 1)
  }

  const incrementBad = () => {
    console.log(bad + 1)
    setBad(bad + 1)
  }


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