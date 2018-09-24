import React, { Component } from 'react'
import Loader from 'react-loader-advanced';


class Slices extends Component {

  state = {
    isActive:false
  }

  handleClick = () => {
    this.setState(prevState => ({
        isActive:!prevState.isActive
      })
    )
  }

  render () {
    const customMessageElement = (
      <div className='about-page' onClick={this.handleClick}>
        <img className="" style={{paddingTop:'10%'}} src='/images/richard-scheiwe_question.png' />
      </div>
    );

    return (

      <Loader show={this.state.isActive}
              onClick={this.handleClick}
              message={customMessageElement}
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
        <div id="zoom" className='child8 flex-child' onClick={this.handleClick}><div className="inner">H</div></div>
      </div>
      </Loader>
    )
  }
}

export default Slices
