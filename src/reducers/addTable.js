const addTable = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TIME':
      return [
        ...state,
        {
          //
        }
      ]
    case 'ADD_ERR':
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

export default addTable;