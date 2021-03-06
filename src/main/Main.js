import React, { Component } from 'react'
import { Link } from 'react-router'

import Watch from '../watch/Watch'
import Laps from '../laps/Laps'
import './main.css'

export default class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      active: false,
      laps: [],
      counter: 0,
      minute: "00",
      second: "00",
      minSec: 0
    }
  }


  onActivate=()=>{
    if (!this.state.active){
      this.setState({active: true })
      console.log ("hi");

    }else{
      this.setState({active: false, minute: "00", second: "00", minSec: 0})
    }

  }
  onLap=()=>{
    if (this.state.active){
      var lap = this.state.counter + 1;
      this.setState({counter: lap})
      this.state.laps.push(lap);
    }
    else{
      this.setState({laps: [], counter: 0 })
    }
  }
  onReset=()=>{
    this.setState({active: false, laps: [], counter: 0, minute: "00", second: "00", minSec: 0})
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
            <Link
              onClick={this.onLap}
              className="lap">lap</Link>
            <Link
              onClick={this.onReset}
              className="reset">reset</Link>
          </div>
          <br/>
          <hr/>
          <Laps prop={this.state} />
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

    return{
      margin:"-8px -8px -10px -8px",
      background:"url(img/"+img+".jpg)",
      backgroundSize: "cover",
      height:"100vh",
      width:"100vw"
    }
  }
}
