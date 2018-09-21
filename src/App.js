import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleClick = () => {
    console.log("HELLO")
  }

  render() {
    return (
      <div id="Stage">
        <div id="Container" style={{width:'100%', height:'100%'}}>

<h3 style={{textAlign:'center'}}>Richard Scheiwe</h3>

          <div className='parent flex-parent'>
            <div id="zoom" className='child flex-child' style={{backgroundColor:'rgb(231,231,231)'}} onClick={this.handleClick}>A</div>
            <div id="zoom" className='child flex-child' style={{backgroundColor:'rgb(210,210,210)'}}>A</div>
            <div id="zoom" className='child flex-child' style={{backgroundColor:'rgb(193,193,193)'}}>A</div>
            <div id="zoom" className='child flex-child' style={{backgroundColor:'rgb(170,170,170)'}}>A</div>
            <div id="zoom" className='child flex-child' style={{backgroundColor:'rgb(150,150,150)'}}>A</div>
            <div id="zoom" className='child flex-child' style={{backgroundColor:'rgb(136,136,136)'}}>A</div>
            <div id="zoom" className='child flex-child' style={{backgroundColor:'rgb(114,114,114)'}}>A</div>
            <div id="zoom" className='child flex-child' style={{backgroundColor:'rgb(95,95,95)'}}>A</div>
          </div>
          </div>
          </div>


    );
  }
}

export default App;
