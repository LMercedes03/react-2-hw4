import React, { useState } from 'react';
import './Form.css'

export const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  };

  const handleGreetButtonClick = () => {
    alert(`Hello ${firstName} ${lastName}!`)
    setFirstName('')
    setLastName('')
  };

  return (
    <div className='GreetingForm'>
      <label>
        <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder="First Name"/>
      </label>
      <br />
      <label>
        <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name"/>
      </label>
      <br />
      <button onClick={handleGreetButtonClick}>Greet Me</button>
    </div>
  )
};