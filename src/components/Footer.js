import React from 'react'



const Footer = () => {
  return (
    <div>
    <div className="footer flex-parent">
      <a href="https://www.twitter.com/rscheiwe" target="_blank" rel="noopener noreferrer">
        <i  className="fab fa-twitter fa-lg"> &nbsp; &nbsp;</i>
      </a>
      <a href="https://medium.com/@rscheiwe" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-medium-m fa-lg"> &nbsp; &nbsp;</i>
      </a>
      <a href="https://www.github.com/rscheiwe" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-lg"> &nbsp; &nbsp;</i>
      </a>
      <a href="https://www.linkedin.com/in/richardscheiwe" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in fa-lg"> &nbsp; &nbsp;</i>
      </a>
{/*      <a href="https://www.linkedin.com/in/richardscheiwe" className="about-phone">
        <i className="far fa-question-circle"></i>
      </a> */}
    </div>

    </div>
  )
}

export default Footer
