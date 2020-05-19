import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
      {props.name}
    </h1>
  )
}

const Content = (props) => {
  return (
    <p>
      <Part name={props.name1} count={props.count1} />
      <Part name={props.name2} count={props.count2} />
      <Part name={props.name3} count={props.count3} />
    </p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} has {props.count} exercises
    </p>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercises: {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content name1={part1} count1={exercises1} name2={part2} count2={exercises2} name3={part3} count3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))