import React from 'react'
import ReactDOM from 'react-dom'

/** demo props */
// const Board = React.createClass({
// 	getInitialState: function() {
// 		return {
// 			list: [
// 				{name: 'Leo', 'date':'2016/10/1','send': 'Hi, My friend.'},
// 				{name: 'Kettan', 'date':'2016/10/2', 'send': 'Hi, Leoooooo.'}
// 			]
// 		}
// 	},
// 	sendHello: function() {
// 		alert('Hello.')
// 	},
// 	render: function() {
// 		return (
// 			<div>
// 				<h2>List</h2>
// 				{
// 					this.state.list.map(function(list, idx) {
// 						return (
// 							<Msg key={idx} name={list.name} date={list.date} sendHello={this.sendHello}>
// 								{list.send}
// 							</Msg>
// 						)
// 					}.bind(this))
// 				}
// 			</div>
// 		)
// 	}
// })

// const Msg = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<span>{this.props.name} Send:</span>
// 				<small>({this.props.date})</small>
// 				<p>{this.props.children}</p>
// 				<button onClick={this.props.sendHello}>Send Hello</button>
// 				<hr/>
// 			</div>
// 		)
// 	}
// })

// ReactDOM.render(<Board/>, document.getElementById('app'))

/** demo state&refs */
// const List = React.createClass({
// 	getInitialState: function() {
// 		return {
// 			todos: [
// 				'Study React.',
// 				'Run.'
// 			]
// 		}
// 	},
// 	addTodo: function() {
// 		let todo = this.refs.todo

// 		let todos = this.state.todos
// 		todos.push(todo.value)
// 		this.setState({todos: todos})

// 		todo.value = ''
// 	},
// 	render: function() {
// 		return (
// 			<div>
// 				<div>
// 					<input type="text" ref="todo" />
// 					<button onClick={this.addTodo}>Add</button>
// 				</div>
// 				<ul>
// 				{
// 					this.state.todos.map(function(todo, idx) {
// 						return (
// 							<li key={idx}>
// 								{todo}
// 							</li>
// 						)
// 					})
// 				}
// 				</ul>
// 			</div>
// 		)
// 	}
// })

// ReactDOM.render(<List/>, document.getElementById('app'))

/** demo react router */
// import { Router, Route, hashHistory, IndexRoute } from 'react-router'
// import App from './router/components/App'
// import Home from './router/components/Home'
// import About from './router/components/About'
// import Contact from './router/components/Contact'
// import News from './router/components/News'
// import Detail from './router/components/Detail'

/** 
 * /Home
 * /Aoubt
 * /Contact
 * /News
 *     /Detail
 */

// ReactDOM.render(
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App}>
// 			<IndexRoute component={Home}/>
// 			<Route path="/about" component={About} />
// 			<Route path="/contact" component={Contact} />
// 			<Route path="/news" component={News}>
// 				<Route path="/news/detail/:content" component={Detail} />
// 			</Route>
// 		</Route>
// 	</Router>
// 	, document.getElementById('app'))

// const routes = {
//   path: '/',
//   component: App,
//   indexRoute: { component: Home },
//   childRoutes: [
//     {path: 'about', component: About},
//     {path: 'contact', component: Contact},
//     {path: 'news', component: News, childRoutes:[
//     	{path: 'detail/:content', component: Detail}
//     ]},
//   ]
// }

// ReactDOM.render(
// 	<Router history={hashHistory} routes={routes}></Router>
// 	, document.getElementById('app'))

/** demo flux */
// import TodoHeader from './flux/components/TodoHeader'
// import TodoBody from './flux/components/TodoBody'

// const Todo = () => (
// 	<div>
// 		<TodoHeader/>
// 		<TodoBody/>
// 	</div>
// )

// ReactDOM.render(<Todo/>, document.getElementById('app'))

/** demo redux */
// import { Provider } from 'react-redux'
// import Main from './redux/components/Main'
// import TodoStore from './redux/stores/TodoStore'

// ReactDOM.render(
// 	<Provider store={ TodoStore }>
// 		<Main/>
// 	</Provider>
// 	, document.getElementById('app'))



