import React, { Component } from 'react'
export default class Cover extends Component {

    render(){
        return(
            <div className="jumbotron cover">
                <div className="block">
                    <h1>همایش لینوکس و<br/> برنامه نویسی</h1>
                    <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                    <br/>
                    <a href="#register" className="btn btn-primary-o">ثبت نام زودهنگام</a>
                </div>
            </div>
        )
    }
}