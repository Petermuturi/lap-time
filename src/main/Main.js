import React, { Component } from 'react'

import Watch from '../watch/Watch'
import './main.css'

export default class Main extends Component{
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
      <div style={this.background()}>
        <Watch states={this.state} />
        <div style={this.triangle()}/>
        <div className="trigger">
          <div className="stlp">
            <a className="start">start</a>
            <a className="lap">lap</a>
            <a className="reset">reset</a>
          </div>
          <br/>
          <hr/>
        </div>
      </div>
    )
  }

  background(){
    var imageUrl = (Math.random() * 4).toFixed();
    if(imageUrl === 0){
      imageUrl = parseInt(imageUrl, 10) + 1
    }
    if(imageUrl >= 5){
      imageUrl = parseInt(imageUrl, 10) - 1
    }
    const img = imageUrl.toString();
    console.log(img);
    return{
      margin:"-8px -8px -10px -8px",
      background:"url(img/"+img+".jpg)",
      backgroundSize: "cover",
      height:"100vh",
      width:"100vw"
    }
  }
  triangle(){
    return{
      marginTop:"-18px",
      borderBottom: "100vh solid white",
      borderLeft: "100vw solid transparent"
    }
  }
}
