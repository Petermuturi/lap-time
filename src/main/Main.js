import React, { Component } from 'react'
import { Link } from 'react-router'

import Watch from '../watch/Watch'
import './main.css'

export default class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      active: false,
      count: 0,
      minute: "00",
      second: "00",
      minSec: "0"
    }
  }

  onActivate=()=>{
    if (!this.state.active){
      this.setState({active: true})
    }else{
      this.setState({active: false})
    }

  }

  render(){
    const start = this.state.active ? "stop" : "start"
    return(
      <div style={this.background()}>

        <Watch states={this.state} />

        <div id="triangle"/>

        <div className="trigger">
          <div className="stlp">
            <Link
              onClick={this.onActivate}
              className="start">{start}</Link>
            <Link className="lap">lap</Link>
            <Link className="reset">reset</Link>
          </div>
          <br/>
          <hr/>
        </div>

      </div>
    )
  }

  background(){
    var imageUrl = (Math.random() * 4).toFixed();
    if(imageUrl === "0"){
      imageUrl = parseInt(imageUrl, 10) + 1
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
}
