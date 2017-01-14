import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

export default class Main extends Component{
  render(){
    return(
      <Container style={this.style()}>
        <Watch/>
      </Container>
    )
  }
  style(){
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
      height:"100vh"
    }
  }
}
