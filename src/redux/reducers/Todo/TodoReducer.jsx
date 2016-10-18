import { handleActions } from 'redux-actions'
import { TodoState } from '../../constants/Model'
import {
	ADD_TODO,
	DEL_TODO,
	CHANG_TODO
} from '../../constants/ActionTypes'

const TodoReducers = handleActions({
	ADD_TODO: (state) => {
		let todo = state.get('todo')
		let todos = state.get('todos').push(todo)
		return state.set('todos', todos)
	},
	DEL_TODO: (state, { payload }) => {
		let todos = state.get('todos').splice(payload.idx, 1)
		return state.set('todos', todos)
	},
	CHANG_TODO: (state, { payload }) => {
		return state.merge({ 'todo': {
			'text': payload.text
		}})
	}
}, TodoState)

export default TodoReducers
