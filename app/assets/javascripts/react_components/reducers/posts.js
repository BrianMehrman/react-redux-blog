import { combineReducers } from 'redux';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants/postsConstants';

const posts = (state={
  isFetching: false,
  didInvalidate: false,
  posts: []
}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        posts: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const postsReducer = combineReducers({ posts });

export default postsReducer;
