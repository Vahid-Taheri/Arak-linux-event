import React, { Component } from 'react';

export default class Header extends Component {
  /*constructor(props){
      super(props);
  }*/
  render() {
    return (
      <header className="header">
        <h2 id="siteTitle">{this.props.data.Title}</h2>
        <a href={this.props.data.RegisterLink} id="registerBtn" className="btn btn-primary">ثبت نام زودهنگام</a>
      </header>
    )
  }
}
