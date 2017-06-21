import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  matchPath,
  Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/postsStore';

import GridContainer from '../containers/GridContainer';
import PreviewContainer from '../containers/PreviewContainer';
import PostContainer from '../containers/PostContainer';

const routes = [
  { path: '/',
    component: GridContainer,
    exact: true
  },
  { path: "/preview/:id",
    component: PreviewContainer,
    loadData: () => {
      debugger
      console.log('load data here')
    },
  },
  { path: "/post/:id",
    component: PostContainer,
    loadData: () => console.log('load data here'),
  },
];

const PostsApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <Router>
      <div>
        <Switch>
        { routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default PostsApp;
