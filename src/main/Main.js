import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Watch from '../watch/Watch'

export default class Main extends Component{
  render(){
    return(
      <Container style={this.background()}>
        <Watch/>
        <div style={this.triangle()}>

        </div>
      </Container>
    )
  }
  background(){
    var imageUrl = (Math.random() * 5).toFixed();
    if(imageUrl === "0"){
      imageUrl = parseInt(imageUrl, 10) + 1
    }
    const img = imageUrl.toString();
    console.log("url(img/"+img+".jpg)");
    return{
      margin:"-8px -8px -10px -8px",
      background:"url(img/"+img+".jpg)",
      backgroundSize: "cover",
      filter: "grayscale(60%)",
      height:"100vh",
      width:"100vw"
    }
  }
  triangle(){
    return{
      paddingLeft:"46%",
      marginTop:"-20px",
      width:"0",
      height:"0",
      borderBottom: "100vh solid white",
      borderLeft: "100vh solid transparent"
    }
  }
}
