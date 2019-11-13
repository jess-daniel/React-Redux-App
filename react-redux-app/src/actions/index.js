import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchJoke = () => dispacth => {
  dispacth({ type: START_FETCHING });
  axios
    .get("https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw")
    .then(res => {
      dispacth({ type: FETCH_SUCCESS, payload: res.data });
      //   console.log(res);
    })
    .catch(err => {
      dispacth({ type: FETCH_FAILURE, payload: err.response });
    });
};
