const addColumn = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        lines: action.line,
        time: action.time
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default addColumn