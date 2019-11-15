import React, { useState, useEffect } from "react";


import Joke from "./Joke";
import { axiosWithAuth } from '../utils/axiosWithAuth';


const JokesPage = () => {
  const [jokesList, setJokesList] = useState([]);
  console.log(jokesList)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axiosWithAuth()
      .get('/jokes')
      .then(res => {
        console.log(`aWA res.data`, res.data)
        setJokesList(res.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      {jokesList.map(joke =>
        <Joke joke={joke} key={joke.id} />
      )}
    </>
  );
};

export default JokesPage;
