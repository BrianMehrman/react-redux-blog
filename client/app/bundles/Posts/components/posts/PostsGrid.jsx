import React, { PropTypes, Component } from 'react';
import PostView from './PostView';
import { bindActionCreators } from 'redux';
import { fetchPosts, selectPost, deselectPost } from '../../actions/postsActionCreators';

export default class PostsGrid extends Component {
  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch(fetchPosts(page));
  }

  setPost(post) {
    const { dispatch } = this.props;
    console.log(`setting post: ${post.title}`);
    dispatch(selectPost(post));
  }

  unsetPost() {
    const { dispatch } = this.props;
    dispatch(deselectPost());
  }

  post(post) {
    return(
      <div key={post.id} className="PostsGrid-Post row">
        <a onClick={() => this.setPost(post)}>
          <div className="col-xs-12 col-md-12">
            <div className="PostGrid-Post-Title row">
              <h2 className="col-xs-11 col-md-9">{post.title.slice(0,80)}</h2>
             </div>
             <div className="PostGrid-Post-BodyPreview row">
              <div className="col-xs-10 col-md-10 col-xs-offset-1">
                {post.body.slice(0.300)}
              </div>
            </div>
            <div className="PostGrid-Post-Footer row">
              <div className="col-xs-12"></div>
            </div>
          </div>
        </a>
      </div>
    )
  }

  posts() {
    const { posts } = this.props;
    return (
      <div className="PostsGrid-Posts container">
        {
          posts.map((p) => {
            return this.post(p);
          })
        }
      </div>
    )
  }

  postDetails(post) {
    return (
      <div className="PostGrid-PostDetails panel">
        <div className="col-xs-12 col-md-12">
          <div className="PostGrid-PostDetails-Title panel-heading">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {this.unsetPost()}}
            >
              <span aria-hidden="true">Back</span>
            </button>
            <h3 className="col-xs-11 col-md-9">{post.title}</h3>
          </div>
           <div className="PostGrid-PostDetails-BodyPreview panel-body">
            <div className="col-xs-12 col-md-12">
              {post.body}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { selectedPost } = this.props;
    return (
      <div className="PostsGrid-container">
        { selectedPost ? this.postDetails(selectedPost) : this.posts() }
      </div>
    )
  }
};

PostsGrid.propTypes = {
  posts: PropTypes.array,
  page: PropTypes.number,
  selectedPost: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};
