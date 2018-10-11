import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CSSModules from 'react-css-modules';
// import styles from './style.scss';


export class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (

      <footer className ="page-footer font-small white">


        <div className="footer-copyright text-center py-3 black">
         &copy;&nbsp;2016 ReactNews. All Rights Reserved.
        </div>

      </footer>
);

};

}

export default Footer;
