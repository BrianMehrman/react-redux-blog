import { combineReducers } from 'redux';
import { REQUEST_POSTS, RECEIVE_POSTS, SELECT_POST, DESELECT_POST } from '../constants/postsConstants';

const posts = (state={
  isFetching: false,
  didInvalidate: false,
  posts: [],
  page: 1,
  selectedPost: undefined
}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        page: action.page
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        posts: action.posts,
        page: action.page,
        lastUpdated: action.receivedAt
      })
    case SELECT_POST:
      return Object.assign({}, state, {
        selectedPost: action.post
      })
    case DESELECT_POST:
      return Object.assign({}, state, {
        selectedPost: undefined
      })
    default:
      return state
  }
}

const postsReducer = combineReducers({ posts });

export default postsReducer;
