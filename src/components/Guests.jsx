import React from 'react';


const Guests = (props) => (
    <section className="Guests container">
        <h2 id="section-title">{props.data.Title}</h2>
        <div className="items clearfix">
            {props.data.Items.map(item =>
                <Guest key={props.data.Items.indexOf(item)}
                    Oreintion={props.data.Items.indexOf(item) % 2 === 0 ? "right" : "left"} {...item} />
            )}
        </div>
    </section>
);
export default Guests

export const Guest = (props) => (
    <div className={"item clearfix " + props.Oreintion}>
        <img className="col-md-2 col-12 item-image" alt={props.Name}
            src={require(`../images/Guests/${props.LatinName}.jpg`)} />
        <div className={"col-md-8 col-12 item-description text-align-" + props.Oreintion}>
            <h3 className="item-title">{props.Name}</h3>
            <p>{props.Description}</p>
            {props.Social ?
                <div className="item-social">
                    {props.Social.Instagram ? (
                        <a href={props.Social.Instagram} className="mdi mdi-instagram"> </a>) : null}
                    {props.Social.LinkedIn ? (
                        <a href={props.Social.LinkedIn} className="mdi mdi-linkedin"> </a>) : null}
                    {props.Social.Telegram ? (
                        <a href={props.Social.Telegram} className="mdi mdi-telegram"> </a>) : null}
                    {props.Social.Mastodon ? (
                        <a href={props.Social.Mastodon} className="mdi mdi-mastodon"> </a>) : null}
                    {props.Social.Twitter ? (
                        <a href={props.Social.Twitter} className="mdi mdi-twitter"> </a>) : null}
                    {props.Social.Website ? (
                        <a href={props.Social.Website} className="mdi mdi-web"> </a>) : null}
                    {props.Social.Github ? (
                        <a href={props.Social.Github} className="mdi mdi-github-circle"> </a>) : null}
                </div>
                : null}
        </div>
    </div>
);
