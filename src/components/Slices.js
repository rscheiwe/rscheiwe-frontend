import React, { Component } from 'react'
import Loader from 'react-loader-advanced';
import CustomMessageElement from './Messages.js'

let Feed = require('rss-to-json')

class Slices extends Component {

  state = {
    isActive:false,
    isActive2:false,
    articles:[]
  }



  handleClick = () => {
    this.setState(prevState => ({
        isActive:!prevState.isActive
      })
    )
  }
  
  handleClick2 = (num) => {
    num.target ? console.log(num.target.className) : null
    this.setState(prevState => ({
        isActive2:!prevState.isActive2
      })
    )
  }

  componentDidMount() {
    let articles=[]
    Feed.load('https://medium.com/feed/@rscheiwe', function(err, rss){
        articles.push(rss['items'])
    })
    this.passArticles(articles)
  }

  passArticles = (articles) => {
    this.setState({
      articles:articles
    }, () => console.log(this.state.articles))
  }

  translateDate = (epoch) => {
    return new Date(epoch)
  }

  render () {


    const customMessageElement2 = (
      <div className='article-extend' onClick={this.handleClick2}>
        {this.state.articles[0] ?
          <div className='article-page'>
            <img className="" width='200px' height='200px' src='/images/Medium-logo.png' />
          <span>
            <p style={{textAlign:'right'}}>{this.translateDate(this.state.articles[0][0]['created']).toString()}</p>
            <h3 className="article-page-item" style={{fontFamily:'Sarpanch', textAlign:'right'}}>
              {this.state.articles[0][0]['title']}
              <hr />
            </h3>
            <p style={{textAlign:'right'}}>{this.translateDate(this.state.articles[0][1]['created']).toString()}</p>
            <h3 className="article-page-item" style={{fontFamily:'Sarpanch', textAlign:'right'}}>
              {this.state.articles[0][1]['title']}
              <hr />
            </h3>
            <p style={{textAlign:'right'}}>{this.translateDate(this.state.articles[0][2]['created']).toString()}</p>
            <h3 className="article-page-item" style={{fontFamily:'Sarpanch', textAlign:'right'}}>
              {this.state.articles[0][2]['title']}
              <hr />
            </h3>
            <p style={{textAlign:'right'}}>{this.translateDate(this.state.articles[0][3]['created']).toString()}</p>
            <h3 className="article-page-item" style={{fontFamily:'Sarpanch', textAlign:'right'}}>
              {this.state.articles[0][3]['title']}
              <hr />
            </h3>
          </span>
          </div>
          :
          null
        }
      </div>
    );

    return (

      <Loader show={this.state.isActive}
              onClick={this.handleClick}
              message={<CustomMessageElement handleClick={this.handleClick} />}
              backgroundStyle={{height:'120%'}}
              contentBlur={5}
              >
      <Loader show={this.state.isActive2}
              onClick={() => this.handleClick2(2)}
              message={customMessageElement2}
              backgroundStyle={{height:'120%'}}
              contentBlur={5}
              >
      <div className='parent flex-parent'>
        <div id="zoom" className='child1 flex-child' onClick={this.handleClick}><div className="inner">A</div></div>
        <div id="zoom" className='child2 flex-child' onClick={this.handleClick}><div className="inner">B</div></div>
        <div id="zoom" className='child3 flex-child' onClick={this.handleClick}><div className="inner">C</div></div>
        <div id="zoom" className='child4 flex-child' onClick={this.handleClick}><div className="inner">D</div></div>
        <div id="zoom" className='child5 flex-child' onClick={this.handleClick}><div className="inner">E</div></div>
        <div id="zoom" className='child6 flex-child' onClick={this.handleClick}><div className="inner">F</div></div>
        <div id="zoom" className='child7 flex-child' onClick={this.handleClick}><div className="inner">G</div></div>
        <div id="zoom" className='child8 flex-child' onClick={this.handleClick2}><div className="inner">H</div></div>
      </div>
      </Loader>
      </Loader>
    )
  }
}

export default Slices
