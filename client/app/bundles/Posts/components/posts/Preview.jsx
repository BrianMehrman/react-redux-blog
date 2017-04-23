import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { deselectPost } from '../../actions/postsActionCreators';

export default class Preview extends Component {

  unsetPost() {
    const { dispatch } = this.props;
    dispatch(deselectPost());
  }

  render () {
    const { post } = this.props;

    return (
      <div className="PostGrid-Preview panel">
        <div className="col-xs-12 col-md-12">
          <div className="PostGrid-Preview-Title panel-heading">
            <Link className="col-md-1 col-xs-1 btn btn-primary" to='/' onClick={() => this.unsetPost() }>Back</Link>
            <h3 className="col-xs-11 col-md-9">{post.title}</h3>
          </div>
          <div className="PostGrid-Preview-BodyPreview panel-body">
            <div className="col-xs-12 col-md-12">
              {post.body}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

Preview.propTypes = {
  post: PropTypes.object,
  page: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};
