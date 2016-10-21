import React from 'react'
import TodoStore from '../../stores/TodoStore.jsx'
import TodoActions from '../../actions/TodoActions.jsx'

const Header = React.createClass({

	getInitialState: function() {
		return {
			count: 0
		}
	},

	componentDidMount: function() {
		TodoStore.countChangeListener(this._change)
	},

	_change: function() {
		this.setState({
			count: TodoStore.getCount()
		})
	},

	_addTodo: function() {
		var todo = this.refs.todo

		TodoActions.addTodo(todo.value)

		todo.value = ''
	},

	render: function() {
		return (
			<div>
				<h1>Flux</h1>
				<div>
					<small>Count: { this.state.count }</small>
				</div>
				<input type="text" ref="todo" />
				<button onClick={this._addTodo}>ADD</button>
			</div>
		)
	}

})

export default Header
