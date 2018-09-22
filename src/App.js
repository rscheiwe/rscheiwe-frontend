import React, { Component } from 'react';
import Headerx from './components/Header.js'
import Footer from './components/Footer.js'
import About from './components/About.js'



import './App.css';

class App extends Component {

  handleClick = () => {
    console.log("CLICKED")
  }



  render() {

    return (
      <div >
        <Headerx />

        <div className="Container">


          <div className='parent flex-parent'>
            <div id="zoom" className='child1 flex-child' onClick={this.handleClick}><div className="inner">A</div></div>
            <div id="zoom" className='child2 flex-child'><div className="inner">B</div></div>
            <div id="zoom" className='child3 flex-child'><div className="inner">C</div></div>
            <div id="zoom" className='child4 flex-child'><div className="inner">D</div></div>
            <div id="zoom" className='child5 flex-child'><div className="inner">E</div></div>
            <div id="zoom" className='child6 flex-child'><div className="inner">F</div></div>
            <div id="zoom" className='child7 flex-child'><div className="inner">G</div></div>
            <div id="zoom" className='child8 flex-child'><div className="inner">H</div></div>
          </div>
        <Footer />
        <About />
      </div>
    </div>


    );
  }
}

export default App;
