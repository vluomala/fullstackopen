import React, { useState } from 'react'

const Persons = (props) => {
  const persons = props.persons.filter(person  => person.name.toLowerCase().includes(props.filter.toLowerCase()))
  return (
    <ul>
      {persons.map((person, i) =>
        <Person key={person.name} name={person.name} number={person.number} />
      )}
    </ul>
  )
}

const Person = (props) => {
  return (
    <li>{props.name}: {props.number}</li>
  )
}

const Filter = (props) => {
  return (
      <div>filter shown with: <input value={props.filter} onChange={props.onfilterchange}/></div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.add}>
      <div>name: <input value={props.name} onChange={props.onnamechange}/></div>
      <div>number: <input value={props.number} onChange={props.onnumberchange} /></div>
      <div>
        <button type="submit">add</button>
      </div>
  </form>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNumberChange = (event) => {
    //  console.log(event.target.value)
      setNewNumber(event.target.value)
    }

  const handleNameChange = (event) => {
  //  console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleFilterChange = (event) => {
      console.log(event.target.value)
      setNewFilter(event.target.value)
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
      <Filter filter={newFilter} onfilterchange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm name={newName} number={newNumber} add={addPerson} onnamechange={handleNameChange} onnumberchange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={newFilter} />
    </div>
  )

}

export default App
