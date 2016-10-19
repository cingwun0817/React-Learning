import { combineReducers } from 'redux-immutable'
import todoReducer from './Todo/TodoReducer'

const rootReducer = combineReducers({
	todoReducer
})

export default rootReducer
