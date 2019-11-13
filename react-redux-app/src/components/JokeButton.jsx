import React from "react";
import { connect } from "react-redux";
import { fetchJoke } from "../actions";

const JokeButton = props => {
  return (
    <>
      <button onClick={props.fetchJoke}>Get New Joke</button>
    </>
  );
};

export default connect(
  null,
  { fetchJoke }
)(JokeButton);
