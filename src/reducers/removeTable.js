const removeTable = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_TABLE':
      return [
        ...state,
        {
          //
        }
      ]
    default:
      return state
  }
}

export default removeTable;