import React, { useState } from "react"

const App = () => {
  const [person, setPerson] = useState({ firstName: "", email: "" })
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    let key = e.target.name
    let value = e.target.value
    setPerson({ ...person, [key]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email) {
      const SPeople = { ...person, id: new Date().getTime().toString() }
      setPeople((people) => [...people, SPeople])
      setPerson({ firstName: "", email: "" })
    } else {
      alert("enter all values!")
    }
  }
  return (
    <>
      <div className='input-form'>
        <form action='' onSubmit={handleSubmit}>
          <label htmlFor='firstName'>Name</label>
          <input value={person.firstName} onChange={handleChange} type='text' name='firstName' id='name' />
          <label htmlFor='email'>Email</label>
          <input value={person.email} onChange={handleChange} type='email' name='email' id='email' />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='display-data'>
        {people.map(({ id, firstName, email }) => {
          return (
            <div key={id} className='container'>
              <h3>{firstName}</h3>
              <h3>{email}</h3>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
