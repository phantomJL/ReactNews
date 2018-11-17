import React, { Component } from 'react'

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signIn, signUp } from '../../../actions/user'

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
    show: false
    }
    this.signup = this.signup.bind(this)
  }

  componentDidMount() {

    this.setState({
      show: true
    });

  }

  async signup(event) {

    event.preventDefault();


    let { username, password, confirmPassword,} = this.refs;

    const { signUp,signIn } = this.props;
    const submit = this.refs.submit;

    if (!username.value) return username.focus();
    if (!password.value) return password.focus();
    if (!confirmPassword.value) return confirmPassword.focus();
    if (password.value != password.value) return confirmPassword.focus();

    let data = {
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    }

    submit.value = '注册中...';
    submit.disabled = true;
    // 注册
    let [err,res] = await signUp(data);

    if (res) {
            submit.value = '注册成功，登陆中...';

            delete data.confirmPassword;

            //登陆

            let [err,success] = await signIn(data);

            if (success) {
              window.location.href = `${this.props.path}`;
            }else{

            $('#sign').modal('hide');
            setTimeout(()=>{
              $('#sign').modal({ show: true }, { 'data-type': 'sign-in' });
            }, 700);

            }

        }else{

          submit.value = '注册';
          submit.disabled = false;
          alert('注册失败')
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
          <input type="submit" ref="submit" className="btn btn-primary" value="注册" onClick={this.signup} />
        </div>
        </div>
    )
  }

}
