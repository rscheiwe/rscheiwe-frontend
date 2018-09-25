import React from 'react'

const CustomMessageElement2 = (props) => {
  return (
    <div className='article-extend' onClick={props.handleClick2}>
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

export default CustomMessageElement2
