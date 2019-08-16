import React, { Component } from 'react'

export default class Holders extends Component {
    render() {
        return (
            <section className="Holders container">
                <h2>{this.props.data.Title}</h2>
                <div className="items clearfix">
                    {this.props.data.Items.map(item =>
                        <Holder key={this.props.data.Items.indexOf(item)} {...item} />
                    )}
                </div>
            </section>
        )
    }
}

export class Holder extends Component {
    render() {
        return (
            <div className={"item clearfix col-md-4 col-12 col-sm-6"}>
                <div className="item-container">
                    <img className="item-image" alt={this.props.Name} src={"/images/Guests/" + this.props.LatinName + ".png"} />
                    <div className="item-description text-align-right">
                        {this.props.Social ?
                            <div className="item-social">
                                {this.props.Social.Instagram && <a href={this.props.Social.Instagram} className="mdi mdi-instagram"> </a>}
                                {this.props.Social.LinkedIn && <a href={this.props.Social.LinkedIn} className="mdi mdi-linkedin"> </a>}
                                {this.props.Social.Telegram && <a href={this.props.Social.Telegram} className="mdi mdi-telegram"> </a>}
                            </div>
                            : null}
                            
                        <p>{this.props.Description}</p>

                        <h3 className="item-title">{this.props.Name}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
