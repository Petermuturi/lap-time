import React, { Component } from 'react'

import './watch.css'

export default class Watch extends Component{
  render(){
    const { states } = this.props
    return(
      <div>
        <div className="timer">
          <span className="min">{states.minute}</span>
          :
          <span className="sec">{states.second}</span>
          :
          <span className="minsec">{states.minSec}</span>
        </div>
      <p className="lap-time">Lap time!</p>
      </div>
    )
  }
}
