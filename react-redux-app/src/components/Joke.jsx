import React from "react";
import { connect } from "react-redux";
import JokeButton from "./JokeButton";

const Joke = props => {
  if (props.isFetching) {
    return <p>Loading</p>;
  }
  if (props.joke.type === "single") {
    return (
      <>
        <h2>Programming Jokes</h2>;<h2>{props.joke.joke} </h2>
        <JokeButton />
      </>
    );
  }
  if (props.joke.type === "twopart") {
    return (
      <>
        <h2>Programming Jokes</h2>
        <h2>{props.joke.setup}</h2>
        <h2>{props.joke.delivery}</h2>
        <JokeButton />
      </>
    );
  }
  if (props.isFetching === false) {
    return (
      <>
        <h2>Programming Jokes</h2>
        <JokeButton />
      </>
    );
  }
};

const mapStateToProps = state => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(Joke);
