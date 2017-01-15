import React, { Component } from 'react'

export default class Laps extends Component{
  render(){
    const { lap } = this.props
    return(
      <div>{lap.lap}</div>
    )
  }
}
