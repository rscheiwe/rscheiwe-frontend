import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home.js'
import Demos from './components/Demos.js'

class Main extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/demos' component={Demos} />
        </Switch>
      </main>
    )
  }
}

export default Main
