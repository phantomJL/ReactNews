import React, { Component } from 'react'

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signIn, signUp } from '../../actions/user'

// styles
import CSSModules from 'react-css-modules'
import styles from './style.scss'

@connect(
  (state, props) => ({
  }),
  dispatch => ({
    signUp: bindActionCreators(signUp, dispatch),
    signIn: bindActionCreators(signIn, dispatch)
  })
)
@CSSModules(styles)
export default class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {

    this.setState({
      show: true
    });

  }

  async submit(event) {

    event.preventDefault();


    let { username, password, confirmPassword} = this.refs;

    const { signUp, signIn } = this.props;

    if (!username.value) return username.focus();
    if (!password.value) return password.focus();
    if (!confirmPassword.value) return confirmPassword.focus();

    let data = {
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    }
    console.log(data);
    let [ err, res ] = await signUp(data);

    if (err) {
      Toastify({
        text: err && err.message ? err.message : err,
        duration: 3000,
        backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
      }).showToast();
      return;
    } else {
      Toastify({
        text: '注册成功',
        duration: 3000,
        backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
      }).showToast();
    }

    delete data.username;

    [ err, res ] = await signIn({ data });

    if (err) {

      $('#sign').modal('hide');
      setTimeout(()=>{
        $('#sign').modal({ show: true }, { 'data-type': 'sign-in' });
      }, 700);

    }

  }

  render () {
    const { type, show } = this.state;

    return (

      <div styleName="signup">

        <div><input type="text" className="form-control" ref="username" placeholder="名字" /></div>

        <div><input type="password" className="form-control" ref="password" placeholder="密码" /></div>
        <div><input type="password" className="form-control" ref="confirmPassword" placeholder="确认密码" /></div>

        <div>
          <input type="submit" className="btn btn-primary" value="注册" onClick={this.submit} />
        </div>
        </div>
    )
  }

}
