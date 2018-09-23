import React, { Component } from 'react';
import Headerx from './components/Header.js'
import Slices from './components/Slices.js'
import Footer from './components/Footer.js'
import About from './components/About.js'

import Loader from 'react-loader-advanced';

import './App.css';



class Home extends Component {

  state = {
    isActive:false
  }

  handleClick = () => {
    this.setState(prevState => ({
        isActive:!prevState.isActive
      })
    )
  }

  render() {
    const customMessageElement = (
      <div className='about-page' onClick={this.handleClick}></div>
    );

    return (

      <div >

      <Loader show={this.state.isActive} onClick={this.handleClick} message={customMessageElement} >

        <Headerx />

        <div className="Container">

          <Slices />
          <Footer />
          <About handleClick={ this.handleClick } />

        </div>
        </Loader>

      </div>

    );
  }
}

export default Home;
