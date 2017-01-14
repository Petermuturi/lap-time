import React, { Component } from 'react'
import './trigger.css'

export default class Trigger extends Component{
  render(){
    return(
      <div className="trigger">
        <div>
          
        </div>
        <br/>
        <div className="stlp">
          <a className="start">start</a>
          <a className="lap">lap</a>
          <a className="reset">reset</a>
        </div>
        <br/>
        <hr/>

      </div>
    )
  }
}
