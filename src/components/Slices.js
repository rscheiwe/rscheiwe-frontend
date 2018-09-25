import React, { Component } from 'react'
import Loader from 'react-loader-advanced';

let Feed = require('rss-to-json')

class Slices extends Component {

  state = {
    isActive:false,
    isActive2:false
  }

  handleClick = () => {
    this.setState(prevState => ({
        isActive:!prevState.isActive
      })
    )
  }
  handleClick2 = () => {
    this.setState(prevState => ({
        isActive2:!prevState.isActive2
      })
    )
  }

  handleFetch = () => {
    Feed.load('https://medium.com/feed/@rscheiwe', function(err, rss){
        console.log(rss['items']);
    })
  }

  render () {
    const customMessageElement = (
      <div className='about-extend' onClick={this.handleClick}>
        <img className="" src='/images/richard-scheiwe_question.png' />
      </div>
    );
    const customMessageElement2 = (
      <div className='about-extend' onClick={this.handleClick2}>
        HI
      </div>
    );

    return (

      <Loader show={this.state.isActive}
              onClick={this.handleClick}
              message={customMessageElement}
              backgroundStyle={{height:'110%', backgroundColor: 'black', opacity:'0.6'}}
              contentBlur={5}
              >
      <Loader show={this.state.isActive2}
              onClick={this.handleClick2}
              message={customMessageElement2}
              backgroundStyle={{height:'110%', backgroundColor: 'black', opacity:'0.6'}}
              contentBlur={5}
              >
      <div className='parent flex-parent'>
        <div id="zoom" className='child1 flex-child' onClick={this.handleClick}><div className="inner">A</div></div>
        <div id="zoom" className='child2 flex-child' onClick={this.handleClick}><div className="inner">B</div></div>
        <div id="zoom" className='child3 flex-child' onClick={this.handleClick}><div className="inner">C</div></div>
        <div id="zoom" className='child4 flex-child' onClick={this.handleClick}><div className="inner">D</div></div>
        <div id="zoom" className='child5 flex-child' onClick={this.handleClick}><div className="inner">E</div></div>
        <div id="zoom" className='child6 flex-child' onClick={this.handleClick}><div className="inner">F</div></div>
        <div id="zoom" className='child7 flex-child' onClick={this.handleClick}><div className="inner">G</div></div>
        <div id="zoom" className='child8 flex-child' onClick={this.handleClick2}><div className="inner">H</div></div>
      </div>
      </Loader>
      </Loader>
    )
  }
}

export default Slices
