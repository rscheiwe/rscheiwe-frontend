import React, { Component } from "react";
import Header from "./components/Header.js";
import Slices from "./components/Slices.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Copyright from "./components/Copyright.js";
import $ from "jquery";

import Loader from "react-loader-advanced";

import "./App.css";

class Home extends Component {
  state = {
    isActive: false,
  };

  componentDidMount() {

    $(".fquery-li").hover(function () {
      $(this).toggleClass("scale-up").siblings().toggleClass("scale-down");
    });

  //   let input = document.querySelector("#fq-one");
  //   const inputTwo = document.querySelector("#fq-two");
  //   const inputThree = document.querySelector("#fq-three");
  //   let transitionEndEventName = getTransitionEndEventName();
  //   // input.addEventListener("mouseover", function (ev, data) {
  //   //   input.classList.add("expand");
  //   //   input.addEventListener(transitionEndEventName, callback);
  //   // });
  //   // input.addEventListener("mouseout", function (ev, data) {
  //   //   input.classList.remove("expand");
  //   // });

  //   inputTwo.addEventListener("mouseover", function (ev, data) {
  //     inputTwo.classList.add("expand");
  //     inputTwo.addEventListener(transitionEndEventName, callback);
  //   });
  //   inputTwo.addEventListener("mouseout", function (ev, data) {
  //     inputTwo.classList.remove("expand");
  //   });
    
  //   inputThree.addEventListener("mouseover", function (ev, data) {
  //     inputThree.classList.add("expand");
  //     inputThree.addEventListener(transitionEndEventName, callback);
  //   });
  //   inputThree.addEventListener("mouseout", function (ev, data) {
  //     inputThree.classList.remove("expand");
  //   });

  //   function getTransitionEndEventName() {
  //     var transitions = {
  //       transition: "transitionend",
  //       OTransition: "oTransitionEnd",
  //       MozTransition: "transitionend",
  //       WebkitTransition: "webkitTransitionEnd",
  //     };
  //     let bodyStyle = document.body.style;
  //     for (let transition in transitions) {
  //       if (bodyStyle[transition] != undefined) {
  //         return transitions[transition];
  //       }
  //     }
  //   }

  //   function callback() {
  //     // input.removeEventListener(transitionEndEventName, callback);
  //     inputTwo.removeEventListener(transitionEndEventName, callback);
  //     inputThree.removeEventListener(transitionEndEventName, callback);
  //     // input.classList.add("expand");

  //     console.log("Transition finished");
  //   }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const customMessageElement = (
      <div className="about-extend" onClick={this.handleClick}>
        <div className="about-page">
          <img
            className="about-page-item-pic"
            src="/images/richard-scheiwe_bio.png"
            alt="richard-scheiwe_bio"
          />
          <span>
            <h3
              className="about-page-item"
              style={{
                textAlign: "left",
                fontFamily: "Sarpanch",
                fontWeight: "300",
                letterSpacing: "4px",
                padding: "1em",
              }}
            >
              RICHARD SCHEIWE
            </h3>
            <p
              className="about-page-item2"
              style={{
                fontFamily: "Roboto Condensed",
                fontWeight: "300",
                textAlign: "left",
                padding: "1em",
              }}
            >
              Currently, I’m exploring ways to synchronize Python-driven
              machine-learning through Node.js. My passion for software
              engineering stems from taking the intensive Machine-learning and
              Neural Network course in Python at General Assembly in 2017,
              followed by Flatiron's 15-week Immersive Software Engineering
              program. With over a decade in entrepreneurship and teaching, I
              have long been attracted to creating new experiences for people in
              which they draw value from learning something new or simply
              reorienting their views of the world.
            </p>
            <p
              className="about-page-item2"
              style={{
                fontFamily: "Roboto Condensed",
                fontWeight: "300",
                textAlign: "left",
                padding: "1em",
              }}
            >
              Skills: Python, Javascript, Ruby, React/Redux, Ethereum/Solidity,
              PostgreSQL, Pandas, Django, Selenium, AWS Lambda, Heroku, HTML,
              CSS
            </p>
          </span>
        </div>
      </div>
    );

    return (
      <div>
        <Loader
          show={this.state.isActive}
          onClick={this.handleClick}
          message={customMessageElement}
          backgroundStyle={{ height: "110%" }}
          contentBlur={5}
        >
          <Header />
          {/* <nav class="menu">

          <div className="menu__item">
				<a className="menu__item-link">Showreel</a>
				<div className="marquee">
					<div className="marquee__inner" aria-hidden="true">
						<span>Showreel</span>
						<span>Showreel</span>
						<span>Showreel</span>
						<span>Showreel</span>
					</div>
				</div>
			</div>
      </nav> */}

          <div className="Container">
            {/* <Slices /> */}
            {/* <div> */}{" "}
            <div className="parent fquery-parent">
              {/* <ul> */}
              <div id="fq-one" className="fquery-li fquery-child fquery-child-one fquery-li-hover-color-one"></div>
              <div id="fq-two" className="fquery-li fquery-child fquery-child-two fquery-li-hover-color-two"></div>
              <div id="fq-three" className="fquery-li fquery-child fquery-child-three fquery-li-hover-color-three"></div>
              <div id="fq-four" className="fquery-li fquery-child fquery-child-four fquery-li-hover-color-four"></div>
              <div id="fq-five" className="fquery-li fquery-child fquery-child-five fquery-li-hover-color-five"></div>
              <div id="fq-six" className="fquery-li fquery-child fquery-child-six fquery-li-hover-color-six"></div>
              <div id="fq-seven" className="fquery-li fquery-child fquery-child-seven fquery-li-hover-color-seven"></div>
              <div id="fq-eight" className="fquery-li fquery-child fquery-child-eight fquery-li-hover-color-eight"></div>
              {/* </ul> */}
            </div>
            {/* </div> */}
            <Footer />
            <About handleClick={this.handleClick} />
            <Copyright />
            <div id="div1">
              <h2>Let jQuery AJAX Change This Text</h2>
            </div>
            <button>Get External Content</button>
          </div>
        </Loader>
      </div>
    );
  }
}

export default Home;
