import React from 'react'

const CustomMessageElement = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick}>
        <img className="" src='/images/richard-scheiwe_question.png' />
      </div>
    )
  };

export default CustomMessageElement
