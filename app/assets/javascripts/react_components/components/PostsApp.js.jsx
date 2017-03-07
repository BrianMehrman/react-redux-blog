// import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// const posts = require('../reducers/posts');

class PostsApp extends React.Component {

  constructor(props) {
    super(props);
    // const store = createStore(posts);
    this.state =  {
      // store: store
    };
  }

  render() {
    return (
      // <Provider store={this.state.store}>
      <div>
        <PostsGrid />
      </div>
      // </Provider>
    );
  }
}
