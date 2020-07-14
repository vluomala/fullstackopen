import React, { useState } from 'react'

const Person = (props) => {
  return (
  <li>{props.name}: {props.number}</li>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-11111' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNumberChange = (event) => {
    //  console.log(event.target.value)
      setNewNumber(event.target.value)
    }

  const handleNameChange = (event) => {
  //  console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const addPerson = (event) => {
    event.preventDefault()

    const includes = persons.some(person => person.name === newName)
    console.log("includes? ", includes +" name to be set: ", newName)
    if(includes) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        date: new Date().toISOString(),
      }    
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) =>
          <Person key={person.name} name={person.name} number={person.number} />
        )}
      </ul>
    </div>
  )

}

export default App
