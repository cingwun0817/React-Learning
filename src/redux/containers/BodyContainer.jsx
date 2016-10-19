import { connect } from 'react-redux'
import {
	delTodo
} from '../actions/TodoActions'
import TodoBody from '../components/TodoBody'

const mapStateToProps = (state) => ({
	todos: state.getIn(['todoReducer', 'todos'])
})

const mapDispatchToProps = (dispatch) => ({
	onDel: (idx) => () => {
		dispatch(delTodo({ idx }))
	}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoBody);
