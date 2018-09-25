import React, { Component } from 'react'
import Loader from 'react-loader-advanced';
import { CustomMessageElement, CustomMessageElement2, CustomMessageElement8 } from './Messages2.js'

import Adapter from '../Adapter.js'

class Slices extends Component {

  state = {
    isActive:false,
    isActive2:false,
    isActive8:false,
    articles:[]
  }

  componentDidMount() {
    Adapter.readArticles()
    .then(data => {
      this.passArticles(data["payload"]["references"]["Post"]);
    })
    .catch(e => {
      console.log(e);
      return e;
    });
  }

  handleClick = () => {
    this.setState(prevState => ({
        isActive:!prevState.isActive
      })
    )
  }
  handleClick2 = () => {
    this.setState(prevState => ({
        isActive2:!prevState.isActive2
      })
    )
  }

  handleClick8 = (num) => {
    num.target ? console.log(num.target.className) : null
    this.setState(prevState => ({
        isActive8:!prevState.isActive8
      })
    )
  }


  passArticles = (articles) => {
    this.setState({
      articles:articles
    })
  }

  translateDate = (epoch) => {
    return new Date(epoch)
  }

  render () {

    return (

      <Loader show={this.state.isActive}
              onClick={this.handleClick}
              message={<CustomMessageElement handleClick={this.handleClick} />}
              backgroundStyle={{height:'120%'}}
              contentBlur={5}
              >
      <Loader show={this.state.isActive2}
              onClick={this.handleClick2}
              message={<CustomMessageElement2 handleClick2={this.handleClick2} />}
              backgroundStyle={{height:'120%'}}
              contentBlur={5}
              >
      <Loader show={this.state.isActive8}
              onClick={() => this.handleClick8(8)}
              message={<CustomMessageElement8 handleClick8={this.handleClick8} articles={this.state.articles} translateDate={this.translateDate}/>}
              backgroundStyle={{height:'120%'}}
              contentBlur={5}
              >
      <div className='parent flex-parent'>
      
        <div id="zoom" className='child1 flex-child' onClick={this.handleClick}>
          <div className="inner">
          </div>
        </div>
        <div id="zoom" className='child2 flex-child' onClick={this.handleClick2}>
          <div className="inner">
          </div>
        </div>
        <div id="zoom" className='child3 flex-child' onClick={this.handleClick}><div className="inner">C</div></div>
        <div id="zoom" className='child4 flex-child' onClick={this.handleClick}><div className="inner">D</div></div>
        <div id="zoom" className='child5 flex-child' onClick={this.handleClick}><div className="inner">E</div></div>
        <div id="zoom" className='child6 flex-child' onClick={this.handleClick}><div className="inner">F</div></div>
        <div id="zoom" className='child7 flex-child' onClick={this.handleClick}><div className="inner">G</div></div>
        <div id="zoom" className='child8 flex-child' onClick={this.handleClick8}>
          <div className="inner">
          </div>
        </div>
      </div>
      </Loader>
      </Loader>
      </Loader>
    )
  }
}

export default Slices
