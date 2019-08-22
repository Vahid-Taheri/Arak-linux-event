import React from 'react'


const Cover = (props) => (
    <div className="jumbotron cover">
        <div className="block">
            <h1>همایش لینوکس و<br/> برنامه نویسی</h1>
            <span>{props.data.Desc}</span>
            <br/>
            <a href={props.data.RegisterLink} className="btn btn-primary-o">ثبت نام زودهنگام</a>
        </div>
    </div>
);
export default Cover
