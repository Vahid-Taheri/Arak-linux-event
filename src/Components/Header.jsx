import React, { Component } from 'react';

export default class Header extends Component {
  /*constructor(props){
      super(props);
  }*/
  render() {
    return (
      <header className="header">
        <h2 id="siteTitle">همایش لینوکس</h2>
        <a href="#register" id="registerBtn" className="btn btn-primary">ثبت نام زودهنگام</a>
      </header>
    )
  }
}
