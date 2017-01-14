import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import Watch from '../watch/Watch'
import Trigger from '../triggers/Trigger'

export default class Main extends Component{
  render(){
    return(
      <Container style={this.background()}>
        <Watch/>
        <div style={this.triangle()}>
        </div>
        <Trigger/>
      </Container>
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
  triangle(){
    return{
      marginTop:"-18px",
      borderBottom: "100vh solid white",
      borderLeft: "100vw solid transparent"
    }
  }
}
