import { createStore, applyMiddleware } from 'redux'
import Logger from 'redux-logger'
import Immutable from 'immutable'
import rootReducer from '../reducers'

const initialState = Immutable.Map();

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(Logger({ stateTransformer: state => state.toJS() }))
);
