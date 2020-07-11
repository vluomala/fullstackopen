import React from 'react'
  
    const Total = (props) => {
    // var total = 0
     const total = props.parts.reduce((sum, part) => {
       sum = sum + part.exercises
       return sum
     }, 0) 
     return (
       <>
         <p>Total of {total} excercises
         </p>
       </>
     )
   }

  const CourseHeader = (props) => {
  
    return (
      <>
        <h2>{props.course}</h2>
      </>
    )
  }
  
  const Part = (props) => {
    
    return (
      <>
        <p>
          {props.part} {props.exercises}
        </p>
      </>
    )
  }
  
  const Content = (props) => {
    console.log(props.parts)
    return (    
        props.parts.map(part =>  
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        )
    )
  }
  
  const Course = (props) => {
    return (
      <>
        <CourseHeader course={props.course.name}/>
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}/>
      </>
    )
  } 

  export default Course