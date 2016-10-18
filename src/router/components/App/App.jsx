import React from 'react'
import { Link, IndexLink } from 'react-router'

const App = (props) => (
	<div>
		<div>
			<h1>URL List</h1>
			<ul>
				<li>
					<IndexLink to="/">Home</IndexLink>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/news">News</Link>
				</li>
			</ul>
		</div>
		{ props.children }
	</div>
)

export default App
