import React, { Component } from 'react'
import { Embed } from 'semantic-ui-react'

class Demos extends Component {

  render() {
    return(
      <div className="demos-main">
        <span className="iframe-mirror">
          <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </span>
        <span className="iframe-mirror">
          <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </span>
        <span className="iframe-mirror">
          <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </span>

      </div>
    )
  }
}

export default Demos
