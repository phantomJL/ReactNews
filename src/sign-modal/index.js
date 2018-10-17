import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// config
import { original_api_domain } from '../../config';

// components
import SignIn from './sign-in';
import SignUp from './sign-up';
import Modal from '../bootstrap/modal';

// styles
import CSSModules from 'react-css-modules';
import styles from './style.scss';

@CSSModules(styles)
export default class SignModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      type: 'sign-in'
    }
    this.displayComponent = this.displayComponent.bind(this)
  }

  displayComponent() {
    this.setState({
      type: this.state.type == 'sign-up' ? 'sign-in' : 'sign-up'
    })
  }

  componentDidMount() {

    const self = this;

    $('#sign').on('show.bs.modal', function (e) {
      self.setState({
        type: e.relatedTarget['data-type'] || e.relatedTarget.getAttribute('data-type') || 'sign-in'
      });
    });

  }

  render () {
    const { type } = this.state

    const body = (<div styleName="layer">
            {type == 'sign-in' ?
            <div>
                <SignIn displayComponent={this.displayComponent} />
                <div>
                  没有账号？ <a href="javascript:void(0)" onClick={this.displayComponent}>注册</a>
                </div>
              </div>
              : null}
            {type == 'sign-up' ? <div>
                <SignUp displayComponent={this.displayComponent} />
                <div>
                  已经有账号了？ <a href="javascript:void(0)" onClick={this.displayComponent}>登录</a>
                </div>
              </div>
              : null}
          </div>);

    return (<div>
      <Modal
        id="sign"
        title={type == 'sign-in' ? '登录' : '注册'}
        body={body}
        />
    </div>)
  }
}
