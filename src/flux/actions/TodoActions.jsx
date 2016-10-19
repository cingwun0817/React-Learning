import TodoDispatcher from '../dispatcher/TodoDispatcher'
import { ADD_TODO, DEL_TODO } from '../constants/TodoConstant'

const TodoActions = {
	addTodo: function(text) {
		TodoDispatcher.dispatch({
			actionType: ADD_TODO,
			payload: {
				todo: text
			}
		})
	},

	delTodo: function(idx) {
		TodoDispatcher.dispatch({
			actionType: DEL_TODO,
			payload: {
				idx: idx
			}
		})
	}
}

export default TodoActions
