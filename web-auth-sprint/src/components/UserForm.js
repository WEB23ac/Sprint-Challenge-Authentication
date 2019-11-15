import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserForm = (props) => {
  const [formInput, setFormInput] = useState('')

  const handleChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post('localhost:3300/api/auth/register', formInput)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  return (
    <>
      <h1>Web Auth Sprint Registration</h1>
      <>

        <div>

          <form>
            <input

              label="User Name"
              name='username'
              value={formInput.username}
              onChange={handleChange}
            />
            <input

              // add hidden text feature
              name='password'
              label="Password"
              value={formInput.password}
              onChange={handleChange}
            />
            <button variant="contained" onClick={handleSubmit}>
              Login
            </button>
          </form>
        </div>
      </>
    </>
  );

}

export default UserForm