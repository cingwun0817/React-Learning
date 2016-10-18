import React from 'react'
import TodoActions from '../../actions/TodoActions.jsx'

const Header = React.createClass({

	_addTodo: function() {
		var todo = this.refs.todo

		TodoActions.addTodo(todo.value)

		todo.value = ''
	},

	render: function() {
		return (
			<div>
				<input type="text" ref="todo" />
				<button onClick={this._addTodo}>ADD</button>
			</div>
		)
	}

})

export default Header
