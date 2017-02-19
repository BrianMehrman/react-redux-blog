class ErrorNotice extends React.createClass {
  render() {
    return (
      <div className="error-notice">
        <ul>
          {this.props.errors.map(function(error, index) {
            return <li className="error-notice__error" key={"error-"+index}>{error}</li>;
          })}
        </ul>
      </div>
    );
  }
}
