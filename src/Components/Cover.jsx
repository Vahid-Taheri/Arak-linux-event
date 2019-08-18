import React, { Component } from 'react'
export default class Cover extends Component {

    render(){
        return(
            <div className="jumbotron cover">
                <div className="block">
                    <h1>همایش لینوکس و<br/> برنامه نویسی</h1>
                    <span>{this.props.data.Desc}</span>
                    <br/>
                    <a href={this.props.data.RegisterLink} className="btn btn-primary-o">ثبت نام زودهنگام</a>
                </div>
            </div>
        )
    }
}