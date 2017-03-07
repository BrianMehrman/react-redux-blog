const REQUEST_POSTS = 'REQUEST_POSTS';
const RECEIVE_POSTS = 'RECEIVE_POSTS';

const requestPosts = function(posts) {
  return {
    type: REQUEST_POSTS,
    posts
  }
}

const receivePosts = function(posts, json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

const fetchPosts = function(posts) {
  return (dispatch) => {
    dispatch(requestPosts(posts))
    return $.get('/posts?limit=10')
      .then(response => response.json())
      .then((json) => dispatch(receivePosts(posts, json)));
  }
};

module.exports = {
  REQUEST_POSTS: REQUEST_POSTS,
  RECEIVE_POSTS: RECEIVE_POSTS,
  requestPosts: requestPosts,
  receivePosts: receivePosts,
  fetchPosts: fetchPosts
};
