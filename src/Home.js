import React, { Component } from 'react';
import Header from './components/Header.js'
import Slices from './components/Slices.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Copyright from './components/Copyright.js'

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
      <div className='about-extend' onClick={this.handleClick}>
      <div className='about-page' >
        <img className="about-page-item" src='/images/richard-scheiwe_bio.png' alt="richard-scheiwe_bio"/>
        <span>
        <h3 className="about-page-item" style={{fontFamily:'Sarpanch', letterSpacing:'4px'}}>
          RICHARD SCHEIWE
        </h3>
        <p className="about-page-item" style={{fontFamily:'Sarpanch', textAlign:'right', padding:'2em'}}>
        Currently, I’m exploring ways to synchronize Python-driven machine-learning with Ruby on Rails and Node.js backends. My passion for software engineering stems from taking the intensive Machine-learning and Neural Network course in Python at General Assembly in 2017. With over a decade in entrepreneurship and teaching, I have long been attracted to creating new experiences for people in which they draw value from learning something new or simply reorienting their views of the world. These professional experiences allow me to bring strong skills in critical thinking, team-building, and creative problem solving through coding.
        </p>
        </span>
      </div>
      </div>
    );

    return (

      <div >



      <Loader show={this.state.isActive}
              onClick={this.handleClick}
              message={customMessageElement}
              backgroundStyle={{height:'110%'}}
              contentBlur={5}
              >

        <Header />

        <div className="Container">

          <Slices />
          <Footer />
          <About handleClick={ this.handleClick } />
          <Copyright />

        </div>
        </Loader>

      </div>

    );
  }
}

export default Home;
