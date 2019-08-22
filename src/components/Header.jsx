import React, {Component} from 'react';

const Header = (props) => (
    <header className="header">
        <h2 id="siteTitle">{props.data.Title}</h2>
        <a href={this.props.data.RegisterLink} id="registerBtn" className="btn btn-primary">ثبت نام زودهنگام</a>
    </header>
);
export default Header
