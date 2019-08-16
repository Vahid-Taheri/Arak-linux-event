import React, { Component } from 'react'

export default class Guests  extends Component {
  render() {
    return (
        <section className="Guests container">
            <h2>{this.props.data.Title}</h2>
            <div className="items clearfix">
            {this.props.data.Items.map(item =>
            <Guest key={this.props.data.Items.indexOf(item)} Oreintion={this.props.data.Items.indexOf(item)%2===0?"right":"left"} {...item}/>
                )}
            </div>
        </section>

    )
  }
}

export class Guest extends Component {
    render(){
        return(
            <div className={"item clearfix "+ this.props.Oreintion}>
                <img className="col-5 col-xs-12 item-image" alt={this.props.Name} src={"/images/Guests/"+this.props.LatinName +".png"} />
                <div className="col-7 col-xs-12 item-description text-align-right">
                    <h3 className="item-title">{this.props.Name}</h3>
                    <p>{this.props.Description}</p>
                    {this.props.Social?
                        <div className="item-social">
                            {this.props.Social.Instagram?(<a href={this.props.Social.Instagram} className="mdi mdi-instagram"> </a>):null}
                            {this.props.Social.LinkedIn?(<a href={this.props.Social.LinkedIn} className="mdi mdi-linkedin"> </a>):null}
                            {this.props.Social.Telegram?(<a href={this.props.Social.Telegram} className="mdi mdi-telegram"> </a>):null}
                        </div>
                    :null}
                </div>
            </div>
        )
    }
}
