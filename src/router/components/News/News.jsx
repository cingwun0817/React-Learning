import React from 'react'
import { Link } from 'react-router'

const News = React.createClass({

	getInitialState: function() {
		return {
			news: [
				{title: 'React hello word.', 'content': 'aaaaaaaaa.'},
				{title: 'Yam.', 'content': 'bbbbbbbbb.'}
			]
		}
	},

	render: function() {
		return (
			<div>
				<p>News page.</p>
				<ul>
					{
						this.state.news.map(function(data, idx){
							var url = "/news/detail/" + data.content

							return (
								<li key={idx}>
									{ data.title }
									<Link to={ url }>more...</Link>
								</li>
							)
						})
					}
				</ul>
				<div>
					{ this.props.children }
				</div>
			</div>
		)
	}

})

export default News
