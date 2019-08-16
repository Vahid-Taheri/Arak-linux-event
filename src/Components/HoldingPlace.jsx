import React, { Component } from 'react'

export default class HoldingPlace extends Component {
  render() {
    return (
        <section className="Holders container">
            <h2>محل برگزاری{/*this.props.data.Title*/}</h2>
            <img className="cover-image" src="./images/map.png" alt="محل برگزاری همایش نرم افزار آزاد و " />
        </section>
    )
  }
}