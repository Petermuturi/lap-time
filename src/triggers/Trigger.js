import React, { Component } from 'react'
import './trigger.css'

export default class Trigger extends Component{
  render(){
    return(
      <div className="trigger">
        <div>
          <button className="reset">reset</button>
        </div>
        <br/>
        <div className="stlp">
          <button className="start">start</button>
          <button className="lap">lap</button>
        </div>
        <br/>
        <hr/>

      </div>
    )
  }
}
