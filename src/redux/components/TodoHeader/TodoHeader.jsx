import React from 'react'

const Header = (props) => {
	return (
		<div>
			<h1>Rudex</h1>
			<div>
				<small>Count: { props.count }</small>
			</div>
			<input type="text" value={ props.todo.get('text') } onChange={ props.onChange } />
			<button onClick={ props.onAdd }>ADD</button>
		</div>
	)
}

export default Header
