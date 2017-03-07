// ./scripts/components/session/SignupPage.react.jsx
const React = require('react');
const SessionActionCreators = require('../../actions/SessionActionCreators.react.jsx');
const SessionStore = require('../../stores/SessionStore.react.jsx');
const ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');

class SignupPage extends React.createClass {

  getInitialState() {
    return { errors: [] };
  }

  componentDidMount() {
    SessionStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    SessionStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({ errors: SessionStore.getErrors() });
  }

  _onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: [] });
    var email = this.refs.email.getDOMNode().value;
    var username = this.refs.username.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    var passwordConfirmation = this.refs.passwordConfirmation.getDOMNode().value;
    if (password !== passwordConfirmation) {
      this.setState({ errors: ['Password and password confirmation should match']});
    } else {
      SessionActionCreators.signup(email, username, password, passwordConfirmation);
    }
  }

  render() {
    var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <div>
        <div className="row">
          <div className="card card--login small-10 medium-6 large-4 columns small-centered">
            <form onSubmit={this._onSubmit}>
              <div className="card--login__field">
                <label name="email">Email</label>
                <input type="text" name="email" ref="email" />
              </div>
              <div className="card--login__field">
                <label name="username">Username</label>
                <input type="text" name="username" ref="username" />
              </div>
              <div className="card--login__field">
                <label name="password">Password</label>
                <input type="password" name="password" ref="password" />
              </div>
              <div className="card--login__field">
                <label name="password-confrimation">Password confirmation</label>
                <input type="password" name="password-confirmation" ref="passwordConfirmation" />
              </div>
              <button type="submit" className="card--login__submit">Signup</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
