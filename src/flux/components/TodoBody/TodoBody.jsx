import React from 'react'
import TodoStore from '../../stores/TodoStore.jsx'
import TodoActions from '../../actions/TodoActions.jsx'

const Body = React.createClass({

	getInitialState: function() {
		return {
			todos: []
		}
	},

	componentDidMount: function() {
		TodoStore.addChangeListener(this._change)
	},

	_change: function() {
		this.setState({
			todos: TodoStore.getTodos()
		})
	},

	_del: function(idx) {
		TodoActions.delTodo(idx)
		this._change()
	},

	render: function() {
		return (
			<div>
				{
					this.state.todos.map((todo,idx)=>(
						<div key={ idx }>
							<span>{ todo }</span>
							<button onClick={ this._del.bind(this, idx) }>X</button>
						</div>
					))
				}
			</div>
		)
	}

})

export default Body
