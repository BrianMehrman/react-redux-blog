class PostsGrid extends React.Component {

  constructor(props) {
    super(props);

    this.state =  {
      posts: []
    };
  }

  componentDidMount() {
    $.get('/posts?limit=10').then((response) => {
      this.setState({
        posts: response,
        selectedPost: undefined
      });
    });
  }

  setPost(post) {
    this.setState({ selectedPost: post });
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
    return (
      <div className="PostsGrid-Posts container">
        {
          this.state.posts.map((p) => {
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
              onClick={()=> this.setState({selectedPost: undefined})}
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
    const { selectedPost } = this.state;
    return (
      <div className="PostsGrid-container">
        { selectedPost ? this.postDetails(selectedPost) : this.posts() }
      </div>
    )
  }
}
