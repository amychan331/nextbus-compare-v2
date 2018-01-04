const removeColumn = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_COLUMN':
      return action.slice(0, action.length - 1)
    default:
      return state
  }
}

export default removeColumn