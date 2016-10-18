import TodoDispatcher from '../dispatcher/TodoDispatcher'
import { ADD_TODO, DEL_TODO } from '../constants/TodoConstant'

const TodoActions = {
	addTodo: function(text) {
		TodoDispatcher.dispatch({
			actionType: ADD_TODO,
			todo: text
		})
	},

	delTodo: function(idx) {
		TodoDispatcher.dispatch({
			actionType: DEL_TODO,
			idx: idx
		})
	}
}

export default TodoActions
