import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleClick = () => {
    console.log("HELLO")
  }

  render() {
    return (
      <div id="Stage">
        <div className="Container">

<h3 style={{textAlign:'center'}}>Richard Scheiwe</h3>

          <div className='parent flex-parent'>
            <div id="zoom" className='child1 flex-child' onClick={this.handleClick}>A</div>
            <div id="zoom" className='child2 flex-child'>B</div>
            <div id="zoom" className='child3 flex-child'>C</div>
            <div id="zoom" className='child4 flex-child'>D</div>
            <div id="zoom" className='child5 flex-child'>E</div>
            <div id="zoom" className='child6 flex-child'>F</div>
            <div id="zoom" className='child7 flex-child'>G</div>
            <div id="zoom" className='child8 flex-child'>H</div>
          </div>
          </div>
          </div>


    );
  }
}

export default App;
