import React, { Component } from 'react'


class Demos extends Component {

  render() {
    return(
      <div>
      <a href="/" className="main-icon-link">
        <img src='./richard-scheiwe_icon.png' style={{width:'100px'}} alt="main-icon"/>
      </a>
        <div className="demos-main">
          <span className="iframe-mirror">
            <iframe width="100%" height="100%" frameborder="0" title="vid1" allowFullScreen
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <hr />
            <h4 style={{ textAlign:'right', fontFamily:'Sarpanch', letterSpacing:'4px'}}>JACOTO</h4>
          </span>
          <span className="iframe-mirror">
            <iframe width="100%" height="100%" frameborder="0" title="vid2" allowFullScreen
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <hr />
            <h4 style={{ textAlign:'right', fontFamily:'Sarpanch', letterSpacing:'4px'}}>JARVIFY</h4>
          </span>
          <span className="iframe-mirror">
            <iframe width="100%" height="100%" frameborder="0" title="vid3" allowFullScreen
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <hr />
            <h4 style={{ textAlign:'right', fontFamily:'Sarpanch', letterSpacing:'4px'}}>MEDIA OCEAN</h4>
          </span>

      </div>
      </div>
    )
  }
}

export default Demos
