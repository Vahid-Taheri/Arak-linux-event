import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <section className="timeline container">
        <h2>{this.props.data.Title}</h2>
        <div className="items">
          {this.props.data.Items.map(item =>
              <div key={this.props.data.Items.indexOf(item)} className="item" data-time={item.Time}>{item.Title}</div>
            )}
        </div>
      </section>
    )
  }
}
