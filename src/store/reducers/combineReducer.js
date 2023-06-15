import {combineReducers} from 'redux';
import todoReducer from './todoReducers';

const reducer = combineReducers({todolist:todoReducer});
export default reducer;