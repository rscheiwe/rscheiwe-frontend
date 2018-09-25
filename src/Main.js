import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.js'
import Demos from './components/Demos.js'
import Page404 from './components/Page404.js'

class Main extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/demos' component={Demos} />
          <Route component={Page404} />
        </Switch>
      </main>
    )
  }
}

export default Main
