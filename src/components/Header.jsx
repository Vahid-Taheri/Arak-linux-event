import React from 'react';

const Header = (props) => (
    <header className="header">
        <img id="logo" src={require(`../images/logo.png`)} alt={props.data.Title}/>
        <h2 id="siteTitle">{props.data.Title}</h2>
        <a href={props.data.RegisterLink} id="registerBtn" className="btn btn-primary" target="_blank">ثبت نام زودهنگام</a>
    </header>
);
export default Header
