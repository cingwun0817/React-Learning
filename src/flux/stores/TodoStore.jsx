import TodoDispatcher from '../dispatcher/TodoDispatcher'
import { ADD_TODO, DEL_TODO, CHANGE_COUNT } from '../constants/TodoConstant'
import { EventEmitter } from 'events'

const store = {
	todos: [],
	count: 0
}

class TodoStroeClass extends EventEmitter
{
	addChangeListener(callback) {
		this.on(ADD_TODO, callback)
	}

	countChangeListener(callback) {
		this.on(CHANGE_COUNT, callback)
	}

	removeChangeListener(callback) {
		this.removeListener(ADD_TODO, callback)
		this.removeListener(CHANGE_COUNT, callback)
	}

	getTodos() {
		return store.todos
	}

	getCount() {
		return store.count
	}
}

const TodoStore = new TodoStroeClass()

TodoDispatcher.register((action)=>{
	switch(action.actionType) {
		case ADD_TODO:
			store.todos.push(action.payload.todo)
			TodoStore.emit(ADD_TODO)

			store.count = store.count+1
			TodoStore.emit(CHANGE_COUNT)
			break
		case DEL_TODO:
			store.todos.splice(action.payload.idx, 1)

			store.count = store.count-1
			TodoStore.emit(CHANGE_COUNT)
			break
		default:
			return false
	}

	return true
})

export default TodoStore
