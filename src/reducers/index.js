import { combineReducers } from 'redux';
import addTime from './addTable';
import removeTime from './removeTable';

const reducers = combineReducers({
  addTable,
  removeTable
})

export default reducers