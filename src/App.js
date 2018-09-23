import React, { Component } from 'react';
import Headerx from './components/Header.js'
import Slices from './components/Slices.js'
import Footer from './components/Footer.js'
import About from './components/About.js'






import './App.css';

class App extends Component {



  render() {


    return (

      <div >




        <Headerx />

        <div className="Container">

          <Slices />
          <Footer />
          <About />

        </div>


      </div>

    );
  }
}

export default App;
