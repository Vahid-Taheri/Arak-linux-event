import React from 'react'

import ColoredBlock from "./ColoredBlock";

const Cover = (props) => (
    <div className="cover">
        <div className="block">
            <h1>همایش لینوکس و<br/> برنامه نویسی</h1>
            <span>{props.data.Desc}</span>
            <br/>
            {props.data.Social ?
                <div className="social">
                    {props.data.Social.Instagram ? (
                        <a href={props.data.Social.Instagram} className="mdi mdi-instagram"> </a>) : null}
                    {props.data.Social.LinkedIn ? (
                        <a href={props.data.Social.LinkedIn} className="mdi mdi-linkedin"> </a>) : null}
                    {props.data.Social.Telegram ? (
                        <a href={props.data.Social.Telegram} className="mdi mdi-telegram"> </a>) : null}
                    {props.data.Social.Mastodon ? (
                        <a href={props.data.Social.Mastodon} className="mdi mdi-mastodon"> </a>) : null}
                    {props.data.Social.Twitter ? (
                        <a href={props.data.Social.Twitter} className="mdi mdi-twitter"> </a>) : null}
                    {props.data.Social.Website ? (
                        <a href={props.data.Social.Website} className="mdi mdi-web"> </a>) : null}
                    {props.data.Social.Github ? (
                        <a href={props.data.Social.Github} className="mdi mdi-github-circle"> </a>) : null}
                </div>
                : null}
            <a href={props.data.RegisterLink} className="btn btn-primary-o">ثبت نام زودهنگام</a>
        </div>
        <ColoredBlock Class="stack-bottom col-12" data={props.data.alert} />
    </div>
);
export default Cover
