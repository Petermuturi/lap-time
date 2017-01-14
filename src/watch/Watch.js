import React, { Component } from 'react'

import './watch.css'

export default class Watch extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      minute: "00",
      second: "00",
      minSec: "0",
    }
  }

  render(){
    return(
      <div>
        <div className="timer">
          <span className="min">{this.state.minute}</span>
          :
          <span className="sec">{this.state.second}</span>
          :
          <span className="minsec">{this.state.minSec}</span>
        </div>
      <p className="lap-time">Lap time!</p>
      </div>
    )
  }
}
