let initialState = {
  characters: []
}

const reducer = (state=initialState, { type, payload }) => {
  switch(type){
    case "GET_CHARS":
      return {
        ...state,
        characters: payload
      }
    case "ADD_CHAR":
      return {
        ...state,
        characters: [payload, ...state.characters]
      }
    default:
      return {...state}
  }
}

export default reducer;