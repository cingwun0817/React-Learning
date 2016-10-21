import Immutable from 'immutable'

export const TodoState = Immutable.fromJS({
	'todo': {
		text: ''
	},
	'todos': [],
	'count': 0
})
