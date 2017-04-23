import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  componentDidMount() {
    const { id } = this.props.post;

    $.get(`/posts/${id}`).then((response) => {
      this.setState({
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
    const { post } = this.props
    return (
      <div className="Post-container container">
        <div className="row">
          <div className="col-md-12">
            <Link className="btn btn-primary" to='/' onClick={() => this.unsetPost() }>Back</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-4">Description:</div>
          <div className="col-xs-12 col-md-8">{post.description}</div>
        </div>
        { this.renderStream() }
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default Post;
