import React, { Component } from 'react'

import './lap.css'

export default class Laps extends Component{
  render(){
    const { prop } = this.props
    return(
      <div>
        {
          prop.counter === 0 ?
          <div className="no-lap">
            No lap has been set. Try starting the Timer.
            :-)
          </div>
          :
          <div className="lap-zone">
            {
              prop.laps.map((lap, i)=>{
                return(
                  <div key={i}>
                    {lap}
                  </div>
                )
            })
          }
          </div>
        }
      </div>
    )
  }
}
