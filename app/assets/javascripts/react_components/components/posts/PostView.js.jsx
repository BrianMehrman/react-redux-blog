class PostView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    const { id } = this.state.post;

    $.get(`/posts/${id}`).then((response) => {
      this.setState({
        post: response
      });
    });
  }

  render() {
    return (
      <div className="PostView-container container">
        <div className="row">
          <div className="col-xs-6 col-md-4">Description:</div>
          <div className="col-xs-12 col-md-8">{post.description}</div>
        </div>
        <div className="row">
          <div className="col-md-12">Body:</div>
        </div>
        <div className="row">
          <div className="col-md-10 col-md-offset-2">{post.body}</div>
        </div>
      </div>
    )
  }
}
