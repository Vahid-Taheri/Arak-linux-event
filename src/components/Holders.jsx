import React from 'react'
const Holders = (props) => (
    <section className="Holders container">
                <h2>{props.data.Title}</h2>
                <div className="items clearfix">
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
                         src={require(`../images/Guests/${props.LatinName}.png`)}/>
                    <div className="item-description text-align-right">
                        {props.Social ?
                            <div className="item-social">
                                {props.Social.Instagram &&
                                <a href={props.Social.Instagram} className="mdi mdi-instagram"> </a>}
                                {props.Social.LinkedIn &&
                                <a href={props.Social.LinkedIn} className="mdi mdi-linkedin"> </a>}
                                {props.Social.Telegram &&
                                <a href={props.Social.Telegram} className="mdi mdi-telegram"> </a>}
                            </div>
                            : null}

                        <p>{props.Description}</p>

                        <h3 className="item-title">{props.Name}</h3>
                    </div>
                </div>
            </div>
);
