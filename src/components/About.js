import React, { Component } from 'react'


class About extends Component {

  handlePass = () => {
    this.props.handleClick()
  }


  render() {


    return (
      <div className="about grayscale" onClick={ this.handlePass }>
        <div  className="overlay" />
          <img  className="about-img" src='/images/richard-scheiwe_question.png' />



      </div>
    )
  }
}

export default About
