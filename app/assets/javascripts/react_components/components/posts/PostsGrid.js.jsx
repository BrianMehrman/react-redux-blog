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
        posts: response
      });
    });
  }

  post(post) {
    return(
      <div key={post.id} className="PostsGrid-Post row">
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
            <div className="col-xs-12">---</div>
          </div>
        </div>
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

  render() {
    return (
      <div className="PostsGrid-container">
        {this.posts()}
      </div>
    )
  }
}
