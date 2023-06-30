const URL = "https://hp-api.onrender.com/api/characters";

export const getChars = () => {
  return function (dispatch) {
    return fetch(URL)
    .then(response => response.json())
    .then(data => dispatch({
      type: "GET_CHARS",
      payload: data
    }))
  }
}

export const addChar = (character) => {
  return {
    type: "ADD_CHAR",
    payload: character
  }
}