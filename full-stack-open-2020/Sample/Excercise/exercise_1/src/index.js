import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const Content = (props) => {
  console.log(props.course.parts);
  return (
    <>
      <Part name={props.course.parts[0].name} count={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} count={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} count={props.course.parts[2].exercises} />
    </ >
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))