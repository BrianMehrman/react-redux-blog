import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchPosts, selectPost, deselectPost } from '../../actions/postsActionCreators';
import { Link } from 'react-router-dom';

export default class Grid extends Component {
  componentDidMount() {
    const { dispatch, page } = this.props;
    dispatch(fetchPosts(page));
  }

  selectPost(post) {
    this.props.dispatch(selectPost(post));
  }

  post(post) {
    return(
      <div key={post.id} className="PostsGrid row">
          <div className="col-xs-12 col-md-12">
            <div className="PostGrid-Post-Title row">
              <h2 className="col-xs-11 col-md-9">{post.title.slice(0,80)}</h2>
             </div>

             <div className="PostGrid-BodyPreview row">
              <div className="col-xs-2 col-md-1 col-lg-1">
                <div className="row">
                  <div className="col-md-12">
                    <Link className="btn btn-primary" to='/preview' onClick={() => this.selectPost(post) }>Preview</Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Link className="btn btn-primary" to='/post' onClick={() => this.selectPost(post) }>View Post</Link>
                  </div>
                </div>
              </div>
              <div className="col-xs-10 col-md-11 col-lg-10">
                {post.body.slice(0.300)}
              </div>
            </div>
            <div className="PostGrid-Footer row">
              <div className="col-xs-12"></div>
            </div>
          </div>
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

  render() {
    return (
      <div className="PostsGrid-container">
        { this.posts() }
      </div>
    )
  }
};

Grid.propTypes = {
  posts: PropTypes.array,
  page: PropTypes.number,
  selectedPost: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};
