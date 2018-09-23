import React, { Component } from 'react'
import { Embed } from 'semantic-ui-react'

class Demos extends Component {

  render() {
    return(
      <div>
        <a href="/" >
          <img className="main-icon" src='./richard-scheiwe_icon.png' style={{width:'10%', position:'relative !important'}}/>
        </a>
        <div className="demos-main">
          <span className="iframe-mirror">
            <iframe width="100%" height="100%" frameborder="0" allowFullScreen
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <hr />
            <h4 style={{ textAlign:'right', fontFamily:'Sarpanch', letterSpacing:'4px'}}>JACOTO</h4>
          </span>
          <span className="iframe-mirror">
            <iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <hr />
            <h4 style={{ textAlign:'right', fontFamily:'Sarpanch', letterSpacing:'4px'}}>JARVIFY</h4>
          </span>
          <span className="iframe-mirror">
            <iframe width="100%" height="100%"
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
