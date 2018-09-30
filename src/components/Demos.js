import React, { Component } from 'react'


class Demos extends Component {

  render() {
    return(
      <div>
      <a href="http://richardscheiwe.com" className="main-icon-link">
        <img src='./richard-scheiwe_icon.png' style={{width:'100px'}} alt="main-icon"/>
      </a>
        <div className="demos-main">
          <span className="iframe-mirror">
            <iframe width="100%" height="100%" frameborder="0" title="vid1" allowFullScreen
              src="https://www.youtube.com/embed/RjP8utTWdq4">
            </iframe>
            <hr />

            <h4 style={{ textAlign:'right', fontFamily:'Sarpanch', letterSpacing:'4px'}}>
              JACOTO&nbsp;
            <a href="https://youtu.be/RjP8utTWdq4" target="_blank" style={{ textAlign:'right', fontFamily:'Sarpanch', letterSpacing:'0px', fontSize:'12px'}}>
              Vid Link
            </a>
            </h4>

          </span>
          <span className="iframe-mirror">
            <iframe width="100%" height="100%" frameborder="0" title="vid2" allowFullScreen
              src="https://www.youtube.com/embed/c1FYPUbY17g">
            </iframe>
            <hr />
            <h4 style={{ textAlign:'right', fontFamily:'Sarpanch', letterSpacing:'4px'}}>
              JARVIFY&nbsp;
            <a href="https://youtu.be/c1FYPUbY17g" target="_blank" style={{ textAlign:'right', fontFamily:'Sarpanch', letterSpacing:'0px', fontSize:'12px'}}>
              Vid Link
            </a>
            </h4>
          </span>

          <span className="iframe-mirror">
            <iframe width="100%" height="100%" frameborder="0" title="vid3" allowFullScreen
              src="https://www.youtube.com/embed/nBtNeS0BmoI">
            </iframe>
            <hr />
            <h4 style={{ textAlign:'right', fontFamily:'Sarpanch', letterSpacing:'4px'}}>
              MEDIA OCEAN&nbsp;
            <a href="https://youtu.be/nBtNeS0BmoI" target="_blank" style={{ textAlign:'right', fontFamily:'Sarpanch', letterSpacing:'0px', fontSize:'12px'}}>
              Vid Link
            </a>
            </h4>
          </span>

      </div>
      </div>
    )
  }
}

export default Demos
