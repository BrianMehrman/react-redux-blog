import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPost } from '../../actions/postsActionCreators';

class Post extends Component {
  componentDidMount() {
    const { post, match, dispatch } = this.props;
    const { params } = match;

    if(post) dispatch(fetchPost(post.id));
    else if(params.id) dispatch(fetchPost(params.id));
  }

  getPost(id) {
    const _this = this;
    $.get(`/posts/${id}`).then((response) => {
      _this.setProps({
        post: response
      });
    });
  }

  renderFeature(section) {
    const featureImgSrc = "http://lorempixel.com/g/800/200/";
    const { text } = section;

    return (
      <div className="row">
        <div className="col-md-12">
          <p>text</p>
          <img src={featureImgSrc} />
        </div>
      </div>
    )
  }

  renderSection(section) {
    return (
      <div className="row">
        <div className="col-md-8 md-offset-2">
          <p>section.body</p>
        </div>
      </div>
    )
  }

  renderStream() {
    const { post: { sections } } = this.props;

    return (

      <div className="row">
        <div className="col-md-10 col-md-offset-2">
        {
          sections.forEach((section) => {
            section.isFeature ? this.renderFeature(section) : this.renderSection(section)
          })
        }
        </div>
      </div>
    )
  }

  render() {
    const { post } = this.props;
    debugger
    return (
      <div className="Post-container container">
        <div className="row">
          <div className="col-md-12">
            <Link className="btn btn-primary" to='/' onClick={() => this.unsetPost() }>Back</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-4">Description:</div>
          <div className="col-xs-12 col-md-8">{post && post.title}</div>
        </div>
        { post && this.renderStream() }
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default Post;
