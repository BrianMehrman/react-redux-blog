class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string
};
