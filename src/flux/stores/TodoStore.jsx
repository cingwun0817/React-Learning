import TodoDispatcher from '../dispatcher/TodoDispatcher'
import { ADD_TODO, DEL_TODO } from '../constants/TodoConstant'
import { EventEmitter } from 'events'

const store = {
	todos: []
}

class TodoStroeClass extends EventEmitter
{
	addChangeListener(callback) {
		this.on(ADD_TODO, callback)
	}

	removeChangeListener(callback) {
		this.removeListener(ADD_TODO, callback)
	}

	getTodos() {
		return store.todos;
	}
}

const TodoStore = new TodoStroeClass()

TodoDispatcher.register((action)=>{
	switch(action.actionType) {
		case ADD_TODO:
			store.todos.push(action.payload.todo)
			TodoStore.emit(ADD_TODO)
			break
		case DEL_TODO:
			store.todos.splice(action.payload.idx, 1)
			break
		default:
			return false
	}

	return true
})

export default TodoStore
