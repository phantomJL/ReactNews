import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// redux
import { signOut } from '../../actions/user';
import { getUserInfo } from '../../reducers/user';

import CSSModules from 'react-css-modules';
import styles from './style.scss';
import SignModal from '../../sign-modal'


@connect(
  (state, props) => ({
    userinfo: getUserInfo(state)
  }),
  dispatch => ({
    signOut: bindActionCreators(signOut, dispatch)
  })
)
@CSSModules(styles)
export default class Head extends React.Component {

  static propTypes = {
    userinfo: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {isMember: false}
    this.signOut = this.signOut.bind(this);
  }



  async signOut() {
    let [err, success] = await this.props.signOut();
    if (success) {
      // 退出成功跳转到首页
      window.location.href = '/';
    } else {
      alert('退出失败');
    }
  }

  render() {
  const { userinfo, ismember } = this.props
  const userShow = this.state.isMember
  ?
    <ul styleName="user-bar">
      <li>
          <Link styleName="link" to={`/people/${userinfo._id}`}>{userinfo.username}</Link>
      </li>
      <li>
          <a styleName="link" href="javascript:void(0)" onClick={this.signOut}>退出</a>
      </li>
    </ul>
    :
    <ul styleName="user-bar">
      <li><a data-toggle="modal" data-target="#sign" styleName="link" data-type="sign-up">注册</a></li>
      <li><a href="javascript:void(0)" data-toggle="modal" data-target="#sign" styleName="link" data-type="sign-in">登录</a></li>
    </ul>



    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-md navbar-expand-lg navbar-light bg-light bd-navbar" styleName="test">

        <NavLink className="navbar-brand" exact to="/">
          <img src="https://s3-us-west-1.amazonaws.com/lengbase/ReactNews/logo.png" alt="logo" styleName="logo"/>
          ReactNews
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">头条</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/shehui">社会</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/guonei">国内</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/guoji">国际</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/yule">娱乐</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/tiyu">体育</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/keji">科技</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/shishang">时尚</NavLink>
          </li>
        </ul>
        </div>
        {/* user */}
        {userShow}
        </nav>

          <SignModal path={this.props.location.pathname}/>

        </header>
      );

  };

}
