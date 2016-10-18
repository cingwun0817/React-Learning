import React from 'react'

const Body = (props) => (
	<div>
		<ul>
			{
				props.todos.map((todo, idx) => (
					<li key={ idx }>
						{ todo.get('text') }
						<button onClick={ props.onDel(idx) }>X</button>
					</li>
				))
			}
		</ul>
	</div>
)

export default Body
