import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'

import CSSModules from 'react-css-modules'
import styles from './style.scss'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {signIn} from '../../actions/user'


export class SignIn extends Component {

  constructor(props) {

    super(props)
    this.state = {}
    this.signin = this.signin.bind(this)
  }

  componentDidMount() {

  }

  async signin(event) {

    event.preventDefault();

    const { signIn } = this.props;
    const account = this.refs.account;
    const password = this.refs.password;
    const submit = this.refs.submit;

    if (!account.value) return account.focus();
    if (!password.value) return password.focus();

    let data = {
      account:account.value,
      password: password.value
    }

    submit.value = '登录中...';
    submit.disabled = true;
    let response = await signIn({ data });

    submit.value = '登录';
    submit.disabled = false;

    if (response == true) {
       window.location.href = `${this.props.path}`;

    }else{
    alter('登陆失败')
    }
    return false;
  }


  render () {

    return (
      <form onSubmit={this.signin} className="signin">

        <div><input type="account" className="form-control"  ref="account" placeholder="用户名" onFocus={(e)=>{ e.target.value = ''; }} /></div>
        <div><input type="password" className="form-control"  ref="password" placeholder="密码" onFocus={(e)=>{ e.target.value = ''; }} /></div>

        <div><input type="submit" ref="submit" className="btn btn-primary" value="登录" /></div>

      </form>)
  }
}

SignIn = CSSModules(SignIn, styles);

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: bindActionCreators(signIn, dispatch)
  }
}

SignIn = connect(mapStateToProps,mapDispatchToProps)(SignIn);

export default SignIn;
