import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getRandomInt(max) {
  const value = Math.floor(Math.random() * Math.floor(max))
  return value;
}

const Anecdote = (props) => {
  return(
  <div>
    <p>{props.text}</p>
    <p>has {props.numofvotes}  votes</p>
  </div>
  )
}

const AnecdoteWithMostVotes = (props) => {
  const [mostvotes, setMostvotes] = useState(0)
  const [mostvotesindex, setMostvotesindex] = useState(0)

  props.votes.forEach(setIndexWithMostVotes)

  function setIndexWithMostVotes(value, index, array) {
    if (value > mostvotes) {
      console.log('new most votes found! Index: ', index, 'value: ' ,value)
      setMostvotes(value)
      setMostvotesindex(index)
    }
  }


  return(
  <div>
    <p>Anecdote with most votes</p>
    <p>{props.anecdotes[mostvotesindex]}</p>
    <p>has {mostvotes}  votes</p>
  </div>
  )
}



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  console.log('votes', votes)

  const handleClick = () => {
    const random = getRandomInt(6)
    console.log('random', random)
    setSelected(random)
  }

  const handleVote = () => {
    console.log('voted, current selected is:',selected)
    const copy = [...votes]
    // kasvatetaan taulukon paikan 2 arvoa yhdellä
    copy[selected] += 1     
    console.log('copy', copy)
    setVotes(copy)
  }  



  return (
    <div>
      <Anecdote text={props.anecdotes[selected]} numofvotes={votes[selected]} />
      <div><button onClick={handleVote}>vote</button><button onClick={handleClick}>next anecdote</button></div>
      <AnecdoteWithMostVotes anecdotes={props.anecdotes} votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)