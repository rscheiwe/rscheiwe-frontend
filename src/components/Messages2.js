import React from 'react'

const CustomMessageElement = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick}>
        <img className="loader-jacoto-logo" src='/images/jacoto_logo.png' alt="placeholder"/>
      </div>
    )
  };

const CustomMessageElement2 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick2}>
        <img className="loader-jarvify-logo" src='/images/jarvify_logox1.png' alt="placeholder" width='200px' height='200px'/>
      </div>
    )
  };
const CustomMessageElement4 = (props) => {
    return (
      <div className='about-extend' onClick={props.handleClick4}>
        <img className="loader-jarvify-logo" src='/images/mediaoceanlogo.png' alt="placeholder"/>
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
  CustomMessageElement4,
  CustomMessageElement6,
  CustomMessageElement7,
  CustomMessageElement8
}
