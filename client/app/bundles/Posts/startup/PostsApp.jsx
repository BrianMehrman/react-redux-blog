import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/postsStore';

import GridContainer from '../containers/GridContainer';
import PreviewContainer from '../containers/PreviewContainer';
import PostContainer from '../containers/PostContainer';

const PostsApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <Router>
      <div>
        <Route exact path="/" component={GridContainer} />
        <Route path="/preview" component={PreviewContainer} />
        <Route path="/post" component={PostContainer} />
      </div>
    </Router>
  </Provider>
);

export default PostsApp;
