import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import postsReducer from '../reducers/postsReducer';

const configureStore = (railsProps) => createStore(postsReducer, railsProps, applyMiddleware(thunkMiddleware));

export default configureStore;
