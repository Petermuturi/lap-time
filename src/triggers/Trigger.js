import React, { Component } from 'react'
import './trigger.css'

export default class Trigger extends Component{
  render(){
    return(
      <div className="trigger">
        <button className="reset">reset</button>
        <br/>
        <div>
          <button className="start">start</button>
          <button className="lap">lap</button>
        </div>
      </div>
    )
  }
}
