import React, { Component } from 'react';
import Footer from './components/Footer.js'
import './App.css';

class App extends Component {


  render() {
    return (


        <div id="Stage" style="width: 100%; height: 100%;">
          <div id="About" style="width: 100%; height: 100%; z-index: 100000; transition: opacity 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms; opacity: 0; display: none;">
            <div class="bg" style="width: 100%; height: 100%; z-index: 1;">
              <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
              </div>
            </div>
            <div class="LiquidFluid" style="width: 100%; height: 100%; pointer-events: none; opacity: 0.9; transition: opacity 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms;">
              <canvas width="252" height="85" style="width: 100%; height: 100%;">
              </canvas>
            </div>
            <div class="AboutView" style="width: 100%; height: 100%; z-index: 10; pointer-events: none;">
              <div class="wrapper" style="width: 450px; height: 410px; background-size: 450px 410px; left: 50%; top: 50%; margin-left: -225px; margin-top: -205px; pointer-events: auto; transform: scale(0.656923);">
                <div class="text" style="font-family: Mont; font-size: 10px; color: rgb(255, 255, 255); width: 100%; height: 100%; top: 0px; letter-spacing: 6px; text-align: center; text-transform: uppercase; pointer-events: none; transform: translate3d(0px, -5px, 0px); opacity: 0; transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0ms, -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0ms;">MUSIC BY
                </div>
                <div class="emmit" style="width: 450px; height: 36px; background-size: 450px 36px; background-image: url(&quot;assets/images/about/emmit.png&quot;); left: 50%; margin-left: -225px; top: 25px; opacity: 0; transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 50ms, -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 50ms; transform: translate3d(0px, -5px, 0px);">
                  <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
                  </div>
                </div>
                <div class="text" style="font-family: Mont; font-size: 10px; color: rgb(255, 255, 255); width: 100%; height: 100%; letter-spacing: 6px; text-align: center; top: 110px; text-transform: uppercase; pointer-events: none; transform: translate3d(0px, -5px, 0px); opacity: 0; transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 100ms, -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 100ms;">VISUALS BY
                </div>
                <div class="emmit" style="width: 450px; height: 36px; background-size: 450px 36px; background-image: url(&quot;assets/images/about/activetheory.png&quot;); left: 50%; margin-left: -225px; top: 132px; opacity: 0; transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 150ms, -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 150ms; transform: translate3d(0px, -5px, 0px);">
                  <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
                  </div>
                </div>
                <div class="text" style="font-family: Mont; font-size: 10px; color: rgb(255, 255, 255); width: 100%; height: 100%; letter-spacing: 6px; text-align: center; top: 220px; text-transform: uppercase; pointer-events: none; transform: translate3d(0px, -5px, 0px); opacity: 0; transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 200ms, -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 200ms;">IN PARTNERSHIP WITH
                </div>
                <div class="emmit" style="width: 450px; height: 43.2px; background-size: 450px 43.2px; background-image: url(&quot;assets/images/about/th3rdbrain.png&quot;); left: 50%; margin-left: -225px; top: 242px; opacity: 0; transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 250ms, -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 250ms; transform: translate3d(0px, -5px, 0px);">
                  <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
                  </div>
                </div>
                <div class="text" style="font-family: Mont; font-size: 10px; color: rgb(255, 255, 255); width: 100%; height: 100%; letter-spacing: 6px; text-align: center; top: 335px; text-transform: uppercase; pointer-events: none; transform: translate3d(0px, -5px, 0px); opacity: 0; transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 300ms, -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 300ms;">STAY UPDATED
                </div>
                  <input class="input" style="font-family: MontBold; font-size: 14px; color: rgb(17, 17, 17); width: 450px; height: 50px; background-size: 450px 50px; left: 50%; margin-left: -225px; letter-spacing: 1px; opacity: 0; text-align: center; text-transform: uppercase; top: 360px; background-color: rgb(238, 238, 238); pointer-events: auto; transform: translate3d(0px, -5px, 0px); transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 350ms, -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 350ms;">
                  <div class="text" style="font-family: Mont; font-size: 11px; color: rgb(136, 136, 136); width: 100%; height: 100%; letter-spacing: 4px; text-align: center; top: 375px; text-transform: uppercase; pointer-events: none; transform: translate3d(0px, -5px, 0px); opacity: 0; transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 400ms, -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 400ms;">ENTER EMAIL OR PHONE NUMBER
                  </div>
                  <div class="AboutSubmit" style="width: 120px; height: 40px; background-size: 120px 40px; bottom: -50px; overflow: hidden; left: 50%; margin-left: -60px; z-index: 1000; visibility: hidden; transform: translate3d(0px, -5px, 0px); opacity: 0; transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 450ms, -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 450ms;">
                    <div class="border" style="width: 118px; height: 38px; background-size: 118px 38px; border: 1px solid rgb(255, 255, 255); opacity: 0.3;">
                    </div>
                    <div class="solid" style="width: 100%; height: 100%; transform: translate3d(0px, 40px, 0px); background-color: rgb(255, 255, 255);">
                  </div>
                  <div class="text" style="font-family: MontBold; font-size: 11px; color: rgb(255, 255, 255); width: 100%; top: 14.5px; letter-spacing: 3px; line-height: 11px; text-align: center;">SUBMIT
                  </div>
                  <div class="text" style="font-family: MontBold; font-size: 11px; color: rgb(17, 17, 17); width: 100%; top: 14.5px; letter-spacing: 3px; line-height: 11px; text-align: center; opacity: 0; transform: translate3d(0px, 10px, 0px);">SUBMIT
                </div>
                <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
                </div>
              </div>
            </div>
        <div class="AboutSocial" style="width: 318px; height: 24px; background-size: 318px 24px; bottom: 50px; left: 50%; margin-left: -159px; z-index: 1000; visibility: hidden; transition: opacity 300ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms; opacity: 0;">
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/sound.png&quot;); opacity: 0.3; left: 0px; transform: translate3d(0px, 0px, 0px); transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1100ms, -webkit-transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1100ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/spot.png&quot;); opacity: 0.3; left: 49px; transform: translate3d(0px, 0px, 0px); transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1200ms, -webkit-transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1200ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/fb.png&quot;); opacity: 0.3; left: 98px; transform: translate3d(0px, 0px, 0px); transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1300ms, -webkit-transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1300ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/tw.png&quot;); opacity: 0.3; left: 147px; transform: translate3d(0px, 0px, 0px); transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1400ms, -webkit-transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1400ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/inst.png&quot;); opacity: 0.3; left: 196px; transform: translate3d(0px, 0px, 0px); transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1500ms, -webkit-transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1500ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/yt.png&quot;); opacity: 0.3; left: 245px; transform: translate3d(0px, 0px, 0px); transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1600ms, -webkit-transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1600ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/itu.png&quot;); opacity: 0.3; left: 294px; transform: translate3d(0px, 0px, 0px); transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1700ms, -webkit-transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1700ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="progress" style="width: 100%; height: 2px; background-color: rgb(246, 85, 219); bottom: 0px; z-index: 1000; transform-origin: 0% 50% 0px; transform: scaleX(0.0284855); visibility: hidden;">
        </div>
        <div id="Container" class="" style="width: 100%; height: 100%; transition: -webkit-transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 0ms; transform: translate3d(0px, 0px, 0px) scale(1);">
        <div id="UI" style="width: 100%; height: 100%; z-index: 100; pointer-events: none; transition: opacity 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="lockedtext" style="font-family: MontBold; font-size: 10px; color: rgb(246, 85, 219); width: 300px; height: 10px; background-size: 300px 10px; left: 50%; margin-left: -150px; line-height: 10px; opacity: 0; letter-spacing: 2px; bottom: 40px; text-align: center; transition: opacity 4000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms; display: none;">TURN ON SOUND
        </div>
        <div class="UIMenu" style="width: 100%; height: 100%; visibility: hidden; background-color: rgb(0, 0, 0);">
        <div class="UIMenuBars" style="width: 100%; height: 100%; visibility: visible; pointer-events: none; overflow: hidden; background-color: rgb(0, 0, 0);">
        <div class="wrapper" style="width: 100%; height: 100%;">
        <div class="AboutSocial" style="width: 318px; height: 24px; background-size: 318px 24px; bottom: 50px; left: 50%; margin-left: -159px; z-index: 1000; visibility: visible;">
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social-dark/sound.png&quot;); opacity: 0.25; left: 0px; transition: opacity 600ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social-dark/spot.png&quot;); opacity: 0.25; left: 49px; transition: opacity 600ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social-dark/fb.png&quot;); opacity: 0.25; left: 98px; transition: opacity 600ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social-dark/tw.png&quot;); opacity: 0.25; left: 147px; transform: translate3d(0px, 0px, 0px); transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1400ms, -webkit-transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1400ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social-dark/inst.png&quot;); opacity: 0.25; left: 196px; transform: translate3d(0px, 0px, 0px); transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1500ms, -webkit-transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1500ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social-dark/yt.png&quot;); opacity: 0.25; left: 245px; transform: translate3d(0px, 0px, 0px); transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1600ms, -webkit-transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1600ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social-dark/itu.png&quot;); opacity: 0.25; left: 294px; transform: translate3d(0px, 0px, 0px); transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1700ms, -webkit-transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1) 1700ms;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        </div>
        <div class="bg" style="width: 100%; height: 100%; background-color: rgb(245, 245, 245); opacity: 1; transition: opacity 1000ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); transform: scaleX(0);">
        </div>
        </div>
        <div class="slices" style="width: 729px; height: 308px; background-size: 729px 308px; left: 50%; top: 50%; margin-left: -364.5px; margin-top: -154px;">
        <div class="text1" style="font-family: MontBold; font-size: 12.6px; color: rgb(136, 136, 136); width: 300px; height: 9px; background-size: 300px 9px; left: 50%; margin-left: -150px; line-height: 9px; opacity: 1; letter-spacing: 2.25px; top: -60px; text-align: center; transition: opacity 1000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 1800ms;">PROLOGUE EP
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: visible; z-index: 1; top: 0px; left: 0px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: scaleX(1) scaleY(1); transition: -webkit-transform 1400ms cubic-bezier(0.86, 0, 0.07, 1) 400ms;">
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(150px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(179, 179, 179);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(0, 229, 255); opacity: 0; overflow: hidden; background-size: 381px 308px; transition: opacity 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 1; transform: scaleX(1.2); transition: opacity 3000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/oceans.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 26.73px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(150px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 26.73px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -13.365px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(238, 238, 238); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 445ms;">O
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 130ms;">c
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 213ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 261ms;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 536ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 544ms;">s
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 445ms;">O
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 130ms;">c
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 213ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 261ms;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 536ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 544ms;">s
        </span>
        </div>
        </div>
        </div>
        <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
        </div>
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: visible; z-index: 1; top: 0px; left: 81px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: scaleX(1) scaleY(1); transition: -webkit-transform 1400ms cubic-bezier(0.86, 0, 0.07, 1) 480ms;">
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-1.97626e-323px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(150px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(158, 158, 158);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(26, 83, 255); opacity: 0; overflow: hidden; background-size: 381px 308px; transition: opacity 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 1; transform: scaleX(1.2); transition: opacity 3000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/ninety.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 26.73px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(150px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 26.73px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -13.365px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(238, 238, 238); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 162ms;">1
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 129ms;">9
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 229ms;">9
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 554ms;">5
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 162ms;">1
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 129ms;">9
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 229ms;">9
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 554ms;">5
        </span>
        </div>
        </div>
        </div>
        <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
        </div>
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: visible; z-index: 1; top: 0px; left: 162px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: scaleX(1) scaleY(1); transition: -webkit-transform 1400ms cubic-bezier(0.86, 0, 0.07, 1) 560ms;">
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-1.97626e-323px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(150px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(138, 138, 138);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(17, 17, 17); opacity: 0; overflow: hidden; background-size: 381px 308px; transition: opacity 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 1; transform: scaleX(1.2); transition: opacity 3000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/painting.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 53.46px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(150px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 53.46px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -26.73px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(238, 238, 238); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 267ms;">P</span><span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 489ms;">a</span><span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 400ms;">i
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 124ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 459ms;">t
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 472ms;">i
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 415ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 458ms;">g
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 185ms;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 485ms;">G
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 570ms;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 408ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 368ms;">y
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 150ms;">s
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 267ms;">P
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 489ms;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 400ms;">i
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 124ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 459ms;">t
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 472ms;">i
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 415ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 458ms;">g
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 185ms;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 485ms;">G
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 570ms;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 408ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 368ms;">y
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 150ms;">s
        </span>
        </div>
        </div>
        </div>
        <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
        </div>
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: visible; z-index: 1; top: 0px; left: 243px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: scaleX(1) scaleY(1); transition: -webkit-transform 1400ms cubic-bezier(0.86, 0, 0.07, 1) 640ms;">
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-1.97626e-323px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;"><div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;"><div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(150px, 0px, 0px);"><div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(120, 120, 120);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(255, 4, 0); opacity: 0; overflow: hidden; background-size: 381px 308px; transition: opacity 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 1; transform: scaleX(1.2); transition: opacity 3000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/flame.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 53.46px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(150px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 53.46px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -26.73px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(238, 238, 238); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 362ms;">M
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 361ms;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 152ms;">d
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 260ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 260ms;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 116ms;">n
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 430ms;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 117ms;">F
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 172ms;">l
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 522ms;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 556ms;">m
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 441ms;">e
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 362ms;">M
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 361ms;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 152ms;">d
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 260ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 260ms;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 116ms;">n
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 430ms;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 117ms;">F
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 172ms;">l
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 522ms;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 556ms;">m
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 441ms;">e
        </span>
        </div>
        </div>
        </div>
        <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
        </div>
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: visible; z-index: 1; top: 0px; left: 324px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: scaleX(1) scaleY(1); transition: -webkit-transform 1400ms cubic-bezier(0.86, 0, 0.07, 1) 720ms;">
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(1.97626e-323px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(150px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(99, 99, 99);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(246, 85, 219); opacity: 0; overflow: hidden; background-size: 381px 308px; transition: opacity 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 1; transform: scaleX(1.2); transition: opacity 3000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/wantit.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 26.73px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(150px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 26.73px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -13.365px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(238, 238, 238); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 354ms;">W
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 117ms;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 162ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 413ms;">t
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 128ms;">&nbsp;
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 173ms;">I
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 378ms;">t
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 354ms;">W
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 117ms;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 162ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 413ms;">t
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 128ms;">&nbsp;
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 173ms;">I
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 378ms;">t
        </span>
        </div>
        </div>
        </div>
        <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
        </div>
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: visible; z-index: 1; top: 0px; left: 405px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: scaleX(1) scaleY(1); transition: -webkit-transform 1400ms cubic-bezier(0.86, 0, 0.07, 1) 800ms;">
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(1.97626e-323px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(150px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(79, 79, 79);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(17, 17, 17); opacity: 0; overflow: hidden; background-size: 381px 308px; transition: opacity 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 1; transform: scaleX(1.2); transition: opacity 3000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/stones.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 26.73px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(150px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 26.73px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -13.365px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(238, 238, 238); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 280ms;">S
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 180ms;">t
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 563ms;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 285ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 512ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 235ms;">s
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 280ms;">S
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 180ms;">t
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 563ms;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 285ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 512ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 235ms;">s
        </span>
        </div>
        </div>
        </div>
        <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
        </div>
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: visible; z-index: 1; top: 0px; left: 486px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: scaleX(1) scaleY(1); transition: -webkit-transform 1400ms cubic-bezier(0.86, 0, 0.07, 1) 880ms;">
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(1.97626e-323px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(150px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(59, 59, 59);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(17, 17, 17); opacity: 0; overflow: hidden; background-size: 381px 308px; transition: opacity 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 1; transform: scaleX(1.2); transition: opacity 3000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/woman.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 26.73px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(150px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 26.73px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -13.365px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(238, 238, 238); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 585ms;">W
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 539ms;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 247ms;">m
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 375ms;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 502ms;">n
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 585ms;">W
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 539ms;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 247ms;">m
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 375ms;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 502ms;">n
        </span>
        </div>
        </div>
        </div>
        <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
        </div>
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: visible; z-index: 1; top: 0px; left: 567px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: scaleX(1) scaleY(1); transition: -webkit-transform 1400ms cubic-bezier(0.86, 0, 0.07, 1) 960ms;">
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(1.97626e-323px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(150px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(41, 41, 41);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(17, 17, 17); opacity: 0; overflow: hidden; background-size: 381px 308px; transition: opacity 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 1; transform: scaleX(1.2); transition: opacity 3000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/blinded.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 26.73px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(150px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 26.73px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -13.365px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(238, 238, 238); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 537ms;">B
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 336ms;">l
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 238ms;">i
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 165ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 146ms;">d
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 372ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 179ms;">d
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 537ms;">B
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 336ms;">l
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 238ms;">i
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 165ms;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 146ms;">d
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 372ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 179ms;">d
        </span>
        </div>
        </div>
        </div>
        <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
        </div>
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: visible; z-index: 1; top: 0px; left: 648px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: scaleX(1) scaleY(1); transition: -webkit-transform 1400ms cubic-bezier(0.86, 0, 0.07, 1) 1040ms;">
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(1.97626e-323px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(150px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(20, 20, 20);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(255, 230, 0); opacity: 0; overflow: hidden; background-size: 381px 308px; transition: opacity 500ms cubic-bezier(0.39, 0.575, 0.565, 1) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 1; transform: scaleX(1.2); transition: opacity 3000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0ms;">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/everybody.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 53.46px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(150px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 53.46px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -26.73px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(238, 238, 238); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 225ms;">E
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 128ms;">v
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 584ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 579ms;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 352ms;">y
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 125ms;">b
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 309ms;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 265ms;">d
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 383ms;">y
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 159ms;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 165ms;">E
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 350ms;">l
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 123ms;">s
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 0; transition: opacity 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 304ms;">e
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 225ms;">E
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 128ms;">v
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 584ms;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 579ms;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 352ms;">y
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 125ms;">b
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 309ms;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 265ms;">d
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 383ms;">y
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 159ms;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 165ms;">E
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 350ms;">l
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 123ms;">s
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto; opacity: 1; transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 304ms;">e
        </span>
        </div>
        </div>
        </div>
        <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
        </div>
        </div>
        <div class="text2" style="font-family: Mont; font-size: 14px; color: rgb(119, 119, 119); width: 80px; height: 80px; background-size: 80px 80px; left: 50%; margin-left: -40px; line-height: 80px; opacity: 0.6; bottom: -95px; text-align: center; pointer-events: auto; transition: opacity 1000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 2500ms;">
        ▼<div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="UIMenuBars eclipse" style="width: 100%; height: 100%; visibility: hidden; pointer-events: none; overflow: hidden;">
        <div class="wrapper" style="width: 100%; height: 100%;">
        <div class="AboutSocial" style="width: 318px; height: 24px; background-size: 318px 24px; bottom: 50px; left: 50%; margin-left: -159px; z-index: 1000; visibility: hidden;">
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/sound.png&quot;); opacity: 0.5; left: 0px;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/spot.png&quot;); opacity: 0.5; left: 49px;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/fb.png&quot;); opacity: 0.5; left: 98px;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/tw.png&quot;); opacity: 0.5; left: 147px;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/inst.png&quot;); opacity: 0.5; left: 196px;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/yt.png&quot;); opacity: 0.5; left: 245px;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        <div class="icon" style="width: 24px; height: 24px; background-size: 24px 24px; background-image: url(&quot;assets/images/social/itu.png&quot;); opacity: 0.5; left: 294px;">
        <div class="hit" style="width: 48px; height: 48px; z-index: 99999; top: 50%; left: 50%; position: absolute; cursor: pointer; background-size: 48px 48px; margin-left: -24px; margin-top: -24px; pointer-events: auto;">
        </div>
        </div>
        </div>
        <div class="bg eclipse" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0);">
        <div class="inner" style="width: 100%; height: 100%; background-color: rgb(245, 245, 245); transform: scaleX(0);">
        </div>
        </div>
        <div class="slices" style="width: 324px; height: 308px; background-size: 324px 308px; left: 50%; top: 50%; margin-left: -162px; margin-top: -154px;">
        <div class="text1" style="font-family: MontBold; font-size: 12.6px; color: rgb(136, 136, 136); width: 300px; height: 9px; background-size: 300px 9px; left: 50%; margin-left: -150px; line-height: 9px; opacity: 0; letter-spacing: 2.25px; top: -60px; text-align: center;">
        ECLIPSE EP</div>
        <div class="text2" style="font-family: Mont; font-size: 9px; color: rgb(136, 136, 136); width: 300px; height: 9px; background-size: 300px 9px; left: 50%; margin-left: -150px; line-height: 9px; opacity: 0; letter-spacing: 1.8px; top: -45px; text-align: center;">
        8.21.2017</div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: hidden; z-index: 1; top: 0px; left: 0px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%;">
        <div class="glow" style="width: 381px; height: 308px; box-shadow: rgb(255, 255, 255) 0px 0px 123.2px, rgb(163, 102, 255) 0px 0px 215.6px, rgb(82, 0, 204) 0px 0px 308px; opacity: 0; background-size: 381px 308px;">
        </div>
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(61, 0, 153);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(17, 17, 17); opacity: 0; overflow: hidden; background-size: 381px 308px;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 0; transform: scaleX(1.2);">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/memories.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 26.73px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(0px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 26.73px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -13.365px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(133, 51, 255); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">M
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">m
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">i
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">s
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">M
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">m
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">i
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">s
        </span>
        </div>
        </div>
        </div>
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: hidden; z-index: 1; top: 0px; left: 81px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%;">
        <div class="glow" style="width: 381px; height: 308px; box-shadow: rgb(255, 255, 255) 0px 0px 123.2px, rgb(173, 102, 255) 0px 0px 215.6px, rgb(95, 0, 204) 0px 0px 308px; opacity: 0; background-size: 381px 308px;">
        </div>
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(90, 0, 194);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(17, 17, 17); opacity: 0; overflow: hidden; background-size: 381px 308px;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 0; transform: scaleX(1.2);">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/woww.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 106.92px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(0px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 106.92px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -53.46px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(146, 51, 255); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">W
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">h
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">t
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">w
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">c
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">w
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">W
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">h
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">t
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">w
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">n
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">c
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        <span class="t" style="display: block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">w
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        </div>
        </div>
        </div>
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: hidden; z-index: 1; top: 0px; left: 162px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%;">
        <div class="glow" style="width: 381px; height: 308px; box-shadow: rgb(255, 255, 255) 0px 0px 123.2px, rgb(184, 102, 255) 0px 0px 215.6px, rgb(109, 0, 204) 0px 0px 308px; opacity: 0; background-size: 381px 308px;">
        </div>
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(122, 0, 230);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(17, 17, 17); opacity: 0; overflow: hidden; background-size: 381px 308px;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 0; transform: scaleX(1.2);">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/halo.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 26.73px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(0px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 26.73px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -13.365px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(160, 51, 255); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">H
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">l
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">&nbsp;
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">2
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">2
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">H
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">a
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">l
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">o
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">&nbsp;
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">2
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">2
        </span>
        </div>
        </div>
        </div>
        </div>
        <div class="UIMenuSlice" style="width: 81px; height: 308px; visibility: hidden; z-index: 1; top: 0px; left: 243px; background-size: 81px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%;">
        <div class="glow" style="width: 381px; height: 308px; box-shadow: rgb(255, 255, 255) 0px 0px 123.2px, rgb(194, 102, 255) 0px 0px 215.6px, rgb(122, 0, 204) 0px 0px 308px; opacity: 0; background-size: 381px 308px;">
        </div>
        <div class="wrapper1" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1); background-size: 381px 308px;">
        <div class="wrapper" style="width: 381px; height: 308px; overflow: hidden; transform: translate3d(-300px, 0px, 0px); background-size: 381px 308px;">
        <div class="wrapper" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
        <div class="animate-color" style="width: 100%; height: 100%; background-color: rgb(159, 15, 255);">
        </div>
        <div class="bg" style="width: 381px; height: 308px; background-color: rgb(17, 17, 17); opacity: 0; overflow: hidden; background-size: 381px 308px;">
        <div class="inner" style="width: 100%; height: 100%; opacity: 0; transform: scaleX(1.2);">
        <div class="inner" style="width: 100%; height: 100%; background-image: url(&quot;assets/images/menu/drive.jpg&quot;); background-size: cover; background-position: center center;">
        </div>
        </div>
        </div>
        <div class="solid" style="width: 100%; height: 100%; background-color: rgb(0, 0, 0); opacity: 0; z-index: 10;">
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="text" style="font-family: MontBold; font-size: 24.3px; color: rgb(238, 238, 238); width: 381px; height: 26.73px; opacity: 0; text-align: center; text-transform: uppercase; transform: translate3d(0px, 0px, 0px); line-height: 26.73px; letter-spacing: 1.215px; background-size: 381px 26.73px; left: 50%; top: 50%; margin-left: -190.5px; margin-top: -13.365px;">
        <div class="inner" style="width: 100%; height: 100%;">
        <div class="text" style="width: 100%; text-align: center; font-family: Braille; color: rgb(173, 51, 255); font-size: 19.44px; top: 2.43px;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">D
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">i
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">v
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        </div>
        <div class="text" style="width: 100%; text-align: center;">
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">D
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">r
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">i
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">v
        </span>
        <span class="t" style="display: inline-block; position: relative; padding: 0px; margin: 0px; width: auto; height: auto;">e
        </span>
        </div>
        </div>
        </div>
        </div>
        <div class="text2" style="font-family: Mont; font-size: 14px; color: rgb(170, 170, 170); width: 80px; height: 80px; background-size: 80px 80px; left: 50%; margin-left: -40px; line-height: 80px; opacity: 0; bottom: -95px; text-align: center; pointer-events: auto;">
        ▼
        <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer;">
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="UIAboutButton" style="width: 46px; height: 46px; background-size: 46px 46px; bottom: 40px; right: 40px; overflow: hidden; z-index: 1000; opacity: 1; transition: opacity 2000ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 2000ms;">
        <div class="border" style="width: 44px; height: 44px; background-size: 44px 44px; border: 1px solid rgb(136, 136, 136); opacity: 0.3;">
        </div>
        <div class="solid" style="width: 100%; height: 100%; transform: translate3d(0px, 46px, 0px); background-color: rgb(136, 136, 136);">
        </div>
        <div class="text" style="font-family: Mont; font-size: 17px; color: rgb(136, 136, 136); width: 100%; top: 13.5px; line-height: 17px; text-align: center;">
        ?
        </div>
        <div class="text" style="font-family: Mont; font-size: 17px; color: rgb(255, 255, 255); width: 100%; top: 13.5px; line-height: 17px; text-align: center; opacity: 0; transform: translate3d(0px, 10px, 0px);">?
        </div>
        <div class="hit" style="width: 100%; height: 100%; z-index: 99999; top: 0px; left: 0px; position: absolute; cursor: pointer; pointer-events: auto;">
        </div>
        </div>
        </div>
        </div>
        </div>



    );
  }
}
