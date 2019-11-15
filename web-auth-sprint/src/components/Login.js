import React, { useState } from "react";

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  const [formInput, setFormInput] = useState({ username: '', password: '' })

  const handleChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('/auth/login', formInput)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        props.history.push('/')
      })
      .catch(err => console.log(err.response))
    // Call Login axios function
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Web Auth Sprint Login</h1>
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
};

export default Login;
