import React from "react";
// import axios from "axios";



const Joke = (props) => {

  console.log(props)


  return (
    <div classname='joke'>

      <p>{props.joke.joke}</p>
    </div>
  );
};

export default Joke;
