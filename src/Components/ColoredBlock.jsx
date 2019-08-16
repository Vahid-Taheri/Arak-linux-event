import React, { Component } from 'react'

export default class ColoredBlock extends Component {

  render() {
    return (
      <div className="block green-block" style={{backgroundColor:this.props.color}}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      </div>
    )
  }
}
