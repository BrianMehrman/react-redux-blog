var MyApp = React.createClass({

  getInitialState: function() {
    return JSON.parse(this.props.presenter);
  },

  render: function() {
    return (
      <div className="app">
        My App
      </div>
    );
  }
});
