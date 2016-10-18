import { combineReducers } from 'redux-immutable'
import todo from './Todo/TodoReducer'

const rootReducer = combineReducers({
	todo
})

export default rootReducer
