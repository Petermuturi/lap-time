import React, { Component } from 'react'

import './lap.css'

export default class Laps extends Component{
  render(){
    const { lap } = this.props
    return(
      <div>
        {
          lap.lap !== 0 ?
          <div className="no-lap">
            No lap has been set. Try starting the Timer.
            :-)
          </div>
          :
          <div className="lap-zone">
            h
          </div>
        }
      </div>
    )
  }
}
