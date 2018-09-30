import React from 'react'

const CustomMessageElement = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick}>

      <div className='article-page' >
        <span>
          <a href="http://jacoto.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item" src='/images/jacoto_logo.png' alt="richard-scheiwe_bio"/>
          </a>
          <a href="http://jacoto.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item" src='/images/jacoto-homepage.png' alt="richard-scheiwe_bio" />
          </a>
        </span>

        <span>
        {/*<h3 className="about-page-item" style={{fontFamily:'Sarpanch', letterSpacing:'4px'}}>
        </h3>*/}
        <p className="about-page-item2" style={{textAlign:'left', padding:'2em', letterSpacing:'3px'}}>
          <i><b>Technologies:</b></i> <br />React/Redux, Python, Javascript, Ruby, Pandas, Selenium, OAuth, PostgreSQL, Heroku<br /><hr />
          Jacoto is an online-course search engine, with a database of nearly 20K courses. I wrote an algorithm in Python to scrape multiple
          online-course offerers, then transferred that data through Pandas to a custom Ruby algorithm for database seeding.<br /> It features
          OAuth and functionality so that if a user is logged in, she can create a syllabus for herself.<br />
          All CSS is custom. Currently, a machine-learning algo is in the works for a recommendation engine.
        </p>
        <a href="https://www.github.com/rscheiwe/jacoto-frontend" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-5x" style={{color:'black'}}></i>
        </a>
        </span>
      </div>
      </div>
    )
  };

const CustomMessageElement2 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick2}>

      <div className='article-page' >
        <span>
          <a href="http://jarvify.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item" src='/images/jarvify_logox1.png' alt="richard-scheiwe_bio"/>
          </a>
          <a href="http://jarvify.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item" src='/images/jarvify-homepage.png' alt="richard-scheiwe_bio" />
          </a>
        </span>

        <span>
        <p className="about-page-item2" style={{textAlign:'left', padding:'2em', letterSpacing:'3px'}}>
          <i><b>Technologies:</b></i> <br />React, Javascript, Ruby, p5.js, OAuth<br /><hr />
          Jarvify is a voice-activated and voice-controlled music-library player, inspired by Amazon's Alexa.<br />
          It uses the Spotify API and OAuth to log a user in. A user may search artists and/or genres, add tracks
          to a playlist, stop the playing, and log out, all with voice commands.<br />
          All styling is custom, using Processing's p5.js and Processing3 libraries.
        </p>
        <a href="https://www.github.com/rscheiwe/JarvCore" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-5x" style={{color:'black'}}></i>
        </a>
        </span>
      </div>
      </div>
    )
  };
const CustomMessageElement3 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick3}>
        <img className="loader-jarvify-logo" src='/images/suddentrips_logo.png' alt="placeholder"/>
      </div>
    )
  };
const CustomMessageElement4 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick4}>

      <div className='article-page' >
        <span>
          <a href="http://glacial-depths-45879.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item" src='/images/mediaoceanlogo.png' alt="richard-scheiwe_bio"/>
          </a>
          <a href="http://glacial-depths-45879.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item" src='/images/mediaocean-homepage.png' alt="richard-scheiwe_bio" />
          </a>
        </span>

        <span>
        <p className="about-page-item2" style={{fontFamily:'Sarpanch', textAlign:'right', padding:'2em'}}>
        Currently, I’m exploring ways to synchronize Python-driven machine-learning with Ruby on Rails and Node.js backends. My passion for software engineering stems from taking the intensive Machine-learning and Neural Network course in Python at General Assembly in 2017. With over a decade in entrepreneurship and teaching, I have long been attracted to creating new experiences for people in which they draw value from learning something new or simply reorienting their views of the world.
        </p>
        <a href="https://www.github.com/rscheiwe/media_ocean" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-5x" style={{color:'black'}}></i>
        </a>
        </span>
      </div>
      </div>
    )
  };
const CustomMessageElement5 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick5}>
        <img className="loader-jarvify-logo" src='/images/brand_logo.png' alt="placeholder"/>
      </div>
    )
  };
const CustomMessageElement6 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick6}>
        <img className="loader-jarvify-logo" src='/images/Ethereum_logo.png' alt="placeholder"/>
      </div>
    )
  };
const CustomMessageElement7 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick7}>
        <img className="loader-jarvify-logo" src='/images/Data-Viz.png' alt="placeholder" style={{filter:'invert(100%)'}}/>
      </div>
    )
  };

const CustomMessageElement8 = (props) => {
  return (
    <div className='article-extend' onClick={props.handleClick8}>
      {Object.values(props.articles).length > 0 ?
        <div className='article-page'>
          <img className="medium-icon" width='200px' height='200px' src='/images/Medium-logo.png' alt="medium-logo"/>
        <span>
          <p className="medium-display">
            {props.translateDate(Object.values(props.articles)[0]['createdAt']).toString()}
          </p>
          <br />
          <h3 className="article-page-item">
            {Object.values(props.articles)[0]["title"]}
            <hr />
          </h3>
          <p className="medium-display">
            {props.translateDate(Object.values(props.articles)[1]['createdAt']).toString()}
            </p>
            <br />
          <h3 className="article-page-item">
            {Object.values(props.articles)[1]["title"]}
            <hr />
          </h3>
          <p className="medium-display">
            {props.translateDate(Object.values(props.articles)[2]['createdAt']).toString()}
            </p>
            <br />
          <h3 className="article-page-item">
            {Object.values(props.articles)[2]["title"]}
            <hr />
          </h3>
          <p className="medium-display">
            {props.translateDate(Object.values(props.articles)[3]['createdAt']).toString()}
            </p>
            <br />
          <h3 className="article-page-item">
            {Object.values(props.articles)[3]["title"]}
            <hr />
          </h3>
        </span>
        </div>
        :
        null
      }
    </div>
  );
}

export {
  CustomMessageElement,
  CustomMessageElement2,
  CustomMessageElement3,
  CustomMessageElement4,
  CustomMessageElement5,
  CustomMessageElement6,
  CustomMessageElement7,
  CustomMessageElement8
}
