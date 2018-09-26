import React, { Component } from 'react'
import Loader from 'react-loader-advanced';
import { CustomMessageElement,
  CustomMessageElement2,
  CustomMessageElement4,
  CustomMessageElement6,
  CustomMessageElement8 } from './Messages2.js'

import Adapter from '../Adapter.js'

class Slices extends Component {

  state = {
    isActive:false,
    isActive2:false,
    isActive4:false,
    isActive6:false,
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
  handleClick4 = () => {
    this.setState(prevState => ({
        isActive4:!prevState.isActive4
      })
    )
  }
  handleClick6 = () => {
    this.setState(prevState => ({
        isActive6:!prevState.isActive6
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
      <Loader show={this.state.isActive4}
              onClick={this.handleClick4}
              message={<CustomMessageElement4 handleClick4={this.handleClick4} />}
              backgroundStyle={{height:'120%'}}
              contentBlur={5}
              >
      <Loader show={this.state.isActive6}
              onClick={this.handleClick6}
              message={<CustomMessageElement6 handleClick6={this.handleClick6} />}
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
        <div id="zoom" className='child4 flex-child' onClick={this.handleClick4}>
          <div className="inner">
          </div>
        </div>
        <div id="zoom" className='child5 flex-child' onClick={this.handleClick}><div className="inner">E</div></div>
        <div id="zoom" className='child6 flex-child' onClick={this.handleClick6}>
          <div className="inner">
          </div>
        </div>
        <div id="zoom" className='child7 flex-child' onClick={this.handleClick}><div className="inner">G</div></div>
        <div id="zoom" className='child8 flex-child' onClick={this.handleClick8}>
          <div className="inner">
          </div>
        </div>
      </div>
      </Loader>
      </Loader>
      </Loader>
      </Loader>
      </Loader>
    )
  }
}

export default Slices
