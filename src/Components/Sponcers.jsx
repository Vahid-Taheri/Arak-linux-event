import React, { Component } from 'react'

export default class Sponcers extends Component {
  render() {
    return (
        <section className="Sponcers container">
            <h2>{this.props.data.Title}</h2>
            <div className="items clearfix">
                {this.props.data.Items.map(item =>
                <Sponcer key={this.props.data.Items.indexOf(item)} {...item} />
                )}
            </div>
        </section>
    )
  }
}
export class Sponcer extends Component {
    render() {
        return (
            <div className="item clearfix col-md-2 col-sm-3 col-4">
                <img src={"/images/Sponcers/"+this.props.LatinName +".png"} alt={this.props.Name} data-toggle="tooltip" data-placement="top" title={this.props.Name}/>
            </div>
        )
    }
  }