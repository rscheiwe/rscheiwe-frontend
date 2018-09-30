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
          <i><b>Technologies:</b></i> <br />React/Redux, Python, Javascript, Ruby, Rails API, Pandas, Selenium, OAuth, PostgreSQL, Heroku<br /><hr />
          Jacoto is an online-course search engine, with a database of nearly 20K courses. I wrote an algorithm in Python to scrape multiple
          online-course offerers, then transferred that data through Pandas to a custom Ruby algorithm for database seeding.<br /> It features
          OAuth and functionality so that if a user is logged in, she can create a syllabus for herself.<br />
          All CSS is custom. Currently, a machine-learning algo is in the works for a recommendation engine.
        </p>
        <a href="https://www.github.com/rscheiwe/jacoto-frontend" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x" style={{color:'black'}}></i>
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
          <i><b>Technologies:</b></i> <br />React, Javascript, Ruby, Rails API, Speech Recognition API, p5.js, OAuth<br /><hr />
          Jarvify is a voice-activated and voice-controlled music-library player, inspired by Amazon's Alexa.<br />
          It uses the Spotify API and OAuth to log a user in. A user may search artists and/or genres, add tracks
          to a playlist, stop the playing, and log out, all with voice commands.<br />
          All styling is custom, using Processing's p5.js and Processing3 libraries.
        </p>
        <a href="https://www.github.com/rscheiwe/JarvCore" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x" style={{color:'black'}}></i>
        </a>
        </span>
      </div>
      </div>
    )
  };
const CustomMessageElement3 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick3}>
      <div className='article-page' >
        <span>
          <a href="https://github.com/rscheiwe/sudden_trips" target="_blank" rel="noopener noreferrer">
            <img className="loader-jarvify-logo" src='/images/suddentrips_logo.png' alt="placeholder"/>
          </a>
          <a href="https://github.com/rscheiwe/sudden_trips" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item" src='/images/suddentrip_homepage.png' alt="richard-scheiwe_bio" />
          </a>
        </span>

        <span>
        <p className="about-page-item2" style={{textAlign:'left', padding:'2em', letterSpacing:'3px'}}>
          <i><b>Technologies:</b></i> <br />React, Javascript, Ruby, Rails API, ThreeJS, GoogleMaps API, OAuth<br /><hr />
          SuddenTrip is a single-page app that allows friends to collaborate on trip planning.<br />
          It uses the GoogleMaps API, where users may search for destinations in the vicinity of where they'll be travelling. and add those destinations to their planned trip(s).<br />
        </p>
        <a href="https://www.github.com/rscheiwe/sudden_trips" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x" style={{color:'black'}}></i>
        </a>
        </span>
      </div>

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
        <p className="about-page-item2" style={{textAlign:'left', padding:'2em', letterSpacing:'3px'}}>
          <i><b>Technologies:</b></i> <br />Ruby, Rails API, TMDB API, RESTClient, BCrypt, Heroku, PostgreSQL<br /><hr />
          Media Ocean is a social media network for movie lovers, where Twitter meets IMDB.<br />
          Users may log in, follow their favorite critics/friends, rate movies, and search a database of nearly 300K films.
          All commenting and rating is done in real-time with the help of a custom Rails API.<br />
        </p>
        <a href="https://www.github.com/rscheiwe/media_ocean" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x" style={{color:'black'}}></i>
        </a>
        </span>
      </div>
      </div>
    )
  };
const CustomMessageElement5 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick5}>
      <div className='article-page' >
        <span>

          <a href="https://www.npmjs.com/package/timsort-node" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item" style={{width:'80%'}} src='https://camo.githubusercontent.com/2fa40730122daa3472746b9d2d688f3be2c9f8b8/68747470733a2f2f6e6f6465692e636f2f6e706d2f74696d736f72742d6e6f64652e706e673f646f776e6c6f6164733d7472756526646f776e6c6f616452616e6b3d747275652673746172733d74727565' alt="richard-scheiwe_bio" />
          </a>
        </span>

        <span>
        <p className="about-page-item2" style={{textAlign:'left', padding:'2em', letterSpacing:'3px'}}>
          <i><b>npm timsort-node</b></i> <br /><br /><hr />
          I built a Node module based on Python's default sorting algorithm, Timsort.<br />
          Currently at v1.0.2, it is free to install and import/require in any Node.js project, and is an open-source project
          available for contributions and pull requests. It is part of the npm registery,&nbsp;
          <a href="https://www.npmjs.com/package/timsort-node" target="_blank">
          here</a>
          , or visit the GitHub link below.
          <br />
        </p>
        <a href="https://www.github.com/rscheiwe/npm-timsort" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x" style={{color:'black'}}></i>
        </a>
        </span>
      </div>

      </div>
    )
  };
const CustomMessageElement6 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick6}>
      <div className='article-page' >
        <span>
          <a href="https://ethereum.org/" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item2" src='/images/Ethereum_logo.png' alt="placeholder"/>
          </a>
          <a href="https://www.github.com/rscheiwe/ethereum-test" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item2" src='https://solidity.readthedocs.io/en/v0.4.24/_images/logo.svg' alt="richard-scheiwe_bio" />
          </a>
        </span>

        <span>
        <p className="about-page-item2" style={{textAlign:'left', padding:'2em', letterSpacing:'3px'}}>
          <i><b>Technologies:</b></i> <br />Solidity, Ganache, Truffle, Javascript, Web3<br /><hr />
          A testing framework for Ethereum-network smart contracts.<br />
          This project is in development. It currently allows a user to deploy on her local machine, install dependencies, and
          connect to an Ethereum TestNet, Rinkeby. The user then may use Mocha-based tests to test her smart-contract deployment,
          as an alternative to Remix.
          <br />
        </p>
        <a href="https://www.github.com/rscheiwe/ethereum-solidity-test" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x" style={{color:'black'}}></i>
        </a>
        </span>
      </div>

      </div>
    )
  };
const CustomMessageElement7 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick7}>
      <div className='article-page' >
        <span>
          <a href="http://glacial-depths-45879.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item" src='/images/data-science.png' alt="richard-scheiwe_bio"/>
          </a>
          <a href="http://glacial-depths-45879.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img className="info-page-item" src='/images/richard_scheiwe_heatmap.png' alt="richard-scheiwe_bio" />
          </a>
        </span>

        <span>
        <p className="about-page-item2" style={{textAlign:'left', padding:'2em', letterSpacing:'3px'}}>
          <i><b>Technologies:</b></i> <br />Python, ScikitLearn, Pandas, NumPy, MatPlotLib, Seaborn<br /><hr />
          Python was my first language; data science was my first coding experience.<br />
          I'm constantly building out my data science portfolio, focusing primarily on machine-learning, blockchain, and politics.
          Finished projects may be found at the link, below.<br />
        </p>
        <a href="https://www.github.com/rscheiwe" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x" style={{color:'black'}}></i>
        </a>
        </span>
      </div>
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
