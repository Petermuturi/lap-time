import React, { Component } from 'react'

import './lap.css'

export default class Laps extends Component{
  render(){
    const { lap } = this.props
    return(
      <div>
        {
          lap.lap === 0 ?
          <div className="no-lap">
            No laps have been set. Try starting the Timer.
            :-)
          </div>
          :
          <div>
            low
          </div>
        }
      </div>
    )
  }
}
