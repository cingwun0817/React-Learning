import { createAction } from 'redux-actions'
import {
	ADD_TODO,
	DEL_TODO,
	CHANG_TODO
} from '../constants/ActionTypes'

export const addTodo = createAction(ADD_TODO)
export const delTodo = createAction(DEL_TODO)
export const changTodo = createAction(CHANG_TODO)
