import React from 'react';

import { Provider } from 'react-redux';

import configureStore from '../store/postsStore';
import PostsContainer from '../containers/PostsContainer';

const PostsApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <PostsContainer />
  </Provider>
);

export default PostsApp;
