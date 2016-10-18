import { connect } from 'react-redux'
import {
	addTodo,
	changTodo
} from '../actions/TodoActions'
import TodoHeader from '../components/TodoHeader'

const mapStateToProps = (state) => ({
	todo: state.getIn(['todo', 'todo'])
})

const mapDispatchToProps = (dispatch) => ({
	onChange: (event) => {
		dispatch(changTodo({
			text: event.target.value
		}))
	},
	onAdd: () => {
		dispatch(addTodo())
		dispatch(changTodo({
			'text': ''
		}))
	}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoHeader);
