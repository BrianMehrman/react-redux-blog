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

module.exports = posts;
