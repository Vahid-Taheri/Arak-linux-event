import React from 'react'
const Holders = (props) => (
    <section className="Holders">
        <h2 id="section-title">{props.data.Title}</h2>
        <div className="items clearfix container">
            {props.data.Items.map(item =>
                <Holder key={props.data.Items.indexOf(item)} {...item} />
            )}
        </div>
    </section>
);
export default Holders

export const Holder = (props) => (
    <div className={"item clearfix col-md-4 col-12 col-sm-6 "}>
        <div className="item-container">
            <img className="item-image" alt={props.Name}
                src={require(`../images/Holders/${props.LatinName}.jpg`)} />
            <div className="item-description text-align-right">
                {props.Social ?
                    <div className="item-social">
                        {props.Social.Instagram ? (
                            <a href={props.Social.Instagram} className="mdi mdi-instagram"> </a>) : null}
                        {props.Social.LinkedIn ? (
                            <a href={props.Social.LinkedIn} className="mdi mdi-linkedin"> </a>) : null}
                        {props.Social.Telegram ? (
                            <a href={props.Social.Telegram} className="mdi mdi-telegram"> </a>) : null}
                        {props.Social.Twitter ? (
                            <a href={props.Social.Twitter} className="mdi mdi-twitter"> </a>) : null}
                        {props.Social.Website ? (
                            <a href={props.Social.Website} className="mdi mdi-web"> </a>) : null}
                    </div>
                    : null}

                <h3 className="item-title">{props.Name}</h3>
            </div>
        </div>
    </div>
);
