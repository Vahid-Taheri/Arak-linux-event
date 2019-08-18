import React, { Component } from 'react'

export default class ColoredBlock extends Component {

  render() {
    return (
      <div className="block green-block" style={{backgroundColor:this.props.data.color}}>
        {this.props.data.Text}
      </div>
    )
  }
}
