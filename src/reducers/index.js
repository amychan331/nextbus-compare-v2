import { combineReducers } from 'redux'
import addColumn from './addColumn'
import removeColumn from './removeColumn'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  addColumn,
  removeColumn,
  form: formReducer
})

export default reducers